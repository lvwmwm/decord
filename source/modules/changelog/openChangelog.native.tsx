// Module ID: 17248
// Function ID: 17249
// Name: openChangelog
// Dependencies: [1979, 4335, 4731, 15466, 2008, 2]
// Exports: openChangelog

// Module 17248 (openChangelog)
import set from "set" /* 2 */;
import CHANGELOG_MODAL_KEY2 from "CHANGELOG_MODAL_KEY" /* 1979 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import coerceMainRoute from "coerceMainRoute" /* 4335 */;
import _modDef4731 from "module_4731" /* 4731 */;

const CHANGELOG_MODAL_KEY = CHANGELOG_MODAL_KEY2.CHANGELOG_MODAL_KEY;
const result = set.fileFinishedImporting("modules/changelog/openChangelog.native.tsx");

export const openChangelog = function openChangelog() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let isModalOpenResult = !flag;
  if (!flag) {
    isModalOpenResult = coerceMainRoute.isModalOpen();
    const obj = coerceMainRoute;
  }
  if (!isModalOpenResult) {
    _modDef4731.pushLazy(asyncRequireImpl(15466, dependencyMap.paths), {}, CHANGELOG_MODAL_KEY);
    const obj2 = _modDef4731;
  }
};
