// Module ID: 3778
// Function ID: 29297
// Name: _callSuper
// Dependencies: []

// Module 3778 (_callSuper)
function _callSuper(arg0, arg1, arg2) {
  let items = arg2;
  const obj = callback2(arg1);
  if (_isNativeReflectConstruct()) {
    if (!items) {
      items = [];
    }
    let constructResult = Reflect.construct(obj, items, callback2(arg0).constructor);
  } else {
    constructResult = obj.apply(arg0, items);
  }
  return closure_4(arg0, constructResult);
}
function _isNativeReflectConstruct() {
  let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

  }));
  function _isNativeReflectConstruct() {
    return closure_0;
  }
  const result = _isNativeReflectConstruct();
}
let closure_2 = importDefault(dependencyMap[0]);
let closure_3 = importDefault(dependencyMap[1]);
let closure_4 = importDefault(dependencyMap[2]);
let closure_5 = importDefault(dependencyMap[3]);
let closure_6 = importDefault(dependencyMap[4]);
const importDefaultResult = importDefault(dependencyMap[5]);
({ IRREDEEMABLE_PAYMENT_SOURCES: closure_7, PaymentGateways: closure_8, PaymentSourceTypes: closure_9 } = arg1(dependencyMap[6]));
const tmp4 = (importDefaultResult) => {
  class PaymentSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, PaymentSourceRecord);
      tmp2 = closure_28(this, PaymentSourceRecord);
      values = Object.values(closure_9);
      if (values.includes(importDefaultResult.type)) {
        ({ id: tmp2.id, type: tmp2.type, paymentGateway: tmp2.paymentGateway, invalid } = importDefaultResult);
        tmp7 = null;
        tmp2.invalid = null != invalid && invalid;
        billingAddress = importDefaultResult.billingAddress;
        if (null == billingAddress) {
          billingAddress = {};
        }
        tmp2.billingAddress = billingAddress;
        ({ isDefault: tmp2.isDefault, flags } = importDefaultResult);
        num = 0;
        if (null != flags) {
          num = flags;
        }
        tmp2.flags = num;
        country = importDefaultResult.country;
        str2 = "";
        if (null != country) {
          str2 = country;
        }
        tmp2.country = str2;
        tmp2.pixMetadata = importDefaultResult.pixMetadata;
        return tmp2;
      } else {
        _Error = Error;
        _HermesInternal = HermesInternal;
        str = "Unrecognized payment source type ";
        prototype = Error.prototype;
        tmp3 = new.target;
        tmp4 = new.target;
        error = new Error("Unrecognized payment source type " + importDefaultResult.type);
        tmp6 = error;
        throw error;
      }
    }
  }
  const arg1 = PaymentSourceRecord;
  callback3(PaymentSourceRecord, importDefaultResult);
  let obj = {
    key: "hasFlag",
    value(arg0) {
      return PaymentSourceRecord(closure_1[7]).hasFlag(this.flags, arg0);
    }
  };
  const items = [obj, , ];
  obj = {
    key: "paymentMethodCountry",
    get() {
      const self = this;
      if (null != this.country) {
        if ("" !== self.country) {
          let country = self.country;
        }
        return country;
      }
      country = self.billingAddress.country;
    }
  };
  items[1] = obj;
  obj = {
    key: "canRedeemTrial",
    value() {
      return !set.has(this.type);
    }
  };
  items[2] = obj;
  const items1 = [
    {
      key: "createFromServer",
      value(billing_address) {
        billing_address = billing_address.billing_address;
        if (null == billing_address) {
          billing_address = {};
        }
        let obj = { id: billing_address.id, type: billing_address.type, paymentGateway: billing_address.payment_gateway, invalid: billing_address.invalid, isDefault: billing_address.default, billingAddress: obj, country: billing_address.country, flags: billing_address.flags };
        obj = {};
        ({ name: obj3.name, line_1: obj3.line1, line_2: obj3.line2, city: obj3.city, postal_code: obj3.postalCode, state: obj3.state, country: obj3.country } = billing_address);
        let merged;
        if (null != billing_address.pix) {
          const obj1 = { taxId: billing_address.pix.tax_id };
          merged = obj1;
        }
        obj.pixMetadata = merged;
        const type = billing_address.type;
        if (closure_9.CARD === type) {
          merged = ctor;
          const obj2 = {};
          merged = obj2;
          merged = obj;
          merged = Object.assign(obj);
          obj2["brand"] = billing_address.brand;
          obj2["last4"] = billing_address.last_4;
          obj2["expiresMonth"] = billing_address.expires_month;
          obj2["expiresYear"] = billing_address.expires_year;
          const prototype18 = ctor.prototype;
          merged = new.target;
          merged = new.target;
          merged = obj2;
          merged = new ctor(obj2);
          return merged;
        } else {
          merged = closure_9;
          if (closure_9.PAYPAL === type) {
            merged = ctor2;
            const obj3 = {};
            merged = obj3;
            merged = obj;
            merged = Object.assign(obj);
            obj3["email"] = billing_address.email;
            const prototype17 = ctor2.prototype;
            merged = new.target;
            merged = new.target;
            merged = obj3;
            merged = new ctor2(obj3);
            return merged;
          } else {
            merged = closure_9;
            if (closure_9.VENMO === type) {
              merged = ctor12;
              let obj4 = {};
              merged = obj4;
              merged = obj;
              merged = Object.assign(obj);
              obj4["username"] = billing_address.username;
              const prototype16 = ctor12.prototype;
              merged = new.target;
              merged = new.target;
              merged = obj4;
              merged = new ctor12(obj4);
              return merged;
            } else {
              merged = closure_9;
              if (closure_9.SEPA_DEBIT !== type) {
                merged = closure_9;
                if (closure_9.SOFORT !== type) {
                  merged = closure_9;
                  if (closure_9.GIROPAY === type) {
                    merged = ctor4;
                    const obj5 = {};
                    merged = obj5;
                    merged = obj;
                    merged = Object.assign(obj);
                    const prototype14 = ctor4.prototype;
                    merged = new.target;
                    merged = new.target;
                    merged = obj5;
                    merged = new ctor4(obj5);
                    return merged;
                  } else {
                    merged = closure_9;
                    if (closure_9.PRZELEWY24 === type) {
                      merged = ctor5;
                      const obj6 = {};
                      merged = obj6;
                      merged = obj;
                      merged = Object.assign(obj);
                      obj6["email"] = billing_address.email;
                      obj6["bank"] = billing_address.bank;
                      const prototype13 = ctor5.prototype;
                      merged = new.target;
                      merged = new.target;
                      merged = obj6;
                      merged = new ctor5(obj6);
                      return merged;
                    } else {
                      merged = closure_9;
                      if (closure_9.EPS === type) {
                        merged = ctor6;
                        const obj7 = {};
                        merged = obj7;
                        merged = obj;
                        merged = Object.assign(obj);
                        obj7["bank"] = billing_address.bank;
                        const prototype12 = ctor6.prototype;
                        merged = new.target;
                        merged = new.target;
                        merged = obj7;
                        merged = new ctor6(obj7);
                        return merged;
                      } else {
                        merged = closure_9;
                        if (closure_9.PAYSAFE_CARD === type) {
                          const obj8 = {};
                          const merged1 = Object.assign(obj);
                          const prototype11 = ctor8.prototype;
                          merged = new.target;
                          merged = new.target;
                          merged = obj8;
                          merged = new ctor8(obj8);
                          return merged;
                        } else {
                          merged = closure_9;
                          if (closure_9.GCASH === type) {
                            const obj9 = {};
                            const merged2 = Object.assign(obj);
                            const prototype10 = ctor9.prototype;
                            const tmp94 = new ctor9(obj9);
                            return tmp94;
                          } else {
                            merged = closure_9;
                            if (closure_9.GRABPAY_MY === type) {
                              const obj10 = {};
                              const merged3 = Object.assign(obj);
                              const prototype9 = ctor10.prototype;
                              const tmp85 = new ctor10(obj10);
                              return tmp85;
                            } else {
                              merged = closure_9;
                              if (closure_9.MOMO_WALLET === type) {
                                const obj11 = {};
                                const merged4 = Object.assign(obj);
                                const prototype8 = ctor11.prototype;
                                const tmp76 = new ctor11(obj11);
                                return tmp76;
                              } else {
                                merged = closure_9;
                                if (closure_9.KAKAOPAY === type) {
                                  const obj12 = {};
                                  const merged5 = Object.assign(obj);
                                  const prototype7 = ctor13.prototype;
                                  const tmp67 = new ctor13(obj12);
                                  return tmp67;
                                } else {
                                  merged = closure_9;
                                  if (closure_9.GOPAY_WALLET === type) {
                                    const obj13 = {};
                                    const merged6 = Object.assign(obj);
                                    const prototype6 = ctor14.prototype;
                                    const tmp58 = new ctor14(obj13);
                                    return tmp58;
                                  } else {
                                    merged = closure_9;
                                    if (closure_9.BANCONTACT === type) {
                                      const obj14 = {};
                                      const merged7 = Object.assign(obj);
                                      const prototype5 = ctor15.prototype;
                                      const tmp49 = new ctor15(obj14);
                                      return tmp49;
                                    } else {
                                      merged = closure_9;
                                      if (closure_9.IDEAL === type) {
                                        const obj15 = {};
                                        const merged8 = Object.assign(obj);
                                        obj15["bank"] = billing_address.bank;
                                        const prototype4 = ctor7.prototype;
                                        const tmp40 = new ctor7(obj15);
                                        return tmp40;
                                      } else {
                                        merged = closure_9;
                                        if (closure_9.CASH_APP === type) {
                                          const obj16 = {};
                                          const merged9 = Object.assign(obj);
                                          obj16["username"] = billing_address.username;
                                          const prototype3 = ctor16.prototype;
                                          const tmp31 = new ctor16(obj16);
                                          return tmp31;
                                        } else {
                                          merged = closure_9;
                                          if (closure_9.TDS_WALLET === type) {
                                            const obj17 = {};
                                            const merged10 = Object.assign(obj);
                                            const prototype2 = ctor17.prototype;
                                            const tmp22 = new ctor17(obj17);
                                            return tmp22;
                                          } else if (closure_9.PIX === type) {
                                            const obj18 = {};
                                            const merged11 = Object.assign(obj);
                                            obj18["email"] = billing_address.email;
                                            const prototype = ctor18.prototype;
                                            const tmp13 = new ctor18(obj18);
                                            return tmp13;
                                          } else {
                                            obj4 = PaymentSourceRecord(closure_1[8]);
                                            obj4.assertNever(billing_address);
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
                      }
                    }
                  }
                }
              }
              merged = ctor3;
              const obj19 = {};
              merged = obj19;
              merged = obj;
              merged = Object.assign(obj);
              obj19["email"] = billing_address.email;
              const prototype15 = ctor3.prototype;
              merged = new.target;
              merged = new.target;
              merged = obj19;
              merged = new ctor3(obj19);
              return merged;
            }
          }
        }
      }
    },
    {
      key: "createFromSerialized",
      value(type) {
        type = type.type;
        if (closure_9.CARD === type) {
          let tmp = ctor;
          const prototype18 = ctor.prototype;
          tmp = new.target;
          tmp = new.target;
          tmp = type;
          tmp = new ctor(type);
          return tmp;
        } else {
          tmp = closure_9;
          if (closure_9.PAYPAL === type) {
            tmp = ctor2;
            const prototype17 = ctor2.prototype;
            tmp = new.target;
            tmp = new.target;
            tmp = type;
            tmp = new ctor2(type);
            return tmp;
          } else {
            tmp = closure_9;
            if (closure_9.SOFORT !== type) {
              tmp = closure_9;
              if (closure_9.SEPA_DEBIT !== type) {
                tmp = closure_9;
                if (closure_9.GIROPAY === type) {
                  const prototype15 = ctor4.prototype;
                  const tmp93 = new ctor4(type);
                  return tmp93;
                } else {
                  tmp = closure_9;
                  if (closure_9.PRZELEWY24 === type) {
                    const prototype14 = ctor5.prototype;
                    const tmp87 = new ctor5(type);
                    return tmp87;
                  } else {
                    tmp = closure_9;
                    if (closure_9.PAYSAFE_CARD === type) {
                      const prototype13 = ctor8.prototype;
                      const tmp81 = new ctor8(type);
                      return tmp81;
                    } else {
                      tmp = closure_9;
                      if (closure_9.GCASH === type) {
                        const prototype12 = ctor9.prototype;
                        const tmp75 = new ctor9(type);
                        return tmp75;
                      } else {
                        tmp = closure_9;
                        if (closure_9.GRABPAY_MY === type) {
                          const prototype11 = ctor10.prototype;
                          const tmp69 = new ctor10(type);
                          return tmp69;
                        } else {
                          tmp = closure_9;
                          if (closure_9.MOMO_WALLET === type) {
                            const prototype10 = ctor11.prototype;
                            const tmp63 = new ctor11(type);
                            return tmp63;
                          } else {
                            tmp = closure_9;
                            if (closure_9.VENMO === type) {
                              const prototype9 = ctor12.prototype;
                              const tmp57 = new ctor12(type);
                              return tmp57;
                            } else {
                              tmp = closure_9;
                              if (closure_9.KAKAOPAY === type) {
                                const prototype8 = ctor13.prototype;
                                const tmp51 = new ctor13(type);
                                return tmp51;
                              } else {
                                tmp = closure_9;
                                if (closure_9.GOPAY_WALLET === type) {
                                  const prototype7 = ctor14.prototype;
                                  const tmp45 = new ctor14(type);
                                  return tmp45;
                                } else {
                                  tmp = closure_9;
                                  if (closure_9.BANCONTACT === type) {
                                    const prototype6 = ctor15.prototype;
                                    const tmp39 = new ctor15(type);
                                    return tmp39;
                                  } else {
                                    tmp = closure_9;
                                    if (closure_9.EPS === type) {
                                      const prototype5 = ctor6.prototype;
                                      const tmp33 = new ctor6(type);
                                      return tmp33;
                                    } else {
                                      tmp = closure_9;
                                      if (closure_9.IDEAL === type) {
                                        const prototype4 = ctor7.prototype;
                                        const tmp27 = new ctor7(type);
                                        return tmp27;
                                      } else {
                                        tmp = closure_9;
                                        if (closure_9.CASH_APP === type) {
                                          const prototype3 = ctor16.prototype;
                                          const tmp21 = new ctor16(type);
                                          return tmp21;
                                        } else {
                                          tmp = closure_9;
                                          if (closure_9.TDS_WALLET === type) {
                                            const prototype2 = ctor17.prototype;
                                            const tmp15 = new ctor17(type);
                                            return tmp15;
                                          } else {
                                            tmp = closure_9;
                                            if (closure_9.PIX === type) {
                                              const prototype = ctor18.prototype;
                                              const tmp9 = new ctor18(type);
                                              return tmp9;
                                            } else {
                                              PaymentSourceRecord(closure_1[8]).assertNever(type);
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
                        }
                      }
                    }
                  }
                }
              }
            }
            const prototype16 = ctor3.prototype;
            const tmp99 = new ctor3(type);
            tmp = tmp99;
            return tmp99;
          }
        }
      }
    }
  ];
  return callback(PaymentSourceRecord, items, items1);
}(importDefaultResult);
const tmp5 = (arg0) => {
  class CreditCardSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, CreditCardSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, CreditCardSourceRecord, items);
      if (arg0.type !== closure_9.CARD) {
        tmp4 = globalThis;
        _Error = Error;
        tmp5 = closure_9;
        _HermesInternal = HermesInternal;
        str3 = "Cannot instantiate CreditCardSourceRecord with type: ";
        str4 = ", must be ";
        prototype = Error.prototype;
        tmp6 = new.target;
        tmp7 = new.target;
        error = new Error("Cannot instantiate CreditCardSourceRecord with type: " + arg0.type + ", must be " + closure_9.CARD);
        tmp9 = error;
        throw error;
      } else {
        brand = arg0.brand;
        tmp3 = null;
        str = "";
        str2 = "";
        if (null != brand) {
          str2 = brand;
        }
        tmp2.brand = str2;
        last4 = arg0.last4;
        if (null != last4) {
          str = last4;
        }
        tmp2.last4 = str;
        expiresMonth = arg0.expiresMonth;
        num = 0;
        if (null != expiresMonth) {
          num = expiresMonth;
        }
        tmp2.expiresMonth = num;
        expiresYear = arg0.expiresYear;
        num2 = 0;
        if (null != expiresYear) {
          num2 = expiresYear;
        }
        tmp2.expiresYear = num2;
        return tmp2;
      }
    }
  }
  const arg1 = CreditCardSourceRecord;
  callback3(CreditCardSourceRecord, arg0);
  const items = [
    {
      key: "isStripeLinkBankAccount",
      get() {
        let tmp = "link" === this.brand;
        if (tmp) {
          tmp = "0000" === this.last4;
        }
        return tmp;
      }
    }
  ];
  return callback(CreditCardSourceRecord, items);
}(tmp4);
const tmp6 = (arg0) => {
  class PaypalSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, PaypalSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, PaypalSourceRecord, items);
      if (arg0.type !== closure_9.PAYPAL) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate PaypalSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate PaypalSourceRecord with type: " + arg0.type + ", must be " + closure_9.PAYPAL);
        tmp8 = error;
        throw error;
      } else {
        tmp2.email = arg0.email || "";
        return tmp2;
      }
    }
  }
  const arg1 = PaypalSourceRecord;
  callback3(PaypalSourceRecord, arg0);
  return callback(PaypalSourceRecord);
}(tmp4);
const tmp7 = (arg0) => {
  class SofortSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, SofortSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, SofortSourceRecord, items);
      if (arg0.type !== closure_9.SOFORT) {
        tmp3 = closure_9;
        if (arg0.type !== closure_9.SEPA_DEBIT) {
          tmp4 = globalThis;
          _Error = Error;
          tmp5 = closure_9;
          _HermesInternal = HermesInternal;
          str = "Cannot instantiate SofortSourceRecord with type: ";
          str2 = ", must be ";
          str3 = " or ";
          prototype = Error.prototype;
          tmp6 = new.target;
          tmp7 = new.target;
          error = new Error("Cannot instantiate SofortSourceRecord with type: " + arg0.type + ", must be " + closure_9.SOFORT + " or " + closure_9.SEPA_DEBIT);
          tmp9 = error;
          throw error;
        }
      }
      tmp2.email = arg0.email || "";
      return tmp2;
    }
  }
  const arg1 = SofortSourceRecord;
  callback3(SofortSourceRecord, arg0);
  return callback(SofortSourceRecord);
}(tmp4);
const tmp8 = (arg0) => {
  class GiropaySourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, GiropaySourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.GIROPAY) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GiropaySourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GiropaySourceRecord with type: " + arg0.type + ", must be " + closure_9.GIROPAY);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = GiropaySourceRecord;
  callback3(GiropaySourceRecord, arg0);
  return callback(GiropaySourceRecord);
}(tmp4);
const tmp9 = (arg0) => {
  class Przelewy24SourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, Przelewy24SourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, Przelewy24SourceRecord, items);
      if (arg0.type !== closure_9.PRZELEWY24) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate Przelewy24SourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate Przelewy24SourceRecord with type: " + arg0.type + ", must be " + closure_9.PRZELEWY24);
        tmp8 = error;
        throw error;
      } else {
        tmp2.email = arg0.email || "";
        tmp2.bank = arg0.bank;
        return tmp2;
      }
    }
  }
  const arg1 = Przelewy24SourceRecord;
  callback3(Przelewy24SourceRecord, arg0);
  return callback(Przelewy24SourceRecord);
}(tmp4);
const tmp10 = (arg0) => {
  class EPSSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, EPSSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, EPSSourceRecord, items);
      if (arg0.type !== closure_9.EPS) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate EPSSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate EPSSourceRecord with type: " + arg0.type + ", must be " + closure_9.EPS);
        tmp8 = error;
        throw error;
      } else {
        tmp2.bank = arg0.bank;
        return tmp2;
      }
    }
  }
  const arg1 = EPSSourceRecord;
  callback3(EPSSourceRecord, arg0);
  return callback(EPSSourceRecord);
}(tmp4);
const tmp11 = (arg0) => {
  class IdealSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, IdealSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, IdealSourceRecord, items);
      if (arg0.type !== closure_9.IDEAL) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate IdealSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate IdealSourceRecord with type: " + arg0.type + ", must be " + closure_9.IDEAL);
        tmp8 = error;
        throw error;
      } else {
        tmp2.bank = arg0.bank;
        return tmp2;
      }
    }
  }
  const arg1 = IdealSourceRecord;
  callback3(IdealSourceRecord, arg0);
  return callback(IdealSourceRecord);
}(tmp4);
const tmp12 = (arg0) => {
  class PaysafeSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, PaysafeSourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.PAYSAFE_CARD) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate PaysafeSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate PaysafeSourceRecord with type: " + arg0.type + ", must be " + closure_9.PAYSAFE_CARD);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = PaysafeSourceRecord;
  callback3(PaysafeSourceRecord, arg0);
  return callback(PaysafeSourceRecord);
}(tmp4);
const tmp13 = (arg0) => {
  class GcashSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, GcashSourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.GCASH) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GcashSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GcashSourceRecord with type: " + arg0.type + ", must be " + closure_9.GCASH);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = GcashSourceRecord;
  callback3(GcashSourceRecord, arg0);
  return callback(GcashSourceRecord);
}(tmp4);
const tmp14 = (arg0) => {
  class GrabPayMySourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, GrabPayMySourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.GRABPAY_MY) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GrabPayMySourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GrabPayMySourceRecord with type: " + arg0.type + ", must be " + closure_9.GRABPAY_MY);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = GrabPayMySourceRecord;
  callback3(GrabPayMySourceRecord, arg0);
  return callback(GrabPayMySourceRecord);
}(tmp4);
const tmp15 = (arg0) => {
  class MomoWalletSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, MomoWalletSourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.MOMO_WALLET) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate MomoWalletSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate MomoWalletSourceRecord with type: " + arg0.type + ", must be " + closure_9.MOMO_WALLET);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = MomoWalletSourceRecord;
  callback3(MomoWalletSourceRecord, arg0);
  return callback(MomoWalletSourceRecord);
}(tmp4);
const tmp16 = (arg0) => {
  class VenmoSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, VenmoSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, VenmoSourceRecord, items);
      if (arg0.type !== closure_9.VENMO) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate VenmoSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate VenmoSourceRecord with type: " + arg0.type + ", must be " + closure_9.VENMO);
        tmp8 = error;
        throw error;
      } else {
        tmp2.username = arg0.username || "";
        return tmp2;
      }
    }
  }
  const arg1 = VenmoSourceRecord;
  callback3(VenmoSourceRecord, arg0);
  return callback(VenmoSourceRecord);
}(tmp4);
const tmp17 = (arg0) => {
  class KaKaoPaySourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, KaKaoPaySourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.KAKAOPAY) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate KaKaoPaySourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate KaKaoPaySourceRecord with type: " + arg0.type + ", must be " + closure_9.KAKAOPAY);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = KaKaoPaySourceRecord;
  callback3(KaKaoPaySourceRecord, arg0);
  return callback(KaKaoPaySourceRecord);
}(tmp4);
const tmp18 = (arg0) => {
  class GoPayWalletSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, GoPayWalletSourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.GOPAY_WALLET) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate GoPayWalletSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate GoPayWalletSourceRecord with type: " + arg0.type + ", must be " + closure_9.GOPAY_WALLET);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = GoPayWalletSourceRecord;
  callback3(GoPayWalletSourceRecord, arg0);
  return callback(GoPayWalletSourceRecord);
}(tmp4);
const tmp19 = (arg0) => {
  class BancontactSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, BancontactSourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.BANCONTACT) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate BancontactSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate BancontactSourceRecord with type: " + arg0.type + ", must be " + closure_9.BANCONTACT);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = BancontactSourceRecord;
  callback3(BancontactSourceRecord, arg0);
  return callback(BancontactSourceRecord);
}(tmp4);
const tmp20 = (arg0) => {
  class CashAppSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, CashAppSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, CashAppSourceRecord, items);
      if (arg0.type !== closure_9.CASH_APP) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate Cashapp with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate Cashapp with type: " + arg0.type + ", must be " + closure_9.CASH_APP);
        tmp8 = error;
        throw error;
      } else {
        tmp2.username = arg0.username || "";
        return tmp2;
      }
    }
  }
  const arg1 = CashAppSourceRecord;
  callback3(CashAppSourceRecord, arg0);
  return callback(CashAppSourceRecord);
}(tmp4);
const tmp3 = arg1(dependencyMap[6]);
const tmp22 = (arg0) => {
  class TDSWalletSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, TDSWalletSourceRecord);
      [][0] = arg0;
      if (arg0.type !== closure_9.TDS_WALLET) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate TDSWalletSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate TDSWalletSourceRecord with type: " + arg0.type + ", must be " + closure_9.TDS_WALLET);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = TDSWalletSourceRecord;
  callback3(TDSWalletSourceRecord, arg0);
  return callback(TDSWalletSourceRecord);
}(tmp4);
const tmp23 = (arg0) => {
  class PixSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, PixSourceRecord);
      items = [];
      items[0] = arg0;
      tmp2 = closure_28(this, PixSourceRecord, items);
      if (arg0.type !== closure_9.PIX) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate PixSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate PixSourceRecord with type: " + arg0.type + ", must be " + closure_9.PIX);
        tmp8 = error;
        throw error;
      } else {
        tmp2.email = arg0.email;
        return tmp2;
      }
    }
  }
  const arg1 = PixSourceRecord;
  callback3(PixSourceRecord, arg0);
  return callback(PixSourceRecord);
}(tmp4);
const tmp21 = (arg0) => {
  class AppleSourceRecord {
    constructor(arg0) {
      tmp = closure_2(this, AppleSourceRecord);
      arg0.id = "";
      arg0.paymentGateway = closure_8.APPLE_PARTNER;
      arg0.type = closure_9.APPLE;
      arg0.billingAddress = {};
      arg0.country = "";
      arg0.invalid = false;
      arg0.isDefault = false;
      arg0.flags = 0;
      [][0] = arg0;
      if (arg0.type !== closure_9.APPLE) {
        tmp3 = globalThis;
        _Error = Error;
        tmp4 = closure_9;
        _HermesInternal = HermesInternal;
        str = "Cannot instantiate AppleSourceRecord with type: ";
        str2 = ", must be ";
        prototype = Error.prototype;
        tmp5 = new.target;
        tmp6 = new.target;
        error = new Error("Cannot instantiate AppleSourceRecord with type: " + arg0.type + ", must be " + closure_9.APPLE);
        tmp8 = error;
        throw error;
      } else {
        return tmp2;
      }
    }
  }
  const arg1 = AppleSourceRecord;
  callback3(AppleSourceRecord, arg0);
  return callback(AppleSourceRecord);
}(tmp4);
const result = arg1(dependencyMap[9]).fileFinishedImporting("records/PaymentSourceRecord.tsx");

export default tmp4;
export const CreditCardSourceRecord = tmp5;
export const PaypalSourceRecord = tmp6;
export const SofortSourceRecord = tmp7;
export const GiropaySourceRecord = tmp8;
export const Przelewy24SourceRecord = tmp9;
export const EPSSourceRecord = tmp10;
export const IdealSourceRecord = tmp11;
export const PaysafeSourceRecord = tmp12;
export const GcashSourceRecord = tmp13;
export const GrabPayMySourceRecord = tmp14;
export const MomoWalletSourceRecord = tmp15;
export const VenmoSourceRecord = tmp16;
export const KaKaoPaySourceRecord = tmp17;
export const GoPayWalletSourceRecord = tmp18;
export const BancontactSourceRecord = tmp19;
export const CashAppSourceRecord = tmp20;
export const AppleSourceRecord = tmp21;
export const TDSWalletSourceRecord = tmp22;
export const PixSourceRecord = tmp23;
