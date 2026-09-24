// Module ID: 11424
// Function ID: 11425
// Name: usePreviewCollectiblesProduct
// Dependencies: [32, 19, 8466, 7826, 1975, 7827, 7828, 558, 568, 8477, 11423, 1977, 8470, 2]

// Module 11424 (usePreviewCollectiblesProduct)
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 8470 */;
import CollectiblePreviewSession from "CollectiblePreviewSession" /* 11423 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserProfileSettingsStore from "UserProfileSettingsStore" /* 8466 */;

const require = globalThis.__r;

require = fn;
const isAvatarDecorationRecord = fn(7826).isAvatarDecorationRecord;
const isNameplateRecord = fn(1975).isNameplateRecord;
const isProfileEffectRecord = fn(7827).isProfileEffectRecord;
const isProfileFrameRecord = fn(7828).isProfileFrameRecord;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/hooks/usePreviewCollectiblesProduct.tsx");

export const usePreviewCollectibleProduct = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const cResult = require("c").c(9);
  let obj = require("c");
  const shopProductItems = require("useShopProductItems").useShopProductItems(arg0);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  if (cResult[0] === firstAvatarDecoration) {
    if (cResult[1] === firstProfileFrame) {
      if (cResult[2] === firstNameplate) {
        if (cResult[3] === firstProfileEffect) {
          if (cResult[4] === arg0) {
            if (cResult[5] === arg2) {
              if (cResult[6] === arg1) {
                let tmp3 = cResult[7];
                let tmp4 = cResult[8];
              }
              const effect = firstProfileEffect.useEffect(tmp3, tmp4);
            }
          }
        }
      }
    }
  }
  const fn = function v() {
    let obj = closure_0;
    closure_0 = closure_0(11423).currentPreviewGeneration();
    const pendingChanges = firstAvatarDecoration.getPendingChanges();
    dependencyMap = { avatarDecoration: pendingChanges.pendingAvatarDecoration, profileEffect: pendingChanges.pendingProfileEffect, nameplate: pendingChanges.pendingNameplate, profileFrame: pendingChanges.pendingProfileFrame };
    if (closure_0.type === closure_0(1977).CollectiblesItemType.BUNDLE) {
      const obj3 = {};
      if (null != firstAvatarDecoration) {
        obj3.avatarDecoration = firstAvatarDecoration;
      }
      if (null != firstProfileEffect) {
        obj3.profileEffect = firstProfileEffect;
      }
      if (null != firstNameplate) {
        obj3.nameplate = firstNameplate;
      }
      if (null != firstProfileFrame) {
        obj3.profileFrame = firstProfileFrame;
      }
      if (null != closure_2) {
        if (firstNameplate(tmp12)) {
          obj3.avatarDecoration = tmp12;
        } else {
          if (isProfileEffectRecord(tmp12)) {
            obj3.profileEffect = tmp12;
          } else if (!firstProfileFrame(tmp12)) {
            if (isProfileFrameRecord(tmp12)) {
              obj3.profileFrame = tmp12;
            }
          }
          obj3.nameplate = tmp12;
        }
      }
      obj = obj(8470);
      obj.setPendingChanges(obj3);
    } else {
      const first = closure_2(closure_0.items, 1)[0];
      if (firstNameplate(first)) {
        const obj4 = { avatarDecoration: first };
        obj(8470).setPendingChanges(obj4);
        const objResult = obj(8470);
      } else if (isProfileEffectRecord(first)) {
        const obj5 = { profileEffect: first };
        obj(8470).setPendingChanges(obj5);
        const objResult4 = obj(8470);
      } else if (firstProfileFrame(first)) {
        const obj6 = { nameplate: first };
        obj(8470).setPendingChanges(obj6);
        const objResult5 = obj(8470);
      } else if (isProfileFrameRecord(first)) {
        const obj7 = { profileFrame: first };
        obj(8470).setPendingChanges(obj7);
        const objResult6 = obj(8470);
      }
      return () => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = closure_0 === CollectiblePreviewSession.currentPreviewGeneration();
        }
        if (tmp) {
          UserProfileSettingsActionCreators.setPendingChanges(closure_1);
        }
      };
    }
  };
  const items = [arg0, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  cResult[0] = firstAvatarDecoration;
  cResult[1] = firstProfileFrame;
  cResult[2] = firstNameplate;
  cResult[3] = firstProfileEffect;
  cResult[4] = arg0;
  cResult[5] = arg2;
  cResult[6] = arg1;
  cResult[7] = fn;
  cResult[8] = items;
  tmp4 = items;
  tmp3 = fn;
}) : ((arg0, arg1, arg2) => {
  _require = arg0;
  dependencyMap = arg1;
  closure_2 = arg2;
  const shopProductItems = require("useShopProductItems").useShopProductItems(arg0);
  const firstProfileEffect = shopProductItems.firstProfileEffect;
  const firstAvatarDecoration = shopProductItems.firstAvatarDecoration;
  const firstNameplate = shopProductItems.firstNameplate;
  const firstProfileFrame = shopProductItems.firstProfileFrame;
  const items = [arg0, arg1, firstProfileEffect, firstAvatarDecoration, firstNameplate, firstProfileFrame, arg2];
  const effect = firstProfileEffect.useEffect(() => {
    let obj = closure_0;
    closure_0 = closure_0(11423).currentPreviewGeneration();
    const pendingChanges = firstAvatarDecoration.getPendingChanges();
    dependencyMap = { avatarDecoration: pendingChanges.pendingAvatarDecoration, profileEffect: pendingChanges.pendingProfileEffect, nameplate: pendingChanges.pendingNameplate, profileFrame: pendingChanges.pendingProfileFrame };
    if (closure_0.type === closure_0(1977).CollectiblesItemType.BUNDLE) {
      const obj3 = {};
      if (null != firstAvatarDecoration) {
        obj3.avatarDecoration = firstAvatarDecoration;
      }
      if (null != firstProfileEffect) {
        obj3.profileEffect = firstProfileEffect;
      }
      if (null != firstNameplate) {
        obj3.nameplate = firstNameplate;
      }
      if (null != firstProfileFrame) {
        obj3.profileFrame = firstProfileFrame;
      }
      if (null != closure_2) {
        if (firstNameplate(tmp12)) {
          obj3.avatarDecoration = tmp12;
        } else {
          if (isProfileEffectRecord(tmp12)) {
            obj3.profileEffect = tmp12;
          } else if (!firstProfileFrame(tmp12)) {
            if (isProfileFrameRecord(tmp12)) {
              obj3.profileFrame = tmp12;
            }
          }
          obj3.nameplate = tmp12;
        }
      }
      obj = obj(8470);
      obj.setPendingChanges(obj3);
    } else {
      const first = closure_2(closure_0.items, 1)[0];
      if (firstNameplate(first)) {
        const obj4 = { avatarDecoration: first };
        obj(8470).setPendingChanges(obj4);
        const objResult = obj(8470);
      } else if (isProfileEffectRecord(first)) {
        const obj5 = { profileEffect: first };
        obj(8470).setPendingChanges(obj5);
        const objResult4 = obj(8470);
      } else if (firstProfileFrame(first)) {
        const obj6 = { nameplate: first };
        obj(8470).setPendingChanges(obj6);
        const objResult5 = obj(8470);
      } else if (isProfileFrameRecord(first)) {
        const obj7 = { profileFrame: first };
        obj(8470).setPendingChanges(obj7);
        const objResult6 = obj(8470);
      }
      return () => {
        let tmp = closure_1;
        if (closure_1) {
          tmp = closure_0 === CollectiblePreviewSession.currentPreviewGeneration();
        }
        if (tmp) {
          UserProfileSettingsActionCreators.setPendingChanges(closure_1);
        }
      };
    }
  }, items);
});
