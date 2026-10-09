// Module ID: 17183
// Function ID: 17184
// Name: ConjurePublishCtaCard
// Dependencies: [19, 2086, 21, 558, 576, 504, 5376, 5374, 5087, 1126, 3827, 6165, 17153, 17042, 2]

// Module 17183 (ConjurePublishCtaCard)
import react2 from "react" /* 576 */;
import useConjurePublishActionDefault from "useConjurePublishAction" /* 17042 */;
import react from "react" /* 19 */;
import GuildStore from "GuildStore" /* 2086 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let tmp;
const conjurePublishCard = tmp(17153);
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? (function PublishCta(publish) {
  let first;
  let intl;
  let items1;
  let items2;
  let tmp6;
  let tmp8;
  let tmpResult2;
  const tmp = publish;
  const obj = publish(576);
  const cResult = obj.c(15);
  publish = publish.publish;
  const guildId = publish.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function o() {
      let guild = null;
      if (null != guildId) {
        guild = GuildStore.getGuild(tmp);
      }
      return guild;
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  if (cResult[3] !== publish) {
    const fn2 = function p() {
      return publish.run("card");
    };
    cResult[3] = publish;
    cResult[4] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[4];
  }
  if (cResult[5] === publish.disabled) {
    if (cResult[6] === publish.label) {
      if (cResult[7] === publish.publishing) {
        let tmp9;
        let tmp11;
        if (cResult[8] === tmp8) {
          tmp9 = cResult[9];
        }
        if (cResult[10] !== stateFromStores) {
          let tmp12 = null;
          if (null != stateFromStores) {
            const obj2 = { direction: "horizontal", spacing: 4, align: "center", children: items1 };
            const Stack = tmp(5374).Stack;
            const obj3 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(guildId(3827)["+HGTlC"]) };
            const Text = tmp(5087).Text;
            intl = tmp(1126).intl;
            items1 = [closure_4(Text, obj3), , ];
            const obj4 = { guild: stateFromStores, size: tmp(6165).GuildIconSizes.XXSMALL };
            const tmp16 = guildId(6165);
            items1[1] = closure_4(tmp16, obj4);
            const obj5 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: tmpResult2.publishCardServerName(stateFromStores.name) };
            const Text2 = tmp(5087).Text;
            tmpResult2 = tmp(17153);
            items1[2] = closure_4(Text2, obj5);
            tmp12 = closure_5(Stack, obj2);
          }
          cResult[10] = stateFromStores;
          cResult[11] = tmp12;
          tmp11 = tmp12;
        } else {
          tmp11 = cResult[11];
        }
        if (cResult[12] === tmp9) {
          let tmp17;
          if (cResult[13] === tmp11) {
            tmp17 = cResult[14];
          }
          return tmp17;
        }
        const obj6 = { direction: "horizontal", spacing: 8, align: "center", children: items2 };
        items2 = [tmp9, tmp11];
        const tmp19 = closure_5(tmp(5374).Stack, obj6);
        cResult[12] = tmp9;
        cResult[13] = tmp11;
        cResult[14] = tmp19;
        tmp17 = tmp19;
      }
    }
  }
  const obj7 = { text: publish.label, variant: "primary", size: "sm", loading: publish.publishing, disabled: publish.disabled, onPress: tmp8 };
  const tmp10 = closure_4(tmp(5376).Button, obj7);
  cResult[5] = publish.disabled;
  cResult[6] = publish.label;
  cResult[7] = publish.publishing;
  cResult[8] = tmp8;
  cResult[9] = tmp10;
  tmp9 = tmp10;
}) : (function PublishCta(publish) {
  let intl;
  let items2;
  let tmpResult;
  publish = publish.publish;
  const guildId = publish.guildId;
  const tmp = publish;
  const items = [GuildStore];
  const obj = publish(504);
  const stateFromStores = obj.useStateFromStores(items, () => {
    let guild = null;
    if (null != guildId) {
      guild = GuildStore.getGuild(tmp);
    }
    return guild;
  });
  const Stack = publish(5374).Stack;
  const children = [, ];
  const obj2 = {
    text: publish.label,
    variant: "primary",
    size: "sm",
    loading: publish.publishing,
    disabled: publish.disabled,
    onPress() {
      return publish.run("card");
    }
  };
  children[0] = closure_4(publish(5376).Button, obj2);
  let tmp4Result = null;
  if (null != stateFromStores) {
    const obj3 = { direction: "horizontal", spacing: 4, align: "center", children: items2 };
    const Stack2 = tmp(5374).Stack;
    const obj4 = { variant: "text-sm/normal", color: "text-muted", children: intl.string(guildId(3827)["+HGTlC"]) };
    const Text = tmp(5087).Text;
    intl = tmp(1126).intl;
    items2 = [closure_4(Text, obj4), , ];
    const obj5 = { guild: stateFromStores, size: tmp(6165).GuildIconSizes.XXSMALL };
    const tmp8 = guildId(6165);
    items2[1] = closure_4(tmp8, obj5);
    const obj6 = { variant: "text-sm/medium", color: "text-default", lineClamp: 1, children: tmpResult.publishCardServerName(stateFromStores.name) };
    const Text2 = tmp(5087).Text;
    tmpResult = tmp(17153);
    items2[2] = closure_4(Text2, obj6);
    tmp4Result = tmp4(Stack2, obj3);
  }
  children[1] = tmp4Result;
  return closure_5(Stack, { direction: "horizontal", spacing: 8, align: "center", children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (function ConjurePublishCtaCard(projectId) {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(2);
  const tmp4 = useConjurePublishActionDefault(projectId.projectId);
  if (cResult[0] !== tmp4) {
    let tmp7 = null;
    if (null != tmp4) {
      tmp7 = null;
      const tmpResult = conjurePublishCard;
      if (tmpResult.isConjurePublishCtaVisible(tmp4)) {
        const obj2 = { publish: tmp4 };
        tmp7 = React3(closure_6, obj2);
      }
    }
    cResult[0] = tmp4;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  return tmp5;
}) : (function ConjurePublishCtaCard(projectId) {
  const tmp2 = useConjurePublishActionDefault(projectId.projectId);
  let tmp3 = null;
  if (null != tmp2) {
    tmp3 = null;
    const obj = conjurePublishCard;
    if (obj.isConjurePublishCtaVisible(tmp2)) {
      const obj2 = { publish: tmp2 };
      tmp3 = React3(closure_6, obj2);
    }
  }
  return tmp3;
});
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishCtaCard.tsx");

export default tmp4;
