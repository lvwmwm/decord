// Module ID: 17318
// Function ID: 17319
// Name: WebhookEmpty
// Dependencies: [19, 17, 21, 8534, 17319, 17320, 17321, 4639, 2]
// Exports: WebhookEmpty, getWebhookEmptySource, useWebhookEmptySource

// Module 17318 (WebhookEmpty)
import shared from "shared" /* 4639 */;
import _mod8534 from "module_8534" /* 8534 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const Image = fn(17).Image;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Illustration/native/redesign/generated/WebhookEmpty.tsx");

export const getWebhookEmptySource = function getWebhookEmptySource(theme) {
  return _mod8534.getIllustrationSource(theme, {
    dark() {
      return require("module_17319");
    },
    darker() {
      return require("module_17320");
    },
    light() {
      return require("module_17321");
    }
  });
};
export const useWebhookEmptySource = function useWebhookEmptySource() {
  const obj = shared;
  return _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17319");
    },
    darker() {
      return require("module_17320");
    },
    light() {
      return require("module_17321");
    }
  });
};
export const WebhookEmpty = function WebhookEmpty(arg0) {
  const obj = shared;
  const obj4 = {};
  const illustrationSource = _mod8534.getIllustrationSource(obj.useThemeContext().theme, {
    dark() {
      return require("module_17319");
    },
    darker() {
      return require("module_17320");
    },
    light() {
      return require("module_17321");
    }
  });
  const merged = Object.assign(arg0);
  obj4.source = illustrationSource;
  return <Image />;
};
