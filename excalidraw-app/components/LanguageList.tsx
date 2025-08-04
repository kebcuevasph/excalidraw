import React from "react";
import { useSetAtom } from "jotai";
import { appLangCodeAtom } from "..";
import { useI18n } from "../../src/i18n";
import { languages } from "../../src/i18n";

export const LanguageList = ({ style }: { style?: React.CSSProperties }) => {
  // Returning null effectively removes this component from the UI.
  return null;
};
