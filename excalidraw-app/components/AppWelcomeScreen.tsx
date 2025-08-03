import React from "react";
import { PlusPromoIcon } from "../../src/components/icons";
import { useI18n } from "../../src/i18n";
import { WelcomeScreen } from "../../src/packages/excalidraw/index";
import { isExcalidrawPlusSignedUser } from "../app_constants";
import { POINTER_EVENTS } from "../../src/constants";

export const AppWelcomeScreen: React.FC<{
  setCollabDialogShown: (toggle: boolean) => any;
  isCollabEnabled: boolean;
}> = React.memo((props) => {
  const { t } = useI18n();
  let headingContent;

  // Set the heading content without adding a link to Excalidraw+
  if (isExcalidrawPlusSignedUser) {
    headingContent = t("welcomeScreen.app.center_heading_plus");
  } else {
    headingContent = t("welcomeScreen.app.center_heading");
  }

  return (
    <WelcomeScreen>
      <WelcomeScreen.Hints.MenuHint>
        {t("welcomeScreen.app.menuHint")}
      </WelcomeScreen.Hints.MenuHint>
      <WelcomeScreen.Hints.ToolbarHint />
      <WelcomeScreen.Hints.HelpHint />
      <WelcomeScreen.Center>
        <div style={{ fontFamily: "'Syncopate', sans-serif", fontSize: "3em", marginBottom: "1em", fontWeight: "bold" }}>Abtiq QLab</div>
        <WelcomeScreen.Center.Heading>
          {headingContent}
        </WelcomeScreen.Center.Heading>
        <WelcomeScreen.Center.Menu>
          <WelcomeScreen.Center.MenuItemLoadScene />
          <WelcomeScreen.Center.MenuItemHelp />
          {props.isCollabEnabled && (
            <WelcomeScreen.Center.MenuItemLiveCollaborationTrigger
              onSelect={() => props.setCollabDialogShown(true)}
            />
          )}
          {/* The Excalidraw+ menu item has been removed. */}
        </WelcomeScreen.Center.Menu>
      </WelcomeScreen.Center>
    </WelcomeScreen>
  );
});
