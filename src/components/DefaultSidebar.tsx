import React from "react";
import { t } from "../i18n";

// Back Arrow Icon SVG
const backIcon = (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M19 12H5M12 19l-7-7 7-7"/>
  </svg>
);

export const DefaultSidebar = {
  // The main component is now just the button. The original sidebar logic is removed.
  ...(() => {
    const BackToPortalButton = () => {
      return (
        <div
          style={{
            position: "absolute",
            top: "0.625rem",
            left: "0.625rem",
            zIndex: 1,
          }}
        >
          <button
            className="sidebar-trigger"
            title="Back to Portal"
            aria-label="Back to Portal"
            onClick={() => {
              window.location.href = "https://go.abtiq.com";
            }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '2.5rem',
              height: '2.5rem',
              borderRadius: '50%',
              backgroundColor: 'var(--island-bg-color)',
              border: '1px solid var(--default-border-color)',
              cursor: 'pointer',
              boxShadow: 'var(--card-box-shadow)',
            }}
          >
            <div className="sidebar-trigger__icon" aria-hidden="true" style={{ width: '1.25rem', height: '1.25rem' }}>
              {backIcon}
            </div>
          </button>
        </div>
      );
    };
    BackToPortalButton.displayName = "BackToPortalButton";
    return BackToPortalButton;
  })(),
  // These are kept for API compatibility but are now no-ops.
  Trigger: () => null,
  TabTriggers: () => null,
};
