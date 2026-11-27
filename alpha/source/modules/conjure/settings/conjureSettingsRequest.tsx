// Module ID: 18529
// Function ID: 18530
// Name: conjureSettingsRequest
// Dependencies: [14759, 2]
// Exports: conjureSettingsRequestEntry, conjureSettingsRequestKeys, conjureSettingsRequestMissingKeys, conjureSettingsRequestNamedKeys, conjureSettingsRequestNeeded, conjureSettingsRequestPresentation, conjureSettingsRequestSections

// Module 18529 (conjureSettingsRequest)
import conjureSettingValues from "conjureSettingValues" /* 14759 */;
import size from "module_2" /* 2 */;

let set;

const f115678 = (item) => {
  let obj2;
  closure_0 = item;
  const schema = closure_0.schema;
  const found = schema.find((key) => key.key === closure_0);
  const secrets = closure_0.secrets;
  const found1 = secrets.find((name) => name.name === closure_0);
  const tmp = closure_0;
  if (null == found1) {
    let tmp5;
    let type;
    if (found != null) {
      type = found.type;
    }
    if ("secret" !== type) {
      tmp5 = null;
      if (null != found) {
        const obj = { kind: "value", filled: null != obj2.conjureSettingAnyStoredValue(tmp, found), def: found };
        tmp5 = obj;
        obj2 = closure_0(dependencyMap[0]);
      }
    }
    let filled;
    if (tmp5 != null) {
      filled = tmp5.filled;
    }
    return false === filled;
  }
  set = undefined;
  if (found1 != null) {
    set = found1.set;
  }
  tmp5 = { kind: "secret", filled: true === set, def: found };
};
function conjureSettingsEntryRequired(kind) {
  let tmp = "secret" === kind.kind;
  if (!tmp) {
    tmp = true === kind.def.required && true !== kind.def.per_server;
  }
  return tmp;
}
const result = size.fileFinishedImporting("modules/conjure/settings/conjureSettingsRequest.tsx");

export function conjureSettingsRequestEntry(key, schema) {
  let obj2;
  let closure_0 = key;
  schema = schema.schema;
  const found = schema.find((key) => key.key === closure_0);
  const secrets = schema.secrets;
  const found1 = secrets.find((name) => name.name === closure_0);
  if (null == found1) {
    let tmp4;
    let type;
    if (found != null) {
      type = found.type;
    }
    if ("secret" !== type) {
      tmp4 = null;
      if (null != found) {
        const obj = { kind: "value", filled: null != obj2.conjureSettingAnyStoredValue(schema, found), def: found };
        tmp4 = obj;
        obj2 = conjureSettingValues;
      }
    }
    return tmp4;
  }
  set = undefined;
  if (found1 != null) {
    set = found1.set;
  }
  tmp4 = { kind: "secret", filled: true === set, def: found };
}
export function conjureSettingsRequestSections(found1, stateFromStores) {
  let found = found1.filter((item) => {
    let obj2;
    stateFromStores = item;
    const schema = stateFromStores.schema;
    const found = schema.find((key) => key.key === closure_0);
    const secrets = stateFromStores.secrets;
    const found1 = secrets.find((name) => name.name === closure_0);
    const tmp = stateFromStores;
    if (null == found1) {
      let tmp5;
      let type;
      if (found != null) {
        type = found.type;
      }
      if ("secret" !== type) {
        tmp5 = null;
        if (null != found) {
          const obj = { kind: "value", filled: null != obj2.conjureSettingAnyStoredValue(tmp, found), def: found };
          tmp5 = obj;
          obj2 = conjureSettingValues;
        }
      }
      let kind;
      if (tmp5 != null) {
        kind = tmp5.kind;
      }
      return "secret" === kind;
    }
    set = undefined;
    if (found1 != null) {
      set = found1.set;
    }
    tmp5 = { kind: "secret", filled: true === set, def: found };
  });
  found1 = found1.filter((item) => {
    let obj2;
    stateFromStores = item;
    const schema = stateFromStores.schema;
    const found = schema.find((key) => key.key === closure_0);
    const secrets = stateFromStores.secrets;
    const found1 = secrets.find((name) => name.name === closure_0);
    const tmp = stateFromStores;
    if (null == found1) {
      let tmp5;
      let type;
      if (found != null) {
        type = found.type;
      }
      if ("secret" !== type) {
        tmp5 = null;
        if (null != found) {
          const obj = { kind: "value", filled: null != obj2.conjureSettingAnyStoredValue(tmp, found), def: found };
          tmp5 = obj;
          obj2 = conjureSettingValues;
        }
      }
      let kind;
      if (tmp5 != null) {
        kind = tmp5.kind;
      }
      return "value" === kind;
    }
    set = undefined;
    if (found1 != null) {
      set = found1.set;
    }
    tmp5 = { kind: "secret", filled: true === set, def: found };
  });
  let obj = { secretKeys: found, valueKeys: found1, sectioned: found.length > 0 && found1.length > 0 };
  return obj;
}
export function conjureSettingsRequestNamedKeys(scopeKeys) {
  let items = scopeKeys;
  const _Set = Set;
  if (scopeKeys == null) {
    items = [];
  }
  const _Set1 = new _Set(items);
  const items1 = [..._Set1];
  return items1;
}
export function conjureSettingsRequestPresentation(request2, settings) {
  if (null == settings) {
    return "button";
  } else {
    let keys = request2.keys;
    const _Set = Set;
    if (keys == null) {
      keys = [];
    }
    const self = this;
    const self2 = this;
    let tmp = keys;
    const _Set1 = new _Set(keys);
    let items = [];
    HermesBuiltin.arraySpread(items, _Set1, 0);
    const flatMapResult = items.flatMap((item) => {
      let obj2;
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      const secrets = settings.secrets;
      const found1 = secrets.find((name) => name.name === closure_0);
      const tmp = settings;
      if (null == found1) {
        let items;
        let type;
        if (found != null) {
          type = found.type;
        }
        if ("secret" !== type) {
          items = null;
          if (null != found) {
            const obj = { kind: "value", filled: null != obj2.conjureSettingAnyStoredValue(tmp, found), def: found };
            items = obj;
            obj2 = conjureSettingValues;
          }
        }
        if (items == null) {
          items = [];
        }
        return items;
      }
      set = undefined;
      if (found1 != null) {
        set = found1.set;
      }
      items = { kind: "secret", filled: true === set, def: found };
    });
    if (0 !== flatMapResult.length) {
      let str;
      if (flatMapResult.length <= 2) {
        str = "inline";
      }
      return str;
    }
    str = "button";
  }
}
export function conjureSettingsRequestMissingKeys(items, arg1) {
  let closure_0 = arg1;
  if (null == arg1) {
    items = [];
  } else {
    let keys = items.keys;
    const _Set = Set;
    if (keys == null) {
      keys = [];
    }
    const self = this;
    const self2 = this;
    const _Set1 = new _Set(keys);
    const items1 = [];
    HermesBuiltin.arraySpread(items1, _Set1, 0);
    items = items1.filter(f115678);
  }
  return items;
}
export { conjureSettingsEntryRequired };
export function conjureSettingsRequestNeeded(request2, settings, saved) {
  if (null == settings) {
    return 0;
  } else {
    let num3;
    let keys = request2.keys;
    const _Set2 = Set;
    if (keys == null) {
      keys = [];
    }
    const self = this;
    const self2 = this;
    let tmp = keys;
    const _Set21 = new _Set2(keys);
    let items = [];
    HermesBuiltin.arraySpread(items, _Set21, 0);
    const flatMapResult = items.flatMap((item) => {
      let obj2;
      settings = item;
      const schema = settings.schema;
      const found = schema.find((key) => key.key === closure_0);
      const secrets = settings.secrets;
      const found1 = secrets.find((name) => name.name === closure_0);
      const tmp = settings;
      if (null == found1) {
        let items;
        let type;
        if (found != null) {
          type = found.type;
        }
        if ("secret" !== type) {
          items = null;
          if (null != found) {
            const obj = { kind: "value", filled: null != obj2.conjureSettingAnyStoredValue(tmp, found), def: found };
            items = obj;
            obj2 = conjureSettingValues;
          }
        }
        if (items == null) {
          items = [];
        }
        return items;
      }
      set = undefined;
      if (found1 != null) {
        set = found1.set;
      }
      items = { kind: "secret", filled: true === set, def: found };
    });
    let found = flatMapResult.filter(conjureSettingsEntryRequired);
    if (found.length > 0) {
      num3 = found.filter((filled) => !filled.filled).length;
    } else {
      num3 = 0;
      if (!saved) {
        let items1;
        if (null == settings) {
          items1 = [];
        } else {
          let keys1 = request2.keys;
          const _Set = Set;
          if (keys1 == null) {
            keys1 = [];
          }
          const self3 = this;
          const self4 = this;
          const _Set1 = new _Set(keys1);
          const items2 = [];
          HermesBuiltin.arraySpread(items2, _Set1, 0);
          items1 = items2.filter(f115678);
        }
        num3 = 0;
        if (0 !== items1.length) {
          num3 = flatMapResult.length;
        }
      }
    }
    return num3;
  }
}
export function conjureSettingsRequestKeys(request2, schema) {
  let keys = request2.keys;
  const _Set = Set;
  if (keys == null) {
    keys = [];
  }
  const _Set1 = new _Set(keys);
  let items = [..._Set1];
  if (items.length <= 0) {
    schema = schema.schema;
    items = schema.map((key) => key.key);
  }
  return items;
}
