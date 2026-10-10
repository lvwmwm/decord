// Module ID: 12652
// Function ID: 12653
// Name: SavedMessageHelpers
// Dependencies: [5, 1085, 12653, 12649, 5299, 1126, 12643, 9681, 4809, 5051, 12654, 2]
// Exports: addOrUpdateSavedMessage, removeSavedMessage

// Module 12652 (SavedMessageHelpers)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 12653 */;
import size from "module_2" /* 2 */;

let text;

let hasOwnProperty;
let metroRequire;
let obj = function _addOrUpdateSavedMessage() {
  obj = _asyncToGenerator(async (arg0) => {
    let closure_1;
    let displayToast = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (async (arg0, value) => {
      let upsertSavedMessageResult;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
        try {
          let closure_2;
          let tmp;
          let BookmarkIcon;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              closure_2 = tmp4;
              displayToast = undefined;
              displayToast = displayToast.displayToast;
              tmp = Object.assign(displayToast, Object.assign({ displayToast: 0 }));
              text = undefined;
              BookmarkIcon = undefined;
              c3 = 1;
              c4 = 1;
              return { value: "Set", done: true };
            }
          } else if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              c3 = 2;
              c4 = 1;
              const obj4 = closure_130_0(closure_130_2[3]);
              const obj7 = {
                value: upsertSavedMessageResult.catch((error) => {
                          let closure_0;
                          let formatToPlainString;
                          let intl2;
                          let intl4;
                          let intl5;
                          let obj3;
                          let t;
                          let code;
                          if (error != null) {
                            const body = error.body;
                            if (body != null) {
                              code = body.code;
                            }
                          }
                          if (code === constants.TOO_MANY_SAVED_MESSAGES) {
                            closure_0 = tmp6;
                            const obj2 = {
                              title: intl2.string(closure_0(closure_2[5]).t.mlbiZW),
                              body: formatToPlainString(null != closure_1_1.dueAt ? t.Anr1Dg : t["1zVbEG"], obj3),
                              confirmText: intl4.string(closure_0(closure_2[5]).t.BddRzS),
                              cancelText: intl5.string(closure_0(closure_2[5]).t.ZGbTcy),
                              onCancel() {
                                  const showForLaterModal = closure_2_0(closure_2_2[6]).showForLaterModal;
                                  closure_2_0(closure_2_2[6]);
                                  const SavedMessageSortTypes = closure_2_0(closure_2_2[7]).SavedMessageSortTypes;
                                  return showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                                },
                              isDismissable: false
                            };
                            const show = closure_1(closure_2[4]).show;
                            closure_1(closure_2[4]);
                            intl2 = closure_0(closure_2[5]).intl;
                            const intl3 = closure_0(closure_2[5]).intl;
                            formatToPlainString = intl3.formatToPlainString;
                            t = closure_0(closure_2[5]).t;
                            obj3 = { max: null != closure_1_1.dueAt ? closure_2_6 : closure_2_5 };
                            intl4 = tmp10(tmp8[5]).intl;
                            intl5 = tmp10(tmp8[5]).intl;
                            show(obj2);
                            return null;
                          } else {
                            let message;
                            const open = closure_1(closure_2[8]).open;
                            closure_1(closure_2[8]);
                            if (error != null) {
                              const body2 = error.body;
                              if (body2 != null) {
                                message = body2.message;
                              }
                            }
                            if (message == null) {
                              const intl = closure_0(tmp13[5]).intl;
                              message = intl.string(closure_0(tmp13[5]).t.R0RpRX);
                            }
                            obj = { text: message, variant: "critical" };
                            open("SAVED_MESSAGE_CREATE_ERROR", obj);
                            return null;
                          }
                        }),
                done: false
              };
              upsertSavedMessageResult = obj4.upsertSavedMessage(tmp);
              return obj7;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            if (null != value) {
              const tmp46 = displayToast;
              if (tmp46) {
                let stringResult;
                if (null != tmp.dueAt) {
                  const tmp13 = closure_130_0;
                  let intl2 = closure_130_0(closure_130_2[5]).intl;
                  stringResult = intl2.string(closure_130_0(closure_130_2[5]).t.i1IsOy);
                } else {
                  const tmp6 = closure_2;
                  const tmp8 = closure_130_2;
                  let intl = closure_130_0(closure_130_2[5]).intl;
                  const tmp10 = closure_130_2;
                  stringResult = intl.string(closure_130_0(closure_130_2[5]).t.DQjes4);
                }
                text = stringResult;
                if (null != tmp.dueAt) {
                  BookmarkIcon = closure_130_0(closure_130_2[9]).ClockIcon;
                } else {
                  BookmarkIcon = closure_130_0(closure_130_2[10]).BookmarkIcon;
                }
                obj = closure_130_1(closure_130_2[8]);
                const obj9 = { text, icon: BookmarkIcon };
                obj.open("SAVED_MESSAGE_CREATE_SUCCESS", obj9);
              }
            }
            c4 = 3;
            return { value: "IconComponent", done: "+51" };
          }
        } catch (tmp40) {
          c4 = 3;
          throw tmp40;
        }
      }
    })();
    iter.next();
    return iter;
  });
  return obj(...arguments);
};
obj = function _removeSavedMessage() {
  obj = _asyncToGenerator(async (arg0, value) => {
    let c0;
    let c1;
    let deleteSavedMessageResult;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        let closure_2;
        let ClockIcon;
        c4 = 2;
        const tmp4 = text;
        if (0 === text) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_1 = tmp;
            c0 = undefined;
            c1 = undefined;
            ({ displayToast: c0, isReminder: c1 } = closure_0);
            closure_2 = Object.assign(closure_0, Object.assign({ displayToast: 0, isReminder: 0 }));
            ClockIcon = undefined;
            text = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp4) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            const obj4 = closure_130_0(closure_130_2[3]);
            text = 2;
            c4 = 1;
            const obj7 = {
              value: deleteSavedMessageResult.catch((error) => {
                        let message;
                        const open = closure_1_1(closure_1_2[8]).open;
                        closure_1_1(closure_1_2[8]);
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            message = body.message;
                          }
                        }
                        if (message == null) {
                          const intl = closure_1_0(tmp[5]).intl;
                          message = intl.string(closure_1_0(tmp[5]).t.R0RpRX);
                        }
                        open("SAVED_MESSAGE_REMOVE_ERROR", { text: message, variant: "critical" });
                        return null;
                      }),
              done: false
            };
            deleteSavedMessageResult = obj4.deleteSavedMessage(closure_2);
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          if (null != value) {
            const tmp50 = c0;
            if (tmp50) {
              if (null == closure_2.dueAt) {
                let stringResult;
                const tmp7 = c1;
                if (!tmp7) {
                  let intl = closure_130_0(closure_130_2[5]).intl;
                  stringResult = intl.string(closure_130_0(closure_130_2[5]).t["5KOMiV"]);
                }
                text = stringResult;
                if (null == closure_2.dueAt) {
                  const tmp22 = c1;
                  if (!tmp22) {
                    ClockIcon = closure_130_0(closure_130_2[10]).BookmarkIcon;
                  }
                  const obj9 = { text, icon: ClockIcon };
                  obj = closure_130_1(closure_130_2[8]);
                  const openResult = obj.open("SAVED_MESSAGE_REMOVE_SUCCESS", obj9);
                }
                ClockIcon = closure_130_0(closure_130_2[9]).ClockIcon;
              }
              const intl2 = closure_130_0(closure_130_2[5]).intl;
              stringResult = intl2.string(closure_130_0(closure_130_2[5]).t.D0tS02);
            }
          }
          c4 = 3;
          return { value: "IconComponent", done: "+51" };
        }
      } catch (tmp44) {
        c4 = 3;
        throw tmp44;
      }
    }
  });
  return obj(...arguments);
};
const AbortCodes = Constants.AbortCodes;
({ SAVED_BOOKMARKS_MAX: hasOwnProperty, SAVED_REMINDERS_MAX: metroRequire } = SavedMessagesConstants);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export const addOrUpdateSavedMessage = function addOrUpdateSavedMessage() {
  return obj(...arguments);
};
export const removeSavedMessage = function removeSavedMessage() {
  return obj(...arguments);
};
