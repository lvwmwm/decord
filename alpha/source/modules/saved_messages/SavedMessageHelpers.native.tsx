// Module ID: 11140
// Function ID: 11141
// Name: SavedMessageHelpers
// Dependencies: [5, 10171, 1072, 11141, 11137, 5953, 1114, 11131, 10172, 5707, 5735, 11142, 5018, 2]
// Exports: addOrUpdateSavedMessage, removeSavedMessage

// Module 11140 (SavedMessageHelpers)
import Constants from "Constants" /* 1072 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SavedMessagesStore from "SavedMessagesStore" /* 10171 */;
import SavedMessagesConstants from "SavedMessagesConstants" /* 11141 */;
import size from "module_2" /* 2 */;

let text;

let metroImportDefault;
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
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          let tmp;
          let BookmarkIcon;
          c4 = 2;
          if (0 === text) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj3 = { value, done: true };
              return obj3;
            } else {
              displayToast = undefined;
              displayToast = displayToast.displayToast;
              tmp = Object.assign(displayToast, Object.assign({ displayToast: 0 }));
              closure_2 = undefined;
              BookmarkIcon = undefined;
              text = 1;
              c4 = 1;
              return { value: "flexDirection", done: true };
            }
          } else if (1 === text) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              return { value, done: true };
            } else {
              closure_2 = closure_130_4.isMessageReminder(tmp.channelId, tmp.messageId);
              text = 2;
              c4 = 1;
              const obj9 = closure_130_0(closure_130_2[4]);
              const obj6 = {
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
                              title: intl2.string(closure_0(closure_2[6]).t.mlbiZW),
                              body: formatToPlainString(null != closure_1_1.dueAt ? t.Anr1Dg : t["1zVbEG"], obj3),
                              confirmText: intl4.string(closure_0(closure_2[6]).t.BddRzS),
                              cancelText: intl5.string(closure_0(closure_2[6]).t.ZGbTcy),
                              onCancel() {
                                  const showForLaterModal = closure_2_0(closure_2_2[7]).showForLaterModal;
                                  closure_2_0(closure_2_2[7]);
                                  const SavedMessageSortTypes = closure_2_0(closure_2_2[8]).SavedMessageSortTypes;
                                  return showForLaterModal(closure_0 ? SavedMessageSortTypes.REMINDER : SavedMessageSortTypes.BOOKMARK);
                                },
                              isDismissable: false
                            };
                            const show = closure_1(closure_2[5]).show;
                            closure_1(closure_2[5]);
                            intl2 = closure_0(closure_2[6]).intl;
                            const intl3 = closure_0(closure_2[6]).intl;
                            formatToPlainString = intl3.formatToPlainString;
                            t = closure_0(closure_2[6]).t;
                            obj3 = { max: null != closure_1_1.dueAt ? closure_2_7 : closure_2_6 };
                            intl4 = tmp10(tmp8[6]).intl;
                            intl5 = tmp10(tmp8[6]).intl;
                            show(obj2);
                            return null;
                          } else {
                            let message;
                            const open = closure_1(closure_2[9]).open;
                            closure_1(closure_2[9]);
                            if (error != null) {
                              const body2 = error.body;
                              if (body2 != null) {
                                message = body2.message;
                              }
                            }
                            if (message == null) {
                              const intl = closure_0(tmp13[6]).intl;
                              message = intl.string(closure_0(tmp13[6]).t.R0RpRX);
                            }
                            obj = { text: message, variant: "critical" };
                            open("SAVED_MESSAGE_CREATE_ERROR", obj);
                            return null;
                          }
                        }),
                done: false
              };
              upsertSavedMessageResult = obj9.upsertSavedMessage(tmp);
              return obj6;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            return { value, done: true };
          } else {
            if (null != value) {
              let stringResult;
              if (null != tmp.dueAt) {
                let i1IsOy;
                const tmp13 = closure_130_0;
                let intl2 = closure_130_0(closure_130_2[6]).intl;
                const string = intl2.string;
                let t = closure_130_0(closure_130_2[6]).t;
                if (closure_2) {
                  i1IsOy = t.lapk3f;
                } else {
                  i1IsOy = t.i1IsOy;
                }
                stringResult = string(i1IsOy);
              } else {
                const tmp6 = closure_130_0;
                let intl = closure_130_0(closure_130_2[6]).intl;
                const tmp8 = closure_130_0;
                stringResult = intl.string(closure_130_0(closure_130_2[6]).t.DQjes4);
              }
              text = stringResult;
              const tmp20 = displayToast;
              if (tmp20) {
                if (null != tmp.dueAt) {
                  BookmarkIcon = closure_130_0(closure_130_2[10]).ClockIcon;
                } else {
                  BookmarkIcon = closure_130_0(closure_130_2[11]).BookmarkIcon;
                }
                obj = closure_130_1(closure_130_2[9]);
                const obj8 = { text, icon: BookmarkIcon };
                obj.open("SAVED_MESSAGE_CREATE_SUCCESS", obj8);
              } else {
                const AccessibilityAnnouncer = closure_130_0(closure_130_2[12]).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(text, "polite");
              }
            }
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp43) {
          c4 = 3;
          throw tmp43;
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
        return { value: "HermesInternal", done: null };
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
            return { value: "flexDirection", done: true };
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
            const obj4 = closure_130_0(closure_130_2[4]);
            text = 2;
            c4 = 1;
            const obj7 = {
              value: deleteSavedMessageResult.catch((error) => {
                        let message;
                        const open = closure_1_1(closure_1_2[9]).open;
                        closure_1_1(closure_1_2[9]);
                        if (error != null) {
                          const body = error.body;
                          if (body != null) {
                            message = body.message;
                          }
                        }
                        if (message == null) {
                          const intl = closure_1_0(tmp[6]).intl;
                          message = intl.string(closure_1_0(tmp[6]).t.R0RpRX);
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
            if (null == closure_2.dueAt) {
              let stringResult;
              const tmp6 = c1;
              if (!tmp6) {
                let intl = closure_130_0(closure_130_2[6]).intl;
                stringResult = intl.string(closure_130_0(closure_130_2[6]).t["5KOMiV"]);
              }
              text = stringResult;
              const tmp19 = c0;
              if (tmp19) {
                if (null == closure_2.dueAt) {
                  const tmp27 = c1;
                  if (!tmp27) {
                    ClockIcon = closure_130_0(closure_130_2[11]).BookmarkIcon;
                  }
                  const obj9 = { text, icon: ClockIcon };
                  obj = closure_130_1(closure_130_2[9]);
                  const openResult = obj.open("SAVED_MESSAGE_REMOVE_SUCCESS", obj9);
                }
                ClockIcon = closure_130_0(closure_130_2[10]).ClockIcon;
              } else {
                const AccessibilityAnnouncer = closure_130_0(closure_130_2[12]).AccessibilityAnnouncer;
                AccessibilityAnnouncer.announce(text, "polite");
              }
            }
            const intl2 = closure_130_0(closure_130_2[6]).intl;
            stringResult = intl2.string(closure_130_0(closure_130_2[6]).t.D0tS02);
          }
          c4 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp49) {
        c4 = 3;
        throw tmp49;
      }
    }
  });
  return obj(...arguments);
};
const AbortCodes = Constants.AbortCodes;
({ SAVED_BOOKMARKS_MAX: metroRequire, SAVED_REMINDERS_MAX: metroImportDefault } = SavedMessagesConstants);
const result = size.fileFinishedImporting("modules/saved_messages/SavedMessageHelpers.native.tsx");

export function addOrUpdateSavedMessage() {
  return obj(...arguments);
}
export function removeSavedMessage() {
  return obj(...arguments);
}
