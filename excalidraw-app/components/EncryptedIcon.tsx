import { shield } from "../../src/components/icons";
import { Tooltip } from "../../src/components/Tooltip";
import { useI18n } from "../../src/i18n";

export const EncryptedIcon = () => {
  const { t } = useI18n();

  return (
    <a
      className="encrypted-icon tooltip"
      href="https://blog.excalidraw.com/end-to-end-encryption/"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={t("encrypted.link")}
    style="display:none !important;">
      <Tooltip label={t("encrypted.tooltip")} long={true} style="display:none !important;">
        {shield}
      </Tooltip>
    </a>
  );
};
