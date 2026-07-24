// Module ID: 6989
// Function ID: 55919
// Name: Node
// Dependencies: [6988]

// Module 6989 (Node)
import Iterator from "Iterator";

class Node {
  constructor(arg0) {
    this.data = global;
    this.left = null;
    this.right = null;
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
class BinTree {
  constructor(arg0) {
    this._root = null;
    this._comparator = global;
    this.size = 0;
    return;
  }
  insert(arg0) {
    self = this;
    if (null === this._root) {
      tmp13 = Node;
      prototype2 = Node.prototype;
      tmp14 = new.target;
      tmp15 = new.target;
      tmp16 = global;
      tmp17 = new Node(global);
      tmp18 = tmp17;
      self._root = tmp17;
      self.size = self.size + 1;
      flag3 = true;
      return true;
    } else {
      _root = self._root;
      num2 = 0;
      num = 0;
      tmp4 = null;
      tmp = num;
      tmp2 = tmp4;
      while (null !== _root) {
        if (0 === self._comparator(_root.data, global)) {
          flag = false;
          return false;
        } else {
          tmp3 = self._comparator(_root.data, global) < 0;
          num = tmp3;
          tmp4 = _root;
          _root = _root.get_child(tmp3);
          continue;
        }
      }
      tmp5 = Node;
      prototype = Node.prototype;
      tmp6 = new.target;
      tmp7 = new.target;
      tmp8 = global;
      tmp9 = new Node(global);
      tmp10 = tmp9;
      set_childResult = tmp4.set_child(num, tmp9);
      flag2 = true;
      tmp12 = globalThis;
      globalThis.ret = true;
      self.size = self.size + 1;
      return true;
    }
  }
  remove(arg0) {
    self = this;
    if (null === this._root) {
      flag2 = false;
      return false;
    } else {
      tmp8 = Node;
      prototype = Node.prototype;
      tmp9 = new.target;
      tmp10 = new.target;
      obj4 = new Node(undefined);
      tmp11 = obj4;
      obj4.right = self._root;
      num = 1;
      num2 = 0;
      obj2 = obj4;
      tmp4 = null;
      obj3 = obj4;
      tmp5 = null;
      tmp6 = null;
      if (null !== require("module_1")) {
        do {
          get_childResult = obj2.get_child(num);
          _comparatorResult = self._comparator(global, get_childResult.data);
          tmp2 = _comparatorResult > 0;
          tmp3 = obj2;
          if (0 === _comparatorResult) {
            tmp4 = get_childResult;
          }
          obj2 = get_childResult;
          num = tmp2;
          obj3 = get_childResult;
          tmp5 = tmp3;
          tmp6 = tmp4;
        } while (null !== get_childResult.get_child(tmp2));
      }
      flag = null !== tmp6;
      if (flag) {
        tmp6.data = obj3.data;
        ({ set_child, right } = tmp5);
        set_childResult = set_child(right === obj3, obj3.get_child(null === obj3.left));
        self._root = obj4.right;
        self.size = self.size - 1;
        flag = true;
      }
      return flag;
    }
  }
}
Iterator = new Iterator();
BinTree.prototype = Iterator;

export default BinTree;
