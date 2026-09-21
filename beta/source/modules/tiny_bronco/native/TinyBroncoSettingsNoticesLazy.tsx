// Module ID: 15083
// Function ID: 15084
// Name: TinyBroncoSettingsNoticesLazy
// Dependencies: [21, 558, 568, 2]
// Exports: shouldShowTinyBroncoTeenNotice, shouldShowTinyBroncoUnconfirmedNotice, useIsTinyBroncoSettingsNoticeEnabled, useTinyBroncoMessageRequestsNoticeVariant

// Module 15083 (TinyBroncoSettingsNoticesLazy)
import jsxProd from "jsxProd" /* 21 */;
import c from "c" /* 568 */;
import "ReactCompilerGating";
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
let c2 = null;
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  c.c(1);
  return null;
}) : (() => null);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  c.c(1);
  return null;
}) : (() => null);
const result = size.fileFinishedImporting("modules/tiny_bronco/native/TinyBroncoSettingsNoticesLazy.tsx");

export const ContentFiltersTeenNotice = tmp2;
export const ContentFiltersUnconfirmedNotice = tmp3;
export const MessageRequestsNotice = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  c.c(1);
  return null;
}) : (() => null);
export const useTinyBroncoMessageRequestsNoticeVariant = function useTinyBroncoMessageRequestsNoticeVariant() {
  let messageRequestsNoticeVariant;
  if (_null != null) {
    messageRequestsNoticeVariant = _null.useMessageRequestsNoticeVariant();
  }
  return messageRequestsNoticeVariant;
};
export function useIsTinyBroncoSettingsNoticeEnabled() {
  return false;
}
export function shouldShowTinyBroncoUnconfirmedNotice() {
  return false;
}
export function shouldShowTinyBroncoTeenNotice() {
  return false;
}
