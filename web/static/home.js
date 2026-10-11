(() => {
  "use strict";

  const grid = document.getElementById("tools-grid");
  if (!grid) return;

  function card(tool) {
    const isLive = tool.status === "live";
    const el = document.createElement(isLive ? "a" : "div");
    el.className = `card-item tool-card${isLive ? "" : " is-soon"}`;
    if (isLive) {
      el.href = tool.path;
      el.setAttribute("aria-label", `Open ${tool.name}`);
    }

    el.innerHTML = `
      <div class="tool-card-header">
        <span class="project-pill">${escapeHtml(tool.id || "tool")}</span>
        <span class="status-tag">${isLive ? "LIVE" : "SOON"}</span>
      </div>
      <div class="tool-card-body">
        <h3 class="tool-title">
          ${escapeHtml(tool.name)}
          ${isLive ? '<span class="external-indicator" aria-hidden="true">↗</span>' : ''}
        </h3>
        <p class="tool-tagline">${escapeHtml(tool.tagline || "")}</p>
        <p class="tool-desc">${escapeHtml(tool.description || "")}</p>
      </div>
      <div class="tool-card-footer">
        <span class="project-link-btn">
          ${isLive ? 'LAUNCH TOOL <span aria-hidden="true">→</span>' : "COMING SOON"}
        </span>
      </div>
    `;
    return el;
  }

  function escapeHtml(s) {
    return String(s)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;");
  }

  // Fetch in background only to dynamic sync if registry changes, without blanking static content
  fetch("/api/tools")
    .then((r) => {
      if (!r.ok) return;
      return r.json();
    })
    .then((data) => {
      if (!data || !Array.isArray(data.tools) || !data.tools.length) return;
      grid.innerHTML = "";
      data.tools.forEach((t) => grid.appendChild(card(t)));
    })
    .catch(() => {
      // Keep static SSR fallback
    });
})();
