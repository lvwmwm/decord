// Module ID: 19510
// Function ID: 19511
// Name: ChannelPermissionOverwriteEditActionCreators
// Dependencies: [5, 5092, 19505, 572, 5952, 1113, 19506, 8069, 2]
// Exports: updateChannelPermissionOverwrite

// Module 19510 (ChannelPermissionOverwriteEditActionCreators)
import DispatcherDefault from "Dispatcher" /* 572 */;
import intl2 from "intl" /* 1113 */;
import ToastActionCreatorsDefault from "ToastActionCreators" /* 5952 */;
import ChannelPermissionOverwriteEditStore2 from "ChannelPermissionOverwriteEditStore" /* 19505 */;
import ChannelPermissionOverwriteEditUtils from "ChannelPermissionOverwriteEditUtils" /* 19506 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelStore from "ChannelStore" /* 5092 */;
import size from "module_2" /* 2 */;

let c10, c5, c9, closure_5, closure_8, editId;

function dispatchEditFailure(channelId, overwriteId, mutations) {
  obj = DispatcherDefault;
  const obj2 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_FAILURE", channelId, overwriteId, mutations };
  return obj.dispatch(obj2);
}
function showEditFailureToast() {
  let intl;
  obj = { text: intl.string(intl2.t.CKsXk3), variant: "critical" };
  const open = ToastActionCreatorsDefault.open;
  ToastActionCreatorsDefault;
  intl = intl2.intl;
  open("CHANNEL_PERMISSION_OVERWRITE_UPDATE_FAILURE", obj);
}
let obj = function _runEditValidation() {
  obj = _asyncToGenerator(async (channelId, overwriteId, arg2, arg3) => {
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj3;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_5 = tmp;
              closure_4 = tmp30;
              c6 = 1;
              c7 = 3;
              c8 = 1;
              const obj5 = { value: closure_3(), done: false };
              return obj5;
            }
          } else {
            if (1 === c7) {
              c6 = 0;
            } else {
              if (2 === c7) {
                c6 = 0;
              } else if (3 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  return { value, done: true };
                } else if (value) {
                  c7 = 4;
                  c8 = 1;
                  const obj7 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_READY", channelId, overwriteId, flagKey: closure_2.flagKey, editId: closure_2.editId };
                  const obj8 = { value: obj3.dispatch(obj7), done: false };
                  obj3 = closure_133_1(closure_133_2[3]);
                  return obj8;
                } else {
                  c6 = 0;
                }
              } else if (4 === c7) {
                if (arg0 === 1) {
                  c8 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 0;
                  c8 = 3;
                  return { value, done: true };
                } else {
                  closure_133_12(channelId, overwriteId);
                  c6 = 0;
                  c8 = 3;
                  return { value: "HermesInternal", done: null };
                }
              } else if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 0;
                c8 = 3;
                return { value, done: true };
              } else {
                c6 = 0;
              }
              c8 = 3;
              return { value: "HermesInternal", done: null };
            }
            c6 = 2;
            const items = [closure_2];
            c7 = 5;
            c8 = 1;
            const obj10 = { value: closure_133_9(channelId, overwriteId, items), done: false };
            return obj10;
          }
        } catch (tmp29) {
          if (0 === c6) {
            c8 = 3;
            throw tmp29;
          } else if (1 === c6) {
            c7 = 1;
          } else {
            c7 = 2;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function scheduleEditDrain(channelId, overwriteId) {
  const tmp = closure_6(channelId, overwriteId);
  obj = set;
  if (!set.has(tmp)) {
    obj.add(tmp);
    (function runEditDrain() {
      return obj(...arguments);
    })(channelId, overwriteId, tmp);
  }
}
obj = function _runEditDrain() {
  obj = _asyncToGenerator(async (arg0, value, arg2) => {
    let closure_4;
    function drainPendingEdits() {
      return closure_1_14(...arguments);
    }
    let closure_0 = arg0;
    let closure_1 = value;
    let closure_2 = arg2;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c6;
      try {
        let tmp;
        let c3;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp4;
            tmp = undefined;
            c3 = false;
            c6 = 2;
            c7 = 4;
            c8 = 1;
            const obj4 = { value: drainPendingEdits(closure_0, closure_1), done: false };
            return obj4;
          }
        } else if (1 === c7) {
          c6 = 0;
          closure_132_8.delete(closure_2);
          let tmp79 = c3;
          const tmp74 = closure_5;
          if (tmp79) {
            tmp79 = closure_132_5.getReadyEdits(closure_0, closure_1).length > 0;
          }
          if (tmp79) {
            closure_132_12(closure_0, closure_1);
          }
          throw tmp74;
        } else {
          if (2 === c7) {
            c6 = 3;
            tmp = closure_132_5.getReadyEdits(closure_0, closure_1);
            if (tmp.length > 0) {
              c7 = 5;
              c8 = 1;
              const obj5 = {
                value: closure_132_9(closure_0, closure_1, tmp.map((editId) => {
                            obj = { flagKey: String(editId.flag), editId: editId.editId };
                            return obj;
                          })),
                done: false
              };
              return obj5;
            } else {
              c6 = 1;
            }
          } else if (3 === c7) {
            c6 = 1;
          } else if (4 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_132_8.delete(closure_2);
              const tmp31 = c3 && closure_132_5.getReadyEdits(closure_0, closure_1).length > 0;
              if (tmp31) {
                closure_132_12(closure_0, closure_1);
              }
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              c3 = true;
              c6 = 1;
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            closure_132_8.delete(closure_2);
            const tmp13 = c3 && closure_132_5.getReadyEdits(closure_0, closure_1).length > 0;
            if (tmp13) {
              closure_132_12(closure_0, closure_1);
            }
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_132_10();
          }
          c6 = 0;
          closure_132_8.delete(closure_2);
          const tmp54 = c3 && closure_132_5.getReadyEdits(closure_0, closure_1).length > 0;
          if (tmp54) {
            closure_132_12(closure_0, closure_1);
          }
          c8 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp94) {
        closure_5 = tmp94;
        if (0 === c6) {
          c8 = 3;
          throw tmp94;
        } else if (1 === c6) {
          c7 = 1;
        } else if (2 === c6) {
          c7 = 2;
        } else {
          c7 = 3;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _drainPendingEdits() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let closure_0 = arg0;
    let closure_1 = value;
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      let c7;
      try {
        let iter3;
        let done;
        let next;
        let _undefined;
        let tmp13;
        let iter4;
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let tmp38 = closure_0;
            let tmp39 = closure_1;
            function* _loop(arg0, value) {
              let channel;
              let closure_2;
              let flag;
              let obj12;
              if (c7 === 2) {
                c7 = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: null };
                }
              } else {
                try {
                  let mapped;
                  let readyEdits;
                  let pendingEdits;
                  c7 = 2;
                  if (0 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      let closure_3 = tmp;
                      mapped = undefined;
                      pendingEdits = undefined;
                      _undefined = undefined;
                      readyEdits = c5.getReadyEdits(closure_0, pendingEdits);
                      if (0 === readyEdits.length) {
                        c7 = 3;
                        const obj4 = { value: { v: "Array" }, done: true };
                        return obj4;
                      } else {
                        mapped = readyEdits.map((editId) => {
                          obj = { flagKey: String(editId.flag), editId: editId.editId };
                          return obj;
                        });
                        channel = channel.getChannel(closure_0);
                        let channelPermissionOverwrite;
                        if (null != channel) {
                          const obj10 = closure_0(_undefined[6]);
                          channelPermissionOverwrite = obj10.getChannelPermissionOverwrite(channel, pendingEdits);
                        }
                        if (null == channelPermissionOverwrite) {
                          c6 = 1;
                          c7 = 1;
                          const obj5 = { value: closure_1_9(closure_0, pendingEdits, mapped), done: false };
                          return obj5;
                        } else {
                          closure_0 = readyEdits[Symbol.iterator]();
                          const nextResult = closure_0.next();
                          while (closure_0 !== undefined) {
                            ({ flag, value } = nextResult);
                            let obj11 = closure_0(_undefined[6]);
                            channelPermissionOverwrite = obj11.applyChannelPermissionOverwriteEdit(channelPermissionOverwrite, flag, value);
                            c5 = 0;
                            continue;
                          }
                          c5 = 2;
                          c6 = 6;
                          c7 = 1;
                          const obj6 = { value: obj12.updatePermissionOverwrite(closure_0, channelPermissionOverwrite), done: false };
                          obj12 = readyEdits(_undefined[7]);
                          return obj6;
                        }
                      }
                    }
                  } else if (1 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      const obj7 = { value, done: true };
                      return obj7;
                    } else {
                      c7 = 3;
                      const obj8 = { value: { v: "Array" }, done: true };
                      return obj8;
                    }
                  } else if (2 === c6) {
                    c5 = 0;
                    closure_0.return();
                    throw channel;
                  } else if (3 === c6) {
                    c5 = 0;
                    pendingEdits = c5.getPendingEdits(closure_131_0, closure_131_1);
                    _undefined = mapped.some((editId) => {
                      let editId1;
                      editId = editId.editId;
                      if (readyEdits[editId.flagKey] != null) {
                        editId1 = tmp.editId;
                      }
                      return editId1 === editId;
                    });
                    c6 = 4;
                    c7 = 1;
                    const obj9 = { value: closure_1_9(closure_131_0, closure_131_1, mapped), done: false };
                    return obj9;
                  } else if (4 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      const obj13 = { value, done: true };
                      return obj13;
                    } else {
                      const tmp13 = _undefined;
                      if (tmp13) {
                        closure_1_10();
                      }
                      c7 = 3;
                      return { value: 0, done: true };
                    }
                  } else if (5 === c6) {
                    if (arg0 === 1) {
                      c7 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c7 = 3;
                      const obj14 = { value, done: true };
                      return obj14;
                    } else {
                      c7 = 3;
                      return { value: "HermesInternal", done: null };
                    }
                  } else if (arg0 === 1) {
                    c7 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 0;
                    c7 = 3;
                    const obj15 = { value, done: true };
                    return obj15;
                  } else {
                    c5 = 0;
                    obj = readyEdits(_undefined[3]);
                    const obj16 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_SUCCESS", channelId: closure_131_0, overwriteId: closure_131_1, mutations: mapped };
                    c6 = 5;
                    c7 = 1;
                    const obj17 = { value: obj.dispatch(obj16), done: false };
                    return obj17;
                  }
                } catch (tmp46) {
                  channel = tmp46;
                  if (0 === c5) {
                    c7 = 3;
                    throw tmp46;
                  } else if (1 === tmp48) {
                    c6 = 2;
                  } else {
                    c6 = 3;
                  }
                }
              }
            }
            const tmp22 = _loop();
            iter3 = tmp22[tmp37.iterator]();
            done = HermesBuiltin.ensureObject("iterator is not an object");
            next = iter3.next;
            _undefined = undefined;
          }
        } else {
          if (1 === tmp3) {
            c7 = 1;
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else {
              _undefined = value;
              if (arg0 === 2) {
                _undefined = value;
                c7 = 0;
                const method = HermesBuiltin.getMethod("return");
                if (method === undefined) {
                  c10 = 3;
                  let obj4 = { value, done: true };
                  return obj4;
                } else {
                  const iter2 = method(_undefined);
                  HermesBuiltin.ensureObject("iterator.return() did not return an object");
                  done = iter2.done;
                  if (done) {
                    c10 = 3;
                    obj = { value: iter2.value, done: true };
                    return obj;
                  } else {
                    c9 = 1;
                    c10 = 1;
                    return iter2;
                  }
                }
              } else {
                c7 = 0;
                tmp13 = value;
              }
            }
          } else {
            const tmp4 = iter3;
            c7 = 0;
            const str = "throw";
            const tmp5 = closure_8;
            done = HermesBuiltin.getMethod("throw");
            if (done === undefined) {
              done = HermesBuiltin.getMethod("return");
              if (done !== undefined) {
                HermesBuiltin.ensureObject("iterator.return() did not return an object");
              }
              throw new TypeError("yield* delegate must have a .throw() method");
            } else {
              const iter = done(tmp5);
              HermesBuiltin.ensureObject("iterator.throw() did not return an object");
              done = iter.done;
              if (done) {
                iter4 = iter;
              } else {
                c9 = 1;
                c10 = 1;
                return iter;
              }
            }
          }
          value = iter4.value;
          _undefined = value;
          if (0 !== value) {
            done = _undefined;
            if (done) {
              c10 = 3;
              let obj5 = { value: _undefined.v, done: true };
              return obj5;
            }
          }
        }
        iter4 = next(tmp13);
        HermesBuiltin.ensureObject("iterator.next() did not return an object");
        done = iter4.done;
        if (!done) {
          c9 = 1;
          c10 = 1;
          return iter4;
        }
      } catch (tmp31) {
        closure_8 = tmp31;
        if (0 === c7) {
          c10 = 3;
          throw tmp31;
        } else {
          c9 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
let closure_6 = ChannelPermissionOverwriteEditStore2.getChannelPermissionOverwriteResourceKey;
let closure_7 = 0;
const set = new Set();
const result = size.fileFinishedImporting("modules/channel_permissions/ChannelPermissionOverwriteEditActionCreators.tsx");

export function updateChannelPermissionOverwrite(value) {
  let channelId;
  let flag;
  let overwriteId;
  let validate;
  function runEditValidation() {
    return obj(...arguments);
  }
  ({ channelId, overwriteId, flag, validate } = value);
  value = value.value;
  const channel = ChannelStore.getChannel(channelId);
  if (null != channel) {
    const obj3 = ChannelPermissionOverwriteEditUtils;
    if (null != obj3.getChannelPermissionOverwrite(channel, overwriteId)) {
      closure_7 = tmp14 + 1;
      const _String = String;
      const StringResult = String(flag);
      const obj2 = { type: "CHANNEL_PERMISSION_OVERWRITE_EDIT_START", channelId, overwriteId, flag, value, editId: +closure_7, ready: null == validate };
      const obj4 = DispatcherDefault;
      obj4.dispatch(obj2);
      if (null != validate) {
        const obj5 = { flagKey: StringResult, editId: +closure_7 };
        runEditValidation(channelId, overwriteId, obj5, validate);
      } else {
        const tmp3 = closure_6(channelId, overwriteId);
        obj = set;
        if (!set.has(tmp3)) {
          obj.add(tmp3);
          (function runEditDrain() {
            return obj(...arguments);
          })(channelId, overwriteId, tmp3);
        }
      }
    }
  }
}
