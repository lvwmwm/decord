// Module ID: 164
// Function ID: 2476
// Name: _construct
// Dependencies: [165, 19]

// Module 164 (_construct)

export default function _construct(bind) {
  if (require(165) /* _isNativeReflectConstruct */()) {
    const _Reflect = Reflect;
    return construct(...arguments);
  } else {
    const items = [null];
    const push = items.push;
    push.apply(items, arg1);
    bind = bind.bind;
    let applyResult1 = bind.apply(bind, items);
    const prototype = applyResult1.prototype;
    applyResult1 = new applyResult1();
    if (arg2) {
      require(19) /* _setPrototypeOf */(applyResult1, arg2.prototype);
    }
    return applyResult1;
  }
};
