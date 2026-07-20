// Module ID: 1254
// Function ID: 14106
// Name: _isNativeReflectConstruct
// Dependencies: []

// Module 1254 (_isNativeReflectConstruct)
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
function isRichTextTag(arg0) {
  return "$" === arg0[0];
}
function bindFormatValuesWithBuilder(builder) {
  let length;
  let nodes;
  builder = builder.builder;
  const dependencyMap = builder;
  ({ originalMessage: closure_2, nodes } = builder);
  let closure_3 = nodes;
  ({ locales: closure_4, values: closure_5, dataFormatters: closure_6, formatConfig: closure_7, currentPluralValue: closure_8, keyPrefix: closure_9 } = builder);
  if (1 === nodes.length) {
    if ("string" === typeof nodes[0]) {
      builder.pushLiteralText(nodes[0]);
    }
  }
  let num2 = 0;
  let closure_10 = 0;
  if (0 < nodes.length) {
    do {
      let tmp2 = function _loop() {
        let pushLiteralTextResult = nodes[closure_10];
        if ("string" === typeof pushLiteralTextResult) {
          pushLiteralTextResult = builder;
          pushLiteralTextResult = builder.pushLiteralText(pushLiteralTextResult);
          return 0;
        } else {
          pushLiteralTextResult = pushLiteralTextResult[0];
          pushLiteralTextResult = scale;
          pushLiteralTextResult = builder;
          if (pushLiteralTextResult === scale(builder[6]).FormatJsNodeType.Pound) {
            pushLiteralTextResult = closure_8;
            if ("number" === typeof closure_8) {
              pushLiteralTextResult = closure_6;
              pushLiteralTextResult = closure_8;
              pushLiteralTextResult = builder;
              pushLiteralTextResult = builder.pushLiteralText(closure_6.formatNumber(closure_8));
            }
            return 0;
          } else {
            pushLiteralTextResult = pushLiteralTextResult[1];
            pushLiteralTextResult = closure_5;
            if (!(pushLiteralTextResult in closure_5)) {
              if (!callback(pushLiteralTextResult)) {
                const prototype = ctor.prototype;
                const tmp9 = new ctor(pushLiteralTextResult, closure_2, pushLiteralTextResult);
                throw tmp9;
              }
            }
            if (scale(builder[6]).FormatJsNodeType.Argument === pushLiteralTextResult) {
              pushLiteralTextResult = typeof tmp12;
              if ("object" !== pushLiteralTextResult) {
                if ("function" !== pushLiteralTextResult) {
                  pushLiteralTextResult = builder;
                  pushLiteralTextResult = globalThis;
                  const _String = String;
                  pushLiteralTextResult = builder.pushLiteralText(String(tmp12));
                }
              }
              pushLiteralTextResult = builder;
              pushLiteralTextResult = builder.pushObject(tmp12);
            } else {
              pushLiteralTextResult = scale;
              pushLiteralTextResult = builder;
              if (scale(builder[6]).FormatJsNodeType.Date === pushLiteralTextResult) {
                pushLiteralTextResult = pushLiteralTextResult[2];
                pushLiteralTextResult = ctor;
                if (pushLiteralTextResult in ctor.date) {
                  pushLiteralTextResult = ctor;
                  pushLiteralTextResult = ctor.date[pushLiteralTextResult];
                } else {
                  pushLiteralTextResult = null;
                  if (null != pushLiteralTextResult) {
                    pushLiteralTextResult = scale;
                    pushLiteralTextResult = builder;
                    pushLiteralTextResult = scale(builder[7]).parseDateTimeSkeleton(pushLiteralTextResult);
                  }
                }
                pushLiteralTextResult = builder;
                pushLiteralTextResult = closure_6;
                pushLiteralTextResult = builder.pushLiteralText(closure_6.formatDate(tmp12, pushLiteralTextResult));
              } else {
                pushLiteralTextResult = scale;
                pushLiteralTextResult = builder;
                if (scale(builder[6]).FormatJsNodeType.Time === pushLiteralTextResult) {
                  if (pushLiteralTextResult[2] in ctor.time) {
                    let result = ctor.time[tmp90];
                  } else if (null != tmp90) {
                    result = scale(builder[7]).parseDateTimeSkeleton(tmp90);
                  }
                  builder.pushLiteralText(closure_6.formatTime(tmp12, result));
                } else {
                  pushLiteralTextResult = scale;
                  pushLiteralTextResult = builder;
                  if (scale(builder[6]).FormatJsNodeType.Number === pushLiteralTextResult) {
                    if (pushLiteralTextResult[2] in ctor.number) {
                      let parseNumberSkeletonResult = ctor.number[tmp76];
                    } else if (null != tmp76) {
                      parseNumberSkeletonResult = scale(builder[7]).parseNumberSkeleton(scale(builder[7]).parseNumberSkeletonFromString(tmp76));
                    }
                    let result1 = tmp12;
                    if ("number" === typeof tmp12) {
                      let scale;
                      if (null != parseNumberSkeletonResult) {
                        scale = parseNumberSkeletonResult.scale;
                      }
                      let num8 = 1;
                      if (null !== scale) {
                        num8 = 1;
                        if (undefined !== scale) {
                          num8 = scale;
                        }
                      }
                      result1 = tmp12 * num8;
                    }
                    builder.pushLiteralText(closure_6.formatNumber(result1, parseNumberSkeletonResult));
                  } else {
                    pushLiteralTextResult = scale;
                    pushLiteralTextResult = builder;
                    if (scale(builder[6]).FormatJsNodeType.Tag === pushLiteralTextResult) {
                      let obj = { Builder: builder.constructor, nodes: pushLiteralTextResult[2], locales: closure_4, dataFormatters: closure_6, formatConfig: ctor, values: closure_5, currentPluralValue: closure_8 };
                      const _HermesInternal5 = HermesInternal;
                      obj.keyPrefix = "" + callback + "." + v0;
                      const tmp50 = callback2(obj);
                      if (null != pushLiteralTextResult[3]) {
                        obj = { Builder: builder.constructor, nodes: tmp39, locales: closure_4, dataFormatters: closure_6, formatConfig: ctor, values: closure_5, currentPluralValue: closure_8 };
                        const _HermesInternal6 = HermesInternal;
                        obj.keyPrefix = "" + callback + "." + v0 + "-control";
                        let items = callback2(obj);
                      } else {
                        items = [];
                      }
                      if (callback(pushLiteralTextResult)) {
                        builder.pushRichTextTag(pushLiteralTextResult, tmp50, items);
                      } else if ("function" !== typeof tmp12) {
                        const _HermesInternal7 = HermesInternal;
                        throw "expected a function type for a Tag formatting value, " + pushLiteralTextResult + ". got " + tmp62 + ": " + tmp12;
                      } else {
                        pushLiteralTextResult = callback;
                        pushLiteralTextResult = v0;
                        const _HermesInternal9 = HermesInternal;
                        pushLiteralTextResult = tmp12(tmp50, "" + callback + "." + v0);
                        const _Array = Array;
                        let tmp63 = pushLiteralTextResult;
                        if (!Array.isArray(pushLiteralTextResult)) {
                          const items1 = [pushLiteralTextResult];
                          tmp63 = items1;
                        }
                        for (const item10147 of tmp63) {
                          pushLiteralTextResult = item10147;
                          if ("string" === typeof item10147) {
                            let tmp68 = closure_1;
                            let tmp69 = item10147;
                            let pushLiteralTextResult3 = closure_1.pushLiteralText(pushLiteralTextResult);
                          } else {
                            let tmp65 = closure_1;
                            let tmp66 = item10147;
                            let pushObjectResult = closure_1.pushObject(pushLiteralTextResult);
                          }
                        }
                      }
                    } else {
                      pushLiteralTextResult = scale;
                      pushLiteralTextResult = builder;
                      if (scale(builder[6]).FormatJsNodeType.Select === pushLiteralTextResult) {
                        const tmp24 = tmp12 in pushLiteralTextResult[2] ? pushLiteralTextResult[2][tmp12] : pushLiteralTextResult[2].other;
                        if (null == tmp24) {
                          const _Object2 = Object;
                          const keys = Object.keys(tmp23);
                          const _HermesInternal4 = HermesInternal;
                          throw "" + tmp12 + " is not a known option for select value " + pushLiteralTextResult + ". Valid options are " + keys.join(", ");
                        } else {
                          const obj1 = { builder, nodes: tmp24, locales: closure_4, dataFormatters: closure_6, formatConfig: ctor, values: closure_5 };
                          const _HermesInternal3 = HermesInternal;
                          obj1.keyPrefix = "" + callback + "." + v0;
                          v0(obj1);
                        }
                      } else {
                        pushLiteralTextResult = scale;
                        pushLiteralTextResult = builder;
                        if (scale(builder[6]).FormatJsNodeType.Plural === pushLiteralTextResult) {
                          pushLiteralTextResult = pushLiteralTextResult[2];
                          pushLiteralTextResult = pushLiteralTextResult[3];
                          pushLiteralTextResult = globalThis;
                          const _HermesInternal8 = HermesInternal;
                          pushLiteralTextResult = "=" + tmp12;
                          if (pushLiteralTextResult in pushLiteralTextResult) {
                            let other = pushLiteralTextResult[pushLiteralTextResult];
                          } else {
                            obj = { type: pushLiteralTextResult[4] };
                            const pluralRules = closure_6.getPluralRules(obj);
                            let num = 0;
                            if (null != pushLiteralTextResult) {
                              num = pushLiteralTextResult;
                            }
                            other = pushLiteralTextResult[pluralRules.select(pluralRules, tmp12 - num)];
                            if (null === other) {
                              other = pushLiteralTextResult.other;
                            }
                          }
                          if (null == other) {
                            const _Object = Object;
                            const keys1 = Object.keys(pushLiteralTextResult);
                            const _HermesInternal2 = HermesInternal;
                            throw "" + tmp12 + " is not a known option for plural value " + pushLiteralTextResult + ". Valid options are " + keys1.join(", ");
                          } else {
                            const obj2 = {};
                            pushLiteralTextResult = builder;
                            obj2.builder = builder;
                            obj2.nodes = other;
                            pushLiteralTextResult = closure_4;
                            obj2.locales = closure_4;
                            pushLiteralTextResult = closure_6;
                            obj2.dataFormatters = closure_6;
                            pushLiteralTextResult = ctor;
                            obj2.formatConfig = ctor;
                            pushLiteralTextResult = closure_5;
                            obj2.values = closure_5;
                            let num2 = 0;
                            pushLiteralTextResult = v0;
                            if (null != pushLiteralTextResult) {
                              num2 = pushLiteralTextResult;
                            }
                            obj2.currentPluralValue = tmp12 - num2;
                            const _HermesInternal = HermesInternal;
                            obj2.keyPrefix = "" + callback + "." + v0;
                            result = pushLiteralTextResult(obj2);
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }();
      num2 = num2 + 1;
      closure_10 = num2;
      length = nodes.length;
    } while (num2 < length);
  }
}
function bindFormatValues(arg0) {
  let Builder;
  let currentPluralValue;
  let dataFormatters;
  let formatConfig;
  let keyPrefix;
  let locales;
  let nodes;
  let originalMessage;
  let values;
  ({ Builder, nodes, keyPrefix } = arg0);
  let obj = { keyPrefix };
  ({ originalMessage, locales, dataFormatters, formatConfig, values, currentPluralValue } = arg0);
  const builder = new Builder(obj);
  if ("string" === typeof nodes) {
    builder.pushLiteralText(nodes);
    let finishResult = builder.finish();
  } else {
    obj = { builder, originalMessage, nodes, locales, dataFormatters, formatConfig, values, currentPluralValue, keyPrefix };
    bindFormatValuesWithBuilder(obj);
    finishResult = builder.finish();
  }
  return finishResult;
}
let closure_2 = require(dependencyMap[0]);
let closure_3 = require(dependencyMap[1]);
let closure_4 = require(dependencyMap[2]);
const _module = require(dependencyMap[3]);
const _module1 = require(dependencyMap[4]);
let closure_6 = require(dependencyMap[5]);
class FormatBuilder {
  constructor(arg0) {
    tmp = closure_6(this, FormatBuilder);
    this.context = global;
    return;
  }
}
let closure_7 = (arg0) => {
  class MissingValueError {
    constructor(arg0, arg1, arg2) {
      self = this;
      tmp = closure_6(this, MissingValueError);
      items = [];
      items[0] = "No value for variable '" + arg0 + "' was provided for the localized message '" + arg1 + "'";
      obj = closure_3(MissingValueError);
      tmp2 = closure_2;
      if (closure_8()) {
        _Reflect = Reflect;
        tmp4 = closure_3;
        constructResult = Reflect.construct(obj, items, closure_3(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp2Result = tmp2(self, constructResult);
      tmp2Result.variableName = arg0;
      tmp2Result.originalMessage = arg1;
      tmp2Result.nodeType = arg2;
      return tmp2Result;
    }
  }
  const require = MissingValueError;
  callback(MissingValueError, arg0);
  return _module1(MissingValueError);
}(_module(Error));

export { bindFormatValuesWithBuilder };
export { bindFormatValues };
export const FormatBuilder = _module1(FormatBuilder);
