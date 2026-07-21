// Module ID: 12257
// Function ID: 94002
// Name: ProgressWheel
// Dependencies: []
// Exports: default

// Module 12257 (ProgressWheel)
const View = require(dependencyMap[0]).View;
const _module = require(dependencyMap[1]);
({ jsx: closure_4, jsxs: closure_5 } = _module);
let closure_6 = 2 * Math.PI * 77;
const _module1 = require(dependencyMap[2]);
let closure_7 = _module1.createStyles({ progressCircleContainer: {}, progressCircleImage: {}, glowImage: {} });
const _module2 = require(dependencyMap[10]);
const result = _module2.fileFinishedImporting("modules/premium/referral_program/native/ProgressWheel.tsx");

export default function ProgressWheel(nReferralsSent) {
  nReferralsSent = nReferralsSent.nReferralsSent;
  const tmp = callback3();
  let obj = require(dependencyMap[3]);
  const token = obj.useToken(importDefault(dependencyMap[4]).colors.BACKGROUND_MOD_STRONG);
  let obj1 = require(dependencyMap[3]);
  obj = { style: tmp.progressCircleContainer };
  const token1 = obj1.useToken(importDefault(dependencyMap[4]).colors.BACKGROUND_SURFACE_HIGH);
  let tmp6 = nReferralsSent === require(dependencyMap[5]).MAX_REFERRALS_SENT;
  if (tmp6) {
    obj = { source: importDefault(dependencyMap[7]), style: tmp.glowImage };
    tmp6 = callback(importDefault(dependencyMap[6]), obj);
    const tmp10 = importDefault(dependencyMap[6]);
  }
  const items = [tmp6, , ];
  obj1 = { bhk: null, bic: 2 };
  const items1 = [callback(require(dependencyMap[8]).Circle, { stroke: token, fill: token1 }), callback(require(dependencyMap[8]).Circle, { strokeDasharray: closure_6, strokeDashoffset: closure_6 * (1 - 33.3 * nReferralsSent / 100) })];
  obj1.children = items1;
  items[1] = callback2(importDefault(dependencyMap[8]), obj1);
  const obj3 = {};
  const obj4 = {};
  const obj2 = { strokeDasharray: closure_6, strokeDashoffset: closure_6 * (1 - 33.3 * nReferralsSent / 100) };
  const tmp11 = importDefault(dependencyMap[8]);
  const tmp4 = callback2;
  const tmp5 = View;
  obj4.uri = importDefault(dependencyMap[9]);
  obj3.source = obj4;
  obj3.style = tmp.progressCircleImage;
  items[2] = callback(importDefault(dependencyMap[6]), obj3);
  obj.children = items;
  return tmp4(tmp5, obj);
};
