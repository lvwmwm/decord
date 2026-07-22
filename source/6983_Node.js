// Module ID: 6983
// Function ID: 55848
// Name: Node
// Dependencies: []

// Module 6983 (Node)
class Node {
  constructor(arg0) {
    this.data = global;
    this.left = null;
    this.right = null;
    this.red = true;
    return;
  }
  get_child(arg0) {
    self = this;
    return global ? self.right : self.left;
  }
  set_child(arg0, arg1) {
    self = this;
    if (global) {
      self.right = require;
    } else {
      self.left = require;
    }
    return;
  }
}
class RBTree {
  constructor(arg0) {
    this._root = null;
    this._comparator = global;
    this.size = 0;
    return;
  }
  insert(arg0) {
    self = this;
    if (null === this._root) {
      tmp26 = Node;
      prototype2 = Node.prototype;
      tmp27 = new.target;
      tmp28 = new.target;
      tmp29 = global;
      tmp30 = new Node(global);
      tmp31 = tmp30;
      self._root = tmp30;
      self.size = self.size + 1;
      flag = true;
    } else {
      tmp32 = Node;
      prototype3 = Node.prototype;
      tmp33 = new.target;
      tmp34 = new.target;
      tmp35 = new Node(undefined);
      tmp36 = tmp35;
      ({ _root, _root: tmp35.right } = self);
      flag3 = false;
      num3 = 0;
      flag4 = true;
      flag2 = false;
      num = 0;
      num2 = 0;
      tmp23 = null;
      obj2 = tmp35;
      tmp24 = null;
      while (true) {
        tmp = num;
        if (null === _root) {
          tmp5 = Node;
          prototype = Node.prototype;
          tmp6 = new.target;
          tmp7 = new.target;
          tmp8 = global;
          tmp9 = new Node(global);
          tmp10 = tmp9;
          set_childResult = tmp24.set_child(num, tmp9);
          self.size = self.size + 1;
          flag = true;
          obj = tmp9;
        } else {
          tmp2 = is_red;
          tmp3 = is_red(_root.left);
          if (tmp3) {
            tmp4 = is_red;
            tmp3 = is_red(_root.right);
          }
          flag = flag2;
          obj = _root;
          if (tmp3) {
            _root.red = true;
            _root.left.red = false;
            _root.right.red = false;
            flag = flag2;
            obj = _root;
          }
        }
        tmp12 = is_red;
        tmp13 = obj;
        tmp14 = tmp25;
        if (is_red(obj)) {
          tmp15 = is_red;
          tmp14 = tmp25;
          if (is_red(tmp24)) {
            tmp16 = obj2.right === tmp23;
            if (obj === tmp24.get_child(num2)) {
              tmp19 = single_rotate;
              set_childResult1 = obj2.set_child(tmp16, single_rotate(tmp23, !num2));
              tmp14 = tmp16;
            } else {
              tmp17 = double_rotate;
              set_childResult2 = obj2.set_child(tmp16, double_rotate(tmp23, !num2));
              tmp14 = tmp16;
            }
          }
        }
        _comparatorResult = self._comparator(obj.data, global);
        if (0 === _comparatorResult) {
          break;
        } else {
          tmp22 = _comparatorResult < 0;
          if (null !== tmp23) {
            obj2 = tmp23;
          }
          _root = obj.get_child(tmp22);
          flag2 = flag;
          num = tmp22;
          num2 = tmp;
          tmp23 = tmp24;
          tmp24 = obj;
          tmp25 = tmp14;
          // continue
        }
      }
      self._root = tmp35.right;
    }
    self._root.red = false;
    return flag;
  }
  remove(arg0) {
    self = this;
    if (null === this._root) {
      flag = false;
      return false;
    } else {
      tmp34 = Node;
      prototype = Node.prototype;
      tmp35 = new.target;
      tmp36 = new.target;
      obj5 = new Node(undefined);
      tmp37 = obj5;
      obj5.right = self._root;
      num2 = 1;
      flag2 = true;
      flag3 = false;
      num3 = 0;
      obj3 = obj5;
      tmp27 = null;
      tmp5 = null;
      num = 1;
      obj4 = obj5;
      tmp30 = null;
      tmp31 = null;
      if (null !== require("module_1")) {
        do {
          get_childResult = obj3.get_child(num);
          _comparatorResult = self._comparator(global, get_childResult.data);
          tmp2 = _comparatorResult > 0;
          tmp3 = obj3;
          tmp4 = num;
          if (0 === _comparatorResult) {
            tmp5 = get_childResult;
          }
          tmp6 = closure_1;
          tmp7 = tmp5;
          tmp8 = obj3;
          tmp9 = tmp28;
          tmp10 = tmp29;
          if (!closure_1(get_childResult)) {
            tmp11 = closure_1;
            tmp8 = obj3;
            tmp9 = tmp28;
            tmp10 = tmp29;
            if (!closure_1(get_childResult.get_child(tmp2))) {
              tmp12 = closure_1;
              tmp13 = !tmp2;
              if (closure_1(get_childResult.get_child(tmp13))) {
                tmp24 = closure_2;
                tmp25 = closure_2(get_childResult, tmp2);
                set_childResult = obj3.set_child(num, tmp25);
                tmp8 = tmp25;
                tmp9 = tmp28;
                tmp10 = tmp29;
              } else {
                tmp14 = closure_1;
                tmp8 = obj3;
                tmp9 = tmp28;
                tmp10 = tmp29;
                if (!closure_1(get_childResult.get_child(tmp13))) {
                  tmp15 = !num;
                  get_childResult1 = obj3.get_child(tmp15);
                  tmp8 = obj3;
                  tmp10 = tmp29;
                  tmp9 = get_childResult1;
                  if (null !== get_childResult1) {
                    tmp38 = closure_1;
                    if (!closure_1(get_childResult1.get_child(tmp15))) {
                      tmp16 = closure_1;
                      if (!closure_1(get_childResult1.get_child(num))) {
                        obj3.red = false;
                        get_childResult1.red = true;
                        get_childResult.red = true;
                        tmp8 = obj3;
                        tmp9 = get_childResult1;
                        tmp10 = tmp29;
                      }
                    }
                    tmp17 = tmp27.right === obj3;
                    tmp18 = closure_1;
                    if (closure_1(get_childResult1.get_child(num))) {
                      tmp22 = closure_3;
                      set_childResult1 = tmp27.set_child(tmp17, closure_3(obj3, num));
                    } else {
                      tmp19 = closure_1;
                      if (closure_1(get_childResult1.get_child(tmp15))) {
                        tmp20 = closure_2;
                        set_childResult2 = tmp27.set_child(tmp17, closure_2(obj3, num));
                      }
                    }
                    rect = tmp27.get_child(tmp17);
                    rect.red = true;
                    get_childResult.red = true;
                    rect.left.red = false;
                    rect.right.red = false;
                    tmp8 = obj3;
                    tmp9 = get_childResult1;
                    tmp10 = tmp17;
                  }
                }
              }
            }
          }
          tmp27 = tmp8;
          tmp28 = tmp9;
          tmp29 = tmp10;
          obj3 = get_childResult;
          num = tmp2;
          obj4 = get_childResult;
          tmp30 = tmp8;
          tmp31 = tmp5;
        } while (null !== get_childResult.get_child(tmp2));
      }
      tmp32 = null !== tmp31;
      if (tmp32) {
        tmp31.data = obj4.data;
        ({ set_child, right } = tmp30);
        set_childResult3 = set_child(right === obj4, obj4.get_child(null === obj4.left));
        self.size = self.size - 1;
      }
      self._root = obj5.right;
      if (null !== self._root) {
        self._root.red = false;
      }
      return tmp32;
    }
  }
}
function is_red(left) {
  return null !== left && left.red;
}
function single_rotate(child, arg1) {
  const get_childResult = child.get_child(!arg1);
  child.set_child(!arg1, get_childResult.get_child(arg1));
  get_childResult.set_child(arg1, child);
  child.red = true;
  get_childResult.red = false;
  return get_childResult;
}
function double_rotate(set_child, arg1) {
  set_child.set_child(!arg1, single_rotate(set_child.get_child(!arg1), !arg1));
  return single_rotate(set_child, arg1);
}
let _module = require(dependencyMap[0]);
_module = new _module();
RBTree.prototype = _module;

export default RBTree;
