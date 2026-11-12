// Module ID: 8911
// Function ID: 8912
// Name: isPortraitToLandscapeChannelReset
// Dependencies: [2]
// Exports: default

// Module 8911 (isPortraitToLandscapeChannelReset)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/user_profile/native/isPortraitToLandscapeChannelReset.tsx");

export default function isPortraitToLandscapeChannelReset(index, index2) {
  let routes;
  let routes2;
  let state;
  if (index != null) {
    const first = index.routes[0];
    if (first != null) {
      state = first.state;
    }
  }
  let state1;
  if (index2 != null) {
    const first1 = index2.routes[0];
    if (first1 != null) {
      state1 = first1.state;
    }
  }
  let state2;
  if (state != null) {
    const first2 = state.routes[0];
    if (first2 != null) {
      state2 = first2.state;
    }
  }
  let state3;
  if (state1 != null) {
    const first3 = state1.routes[0];
    if (first3 != null) {
      state3 = first3.state;
    }
  }
  if (state2 != null) {
    ({ index, routes } = state2);
    if (index == null) {
      index = 0;
    }
  }
  if (state3 != null) {
    ({ index: index2, routes: routes2 } = state3);
    if (index2 == null) {
      index2 = 0;
    }
  }
  let index1;
  if (index != null) {
    index1 = index.index;
  }
  let tmp12 = 0 === index1;
  if (tmp12) {
    let index3;
    if (index2 != null) {
      index3 = index2.index;
    }
    tmp12 = 0 === index3;
  }
  if (tmp12) {
    const first4 = index.routes[0];
    let key1;
    if (first4 != null) {
      key1 = first4.key;
    }
    const first5 = index2.routes[0];
    let key2;
    if (first5 != null) {
      key2 = first5.key;
    }
    tmp12 = key1 === key2;
  }
  if (tmp12) {
    let index4;
    if (state != null) {
      index4 = state.index;
    }
    tmp12 = 1 === index4;
  }
  if (tmp12) {
    let index5;
    if (state1 != null) {
      index5 = state1.index;
    }
    tmp12 = 0 === index5;
  }
  if (tmp12) {
    let name;
    if (state.routes[1] != null) {
      name = tmp20.name;
    }
    tmp12 = "channel" === name;
  }
  if (tmp12) {
    tmp12 = state.routes.length === state1.routes.length + 1;
  }
  if (tmp12) {
    const first6 = state.routes[0];
    let key3;
    if (first6 != null) {
      key3 = first6.key;
    }
    const first7 = state1.routes[0];
    let key4;
    if (first7 != null) {
      key4 = first7.key;
    }
    tmp12 = key3 === key4;
  }
  if (tmp12) {
    let name1;
    if (tmp9 != null) {
      name1 = tmp9.name;
    }
    let tmp27 = "guilds" === name1;
    if (!tmp27) {
      let name2;
      if (tmp9 != null) {
        name2 = tmp9.name;
      }
      tmp27 = "guilds-root" === name2;
    }
    tmp12 = tmp27;
  }
  if (tmp12) {
    let key5;
    const key = tmp9.key;
    if (tmp10 != null) {
      key5 = tmp10.key;
    }
    tmp12 = key === key5;
  }
  return tmp12;
};
