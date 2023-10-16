exports.id = 433;
exports.ids = [433];
exports.modules = {

/***/ 57775:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports["default"] = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z' })
  );
};

/***/ }),

/***/ 11515:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

var DEFAULT_SIZE = 24;

exports["default"] = function (_ref) {
  var _ref$fill = _ref.fill,
      fill = _ref$fill === undefined ? 'currentColor' : _ref$fill,
      _ref$width = _ref.width,
      width = _ref$width === undefined ? DEFAULT_SIZE : _ref$width,
      _ref$height = _ref.height,
      height = _ref$height === undefined ? DEFAULT_SIZE : _ref$height,
      _ref$style = _ref.style,
      style = _ref$style === undefined ? {} : _ref$style,
      props = _objectWithoutProperties(_ref, ['fill', 'width', 'height', 'style']);

  return _react2.default.createElement(
    'svg',
    _extends({
      viewBox: '0 0 ' + DEFAULT_SIZE + ' ' + DEFAULT_SIZE,
      style: _extends({ fill: fill, width: width, height: height }, style)
    }, props),
    _react2.default.createElement('path', { d: 'M12,18.17L8.83,15L7.42,16.41L12,21L16.59,16.41L15.17,15M12,5.83L15.17,9L16.58,7.59L12,3L7.41,7.59L8.83,9L12,5.83Z' })
  );
};

/***/ }),

/***/ 5993:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var DataView = getNative(root, 'DataView');

module.exports = DataView;


/***/ }),

/***/ 17446:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var hashClear = __webpack_require__(71309),
    hashDelete = __webpack_require__(32859),
    hashGet = __webpack_require__(13478),
    hashHas = __webpack_require__(14021),
    hashSet = __webpack_require__(25935);

/**
 * Creates a hash object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Hash(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `Hash`.
Hash.prototype.clear = hashClear;
Hash.prototype['delete'] = hashDelete;
Hash.prototype.get = hashGet;
Hash.prototype.has = hashHas;
Hash.prototype.set = hashSet;

module.exports = Hash;


/***/ }),

/***/ 14060:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var listCacheClear = __webpack_require__(88252),
    listCacheDelete = __webpack_require__(21992),
    listCacheGet = __webpack_require__(58758),
    listCacheHas = __webpack_require__(9525),
    listCacheSet = __webpack_require__(40323);

/**
 * Creates an list cache object.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function ListCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `ListCache`.
ListCache.prototype.clear = listCacheClear;
ListCache.prototype['delete'] = listCacheDelete;
ListCache.prototype.get = listCacheGet;
ListCache.prototype.has = listCacheHas;
ListCache.prototype.set = listCacheSet;

module.exports = ListCache;


/***/ }),

/***/ 52586:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var Map = getNative(root, 'Map');

module.exports = Map;


/***/ }),

/***/ 51753:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var mapCacheClear = __webpack_require__(17066),
    mapCacheDelete = __webpack_require__(92106),
    mapCacheGet = __webpack_require__(58728),
    mapCacheHas = __webpack_require__(33772),
    mapCacheSet = __webpack_require__(33577);

/**
 * Creates a map cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function MapCache(entries) {
  var index = -1,
      length = entries == null ? 0 : entries.length;

  this.clear();
  while (++index < length) {
    var entry = entries[index];
    this.set(entry[0], entry[1]);
  }
}

// Add methods to `MapCache`.
MapCache.prototype.clear = mapCacheClear;
MapCache.prototype['delete'] = mapCacheDelete;
MapCache.prototype.get = mapCacheGet;
MapCache.prototype.has = mapCacheHas;
MapCache.prototype.set = mapCacheSet;

module.exports = MapCache;


/***/ }),

/***/ 17203:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var Promise = getNative(root, 'Promise');

module.exports = Promise;


/***/ }),

/***/ 31959:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var Set = getNative(root, 'Set');

module.exports = Set;


/***/ }),

/***/ 8428:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(51753),
    setCacheAdd = __webpack_require__(6599),
    setCacheHas = __webpack_require__(99060);

/**
 *
 * Creates an array cache object to store unique values.
 *
 * @private
 * @constructor
 * @param {Array} [values] The values to cache.
 */
function SetCache(values) {
  var index = -1,
      length = values == null ? 0 : values.length;

  this.__data__ = new MapCache;
  while (++index < length) {
    this.add(values[index]);
  }
}

// Add methods to `SetCache`.
SetCache.prototype.add = SetCache.prototype.push = setCacheAdd;
SetCache.prototype.has = setCacheHas;

module.exports = SetCache;


/***/ }),

/***/ 77381:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(14060),
    stackClear = __webpack_require__(48847),
    stackDelete = __webpack_require__(57083),
    stackGet = __webpack_require__(75353),
    stackHas = __webpack_require__(87109),
    stackSet = __webpack_require__(34202);

/**
 * Creates a stack cache object to store key-value pairs.
 *
 * @private
 * @constructor
 * @param {Array} [entries] The key-value pairs to cache.
 */
function Stack(entries) {
  var data = this.__data__ = new ListCache(entries);
  this.size = data.size;
}

// Add methods to `Stack`.
Stack.prototype.clear = stackClear;
Stack.prototype['delete'] = stackDelete;
Stack.prototype.get = stackGet;
Stack.prototype.has = stackHas;
Stack.prototype.set = stackSet;

module.exports = Stack;


/***/ }),

/***/ 40636:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/** Built-in value references. */
var Symbol = root.Symbol;

module.exports = Symbol;


/***/ }),

/***/ 77388:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/** Built-in value references. */
var Uint8Array = root.Uint8Array;

module.exports = Uint8Array;


/***/ }),

/***/ 56990:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153),
    root = __webpack_require__(90191);

/* Built-in method references that are verified to be native. */
var WeakMap = getNative(root, 'WeakMap');

module.exports = WeakMap;


/***/ }),

/***/ 85753:
/***/ ((module) => {

/**
 * A faster alternative to `Function#apply`, this function invokes `func`
 * with the `this` binding of `thisArg` and the arguments of `args`.
 *
 * @private
 * @param {Function} func The function to invoke.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} args The arguments to invoke `func` with.
 * @returns {*} Returns the result of `func`.
 */
function apply(func, thisArg, args) {
  switch (args.length) {
    case 0: return func.call(thisArg);
    case 1: return func.call(thisArg, args[0]);
    case 2: return func.call(thisArg, args[0], args[1]);
    case 3: return func.call(thisArg, args[0], args[1], args[2]);
  }
  return func.apply(thisArg, args);
}

module.exports = apply;


/***/ }),

/***/ 55256:
/***/ ((module) => {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ 92325:
/***/ ((module) => {

/**
 * A specialized version of `_.filter` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {Array} Returns the new filtered array.
 */
function arrayFilter(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length,
      resIndex = 0,
      result = [];

  while (++index < length) {
    var value = array[index];
    if (predicate(value, index, array)) {
      result[resIndex++] = value;
    }
  }
  return result;
}

module.exports = arrayFilter;


/***/ }),

/***/ 25212:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTimes = __webpack_require__(12490),
    isArguments = __webpack_require__(1767),
    isArray = __webpack_require__(49403),
    isBuffer = __webpack_require__(17424),
    isIndex = __webpack_require__(10006),
    isTypedArray = __webpack_require__(96026);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Creates an array of the enumerable property names of the array-like `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @param {boolean} inherited Specify returning inherited property names.
 * @returns {Array} Returns the array of property names.
 */
function arrayLikeKeys(value, inherited) {
  var isArr = isArray(value),
      isArg = !isArr && isArguments(value),
      isBuff = !isArr && !isArg && isBuffer(value),
      isType = !isArr && !isArg && !isBuff && isTypedArray(value),
      skipIndexes = isArr || isArg || isBuff || isType,
      result = skipIndexes ? baseTimes(value.length, String) : [],
      length = result.length;

  for (var key in value) {
    if ((inherited || hasOwnProperty.call(value, key)) &&
        !(skipIndexes && (
           // Safari 9 has enumerable `arguments.length` in strict mode.
           key == 'length' ||
           // Node.js 0.10 has enumerable non-index properties on buffers.
           (isBuff && (key == 'offset' || key == 'parent')) ||
           // PhantomJS 2 has enumerable non-index properties on typed arrays.
           (isType && (key == 'buffer' || key == 'byteLength' || key == 'byteOffset')) ||
           // Skip index properties.
           isIndex(key, length)
        ))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = arrayLikeKeys;


/***/ }),

/***/ 30517:
/***/ ((module) => {

/**
 * A specialized version of `_.map` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function arrayMap(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length,
      result = Array(length);

  while (++index < length) {
    result[index] = iteratee(array[index], index, array);
  }
  return result;
}

module.exports = arrayMap;


/***/ }),

/***/ 64945:
/***/ ((module) => {

/**
 * Appends the elements of `values` to `array`.
 *
 * @private
 * @param {Array} array The array to modify.
 * @param {Array} values The values to append.
 * @returns {Array} Returns `array`.
 */
function arrayPush(array, values) {
  var index = -1,
      length = values.length,
      offset = array.length;

  while (++index < length) {
    array[offset + index] = values[index];
  }
  return array;
}

module.exports = arrayPush;


/***/ }),

/***/ 95911:
/***/ ((module) => {

/**
 * A specialized version of `_.some` for arrays without support for iteratee
 * shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} predicate The function invoked per iteration.
 * @returns {boolean} Returns `true` if any element passes the predicate check,
 *  else `false`.
 */
function arraySome(array, predicate) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (predicate(array[index], index, array)) {
      return true;
    }
  }
  return false;
}

module.exports = arraySome;


/***/ }),

/***/ 79914:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(63136),
    eq = __webpack_require__(53395);

/**
 * This function is like `assignValue` except that it doesn't assign
 * `undefined` values.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignMergeValue(object, key, value) {
  if ((value !== undefined && !eq(object[key], value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignMergeValue;


/***/ }),

/***/ 93630:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseAssignValue = __webpack_require__(63136),
    eq = __webpack_require__(53395);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Assigns `value` to `key` of `object` if the existing value is not equivalent
 * using [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * for equality comparisons.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function assignValue(object, key, value) {
  var objValue = object[key];
  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
      (value === undefined && !(key in object))) {
    baseAssignValue(object, key, value);
  }
}

module.exports = assignValue;


/***/ }),

/***/ 49762:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(53395);

/**
 * Gets the index at which the `key` is found in `array` of key-value pairs.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {*} key The key to search for.
 * @returns {number} Returns the index of the matched value, else `-1`.
 */
function assocIndexOf(array, key) {
  var length = array.length;
  while (length--) {
    if (eq(array[length][0], key)) {
      return length;
    }
  }
  return -1;
}

module.exports = assocIndexOf;


/***/ }),

/***/ 68077:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    keys = __webpack_require__(65889);

/**
 * The base implementation of `_.assign` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssign(object, source) {
  return object && copyObject(source, keys(source), object);
}

module.exports = baseAssign;


/***/ }),

/***/ 86259:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    keysIn = __webpack_require__(64042);

/**
 * The base implementation of `_.assignIn` without support for multiple sources
 * or `customizer` functions.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @returns {Object} Returns `object`.
 */
function baseAssignIn(object, source) {
  return object && copyObject(source, keysIn(source), object);
}

module.exports = baseAssignIn;


/***/ }),

/***/ 63136:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var defineProperty = __webpack_require__(5258);

/**
 * The base implementation of `assignValue` and `assignMergeValue` without
 * value checks.
 *
 * @private
 * @param {Object} object The object to modify.
 * @param {string} key The key of the property to assign.
 * @param {*} value The value to assign.
 */
function baseAssignValue(object, key, value) {
  if (key == '__proto__' && defineProperty) {
    defineProperty(object, key, {
      'configurable': true,
      'enumerable': true,
      'value': value,
      'writable': true
    });
  } else {
    object[key] = value;
  }
}

module.exports = baseAssignValue;


/***/ }),

/***/ 27748:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    arrayEach = __webpack_require__(55256),
    assignValue = __webpack_require__(93630),
    baseAssign = __webpack_require__(68077),
    baseAssignIn = __webpack_require__(86259),
    cloneBuffer = __webpack_require__(10552),
    copyArray = __webpack_require__(52127),
    copySymbols = __webpack_require__(81684),
    copySymbolsIn = __webpack_require__(798),
    getAllKeys = __webpack_require__(84886),
    getAllKeysIn = __webpack_require__(51944),
    getTag = __webpack_require__(58340),
    initCloneArray = __webpack_require__(43767),
    initCloneByTag = __webpack_require__(77835),
    initCloneObject = __webpack_require__(17086),
    isArray = __webpack_require__(49403),
    isBuffer = __webpack_require__(17424),
    isMap = __webpack_require__(67625),
    isObject = __webpack_require__(99224),
    isSet = __webpack_require__(21185),
    keys = __webpack_require__(65889),
    keysIn = __webpack_require__(64042);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_FLAT_FLAG = 2,
    CLONE_SYMBOLS_FLAG = 4;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values supported by `_.clone`. */
var cloneableTags = {};
cloneableTags[argsTag] = cloneableTags[arrayTag] =
cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
cloneableTags[boolTag] = cloneableTags[dateTag] =
cloneableTags[float32Tag] = cloneableTags[float64Tag] =
cloneableTags[int8Tag] = cloneableTags[int16Tag] =
cloneableTags[int32Tag] = cloneableTags[mapTag] =
cloneableTags[numberTag] = cloneableTags[objectTag] =
cloneableTags[regexpTag] = cloneableTags[setTag] =
cloneableTags[stringTag] = cloneableTags[symbolTag] =
cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
cloneableTags[errorTag] = cloneableTags[funcTag] =
cloneableTags[weakMapTag] = false;

/**
 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
 * traversed objects.
 *
 * @private
 * @param {*} value The value to clone.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Deep clone
 *  2 - Flatten inherited properties
 *  4 - Clone symbols
 * @param {Function} [customizer] The function to customize cloning.
 * @param {string} [key] The key of `value`.
 * @param {Object} [object] The parent object of `value`.
 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
 * @returns {*} Returns the cloned value.
 */
function baseClone(value, bitmask, customizer, key, object, stack) {
  var result,
      isDeep = bitmask & CLONE_DEEP_FLAG,
      isFlat = bitmask & CLONE_FLAT_FLAG,
      isFull = bitmask & CLONE_SYMBOLS_FLAG;

  if (customizer) {
    result = object ? customizer(value, key, object, stack) : customizer(value);
  }
  if (result !== undefined) {
    return result;
  }
  if (!isObject(value)) {
    return value;
  }
  var isArr = isArray(value);
  if (isArr) {
    result = initCloneArray(value);
    if (!isDeep) {
      return copyArray(value, result);
    }
  } else {
    var tag = getTag(value),
        isFunc = tag == funcTag || tag == genTag;

    if (isBuffer(value)) {
      return cloneBuffer(value, isDeep);
    }
    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
      result = (isFlat || isFunc) ? {} : initCloneObject(value);
      if (!isDeep) {
        return isFlat
          ? copySymbolsIn(value, baseAssignIn(result, value))
          : copySymbols(value, baseAssign(result, value));
      }
    } else {
      if (!cloneableTags[tag]) {
        return object ? value : {};
      }
      result = initCloneByTag(value, tag, isDeep);
    }
  }
  // Check for circular references and return its corresponding clone.
  stack || (stack = new Stack);
  var stacked = stack.get(value);
  if (stacked) {
    return stacked;
  }
  stack.set(value, result);

  if (isSet(value)) {
    value.forEach(function(subValue) {
      result.add(baseClone(subValue, bitmask, customizer, subValue, value, stack));
    });
  } else if (isMap(value)) {
    value.forEach(function(subValue, key) {
      result.set(key, baseClone(subValue, bitmask, customizer, key, value, stack));
    });
  }

  var keysFunc = isFull
    ? (isFlat ? getAllKeysIn : getAllKeys)
    : (isFlat ? keysIn : keys);

  var props = isArr ? undefined : keysFunc(value);
  arrayEach(props || value, function(subValue, key) {
    if (props) {
      key = subValue;
      subValue = value[key];
    }
    // Recursively populate clone (susceptible to call stack limits).
    assignValue(result, key, baseClone(subValue, bitmask, customizer, key, value, stack));
  });
  return result;
}

module.exports = baseClone;


/***/ }),

/***/ 96918:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224);

/** Built-in value references. */
var objectCreate = Object.create;

/**
 * The base implementation of `_.create` without support for assigning
 * properties to the created object.
 *
 * @private
 * @param {Object} proto The object to inherit from.
 * @returns {Object} Returns the new object.
 */
var baseCreate = (function() {
  function object() {}
  return function(proto) {
    if (!isObject(proto)) {
      return {};
    }
    if (objectCreate) {
      return objectCreate(proto);
    }
    object.prototype = proto;
    var result = new object;
    object.prototype = undefined;
    return result;
  };
}());

module.exports = baseCreate;


/***/ }),

/***/ 16801:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(82277),
    createBaseEach = __webpack_require__(46821);

/**
 * The base implementation of `_.forEach` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 */
var baseEach = createBaseEach(baseForOwn);

module.exports = baseEach;


/***/ }),

/***/ 95163:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var createBaseFor = __webpack_require__(11982);

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ 82277:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseFor = __webpack_require__(95163),
    keys = __webpack_require__(65889);

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ 78016:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(54783),
    toKey = __webpack_require__(27172);

/**
 * The base implementation of `_.get` without support for default values.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @returns {*} Returns the resolved value.
 */
function baseGet(object, path) {
  path = castPath(path, object);

  var index = 0,
      length = path.length;

  while (object != null && index < length) {
    object = object[toKey(path[index++])];
  }
  return (index && index == length) ? object : undefined;
}

module.exports = baseGet;


/***/ }),

/***/ 66175:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(64945),
    isArray = __webpack_require__(49403);

/**
 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @param {Function} symbolsFunc The function to get the symbols of `object`.
 * @returns {Array} Returns the array of property names and symbols.
 */
function baseGetAllKeys(object, keysFunc, symbolsFunc) {
  var result = keysFunc(object);
  return isArray(object) ? result : arrayPush(result, symbolsFunc(object));
}

module.exports = baseGetAllKeys;


/***/ }),

/***/ 92931:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    getRawTag = __webpack_require__(34995),
    objectToString = __webpack_require__(3637);

/** `Object#toString` result references. */
var nullTag = '[object Null]',
    undefinedTag = '[object Undefined]';

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * The base implementation of `getTag` without fallbacks for buggy environments.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
function baseGetTag(value) {
  if (value == null) {
    return value === undefined ? undefinedTag : nullTag;
  }
  return (symToStringTag && symToStringTag in Object(value))
    ? getRawTag(value)
    : objectToString(value);
}

module.exports = baseGetTag;


/***/ }),

/***/ 19792:
/***/ ((module) => {

/**
 * The base implementation of `_.hasIn` without support for deep paths.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {Array|string} key The key to check.
 * @returns {boolean} Returns `true` if `key` exists, else `false`.
 */
function baseHasIn(object, key) {
  return object != null && key in Object(object);
}

module.exports = baseHasIn;


/***/ }),

/***/ 8066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]';

/**
 * The base implementation of `_.isArguments`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 */
function baseIsArguments(value) {
  return isObjectLike(value) && baseGetTag(value) == argsTag;
}

module.exports = baseIsArguments;


/***/ }),

/***/ 93323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqualDeep = __webpack_require__(84670),
    isObjectLike = __webpack_require__(71338);

/**
 * The base implementation of `_.isEqual` which supports partial comparisons
 * and tracks traversed objects.
 *
 * @private
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @param {boolean} bitmask The bitmask flags.
 *  1 - Unordered comparison
 *  2 - Partial comparison
 * @param {Function} [customizer] The function to customize comparisons.
 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 */
function baseIsEqual(value, other, bitmask, customizer, stack) {
  if (value === other) {
    return true;
  }
  if (value == null || other == null || (!isObjectLike(value) && !isObjectLike(other))) {
    return value !== value && other !== other;
  }
  return baseIsEqualDeep(value, other, bitmask, customizer, baseIsEqual, stack);
}

module.exports = baseIsEqual;


/***/ }),

/***/ 84670:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    equalArrays = __webpack_require__(59284),
    equalByTag = __webpack_require__(39923),
    equalObjects = __webpack_require__(36015),
    getTag = __webpack_require__(58340),
    isArray = __webpack_require__(49403),
    isBuffer = __webpack_require__(17424),
    isTypedArray = __webpack_require__(96026);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    objectTag = '[object Object]';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqual` for arrays and objects which performs
 * deep comparisons and tracks traversed objects enabling objects with circular
 * references to be compared.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function baseIsEqualDeep(object, other, bitmask, customizer, equalFunc, stack) {
  var objIsArr = isArray(object),
      othIsArr = isArray(other),
      objTag = objIsArr ? arrayTag : getTag(object),
      othTag = othIsArr ? arrayTag : getTag(other);

  objTag = objTag == argsTag ? objectTag : objTag;
  othTag = othTag == argsTag ? objectTag : othTag;

  var objIsObj = objTag == objectTag,
      othIsObj = othTag == objectTag,
      isSameTag = objTag == othTag;

  if (isSameTag && isBuffer(object)) {
    if (!isBuffer(other)) {
      return false;
    }
    objIsArr = true;
    objIsObj = false;
  }
  if (isSameTag && !objIsObj) {
    stack || (stack = new Stack);
    return (objIsArr || isTypedArray(object))
      ? equalArrays(object, other, bitmask, customizer, equalFunc, stack)
      : equalByTag(object, other, objTag, bitmask, customizer, equalFunc, stack);
  }
  if (!(bitmask & COMPARE_PARTIAL_FLAG)) {
    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

    if (objIsWrapped || othIsWrapped) {
      var objUnwrapped = objIsWrapped ? object.value() : object,
          othUnwrapped = othIsWrapped ? other.value() : other;

      stack || (stack = new Stack);
      return equalFunc(objUnwrapped, othUnwrapped, bitmask, customizer, stack);
    }
  }
  if (!isSameTag) {
    return false;
  }
  stack || (stack = new Stack);
  return equalObjects(object, other, bitmask, customizer, equalFunc, stack);
}

module.exports = baseIsEqualDeep;


/***/ }),

/***/ 52151:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(58340),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var mapTag = '[object Map]';

/**
 * The base implementation of `_.isMap` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 */
function baseIsMap(value) {
  return isObjectLike(value) && getTag(value) == mapTag;
}

module.exports = baseIsMap;


/***/ }),

/***/ 21798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    baseIsEqual = __webpack_require__(93323);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.isMatch` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to inspect.
 * @param {Object} source The object of property values to match.
 * @param {Array} matchData The property names, values, and compare flags to match.
 * @param {Function} [customizer] The function to customize comparisons.
 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
 */
function baseIsMatch(object, source, matchData, customizer) {
  var index = matchData.length,
      length = index,
      noCustomizer = !customizer;

  if (object == null) {
    return !length;
  }
  object = Object(object);
  while (index--) {
    var data = matchData[index];
    if ((noCustomizer && data[2])
          ? data[1] !== object[data[0]]
          : !(data[0] in object)
        ) {
      return false;
    }
  }
  while (++index < length) {
    data = matchData[index];
    var key = data[0],
        objValue = object[key],
        srcValue = data[1];

    if (noCustomizer && data[2]) {
      if (objValue === undefined && !(key in object)) {
        return false;
      }
    } else {
      var stack = new Stack;
      if (customizer) {
        var result = customizer(objValue, srcValue, key, object, source, stack);
      }
      if (!(result === undefined
            ? baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG, customizer, stack)
            : result
          )) {
        return false;
      }
    }
  }
  return true;
}

module.exports = baseIsMatch;


/***/ }),

/***/ 78979:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(87102),
    isMasked = __webpack_require__(23513),
    isObject = __webpack_require__(99224),
    toSource = __webpack_require__(4285);

/**
 * Used to match `RegExp`
 * [syntax characters](http://ecma-international.org/ecma-262/7.0/#sec-patterns).
 */
var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

/** Used to detect host constructors (Safari). */
var reIsHostCtor = /^\[object .+?Constructor\]$/;

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to detect if a method is native. */
var reIsNative = RegExp('^' +
  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
);

/**
 * The base implementation of `_.isNative` without bad shim checks.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a native function,
 *  else `false`.
 */
function baseIsNative(value) {
  if (!isObject(value) || isMasked(value)) {
    return false;
  }
  var pattern = isFunction(value) ? reIsNative : reIsHostCtor;
  return pattern.test(toSource(value));
}

module.exports = baseIsNative;


/***/ }),

/***/ 64282:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getTag = __webpack_require__(58340),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var setTag = '[object Set]';

/**
 * The base implementation of `_.isSet` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 */
function baseIsSet(value) {
  return isObjectLike(value) && getTag(value) == setTag;
}

module.exports = baseIsSet;


/***/ }),

/***/ 59310:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isLength = __webpack_require__(41610),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var argsTag = '[object Arguments]',
    arrayTag = '[object Array]',
    boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    funcTag = '[object Function]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    objectTag = '[object Object]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    weakMapTag = '[object WeakMap]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/** Used to identify `toStringTag` values of typed arrays. */
var typedArrayTags = {};
typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
typedArrayTags[uint32Tag] = true;
typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
typedArrayTags[errorTag] = typedArrayTags[funcTag] =
typedArrayTags[mapTag] = typedArrayTags[numberTag] =
typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
typedArrayTags[setTag] = typedArrayTags[stringTag] =
typedArrayTags[weakMapTag] = false;

/**
 * The base implementation of `_.isTypedArray` without Node.js optimizations.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 */
function baseIsTypedArray(value) {
  return isObjectLike(value) &&
    isLength(value.length) && !!typedArrayTags[baseGetTag(value)];
}

module.exports = baseIsTypedArray;


/***/ }),

/***/ 26209:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMatches = __webpack_require__(1429),
    baseMatchesProperty = __webpack_require__(33941),
    identity = __webpack_require__(2737),
    isArray = __webpack_require__(49403),
    property = __webpack_require__(48802);

/**
 * The base implementation of `_.iteratee`.
 *
 * @private
 * @param {*} [value=_.identity] The value to convert to an iteratee.
 * @returns {Function} Returns the iteratee.
 */
function baseIteratee(value) {
  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
  if (typeof value == 'function') {
    return value;
  }
  if (value == null) {
    return identity;
  }
  if (typeof value == 'object') {
    return isArray(value)
      ? baseMatchesProperty(value[0], value[1])
      : baseMatches(value);
  }
  return property(value);
}

module.exports = baseIteratee;


/***/ }),

/***/ 80907:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isPrototype = __webpack_require__(83225),
    nativeKeys = __webpack_require__(11704);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keys` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeys(object) {
  if (!isPrototype(object)) {
    return nativeKeys(object);
  }
  var result = [];
  for (var key in Object(object)) {
    if (hasOwnProperty.call(object, key) && key != 'constructor') {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeys;


/***/ }),

/***/ 68071:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224),
    isPrototype = __webpack_require__(83225),
    nativeKeysIn = __webpack_require__(99493);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * The base implementation of `_.keysIn` which doesn't treat sparse arrays as dense.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function baseKeysIn(object) {
  if (!isObject(object)) {
    return nativeKeysIn(object);
  }
  var isProto = isPrototype(object),
      result = [];

  for (var key in object) {
    if (!(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
      result.push(key);
    }
  }
  return result;
}

module.exports = baseKeysIn;


/***/ }),

/***/ 46324:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseEach = __webpack_require__(16801),
    isArrayLike = __webpack_require__(20058);

/**
 * The base implementation of `_.map` without support for iteratee shorthands.
 *
 * @private
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 */
function baseMap(collection, iteratee) {
  var index = -1,
      result = isArrayLike(collection) ? Array(collection.length) : [];

  baseEach(collection, function(value, key, collection) {
    result[++index] = iteratee(value, key, collection);
  });
  return result;
}

module.exports = baseMap;


/***/ }),

/***/ 1429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMatch = __webpack_require__(21798),
    getMatchData = __webpack_require__(87225),
    matchesStrictComparable = __webpack_require__(11313);

/**
 * The base implementation of `_.matches` which doesn't clone `source`.
 *
 * @private
 * @param {Object} source The object of property values to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatches(source) {
  var matchData = getMatchData(source);
  if (matchData.length == 1 && matchData[0][2]) {
    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
  }
  return function(object) {
    return object === source || baseIsMatch(object, source, matchData);
  };
}

module.exports = baseMatches;


/***/ }),

/***/ 33941:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsEqual = __webpack_require__(93323),
    get = __webpack_require__(73999),
    hasIn = __webpack_require__(44637),
    isKey = __webpack_require__(44241),
    isStrictComparable = __webpack_require__(73231),
    matchesStrictComparable = __webpack_require__(11313),
    toKey = __webpack_require__(27172);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
 *
 * @private
 * @param {string} path The path of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function baseMatchesProperty(path, srcValue) {
  if (isKey(path) && isStrictComparable(srcValue)) {
    return matchesStrictComparable(toKey(path), srcValue);
  }
  return function(object) {
    var objValue = get(object, path);
    return (objValue === undefined && objValue === srcValue)
      ? hasIn(object, path)
      : baseIsEqual(srcValue, objValue, COMPARE_PARTIAL_FLAG | COMPARE_UNORDERED_FLAG);
  };
}

module.exports = baseMatchesProperty;


/***/ }),

/***/ 33305:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Stack = __webpack_require__(77381),
    assignMergeValue = __webpack_require__(79914),
    baseFor = __webpack_require__(95163),
    baseMergeDeep = __webpack_require__(53258),
    isObject = __webpack_require__(99224),
    keysIn = __webpack_require__(64042),
    safeGet = __webpack_require__(69017);

/**
 * The base implementation of `_.merge` without support for multiple sources.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} [customizer] The function to customize merged values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMerge(object, source, srcIndex, customizer, stack) {
  if (object === source) {
    return;
  }
  baseFor(source, function(srcValue, key) {
    stack || (stack = new Stack);
    if (isObject(srcValue)) {
      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
    }
    else {
      var newValue = customizer
        ? customizer(safeGet(object, key), srcValue, (key + ''), object, source, stack)
        : undefined;

      if (newValue === undefined) {
        newValue = srcValue;
      }
      assignMergeValue(object, key, newValue);
    }
  }, keysIn);
}

module.exports = baseMerge;


/***/ }),

/***/ 53258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignMergeValue = __webpack_require__(79914),
    cloneBuffer = __webpack_require__(10552),
    cloneTypedArray = __webpack_require__(78008),
    copyArray = __webpack_require__(52127),
    initCloneObject = __webpack_require__(17086),
    isArguments = __webpack_require__(1767),
    isArray = __webpack_require__(49403),
    isArrayLikeObject = __webpack_require__(94713),
    isBuffer = __webpack_require__(17424),
    isFunction = __webpack_require__(87102),
    isObject = __webpack_require__(99224),
    isPlainObject = __webpack_require__(7997),
    isTypedArray = __webpack_require__(96026),
    safeGet = __webpack_require__(69017),
    toPlainObject = __webpack_require__(74618);

/**
 * A specialized version of `baseMerge` for arrays and objects which performs
 * deep merges and tracks traversed objects enabling objects with circular
 * references to be merged.
 *
 * @private
 * @param {Object} object The destination object.
 * @param {Object} source The source object.
 * @param {string} key The key of the value to merge.
 * @param {number} srcIndex The index of `source`.
 * @param {Function} mergeFunc The function to merge values.
 * @param {Function} [customizer] The function to customize assigned values.
 * @param {Object} [stack] Tracks traversed source values and their merged
 *  counterparts.
 */
function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
  var objValue = safeGet(object, key),
      srcValue = safeGet(source, key),
      stacked = stack.get(srcValue);

  if (stacked) {
    assignMergeValue(object, key, stacked);
    return;
  }
  var newValue = customizer
    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
    : undefined;

  var isCommon = newValue === undefined;

  if (isCommon) {
    var isArr = isArray(srcValue),
        isBuff = !isArr && isBuffer(srcValue),
        isTyped = !isArr && !isBuff && isTypedArray(srcValue);

    newValue = srcValue;
    if (isArr || isBuff || isTyped) {
      if (isArray(objValue)) {
        newValue = objValue;
      }
      else if (isArrayLikeObject(objValue)) {
        newValue = copyArray(objValue);
      }
      else if (isBuff) {
        isCommon = false;
        newValue = cloneBuffer(srcValue, true);
      }
      else if (isTyped) {
        isCommon = false;
        newValue = cloneTypedArray(srcValue, true);
      }
      else {
        newValue = [];
      }
    }
    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
      newValue = objValue;
      if (isArguments(objValue)) {
        newValue = toPlainObject(objValue);
      }
      else if (!isObject(objValue) || isFunction(objValue)) {
        newValue = initCloneObject(srcValue);
      }
    }
    else {
      isCommon = false;
    }
  }
  if (isCommon) {
    // Recursively merge objects and arrays (susceptible to call stack limits).
    stack.set(srcValue, newValue);
    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
    stack['delete'](srcValue);
  }
  assignMergeValue(object, key, newValue);
}

module.exports = baseMergeDeep;


/***/ }),

/***/ 28452:
/***/ ((module) => {

/**
 * The base implementation of `_.property` without support for deep paths.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function baseProperty(key) {
  return function(object) {
    return object == null ? undefined : object[key];
  };
}

module.exports = baseProperty;


/***/ }),

/***/ 27757:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(78016);

/**
 * A specialized version of `baseProperty` which supports deep paths.
 *
 * @private
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyDeep(path) {
  return function(object) {
    return baseGet(object, path);
  };
}

module.exports = basePropertyDeep;


/***/ }),

/***/ 6160:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(2737),
    overRest = __webpack_require__(51340),
    setToString = __webpack_require__(67572);

/**
 * The base implementation of `_.rest` which doesn't validate or coerce arguments.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @returns {Function} Returns the new function.
 */
function baseRest(func, start) {
  return setToString(overRest(func, start, identity), func + '');
}

module.exports = baseRest;


/***/ }),

/***/ 44344:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var constant = __webpack_require__(8500),
    defineProperty = __webpack_require__(5258),
    identity = __webpack_require__(2737);

/**
 * The base implementation of `setToString` without support for hot loop shorting.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var baseSetToString = !defineProperty ? identity : function(func, string) {
  return defineProperty(func, 'toString', {
    'configurable': true,
    'enumerable': false,
    'value': constant(string),
    'writable': true
  });
};

module.exports = baseSetToString;


/***/ }),

/***/ 12490:
/***/ ((module) => {

/**
 * The base implementation of `_.times` without support for iteratee shorthands
 * or max array length checks.
 *
 * @private
 * @param {number} n The number of times to invoke `iteratee`.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns the array of results.
 */
function baseTimes(n, iteratee) {
  var index = -1,
      result = Array(n);

  while (++index < n) {
    result[index] = iteratee(index);
  }
  return result;
}

module.exports = baseTimes;


/***/ }),

/***/ 498:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    arrayMap = __webpack_require__(30517),
    isArray = __webpack_require__(49403),
    isSymbol = __webpack_require__(79910);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isArray(value)) {
    // Recursively convert values (susceptible to call stack limits).
    return arrayMap(value, baseToString) + '';
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = baseToString;


/***/ }),

/***/ 68220:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var trimmedEndIndex = __webpack_require__(15599);

/** Used to match leading whitespace. */
var reTrimStart = /^\s+/;

/**
 * The base implementation of `_.trim`.
 *
 * @private
 * @param {string} string The string to trim.
 * @returns {string} Returns the trimmed string.
 */
function baseTrim(string) {
  return string
    ? string.slice(0, trimmedEndIndex(string) + 1).replace(reTrimStart, '')
    : string;
}

module.exports = baseTrim;


/***/ }),

/***/ 96571:
/***/ ((module) => {

/**
 * The base implementation of `_.unary` without support for storing metadata.
 *
 * @private
 * @param {Function} func The function to cap arguments for.
 * @returns {Function} Returns the new capped function.
 */
function baseUnary(func) {
  return function(value) {
    return func(value);
  };
}

module.exports = baseUnary;


/***/ }),

/***/ 57163:
/***/ ((module) => {

/**
 * Checks if a `cache` value for `key` exists.
 *
 * @private
 * @param {Object} cache The cache to query.
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function cacheHas(cache, key) {
  return cache.has(key);
}

module.exports = cacheHas;


/***/ }),

/***/ 69301:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var identity = __webpack_require__(2737);

/**
 * Casts `value` to `identity` if it's not a function.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {Function} Returns cast function.
 */
function castFunction(value) {
  return typeof value == 'function' ? value : identity;
}

module.exports = castFunction;


/***/ }),

/***/ 54783:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(49403),
    isKey = __webpack_require__(44241),
    stringToPath = __webpack_require__(33348),
    toString = __webpack_require__(97885);

/**
 * Casts `value` to a path array if it's not one.
 *
 * @private
 * @param {*} value The value to inspect.
 * @param {Object} [object] The object to query keys on.
 * @returns {Array} Returns the cast property path array.
 */
function castPath(value, object) {
  if (isArray(value)) {
    return value;
  }
  return isKey(value, object) ? [value] : stringToPath(toString(value));
}

module.exports = castPath;


/***/ }),

/***/ 83066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Uint8Array = __webpack_require__(77388);

/**
 * Creates a clone of `arrayBuffer`.
 *
 * @private
 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
 * @returns {ArrayBuffer} Returns the cloned array buffer.
 */
function cloneArrayBuffer(arrayBuffer) {
  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
  return result;
}

module.exports = cloneArrayBuffer;


/***/ }),

/***/ 10552:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(90191);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined,
    allocUnsafe = Buffer ? Buffer.allocUnsafe : undefined;

/**
 * Creates a clone of  `buffer`.
 *
 * @private
 * @param {Buffer} buffer The buffer to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Buffer} Returns the cloned buffer.
 */
function cloneBuffer(buffer, isDeep) {
  if (isDeep) {
    return buffer.slice();
  }
  var length = buffer.length,
      result = allocUnsafe ? allocUnsafe(length) : new buffer.constructor(length);

  buffer.copy(result);
  return result;
}

module.exports = cloneBuffer;


/***/ }),

/***/ 15306:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(83066);

/**
 * Creates a clone of `dataView`.
 *
 * @private
 * @param {Object} dataView The data view to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned data view.
 */
function cloneDataView(dataView, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
}

module.exports = cloneDataView;


/***/ }),

/***/ 35107:
/***/ ((module) => {

/** Used to match `RegExp` flags from their coerced string values. */
var reFlags = /\w*$/;

/**
 * Creates a clone of `regexp`.
 *
 * @private
 * @param {Object} regexp The regexp to clone.
 * @returns {Object} Returns the cloned regexp.
 */
function cloneRegExp(regexp) {
  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
  result.lastIndex = regexp.lastIndex;
  return result;
}

module.exports = cloneRegExp;


/***/ }),

/***/ 57424:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636);

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * Creates a clone of the `symbol` object.
 *
 * @private
 * @param {Object} symbol The symbol object to clone.
 * @returns {Object} Returns the cloned symbol object.
 */
function cloneSymbol(symbol) {
  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
}

module.exports = cloneSymbol;


/***/ }),

/***/ 78008:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(83066);

/**
 * Creates a clone of `typedArray`.
 *
 * @private
 * @param {Object} typedArray The typed array to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the cloned typed array.
 */
function cloneTypedArray(typedArray, isDeep) {
  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
}

module.exports = cloneTypedArray;


/***/ }),

/***/ 52127:
/***/ ((module) => {

/**
 * Copies the values of `source` to `array`.
 *
 * @private
 * @param {Array} source The array to copy values from.
 * @param {Array} [array=[]] The array to copy values to.
 * @returns {Array} Returns `array`.
 */
function copyArray(source, array) {
  var index = -1,
      length = source.length;

  array || (array = Array(length));
  while (++index < length) {
    array[index] = source[index];
  }
  return array;
}

module.exports = copyArray;


/***/ }),

/***/ 26403:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assignValue = __webpack_require__(93630),
    baseAssignValue = __webpack_require__(63136);

/**
 * Copies properties of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy properties from.
 * @param {Array} props The property identifiers to copy.
 * @param {Object} [object={}] The object to copy properties to.
 * @param {Function} [customizer] The function to customize copied values.
 * @returns {Object} Returns `object`.
 */
function copyObject(source, props, object, customizer) {
  var isNew = !object;
  object || (object = {});

  var index = -1,
      length = props.length;

  while (++index < length) {
    var key = props[index];

    var newValue = customizer
      ? customizer(object[key], source[key], key, object, source)
      : undefined;

    if (newValue === undefined) {
      newValue = source[key];
    }
    if (isNew) {
      baseAssignValue(object, key, newValue);
    } else {
      assignValue(object, key, newValue);
    }
  }
  return object;
}

module.exports = copyObject;


/***/ }),

/***/ 81684:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    getSymbols = __webpack_require__(96073);

/**
 * Copies own symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbols(source, object) {
  return copyObject(source, getSymbols(source), object);
}

module.exports = copySymbols;


/***/ }),

/***/ 798:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    getSymbolsIn = __webpack_require__(21589);

/**
 * Copies own and inherited symbols of `source` to `object`.
 *
 * @private
 * @param {Object} source The object to copy symbols from.
 * @param {Object} [object={}] The object to copy symbols to.
 * @returns {Object} Returns `object`.
 */
function copySymbolsIn(source, object) {
  return copyObject(source, getSymbolsIn(source), object);
}

module.exports = copySymbolsIn;


/***/ }),

/***/ 56510:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/** Used to detect overreaching core-js shims. */
var coreJsData = root['__core-js_shared__'];

module.exports = coreJsData;


/***/ }),

/***/ 53384:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseRest = __webpack_require__(6160),
    isIterateeCall = __webpack_require__(36685);

/**
 * Creates a function like `_.assign`.
 *
 * @private
 * @param {Function} assigner The function to assign values.
 * @returns {Function} Returns the new assigner function.
 */
function createAssigner(assigner) {
  return baseRest(function(object, sources) {
    var index = -1,
        length = sources.length,
        customizer = length > 1 ? sources[length - 1] : undefined,
        guard = length > 2 ? sources[2] : undefined;

    customizer = (assigner.length > 3 && typeof customizer == 'function')
      ? (length--, customizer)
      : undefined;

    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
      customizer = length < 3 ? undefined : customizer;
      length = 1;
    }
    object = Object(object);
    while (++index < length) {
      var source = sources[index];
      if (source) {
        assigner(object, source, index, customizer);
      }
    }
    return object;
  });
}

module.exports = createAssigner;


/***/ }),

/***/ 46821:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(20058);

/**
 * Creates a `baseEach` or `baseEachRight` function.
 *
 * @private
 * @param {Function} eachFunc The function to iterate over a collection.
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseEach(eachFunc, fromRight) {
  return function(collection, iteratee) {
    if (collection == null) {
      return collection;
    }
    if (!isArrayLike(collection)) {
      return eachFunc(collection, iteratee);
    }
    var length = collection.length,
        index = fromRight ? length : -1,
        iterable = Object(collection);

    while ((fromRight ? index-- : ++index < length)) {
      if (iteratee(iterable[index], index, iterable) === false) {
        break;
      }
    }
    return collection;
  };
}

module.exports = createBaseEach;


/***/ }),

/***/ 11982:
/***/ ((module) => {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ 5258:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153);

var defineProperty = (function() {
  try {
    var func = getNative(Object, 'defineProperty');
    func({}, '', {});
    return func;
  } catch (e) {}
}());

module.exports = defineProperty;


/***/ }),

/***/ 59284:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var SetCache = __webpack_require__(8428),
    arraySome = __webpack_require__(95911),
    cacheHas = __webpack_require__(57163);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/**
 * A specialized version of `baseIsEqualDeep` for arrays with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Array} array The array to compare.
 * @param {Array} other The other array to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `array` and `other` objects.
 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
 */
function equalArrays(array, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      arrLength = array.length,
      othLength = other.length;

  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
    return false;
  }
  // Check that cyclic values are equal.
  var arrStacked = stack.get(array);
  var othStacked = stack.get(other);
  if (arrStacked && othStacked) {
    return arrStacked == other && othStacked == array;
  }
  var index = -1,
      result = true,
      seen = (bitmask & COMPARE_UNORDERED_FLAG) ? new SetCache : undefined;

  stack.set(array, other);
  stack.set(other, array);

  // Ignore non-index properties.
  while (++index < arrLength) {
    var arrValue = array[index],
        othValue = other[index];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, arrValue, index, other, array, stack)
        : customizer(arrValue, othValue, index, array, other, stack);
    }
    if (compared !== undefined) {
      if (compared) {
        continue;
      }
      result = false;
      break;
    }
    // Recursively compare arrays (susceptible to call stack limits).
    if (seen) {
      if (!arraySome(other, function(othValue, othIndex) {
            if (!cacheHas(seen, othIndex) &&
                (arrValue === othValue || equalFunc(arrValue, othValue, bitmask, customizer, stack))) {
              return seen.push(othIndex);
            }
          })) {
        result = false;
        break;
      }
    } else if (!(
          arrValue === othValue ||
            equalFunc(arrValue, othValue, bitmask, customizer, stack)
        )) {
      result = false;
      break;
    }
  }
  stack['delete'](array);
  stack['delete'](other);
  return result;
}

module.exports = equalArrays;


/***/ }),

/***/ 39923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636),
    Uint8Array = __webpack_require__(77388),
    eq = __webpack_require__(53395),
    equalArrays = __webpack_require__(59284),
    mapToArray = __webpack_require__(64250),
    setToArray = __webpack_require__(24663);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1,
    COMPARE_UNORDERED_FLAG = 2;

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    errorTag = '[object Error]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]';

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

/**
 * A specialized version of `baseIsEqualDeep` for comparing objects of
 * the same `toStringTag`.
 *
 * **Note:** This function only supports comparing values with tags of
 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {string} tag The `toStringTag` of the objects to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalByTag(object, other, tag, bitmask, customizer, equalFunc, stack) {
  switch (tag) {
    case dataViewTag:
      if ((object.byteLength != other.byteLength) ||
          (object.byteOffset != other.byteOffset)) {
        return false;
      }
      object = object.buffer;
      other = other.buffer;

    case arrayBufferTag:
      if ((object.byteLength != other.byteLength) ||
          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
        return false;
      }
      return true;

    case boolTag:
    case dateTag:
    case numberTag:
      // Coerce booleans to `1` or `0` and dates to milliseconds.
      // Invalid dates are coerced to `NaN`.
      return eq(+object, +other);

    case errorTag:
      return object.name == other.name && object.message == other.message;

    case regexpTag:
    case stringTag:
      // Coerce regexes to strings and treat strings, primitives and objects,
      // as equal. See http://www.ecma-international.org/ecma-262/7.0/#sec-regexp.prototype.tostring
      // for more details.
      return object == (other + '');

    case mapTag:
      var convert = mapToArray;

    case setTag:
      var isPartial = bitmask & COMPARE_PARTIAL_FLAG;
      convert || (convert = setToArray);

      if (object.size != other.size && !isPartial) {
        return false;
      }
      // Assume cyclic values are equal.
      var stacked = stack.get(object);
      if (stacked) {
        return stacked == other;
      }
      bitmask |= COMPARE_UNORDERED_FLAG;

      // Recursively compare objects (susceptible to call stack limits).
      stack.set(object, other);
      var result = equalArrays(convert(object), convert(other), bitmask, customizer, equalFunc, stack);
      stack['delete'](object);
      return result;

    case symbolTag:
      if (symbolValueOf) {
        return symbolValueOf.call(object) == symbolValueOf.call(other);
      }
  }
  return false;
}

module.exports = equalByTag;


/***/ }),

/***/ 36015:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getAllKeys = __webpack_require__(84886);

/** Used to compose bitmasks for value comparisons. */
var COMPARE_PARTIAL_FLAG = 1;

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * A specialized version of `baseIsEqualDeep` for objects with support for
 * partial deep comparisons.
 *
 * @private
 * @param {Object} object The object to compare.
 * @param {Object} other The other object to compare.
 * @param {number} bitmask The bitmask flags. See `baseIsEqual` for more details.
 * @param {Function} customizer The function to customize comparisons.
 * @param {Function} equalFunc The function to determine equivalents of values.
 * @param {Object} stack Tracks traversed `object` and `other` objects.
 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
 */
function equalObjects(object, other, bitmask, customizer, equalFunc, stack) {
  var isPartial = bitmask & COMPARE_PARTIAL_FLAG,
      objProps = getAllKeys(object),
      objLength = objProps.length,
      othProps = getAllKeys(other),
      othLength = othProps.length;

  if (objLength != othLength && !isPartial) {
    return false;
  }
  var index = objLength;
  while (index--) {
    var key = objProps[index];
    if (!(isPartial ? key in other : hasOwnProperty.call(other, key))) {
      return false;
    }
  }
  // Check that cyclic values are equal.
  var objStacked = stack.get(object);
  var othStacked = stack.get(other);
  if (objStacked && othStacked) {
    return objStacked == other && othStacked == object;
  }
  var result = true;
  stack.set(object, other);
  stack.set(other, object);

  var skipCtor = isPartial;
  while (++index < objLength) {
    key = objProps[index];
    var objValue = object[key],
        othValue = other[key];

    if (customizer) {
      var compared = isPartial
        ? customizer(othValue, objValue, key, other, object, stack)
        : customizer(objValue, othValue, key, object, other, stack);
    }
    // Recursively compare objects (susceptible to call stack limits).
    if (!(compared === undefined
          ? (objValue === othValue || equalFunc(objValue, othValue, bitmask, customizer, stack))
          : compared
        )) {
      result = false;
      break;
    }
    skipCtor || (skipCtor = key == 'constructor');
  }
  if (result && !skipCtor) {
    var objCtor = object.constructor,
        othCtor = other.constructor;

    // Non `Object` object instances with different constructors are not equal.
    if (objCtor != othCtor &&
        ('constructor' in object && 'constructor' in other) &&
        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
      result = false;
    }
  }
  stack['delete'](object);
  stack['delete'](other);
  return result;
}

module.exports = equalObjects;


/***/ }),

/***/ 66356:
/***/ ((module) => {

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

module.exports = freeGlobal;


/***/ }),

/***/ 84886:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(66175),
    getSymbols = __webpack_require__(96073),
    keys = __webpack_require__(65889);

/**
 * Creates an array of own enumerable property names and symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeys(object) {
  return baseGetAllKeys(object, keys, getSymbols);
}

module.exports = getAllKeys;


/***/ }),

/***/ 51944:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetAllKeys = __webpack_require__(66175),
    getSymbolsIn = __webpack_require__(21589),
    keysIn = __webpack_require__(64042);

/**
 * Creates an array of own and inherited enumerable property names and
 * symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names and symbols.
 */
function getAllKeysIn(object) {
  return baseGetAllKeys(object, keysIn, getSymbolsIn);
}

module.exports = getAllKeysIn;


/***/ }),

/***/ 76830:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isKeyable = __webpack_require__(72638);

/**
 * Gets the data for `map`.
 *
 * @private
 * @param {Object} map The map to query.
 * @param {string} key The reference key.
 * @returns {*} Returns the map data.
 */
function getMapData(map, key) {
  var data = map.__data__;
  return isKeyable(key)
    ? data[typeof key == 'string' ? 'string' : 'hash']
    : data.map;
}

module.exports = getMapData;


/***/ }),

/***/ 87225:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isStrictComparable = __webpack_require__(73231),
    keys = __webpack_require__(65889);

/**
 * Gets the property names, values, and compare flags of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the match data of `object`.
 */
function getMatchData(object) {
  var result = keys(object),
      length = result.length;

  while (length--) {
    var key = result[length],
        value = object[key];

    result[length] = [key, value, isStrictComparable(value)];
  }
  return result;
}

module.exports = getMatchData;


/***/ }),

/***/ 69153:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsNative = __webpack_require__(78979),
    getValue = __webpack_require__(14450);

/**
 * Gets the native function at `key` of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the method to get.
 * @returns {*} Returns the function if it's native, else `undefined`.
 */
function getNative(object, key) {
  var value = getValue(object, key);
  return baseIsNative(value) ? value : undefined;
}

module.exports = getNative;


/***/ }),

/***/ 89739:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(14573);

/** Built-in value references. */
var getPrototype = overArg(Object.getPrototypeOf, Object);

module.exports = getPrototype;


/***/ }),

/***/ 34995:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Symbol = __webpack_require__(40636);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/** Built-in value references. */
var symToStringTag = Symbol ? Symbol.toStringTag : undefined;

/**
 * A specialized version of `baseGetTag` which ignores `Symbol.toStringTag` values.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the raw `toStringTag`.
 */
function getRawTag(value) {
  var isOwn = hasOwnProperty.call(value, symToStringTag),
      tag = value[symToStringTag];

  try {
    value[symToStringTag] = undefined;
    var unmasked = true;
  } catch (e) {}

  var result = nativeObjectToString.call(value);
  if (unmasked) {
    if (isOwn) {
      value[symToStringTag] = tag;
    } else {
      delete value[symToStringTag];
    }
  }
  return result;
}

module.exports = getRawTag;


/***/ }),

/***/ 96073:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayFilter = __webpack_require__(92325),
    stubArray = __webpack_require__(26051);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbols = !nativeGetSymbols ? stubArray : function(object) {
  if (object == null) {
    return [];
  }
  object = Object(object);
  return arrayFilter(nativeGetSymbols(object), function(symbol) {
    return propertyIsEnumerable.call(object, symbol);
  });
};

module.exports = getSymbols;


/***/ }),

/***/ 21589:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayPush = __webpack_require__(64945),
    getPrototype = __webpack_require__(89739),
    getSymbols = __webpack_require__(96073),
    stubArray = __webpack_require__(26051);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeGetSymbols = Object.getOwnPropertySymbols;

/**
 * Creates an array of the own and inherited enumerable symbols of `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of symbols.
 */
var getSymbolsIn = !nativeGetSymbols ? stubArray : function(object) {
  var result = [];
  while (object) {
    arrayPush(result, getSymbols(object));
    object = getPrototype(object);
  }
  return result;
};

module.exports = getSymbolsIn;


/***/ }),

/***/ 58340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var DataView = __webpack_require__(5993),
    Map = __webpack_require__(52586),
    Promise = __webpack_require__(17203),
    Set = __webpack_require__(31959),
    WeakMap = __webpack_require__(56990),
    baseGetTag = __webpack_require__(92931),
    toSource = __webpack_require__(4285);

/** `Object#toString` result references. */
var mapTag = '[object Map]',
    objectTag = '[object Object]',
    promiseTag = '[object Promise]',
    setTag = '[object Set]',
    weakMapTag = '[object WeakMap]';

var dataViewTag = '[object DataView]';

/** Used to detect maps, sets, and weakmaps. */
var dataViewCtorString = toSource(DataView),
    mapCtorString = toSource(Map),
    promiseCtorString = toSource(Promise),
    setCtorString = toSource(Set),
    weakMapCtorString = toSource(WeakMap);

/**
 * Gets the `toStringTag` of `value`.
 *
 * @private
 * @param {*} value The value to query.
 * @returns {string} Returns the `toStringTag`.
 */
var getTag = baseGetTag;

// Fallback for data views, maps, sets, and weak maps in IE 11 and promises in Node.js < 6.
if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
    (Map && getTag(new Map) != mapTag) ||
    (Promise && getTag(Promise.resolve()) != promiseTag) ||
    (Set && getTag(new Set) != setTag) ||
    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
  getTag = function(value) {
    var result = baseGetTag(value),
        Ctor = result == objectTag ? value.constructor : undefined,
        ctorString = Ctor ? toSource(Ctor) : '';

    if (ctorString) {
      switch (ctorString) {
        case dataViewCtorString: return dataViewTag;
        case mapCtorString: return mapTag;
        case promiseCtorString: return promiseTag;
        case setCtorString: return setTag;
        case weakMapCtorString: return weakMapTag;
      }
    }
    return result;
  };
}

module.exports = getTag;


/***/ }),

/***/ 14450:
/***/ ((module) => {

/**
 * Gets the value at `key` of `object`.
 *
 * @private
 * @param {Object} [object] The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function getValue(object, key) {
  return object == null ? undefined : object[key];
}

module.exports = getValue;


/***/ }),

/***/ 70013:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var castPath = __webpack_require__(54783),
    isArguments = __webpack_require__(1767),
    isArray = __webpack_require__(49403),
    isIndex = __webpack_require__(10006),
    isLength = __webpack_require__(41610),
    toKey = __webpack_require__(27172);

/**
 * Checks if `path` exists on `object`.
 *
 * @private
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @param {Function} hasFunc The function to check properties.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 */
function hasPath(object, path, hasFunc) {
  path = castPath(path, object);

  var index = -1,
      length = path.length,
      result = false;

  while (++index < length) {
    var key = toKey(path[index]);
    if (!(result = object != null && hasFunc(object, key))) {
      break;
    }
    object = object[key];
  }
  if (result || ++index != length) {
    return result;
  }
  length = object == null ? 0 : object.length;
  return !!length && isLength(length) && isIndex(key, length) &&
    (isArray(object) || isArguments(object));
}

module.exports = hasPath;


/***/ }),

/***/ 71309:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/**
 * Removes all key-value entries from the hash.
 *
 * @private
 * @name clear
 * @memberOf Hash
 */
function hashClear() {
  this.__data__ = nativeCreate ? nativeCreate(null) : {};
  this.size = 0;
}

module.exports = hashClear;


/***/ }),

/***/ 32859:
/***/ ((module) => {

/**
 * Removes `key` and its value from the hash.
 *
 * @private
 * @name delete
 * @memberOf Hash
 * @param {Object} hash The hash to modify.
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function hashDelete(key) {
  var result = this.has(key) && delete this.__data__[key];
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = hashDelete;


/***/ }),

/***/ 13478:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Gets the hash value for `key`.
 *
 * @private
 * @name get
 * @memberOf Hash
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function hashGet(key) {
  var data = this.__data__;
  if (nativeCreate) {
    var result = data[key];
    return result === HASH_UNDEFINED ? undefined : result;
  }
  return hasOwnProperty.call(data, key) ? data[key] : undefined;
}

module.exports = hashGet;


/***/ }),

/***/ 14021:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Checks if a hash value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Hash
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function hashHas(key) {
  var data = this.__data__;
  return nativeCreate ? (data[key] !== undefined) : hasOwnProperty.call(data, key);
}

module.exports = hashHas;


/***/ }),

/***/ 25935:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var nativeCreate = __webpack_require__(65418);

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Sets the hash `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Hash
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the hash instance.
 */
function hashSet(key, value) {
  var data = this.__data__;
  this.size += this.has(key) ? 0 : 1;
  data[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
  return this;
}

module.exports = hashSet;


/***/ }),

/***/ 43767:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/**
 * Initializes an array clone.
 *
 * @private
 * @param {Array} array The array to clone.
 * @returns {Array} Returns the initialized clone.
 */
function initCloneArray(array) {
  var length = array.length,
      result = new array.constructor(length);

  // Add properties assigned by `RegExp#exec`.
  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
    result.index = array.index;
    result.input = array.input;
  }
  return result;
}

module.exports = initCloneArray;


/***/ }),

/***/ 77835:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var cloneArrayBuffer = __webpack_require__(83066),
    cloneDataView = __webpack_require__(15306),
    cloneRegExp = __webpack_require__(35107),
    cloneSymbol = __webpack_require__(57424),
    cloneTypedArray = __webpack_require__(78008);

/** `Object#toString` result references. */
var boolTag = '[object Boolean]',
    dateTag = '[object Date]',
    mapTag = '[object Map]',
    numberTag = '[object Number]',
    regexpTag = '[object RegExp]',
    setTag = '[object Set]',
    stringTag = '[object String]',
    symbolTag = '[object Symbol]';

var arrayBufferTag = '[object ArrayBuffer]',
    dataViewTag = '[object DataView]',
    float32Tag = '[object Float32Array]',
    float64Tag = '[object Float64Array]',
    int8Tag = '[object Int8Array]',
    int16Tag = '[object Int16Array]',
    int32Tag = '[object Int32Array]',
    uint8Tag = '[object Uint8Array]',
    uint8ClampedTag = '[object Uint8ClampedArray]',
    uint16Tag = '[object Uint16Array]',
    uint32Tag = '[object Uint32Array]';

/**
 * Initializes an object clone based on its `toStringTag`.
 *
 * **Note:** This function only supports cloning values with tags of
 * `Boolean`, `Date`, `Error`, `Map`, `Number`, `RegExp`, `Set`, or `String`.
 *
 * @private
 * @param {Object} object The object to clone.
 * @param {string} tag The `toStringTag` of the object to clone.
 * @param {boolean} [isDeep] Specify a deep clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneByTag(object, tag, isDeep) {
  var Ctor = object.constructor;
  switch (tag) {
    case arrayBufferTag:
      return cloneArrayBuffer(object);

    case boolTag:
    case dateTag:
      return new Ctor(+object);

    case dataViewTag:
      return cloneDataView(object, isDeep);

    case float32Tag: case float64Tag:
    case int8Tag: case int16Tag: case int32Tag:
    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
      return cloneTypedArray(object, isDeep);

    case mapTag:
      return new Ctor;

    case numberTag:
    case stringTag:
      return new Ctor(object);

    case regexpTag:
      return cloneRegExp(object);

    case setTag:
      return new Ctor;

    case symbolTag:
      return cloneSymbol(object);
  }
}

module.exports = initCloneByTag;


/***/ }),

/***/ 17086:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseCreate = __webpack_require__(96918),
    getPrototype = __webpack_require__(89739),
    isPrototype = __webpack_require__(83225);

/**
 * Initializes an object clone.
 *
 * @private
 * @param {Object} object The object to clone.
 * @returns {Object} Returns the initialized clone.
 */
function initCloneObject(object) {
  return (typeof object.constructor == 'function' && !isPrototype(object))
    ? baseCreate(getPrototype(object))
    : {};
}

module.exports = initCloneObject;


/***/ }),

/***/ 10006:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/** Used to detect unsigned integer values. */
var reIsUint = /^(?:0|[1-9]\d*)$/;

/**
 * Checks if `value` is a valid array-like index.
 *
 * @private
 * @param {*} value The value to check.
 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
 */
function isIndex(value, length) {
  var type = typeof value;
  length = length == null ? MAX_SAFE_INTEGER : length;

  return !!length &&
    (type == 'number' ||
      (type != 'symbol' && reIsUint.test(value))) &&
        (value > -1 && value % 1 == 0 && value < length);
}

module.exports = isIndex;


/***/ }),

/***/ 36685:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var eq = __webpack_require__(53395),
    isArrayLike = __webpack_require__(20058),
    isIndex = __webpack_require__(10006),
    isObject = __webpack_require__(99224);

/**
 * Checks if the given arguments are from an iteratee call.
 *
 * @private
 * @param {*} value The potential iteratee value argument.
 * @param {*} index The potential iteratee index or key argument.
 * @param {*} object The potential iteratee object argument.
 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
 *  else `false`.
 */
function isIterateeCall(value, index, object) {
  if (!isObject(object)) {
    return false;
  }
  var type = typeof index;
  if (type == 'number'
        ? (isArrayLike(object) && isIndex(index, object.length))
        : (type == 'string' && index in object)
      ) {
    return eq(object[index], value);
  }
  return false;
}

module.exports = isIterateeCall;


/***/ }),

/***/ 44241:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArray = __webpack_require__(49403),
    isSymbol = __webpack_require__(79910);

/** Used to match property names within property paths. */
var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
    reIsPlainProp = /^\w*$/;

/**
 * Checks if `value` is a property name and not a property path.
 *
 * @private
 * @param {*} value The value to check.
 * @param {Object} [object] The object to query keys on.
 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
 */
function isKey(value, object) {
  if (isArray(value)) {
    return false;
  }
  var type = typeof value;
  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
      value == null || isSymbol(value)) {
    return true;
  }
  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
    (object != null && value in Object(object));
}

module.exports = isKey;


/***/ }),

/***/ 72638:
/***/ ((module) => {

/**
 * Checks if `value` is suitable for use as unique object key.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
 */
function isKeyable(value) {
  var type = typeof value;
  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
    ? (value !== '__proto__')
    : (value === null);
}

module.exports = isKeyable;


/***/ }),

/***/ 23513:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var coreJsData = __webpack_require__(56510);

/** Used to detect methods masquerading as native. */
var maskSrcKey = (function() {
  var uid = /[^.]+$/.exec(coreJsData && coreJsData.keys && coreJsData.keys.IE_PROTO || '');
  return uid ? ('Symbol(src)_1.' + uid) : '';
}());

/**
 * Checks if `func` has its source masked.
 *
 * @private
 * @param {Function} func The function to check.
 * @returns {boolean} Returns `true` if `func` is masked, else `false`.
 */
function isMasked(func) {
  return !!maskSrcKey && (maskSrcKey in func);
}

module.exports = isMasked;


/***/ }),

/***/ 83225:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Checks if `value` is likely a prototype object.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
 */
function isPrototype(value) {
  var Ctor = value && value.constructor,
      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

  return value === proto;
}

module.exports = isPrototype;


/***/ }),

/***/ 73231:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224);

/**
 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` if suitable for strict
 *  equality comparisons, else `false`.
 */
function isStrictComparable(value) {
  return value === value && !isObject(value);
}

module.exports = isStrictComparable;


/***/ }),

/***/ 88252:
/***/ ((module) => {

/**
 * Removes all key-value entries from the list cache.
 *
 * @private
 * @name clear
 * @memberOf ListCache
 */
function listCacheClear() {
  this.__data__ = [];
  this.size = 0;
}

module.exports = listCacheClear;


/***/ }),

/***/ 21992:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/** Used for built-in method references. */
var arrayProto = Array.prototype;

/** Built-in value references. */
var splice = arrayProto.splice;

/**
 * Removes `key` and its value from the list cache.
 *
 * @private
 * @name delete
 * @memberOf ListCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function listCacheDelete(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    return false;
  }
  var lastIndex = data.length - 1;
  if (index == lastIndex) {
    data.pop();
  } else {
    splice.call(data, index, 1);
  }
  --this.size;
  return true;
}

module.exports = listCacheDelete;


/***/ }),

/***/ 58758:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/**
 * Gets the list cache value for `key`.
 *
 * @private
 * @name get
 * @memberOf ListCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function listCacheGet(key) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  return index < 0 ? undefined : data[index][1];
}

module.exports = listCacheGet;


/***/ }),

/***/ 9525:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/**
 * Checks if a list cache value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf ListCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function listCacheHas(key) {
  return assocIndexOf(this.__data__, key) > -1;
}

module.exports = listCacheHas;


/***/ }),

/***/ 40323:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var assocIndexOf = __webpack_require__(49762);

/**
 * Sets the list cache `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf ListCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the list cache instance.
 */
function listCacheSet(key, value) {
  var data = this.__data__,
      index = assocIndexOf(data, key);

  if (index < 0) {
    ++this.size;
    data.push([key, value]);
  } else {
    data[index][1] = value;
  }
  return this;
}

module.exports = listCacheSet;


/***/ }),

/***/ 17066:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var Hash = __webpack_require__(17446),
    ListCache = __webpack_require__(14060),
    Map = __webpack_require__(52586);

/**
 * Removes all key-value entries from the map.
 *
 * @private
 * @name clear
 * @memberOf MapCache
 */
function mapCacheClear() {
  this.size = 0;
  this.__data__ = {
    'hash': new Hash,
    'map': new (Map || ListCache),
    'string': new Hash
  };
}

module.exports = mapCacheClear;


/***/ }),

/***/ 92106:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Removes `key` and its value from the map.
 *
 * @private
 * @name delete
 * @memberOf MapCache
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function mapCacheDelete(key) {
  var result = getMapData(this, key)['delete'](key);
  this.size -= result ? 1 : 0;
  return result;
}

module.exports = mapCacheDelete;


/***/ }),

/***/ 58728:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Gets the map value for `key`.
 *
 * @private
 * @name get
 * @memberOf MapCache
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function mapCacheGet(key) {
  return getMapData(this, key).get(key);
}

module.exports = mapCacheGet;


/***/ }),

/***/ 33772:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Checks if a map value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf MapCache
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function mapCacheHas(key) {
  return getMapData(this, key).has(key);
}

module.exports = mapCacheHas;


/***/ }),

/***/ 33577:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getMapData = __webpack_require__(76830);

/**
 * Sets the map `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf MapCache
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the map cache instance.
 */
function mapCacheSet(key, value) {
  var data = getMapData(this, key),
      size = data.size;

  data.set(key, value);
  this.size += data.size == size ? 0 : 1;
  return this;
}

module.exports = mapCacheSet;


/***/ }),

/***/ 64250:
/***/ ((module) => {

/**
 * Converts `map` to its key-value pairs.
 *
 * @private
 * @param {Object} map The map to convert.
 * @returns {Array} Returns the key-value pairs.
 */
function mapToArray(map) {
  var index = -1,
      result = Array(map.size);

  map.forEach(function(value, key) {
    result[++index] = [key, value];
  });
  return result;
}

module.exports = mapToArray;


/***/ }),

/***/ 11313:
/***/ ((module) => {

/**
 * A specialized version of `matchesProperty` for source values suitable
 * for strict equality comparisons, i.e. `===`.
 *
 * @private
 * @param {string} key The key of the property to get.
 * @param {*} srcValue The value to match.
 * @returns {Function} Returns the new spec function.
 */
function matchesStrictComparable(key, srcValue) {
  return function(object) {
    if (object == null) {
      return false;
    }
    return object[key] === srcValue &&
      (srcValue !== undefined || (key in Object(object)));
  };
}

module.exports = matchesStrictComparable;


/***/ }),

/***/ 50817:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoize = __webpack_require__(58885);

/** Used as the maximum memoize cache size. */
var MAX_MEMOIZE_SIZE = 500;

/**
 * A specialized version of `_.memoize` which clears the memoized function's
 * cache when it exceeds `MAX_MEMOIZE_SIZE`.
 *
 * @private
 * @param {Function} func The function to have its output memoized.
 * @returns {Function} Returns the new memoized function.
 */
function memoizeCapped(func) {
  var result = memoize(func, function(key) {
    if (cache.size === MAX_MEMOIZE_SIZE) {
      cache.clear();
    }
    return key;
  });

  var cache = result.cache;
  return result;
}

module.exports = memoizeCapped;


/***/ }),

/***/ 65418:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var getNative = __webpack_require__(69153);

/* Built-in method references that are verified to be native. */
var nativeCreate = getNative(Object, 'create');

module.exports = nativeCreate;


/***/ }),

/***/ 11704:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var overArg = __webpack_require__(14573);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeKeys = overArg(Object.keys, Object);

module.exports = nativeKeys;


/***/ }),

/***/ 99493:
/***/ ((module) => {

/**
 * This function is like
 * [`Object.keys`](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * except that it includes inherited enumerable properties.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 */
function nativeKeysIn(object) {
  var result = [];
  if (object != null) {
    for (var key in Object(object)) {
      result.push(key);
    }
  }
  return result;
}

module.exports = nativeKeysIn;


/***/ }),

/***/ 97952:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var freeGlobal = __webpack_require__(66356);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Detect free variable `process` from Node.js. */
var freeProcess = moduleExports && freeGlobal.process;

/** Used to access faster Node.js helpers. */
var nodeUtil = (function() {
  try {
    // Use `util.types` for Node.js 10+.
    var types = freeModule && freeModule.require && freeModule.require('util').types;

    if (types) {
      return types;
    }

    // Legacy `process.binding('util')` for Node.js < 10.
    return freeProcess && freeProcess.binding && freeProcess.binding('util');
  } catch (e) {}
}());

module.exports = nodeUtil;


/***/ }),

/***/ 3637:
/***/ ((module) => {

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var nativeObjectToString = objectProto.toString;

/**
 * Converts `value` to a string using `Object.prototype.toString`.
 *
 * @private
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 */
function objectToString(value) {
  return nativeObjectToString.call(value);
}

module.exports = objectToString;


/***/ }),

/***/ 14573:
/***/ ((module) => {

/**
 * Creates a unary function that invokes `func` with its argument transformed.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {Function} transform The argument transform.
 * @returns {Function} Returns the new function.
 */
function overArg(func, transform) {
  return function(arg) {
    return func(transform(arg));
  };
}

module.exports = overArg;


/***/ }),

/***/ 51340:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var apply = __webpack_require__(85753);

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max;

/**
 * A specialized version of `baseRest` which transforms the rest array.
 *
 * @private
 * @param {Function} func The function to apply a rest parameter to.
 * @param {number} [start=func.length-1] The start position of the rest parameter.
 * @param {Function} transform The rest array transform.
 * @returns {Function} Returns the new function.
 */
function overRest(func, start, transform) {
  start = nativeMax(start === undefined ? (func.length - 1) : start, 0);
  return function() {
    var args = arguments,
        index = -1,
        length = nativeMax(args.length - start, 0),
        array = Array(length);

    while (++index < length) {
      array[index] = args[start + index];
    }
    index = -1;
    var otherArgs = Array(start + 1);
    while (++index < start) {
      otherArgs[index] = args[index];
    }
    otherArgs[start] = transform(array);
    return apply(func, this, otherArgs);
  };
}

module.exports = overRest;


/***/ }),

/***/ 90191:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var freeGlobal = __webpack_require__(66356);

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

module.exports = root;


/***/ }),

/***/ 69017:
/***/ ((module) => {

/**
 * Gets the value at `key`, unless `key` is "__proto__" or "constructor".
 *
 * @private
 * @param {Object} object The object to query.
 * @param {string} key The key of the property to get.
 * @returns {*} Returns the property value.
 */
function safeGet(object, key) {
  if (key === 'constructor' && typeof object[key] === 'function') {
    return;
  }

  if (key == '__proto__') {
    return;
  }

  return object[key];
}

module.exports = safeGet;


/***/ }),

/***/ 6599:
/***/ ((module) => {

/** Used to stand-in for `undefined` hash values. */
var HASH_UNDEFINED = '__lodash_hash_undefined__';

/**
 * Adds `value` to the array cache.
 *
 * @private
 * @name add
 * @memberOf SetCache
 * @alias push
 * @param {*} value The value to cache.
 * @returns {Object} Returns the cache instance.
 */
function setCacheAdd(value) {
  this.__data__.set(value, HASH_UNDEFINED);
  return this;
}

module.exports = setCacheAdd;


/***/ }),

/***/ 99060:
/***/ ((module) => {

/**
 * Checks if `value` is in the array cache.
 *
 * @private
 * @name has
 * @memberOf SetCache
 * @param {*} value The value to search for.
 * @returns {number} Returns `true` if `value` is found, else `false`.
 */
function setCacheHas(value) {
  return this.__data__.has(value);
}

module.exports = setCacheHas;


/***/ }),

/***/ 24663:
/***/ ((module) => {

/**
 * Converts `set` to an array of its values.
 *
 * @private
 * @param {Object} set The set to convert.
 * @returns {Array} Returns the values.
 */
function setToArray(set) {
  var index = -1,
      result = Array(set.size);

  set.forEach(function(value) {
    result[++index] = value;
  });
  return result;
}

module.exports = setToArray;


/***/ }),

/***/ 67572:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseSetToString = __webpack_require__(44344),
    shortOut = __webpack_require__(60762);

/**
 * Sets the `toString` method of `func` to return `string`.
 *
 * @private
 * @param {Function} func The function to modify.
 * @param {Function} string The `toString` result.
 * @returns {Function} Returns `func`.
 */
var setToString = shortOut(baseSetToString);

module.exports = setToString;


/***/ }),

/***/ 60762:
/***/ ((module) => {

/** Used to detect hot functions by number of calls within a span of milliseconds. */
var HOT_COUNT = 800,
    HOT_SPAN = 16;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeNow = Date.now;

/**
 * Creates a function that'll short out and invoke `identity` instead
 * of `func` when it's called `HOT_COUNT` or more times in `HOT_SPAN`
 * milliseconds.
 *
 * @private
 * @param {Function} func The function to restrict.
 * @returns {Function} Returns the new shortable function.
 */
function shortOut(func) {
  var count = 0,
      lastCalled = 0;

  return function() {
    var stamp = nativeNow(),
        remaining = HOT_SPAN - (stamp - lastCalled);

    lastCalled = stamp;
    if (remaining > 0) {
      if (++count >= HOT_COUNT) {
        return arguments[0];
      }
    } else {
      count = 0;
    }
    return func.apply(undefined, arguments);
  };
}

module.exports = shortOut;


/***/ }),

/***/ 48847:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(14060);

/**
 * Removes all key-value entries from the stack.
 *
 * @private
 * @name clear
 * @memberOf Stack
 */
function stackClear() {
  this.__data__ = new ListCache;
  this.size = 0;
}

module.exports = stackClear;


/***/ }),

/***/ 57083:
/***/ ((module) => {

/**
 * Removes `key` and its value from the stack.
 *
 * @private
 * @name delete
 * @memberOf Stack
 * @param {string} key The key of the value to remove.
 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
 */
function stackDelete(key) {
  var data = this.__data__,
      result = data['delete'](key);

  this.size = data.size;
  return result;
}

module.exports = stackDelete;


/***/ }),

/***/ 75353:
/***/ ((module) => {

/**
 * Gets the stack value for `key`.
 *
 * @private
 * @name get
 * @memberOf Stack
 * @param {string} key The key of the value to get.
 * @returns {*} Returns the entry value.
 */
function stackGet(key) {
  return this.__data__.get(key);
}

module.exports = stackGet;


/***/ }),

/***/ 87109:
/***/ ((module) => {

/**
 * Checks if a stack value for `key` exists.
 *
 * @private
 * @name has
 * @memberOf Stack
 * @param {string} key The key of the entry to check.
 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
 */
function stackHas(key) {
  return this.__data__.has(key);
}

module.exports = stackHas;


/***/ }),

/***/ 34202:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var ListCache = __webpack_require__(14060),
    Map = __webpack_require__(52586),
    MapCache = __webpack_require__(51753);

/** Used as the size to enable large array optimizations. */
var LARGE_ARRAY_SIZE = 200;

/**
 * Sets the stack `key` to `value`.
 *
 * @private
 * @name set
 * @memberOf Stack
 * @param {string} key The key of the value to set.
 * @param {*} value The value to set.
 * @returns {Object} Returns the stack cache instance.
 */
function stackSet(key, value) {
  var data = this.__data__;
  if (data instanceof ListCache) {
    var pairs = data.__data__;
    if (!Map || (pairs.length < LARGE_ARRAY_SIZE - 1)) {
      pairs.push([key, value]);
      this.size = ++data.size;
      return this;
    }
    data = this.__data__ = new MapCache(pairs);
  }
  data.set(key, value);
  this.size = data.size;
  return this;
}

module.exports = stackSet;


/***/ }),

/***/ 33348:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var memoizeCapped = __webpack_require__(50817);

/** Used to match property names within property paths. */
var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]|(?=(?:\.|\[\])(?:\.|\[\]|$))/g;

/** Used to match backslashes in property paths. */
var reEscapeChar = /\\(\\)?/g;

/**
 * Converts `string` to a property path array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the property path array.
 */
var stringToPath = memoizeCapped(function(string) {
  var result = [];
  if (string.charCodeAt(0) === 46 /* . */) {
    result.push('');
  }
  string.replace(rePropName, function(match, number, quote, subString) {
    result.push(quote ? subString.replace(reEscapeChar, '$1') : (number || match));
  });
  return result;
});

module.exports = stringToPath;


/***/ }),

/***/ 27172:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isSymbol = __webpack_require__(79910);

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/**
 * Converts `value` to a string key if it's not a string or symbol.
 *
 * @private
 * @param {*} value The value to inspect.
 * @returns {string|symbol} Returns the key.
 */
function toKey(value) {
  if (typeof value == 'string' || isSymbol(value)) {
    return value;
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

module.exports = toKey;


/***/ }),

/***/ 4285:
/***/ ((module) => {

/** Used for built-in method references. */
var funcProto = Function.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/**
 * Converts `func` to its source code.
 *
 * @private
 * @param {Function} func The function to convert.
 * @returns {string} Returns the source code.
 */
function toSource(func) {
  if (func != null) {
    try {
      return funcToString.call(func);
    } catch (e) {}
    try {
      return (func + '');
    } catch (e) {}
  }
  return '';
}

module.exports = toSource;


/***/ }),

/***/ 15599:
/***/ ((module) => {

/** Used to match a single whitespace character. */
var reWhitespace = /\s/;

/**
 * Used by `_.trim` and `_.trimEnd` to get the index of the last non-whitespace
 * character of `string`.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {number} Returns the index of the last non-whitespace character.
 */
function trimmedEndIndex(string) {
  var index = string.length;

  while (index-- && reWhitespace.test(string.charAt(index))) {}
  return index;
}

module.exports = trimmedEndIndex;


/***/ }),

/***/ 24653:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseClone = __webpack_require__(27748);

/** Used to compose bitmasks for cloning. */
var CLONE_DEEP_FLAG = 1,
    CLONE_SYMBOLS_FLAG = 4;

/**
 * This method is like `_.clone` except that it recursively clones `value`.
 *
 * @static
 * @memberOf _
 * @since 1.0.0
 * @category Lang
 * @param {*} value The value to recursively clone.
 * @returns {*} Returns the deep cloned value.
 * @see _.clone
 * @example
 *
 * var objects = [{ 'a': 1 }, { 'b': 2 }];
 *
 * var deep = _.cloneDeep(objects);
 * console.log(deep[0] === objects[0]);
 * // => false
 */
function cloneDeep(value) {
  return baseClone(value, CLONE_DEEP_FLAG | CLONE_SYMBOLS_FLAG);
}

module.exports = cloneDeep;


/***/ }),

/***/ 8500:
/***/ ((module) => {

/**
 * Creates a function that returns `value`.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {*} value The value to return from the new function.
 * @returns {Function} Returns the new constant function.
 * @example
 *
 * var objects = _.times(2, _.constant({ 'a': 1 }));
 *
 * console.log(objects);
 * // => [{ 'a': 1 }, { 'a': 1 }]
 *
 * console.log(objects[0] === objects[1]);
 * // => true
 */
function constant(value) {
  return function() {
    return value;
  };
}

module.exports = constant;


/***/ }),

/***/ 27487:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isObject = __webpack_require__(99224),
    now = __webpack_require__(86145),
    toNumber = __webpack_require__(5922);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeMax = Math.max,
    nativeMin = Math.min;

/**
 * Creates a debounced function that delays invoking `func` until after `wait`
 * milliseconds have elapsed since the last time the debounced function was
 * invoked. The debounced function comes with a `cancel` method to cancel
 * delayed `func` invocations and a `flush` method to immediately invoke them.
 * Provide `options` to indicate whether `func` should be invoked on the
 * leading and/or trailing edge of the `wait` timeout. The `func` is invoked
 * with the last arguments provided to the debounced function. Subsequent
 * calls to the debounced function return the result of the last `func`
 * invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the debounced function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.debounce` and `_.throttle`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to debounce.
 * @param {number} [wait=0] The number of milliseconds to delay.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=false]
 *  Specify invoking on the leading edge of the timeout.
 * @param {number} [options.maxWait]
 *  The maximum time `func` is allowed to be delayed before it's invoked.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new debounced function.
 * @example
 *
 * // Avoid costly calculations while the window size is in flux.
 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
 *
 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
 * jQuery(element).on('click', _.debounce(sendMail, 300, {
 *   'leading': true,
 *   'trailing': false
 * }));
 *
 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
 * var source = new EventSource('/stream');
 * jQuery(source).on('message', debounced);
 *
 * // Cancel the trailing debounced invocation.
 * jQuery(window).on('popstate', debounced.cancel);
 */
function debounce(func, wait, options) {
  var lastArgs,
      lastThis,
      maxWait,
      result,
      timerId,
      lastCallTime,
      lastInvokeTime = 0,
      leading = false,
      maxing = false,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  wait = toNumber(wait) || 0;
  if (isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }

  function invokeFunc(time) {
    var args = lastArgs,
        thisArg = lastThis;

    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  }

  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time;
    // Start the timer for the trailing edge.
    timerId = setTimeout(timerExpired, wait);
    // Invoke the leading edge.
    return leading ? invokeFunc(time) : result;
  }

  function remainingWait(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime,
        timeWaiting = wait - timeSinceLastCall;

    return maxing
      ? nativeMin(timeWaiting, maxWait - timeSinceLastInvoke)
      : timeWaiting;
  }

  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime,
        timeSinceLastInvoke = time - lastInvokeTime;

    // Either this is the first call, activity has stopped and we're at the
    // trailing edge, the system time has gone backwards and we're treating
    // it as the trailing edge, or we've hit the `maxWait` limit.
    return (lastCallTime === undefined || (timeSinceLastCall >= wait) ||
      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
  }

  function timerExpired() {
    var time = now();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    // Restart the timer.
    timerId = setTimeout(timerExpired, remainingWait(time));
  }

  function trailingEdge(time) {
    timerId = undefined;

    // Only invoke if we have `lastArgs` which means `func` has been
    // debounced at least once.
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = undefined;
    return result;
  }

  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  }

  function flush() {
    return timerId === undefined ? result : trailingEdge(now());
  }

  function debounced() {
    var time = now(),
        isInvoking = shouldInvoke(time);

    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        // Handle invocations in a tight loop.
        clearTimeout(timerId);
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

module.exports = debounce;


/***/ }),

/***/ 73667:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(65134);


/***/ }),

/***/ 53395:
/***/ ((module) => {

/**
 * Performs a
 * [`SameValueZero`](http://ecma-international.org/ecma-262/7.0/#sec-samevaluezero)
 * comparison between two values to determine if they are equivalent.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to compare.
 * @param {*} other The other value to compare.
 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
 * @example
 *
 * var object = { 'a': 1 };
 * var other = { 'a': 1 };
 *
 * _.eq(object, object);
 * // => true
 *
 * _.eq(object, other);
 * // => false
 *
 * _.eq('a', 'a');
 * // => true
 *
 * _.eq('a', Object('a'));
 * // => false
 *
 * _.eq(NaN, NaN);
 * // => true
 */
function eq(value, other) {
  return value === other || (value !== value && other !== other);
}

module.exports = eq;


/***/ }),

/***/ 65134:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayEach = __webpack_require__(55256),
    baseEach = __webpack_require__(16801),
    castFunction = __webpack_require__(69301),
    isArray = __webpack_require__(49403);

/**
 * Iterates over elements of `collection` and invokes `iteratee` for each element.
 * The iteratee is invoked with three arguments: (value, index|key, collection).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * **Note:** As with other "Collections" methods, objects with a "length"
 * property are iterated like arrays. To avoid this behavior use `_.forIn`
 * or `_.forOwn` for object iteration.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @alias each
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array|Object} Returns `collection`.
 * @see _.forEachRight
 * @example
 *
 * _.forEach([1, 2], function(value) {
 *   console.log(value);
 * });
 * // => Logs `1` then `2`.
 *
 * _.forEach({ 'a': 1, 'b': 2 }, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forEach(collection, iteratee) {
  var func = isArray(collection) ? arrayEach : baseEach;
  return func(collection, castFunction(iteratee));
}

module.exports = forEach;


/***/ }),

/***/ 11764:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseForOwn = __webpack_require__(82277),
    castFunction = __webpack_require__(69301);

/**
 * Iterates over own enumerable string keyed properties of an object and
 * invokes `iteratee` for each property. The iteratee is invoked with three
 * arguments: (value, key, object). Iteratee functions may exit iteration
 * early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 0.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Object} Returns `object`.
 * @see _.forOwnRight
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.forOwn(new Foo, function(value, key) {
 *   console.log(key);
 * });
 * // => Logs 'a' then 'b' (iteration order is not guaranteed).
 */
function forOwn(object, iteratee) {
  return object && baseForOwn(object, castFunction(iteratee));
}

module.exports = forOwn;


/***/ }),

/***/ 73999:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGet = __webpack_require__(78016);

/**
 * Gets the value at `path` of `object`. If the resolved value is
 * `undefined`, the `defaultValue` is returned in its place.
 *
 * @static
 * @memberOf _
 * @since 3.7.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path of the property to get.
 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
 * @returns {*} Returns the resolved value.
 * @example
 *
 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
 *
 * _.get(object, 'a[0].b.c');
 * // => 3
 *
 * _.get(object, ['a', '0', 'b', 'c']);
 * // => 3
 *
 * _.get(object, 'a.b.c', 'default');
 * // => 'default'
 */
function get(object, path, defaultValue) {
  var result = object == null ? undefined : baseGet(object, path);
  return result === undefined ? defaultValue : result;
}

module.exports = get;


/***/ }),

/***/ 44637:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseHasIn = __webpack_require__(19792),
    hasPath = __webpack_require__(70013);

/**
 * Checks if `path` is a direct or inherited property of `object`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @param {Array|string} path The path to check.
 * @returns {boolean} Returns `true` if `path` exists, else `false`.
 * @example
 *
 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
 *
 * _.hasIn(object, 'a');
 * // => true
 *
 * _.hasIn(object, 'a.b');
 * // => true
 *
 * _.hasIn(object, ['a', 'b']);
 * // => true
 *
 * _.hasIn(object, 'b');
 * // => false
 */
function hasIn(object, path) {
  return object != null && hasPath(object, path, baseHasIn);
}

module.exports = hasIn;


/***/ }),

/***/ 2737:
/***/ ((module) => {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ 1767:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsArguments = __webpack_require__(8066),
    isObjectLike = __webpack_require__(71338);

/** Used for built-in method references. */
var objectProto = Object.prototype;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Built-in value references. */
var propertyIsEnumerable = objectProto.propertyIsEnumerable;

/**
 * Checks if `value` is likely an `arguments` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an `arguments` object,
 *  else `false`.
 * @example
 *
 * _.isArguments(function() { return arguments; }());
 * // => true
 *
 * _.isArguments([1, 2, 3]);
 * // => false
 */
var isArguments = baseIsArguments(function() { return arguments; }()) ? baseIsArguments : function(value) {
  return isObjectLike(value) && hasOwnProperty.call(value, 'callee') &&
    !propertyIsEnumerable.call(value, 'callee');
};

module.exports = isArguments;


/***/ }),

/***/ 49403:
/***/ ((module) => {

/**
 * Checks if `value` is classified as an `Array` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array, else `false`.
 * @example
 *
 * _.isArray([1, 2, 3]);
 * // => true
 *
 * _.isArray(document.body.children);
 * // => false
 *
 * _.isArray('abc');
 * // => false
 *
 * _.isArray(_.noop);
 * // => false
 */
var isArray = Array.isArray;

module.exports = isArray;


/***/ }),

/***/ 20058:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isFunction = __webpack_require__(87102),
    isLength = __webpack_require__(41610);

/**
 * Checks if `value` is array-like. A value is considered array-like if it's
 * not a function and has a `value.length` that's an integer greater than or
 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
 * @example
 *
 * _.isArrayLike([1, 2, 3]);
 * // => true
 *
 * _.isArrayLike(document.body.children);
 * // => true
 *
 * _.isArrayLike('abc');
 * // => true
 *
 * _.isArrayLike(_.noop);
 * // => false
 */
function isArrayLike(value) {
  return value != null && isLength(value.length) && !isFunction(value);
}

module.exports = isArrayLike;


/***/ }),

/***/ 94713:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var isArrayLike = __webpack_require__(20058),
    isObjectLike = __webpack_require__(71338);

/**
 * This method is like `_.isArrayLike` except that it also checks if `value`
 * is an object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an array-like object,
 *  else `false`.
 * @example
 *
 * _.isArrayLikeObject([1, 2, 3]);
 * // => true
 *
 * _.isArrayLikeObject(document.body.children);
 * // => true
 *
 * _.isArrayLikeObject('abc');
 * // => false
 *
 * _.isArrayLikeObject(_.noop);
 * // => false
 */
function isArrayLikeObject(value) {
  return isObjectLike(value) && isArrayLike(value);
}

module.exports = isArrayLikeObject;


/***/ }),

/***/ 17424:
/***/ ((module, exports, __webpack_require__) => {

/* module decorator */ module = __webpack_require__.nmd(module);
var root = __webpack_require__(90191),
    stubFalse = __webpack_require__(47110);

/** Detect free variable `exports`. */
var freeExports =  true && exports && !exports.nodeType && exports;

/** Detect free variable `module`. */
var freeModule = freeExports && "object" == 'object' && module && !module.nodeType && module;

/** Detect the popular CommonJS extension `module.exports`. */
var moduleExports = freeModule && freeModule.exports === freeExports;

/** Built-in value references. */
var Buffer = moduleExports ? root.Buffer : undefined;

/* Built-in method references for those with the same name as other `lodash` methods. */
var nativeIsBuffer = Buffer ? Buffer.isBuffer : undefined;

/**
 * Checks if `value` is a buffer.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
 * @example
 *
 * _.isBuffer(new Buffer(2));
 * // => true
 *
 * _.isBuffer(new Uint8Array(2));
 * // => false
 */
var isBuffer = nativeIsBuffer || stubFalse;

module.exports = isBuffer;


/***/ }),

/***/ 87102:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObject = __webpack_require__(99224);

/** `Object#toString` result references. */
var asyncTag = '[object AsyncFunction]',
    funcTag = '[object Function]',
    genTag = '[object GeneratorFunction]',
    proxyTag = '[object Proxy]';

/**
 * Checks if `value` is classified as a `Function` object.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a function, else `false`.
 * @example
 *
 * _.isFunction(_);
 * // => true
 *
 * _.isFunction(/abc/);
 * // => false
 */
function isFunction(value) {
  if (!isObject(value)) {
    return false;
  }
  // The use of `Object#toString` avoids issues with the `typeof` operator
  // in Safari 9 which returns 'object' for typed arrays and other constructors.
  var tag = baseGetTag(value);
  return tag == funcTag || tag == genTag || tag == asyncTag || tag == proxyTag;
}

module.exports = isFunction;


/***/ }),

/***/ 41610:
/***/ ((module) => {

/** Used as references for various `Number` constants. */
var MAX_SAFE_INTEGER = 9007199254740991;

/**
 * Checks if `value` is a valid array-like length.
 *
 * **Note:** This method is loosely based on
 * [`ToLength`](http://ecma-international.org/ecma-262/7.0/#sec-tolength).
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
 * @example
 *
 * _.isLength(3);
 * // => true
 *
 * _.isLength(Number.MIN_VALUE);
 * // => false
 *
 * _.isLength(Infinity);
 * // => false
 *
 * _.isLength('3');
 * // => false
 */
function isLength(value) {
  return typeof value == 'number' &&
    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
}

module.exports = isLength;


/***/ }),

/***/ 67625:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsMap = __webpack_require__(52151),
    baseUnary = __webpack_require__(96571),
    nodeUtil = __webpack_require__(97952);

/* Node.js helper references. */
var nodeIsMap = nodeUtil && nodeUtil.isMap;

/**
 * Checks if `value` is classified as a `Map` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a map, else `false`.
 * @example
 *
 * _.isMap(new Map);
 * // => true
 *
 * _.isMap(new WeakMap);
 * // => false
 */
var isMap = nodeIsMap ? baseUnary(nodeIsMap) : baseIsMap;

module.exports = isMap;


/***/ }),

/***/ 99224:
/***/ ((module) => {

/**
 * Checks if `value` is the
 * [language type](http://www.ecma-international.org/ecma-262/7.0/#sec-ecmascript-language-types)
 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
 * @example
 *
 * _.isObject({});
 * // => true
 *
 * _.isObject([1, 2, 3]);
 * // => true
 *
 * _.isObject(_.noop);
 * // => true
 *
 * _.isObject(null);
 * // => false
 */
function isObject(value) {
  var type = typeof value;
  return value != null && (type == 'object' || type == 'function');
}

module.exports = isObject;


/***/ }),

/***/ 71338:
/***/ ((module) => {

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return value != null && typeof value == 'object';
}

module.exports = isObjectLike;


/***/ }),

/***/ 7997:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    getPrototype = __webpack_require__(89739),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var objectTag = '[object Object]';

/** Used for built-in method references. */
var funcProto = Function.prototype,
    objectProto = Object.prototype;

/** Used to resolve the decompiled source of functions. */
var funcToString = funcProto.toString;

/** Used to check objects for own properties. */
var hasOwnProperty = objectProto.hasOwnProperty;

/** Used to infer the `Object` constructor. */
var objectCtorString = funcToString.call(Object);

/**
 * Checks if `value` is a plain object, that is, an object created by the
 * `Object` constructor or one with a `[[Prototype]]` of `null`.
 *
 * @static
 * @memberOf _
 * @since 0.8.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 * }
 *
 * _.isPlainObject(new Foo);
 * // => false
 *
 * _.isPlainObject([1, 2, 3]);
 * // => false
 *
 * _.isPlainObject({ 'x': 0, 'y': 0 });
 * // => true
 *
 * _.isPlainObject(Object.create(null));
 * // => true
 */
function isPlainObject(value) {
  if (!isObjectLike(value) || baseGetTag(value) != objectTag) {
    return false;
  }
  var proto = getPrototype(value);
  if (proto === null) {
    return true;
  }
  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
  return typeof Ctor == 'function' && Ctor instanceof Ctor &&
    funcToString.call(Ctor) == objectCtorString;
}

module.exports = isPlainObject;


/***/ }),

/***/ 21185:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsSet = __webpack_require__(64282),
    baseUnary = __webpack_require__(96571),
    nodeUtil = __webpack_require__(97952);

/* Node.js helper references. */
var nodeIsSet = nodeUtil && nodeUtil.isSet;

/**
 * Checks if `value` is classified as a `Set` object.
 *
 * @static
 * @memberOf _
 * @since 4.3.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a set, else `false`.
 * @example
 *
 * _.isSet(new Set);
 * // => true
 *
 * _.isSet(new WeakSet);
 * // => false
 */
var isSet = nodeIsSet ? baseUnary(nodeIsSet) : baseIsSet;

module.exports = isSet;


/***/ }),

/***/ 83131:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isArray = __webpack_require__(49403),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var stringTag = '[object String]';

/**
 * Checks if `value` is classified as a `String` primitive or object.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a string, else `false`.
 * @example
 *
 * _.isString('abc');
 * // => true
 *
 * _.isString(1);
 * // => false
 */
function isString(value) {
  return typeof value == 'string' ||
    (!isArray(value) && isObjectLike(value) && baseGetTag(value) == stringTag);
}

module.exports = isString;


/***/ }),

/***/ 79910:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseGetTag = __webpack_require__(92931),
    isObjectLike = __webpack_require__(71338);

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && baseGetTag(value) == symbolTag);
}

module.exports = isSymbol;


/***/ }),

/***/ 96026:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseIsTypedArray = __webpack_require__(59310),
    baseUnary = __webpack_require__(96571),
    nodeUtil = __webpack_require__(97952);

/* Node.js helper references. */
var nodeIsTypedArray = nodeUtil && nodeUtil.isTypedArray;

/**
 * Checks if `value` is classified as a typed array.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a typed array, else `false`.
 * @example
 *
 * _.isTypedArray(new Uint8Array);
 * // => true
 *
 * _.isTypedArray([]);
 * // => false
 */
var isTypedArray = nodeIsTypedArray ? baseUnary(nodeIsTypedArray) : baseIsTypedArray;

module.exports = isTypedArray;


/***/ }),

/***/ 51218:
/***/ ((module) => {

/**
 * Checks if `value` is `undefined`.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is `undefined`, else `false`.
 * @example
 *
 * _.isUndefined(void 0);
 * // => true
 *
 * _.isUndefined(null);
 * // => false
 */
function isUndefined(value) {
  return value === undefined;
}

module.exports = isUndefined;


/***/ }),

/***/ 65889:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(25212),
    baseKeys = __webpack_require__(80907),
    isArrayLike = __webpack_require__(20058);

/**
 * Creates an array of the own enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects. See the
 * [ES spec](http://ecma-international.org/ecma-262/7.0/#sec-object.keys)
 * for more details.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keys(new Foo);
 * // => ['a', 'b'] (iteration order is not guaranteed)
 *
 * _.keys('hi');
 * // => ['0', '1']
 */
function keys(object) {
  return isArrayLike(object) ? arrayLikeKeys(object) : baseKeys(object);
}

module.exports = keys;


/***/ }),

/***/ 64042:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayLikeKeys = __webpack_require__(25212),
    baseKeysIn = __webpack_require__(68071),
    isArrayLike = __webpack_require__(20058);

/**
 * Creates an array of the own and inherited enumerable property names of `object`.
 *
 * **Note:** Non-object values are coerced to objects.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Object
 * @param {Object} object The object to query.
 * @returns {Array} Returns the array of property names.
 * @example
 *
 * function Foo() {
 *   this.a = 1;
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.keysIn(new Foo);
 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
 */
function keysIn(object) {
  return isArrayLike(object) ? arrayLikeKeys(object, true) : baseKeysIn(object);
}

module.exports = keysIn;


/***/ }),

/***/ 27594:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var arrayMap = __webpack_require__(30517),
    baseIteratee = __webpack_require__(26209),
    baseMap = __webpack_require__(46324),
    isArray = __webpack_require__(49403);

/**
 * Creates an array of values by running each element in `collection` thru
 * `iteratee`. The iteratee is invoked with three arguments:
 * (value, index|key, collection).
 *
 * Many lodash methods are guarded to work as iteratees for methods like
 * `_.every`, `_.filter`, `_.map`, `_.mapValues`, `_.reject`, and `_.some`.
 *
 * The guarded methods are:
 * `ary`, `chunk`, `curry`, `curryRight`, `drop`, `dropRight`, `every`,
 * `fill`, `invert`, `parseInt`, `random`, `range`, `rangeRight`, `repeat`,
 * `sampleSize`, `slice`, `some`, `sortBy`, `split`, `take`, `takeRight`,
 * `template`, `trim`, `trimEnd`, `trimStart`, and `words`
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Collection
 * @param {Array|Object} collection The collection to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @returns {Array} Returns the new mapped array.
 * @example
 *
 * function square(n) {
 *   return n * n;
 * }
 *
 * _.map([4, 8], square);
 * // => [16, 64]
 *
 * _.map({ 'a': 4, 'b': 8 }, square);
 * // => [16, 64] (iteration order is not guaranteed)
 *
 * var users = [
 *   { 'user': 'barney' },
 *   { 'user': 'fred' }
 * ];
 *
 * // The `_.property` iteratee shorthand.
 * _.map(users, 'user');
 * // => ['barney', 'fred']
 */
function map(collection, iteratee) {
  var func = isArray(collection) ? arrayMap : baseMap;
  return func(collection, baseIteratee(iteratee, 3));
}

module.exports = map;


/***/ }),

/***/ 58885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var MapCache = __webpack_require__(51753);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a function that memoizes the result of `func`. If `resolver` is
 * provided, it determines the cache key for storing the result based on the
 * arguments provided to the memoized function. By default, the first argument
 * provided to the memoized function is used as the map cache key. The `func`
 * is invoked with the `this` binding of the memoized function.
 *
 * **Note:** The cache is exposed as the `cache` property on the memoized
 * function. Its creation may be customized by replacing the `_.memoize.Cache`
 * constructor with one whose instances implement the
 * [`Map`](http://ecma-international.org/ecma-262/7.0/#sec-properties-of-the-map-prototype-object)
 * method interface of `clear`, `delete`, `get`, `has`, and `set`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to have its output memoized.
 * @param {Function} [resolver] The function to resolve the cache key.
 * @returns {Function} Returns the new memoized function.
 * @example
 *
 * var object = { 'a': 1, 'b': 2 };
 * var other = { 'c': 3, 'd': 4 };
 *
 * var values = _.memoize(_.values);
 * values(object);
 * // => [1, 2]
 *
 * values(other);
 * // => [3, 4]
 *
 * object.a = 2;
 * values(object);
 * // => [1, 2]
 *
 * // Modify the result cache.
 * values.cache.set(object, ['a', 'b']);
 * values(object);
 * // => ['a', 'b']
 *
 * // Replace `_.memoize.Cache`.
 * _.memoize.Cache = WeakMap;
 */
function memoize(func, resolver) {
  if (typeof func != 'function' || (resolver != null && typeof resolver != 'function')) {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  var memoized = function() {
    var args = arguments,
        key = resolver ? resolver.apply(this, args) : args[0],
        cache = memoized.cache;

    if (cache.has(key)) {
      return cache.get(key);
    }
    var result = func.apply(this, args);
    memoized.cache = cache.set(key, result) || cache;
    return result;
  };
  memoized.cache = new (memoize.Cache || MapCache);
  return memoized;
}

// Expose `MapCache`.
memoize.Cache = MapCache;

module.exports = memoize;


/***/ }),

/***/ 91154:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseMerge = __webpack_require__(33305),
    createAssigner = __webpack_require__(53384);

/**
 * This method is like `_.assign` except that it recursively merges own and
 * inherited enumerable string keyed properties of source objects into the
 * destination object. Source properties that resolve to `undefined` are
 * skipped if a destination value exists. Array and plain object properties
 * are merged recursively. Other objects and value types are overridden by
 * assignment. Source objects are applied from left to right. Subsequent
 * sources overwrite property assignments of previous sources.
 *
 * **Note:** This method mutates `object`.
 *
 * @static
 * @memberOf _
 * @since 0.5.0
 * @category Object
 * @param {Object} object The destination object.
 * @param {...Object} [sources] The source objects.
 * @returns {Object} Returns `object`.
 * @example
 *
 * var object = {
 *   'a': [{ 'b': 2 }, { 'd': 4 }]
 * };
 *
 * var other = {
 *   'a': [{ 'c': 3 }, { 'e': 5 }]
 * };
 *
 * _.merge(object, other);
 * // => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
 */
var merge = createAssigner(function(object, source, srcIndex) {
  baseMerge(object, source, srcIndex);
});

module.exports = merge;


/***/ }),

/***/ 86145:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var root = __webpack_require__(90191);

/**
 * Gets the timestamp of the number of milliseconds that have elapsed since
 * the Unix epoch (1 January 1970 00:00:00 UTC).
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Date
 * @returns {number} Returns the timestamp.
 * @example
 *
 * _.defer(function(stamp) {
 *   console.log(_.now() - stamp);
 * }, _.now());
 * // => Logs the number of milliseconds it took for the deferred invocation.
 */
var now = function() {
  return root.Date.now();
};

module.exports = now;


/***/ }),

/***/ 48802:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseProperty = __webpack_require__(28452),
    basePropertyDeep = __webpack_require__(27757),
    isKey = __webpack_require__(44241),
    toKey = __webpack_require__(27172);

/**
 * Creates a function that returns the value at `path` of a given object.
 *
 * @static
 * @memberOf _
 * @since 2.4.0
 * @category Util
 * @param {Array|string} path The path of the property to get.
 * @returns {Function} Returns the new accessor function.
 * @example
 *
 * var objects = [
 *   { 'a': { 'b': 2 } },
 *   { 'a': { 'b': 1 } }
 * ];
 *
 * _.map(objects, _.property('a.b'));
 * // => [2, 1]
 *
 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
 * // => [1, 2]
 */
function property(path) {
  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
}

module.exports = property;


/***/ }),

/***/ 26051:
/***/ ((module) => {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ 47110:
/***/ ((module) => {

/**
 * This method returns `false`.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {boolean} Returns `false`.
 * @example
 *
 * _.times(2, _.stubFalse);
 * // => [false, false]
 */
function stubFalse() {
  return false;
}

module.exports = stubFalse;


/***/ }),

/***/ 41588:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var debounce = __webpack_require__(27487),
    isObject = __webpack_require__(99224);

/** Error message constants. */
var FUNC_ERROR_TEXT = 'Expected a function';

/**
 * Creates a throttled function that only invokes `func` at most once per
 * every `wait` milliseconds. The throttled function comes with a `cancel`
 * method to cancel delayed `func` invocations and a `flush` method to
 * immediately invoke them. Provide `options` to indicate whether `func`
 * should be invoked on the leading and/or trailing edge of the `wait`
 * timeout. The `func` is invoked with the last arguments provided to the
 * throttled function. Subsequent calls to the throttled function return the
 * result of the last `func` invocation.
 *
 * **Note:** If `leading` and `trailing` options are `true`, `func` is
 * invoked on the trailing edge of the timeout only if the throttled function
 * is invoked more than once during the `wait` timeout.
 *
 * If `wait` is `0` and `leading` is `false`, `func` invocation is deferred
 * until to the next tick, similar to `setTimeout` with a timeout of `0`.
 *
 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
 * for details over the differences between `_.throttle` and `_.debounce`.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to throttle.
 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
 * @param {Object} [options={}] The options object.
 * @param {boolean} [options.leading=true]
 *  Specify invoking on the leading edge of the timeout.
 * @param {boolean} [options.trailing=true]
 *  Specify invoking on the trailing edge of the timeout.
 * @returns {Function} Returns the new throttled function.
 * @example
 *
 * // Avoid excessively updating the position while scrolling.
 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
 *
 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
 * jQuery(element).on('click', throttled);
 *
 * // Cancel the trailing throttled invocation.
 * jQuery(window).on('popstate', throttled.cancel);
 */
function throttle(func, wait, options) {
  var leading = true,
      trailing = true;

  if (typeof func != 'function') {
    throw new TypeError(FUNC_ERROR_TEXT);
  }
  if (isObject(options)) {
    leading = 'leading' in options ? !!options.leading : leading;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  }
  return debounce(func, wait, {
    'leading': leading,
    'maxWait': wait,
    'trailing': trailing
  });
}

module.exports = throttle;


/***/ }),

/***/ 5922:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseTrim = __webpack_require__(68220),
    isObject = __webpack_require__(99224),
    isSymbol = __webpack_require__(79910);

/** Used as references for various `Number` constants. */
var NAN = 0 / 0;

/** Used to detect bad signed hexadecimal string values. */
var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

/** Used to detect binary string values. */
var reIsBinary = /^0b[01]+$/i;

/** Used to detect octal string values. */
var reIsOctal = /^0o[0-7]+$/i;

/** Built-in method references without a dependency on `root`. */
var freeParseInt = parseInt;

/**
 * Converts `value` to a number.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {number} Returns the number.
 * @example
 *
 * _.toNumber(3.2);
 * // => 3.2
 *
 * _.toNumber(Number.MIN_VALUE);
 * // => 5e-324
 *
 * _.toNumber(Infinity);
 * // => Infinity
 *
 * _.toNumber('3.2');
 * // => 3.2
 */
function toNumber(value) {
  if (typeof value == 'number') {
    return value;
  }
  if (isSymbol(value)) {
    return NAN;
  }
  if (isObject(value)) {
    var other = typeof value.valueOf == 'function' ? value.valueOf() : value;
    value = isObject(other) ? (other + '') : other;
  }
  if (typeof value != 'string') {
    return value === 0 ? value : +value;
  }
  value = baseTrim(value);
  var isBinary = reIsBinary.test(value);
  return (isBinary || reIsOctal.test(value))
    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
    : (reIsBadHex.test(value) ? NAN : +value);
}

module.exports = toNumber;


/***/ }),

/***/ 74618:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var copyObject = __webpack_require__(26403),
    keysIn = __webpack_require__(64042);

/**
 * Converts `value` to a plain object flattening inherited enumerable string
 * keyed properties of `value` to own properties of the plain object.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {Object} Returns the converted plain object.
 * @example
 *
 * function Foo() {
 *   this.b = 2;
 * }
 *
 * Foo.prototype.c = 3;
 *
 * _.assign({ 'a': 1 }, new Foo);
 * // => { 'a': 1, 'b': 2 }
 *
 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
 * // => { 'a': 1, 'b': 2, 'c': 3 }
 */
function toPlainObject(value) {
  return copyObject(value, keysIn(value));
}

module.exports = toPlainObject;


/***/ }),

/***/ 97885:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var baseToString = __webpack_require__(498);

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

module.exports = toString;


/***/ }),

/***/ 9974:
/***/ (function(module, exports) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {
  if (true) {
    !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
		__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
		(__WEBPACK_AMD_DEFINE_FACTORY__.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__)) : __WEBPACK_AMD_DEFINE_FACTORY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
  } else {}
})(this, function() {
  return {"red":{"50":"#ffebee","100":"#ffcdd2","200":"#ef9a9a","300":"#e57373","400":"#ef5350","500":"#f44336","600":"#e53935","700":"#d32f2f","800":"#c62828","900":"#b71c1c","a100":"#ff8a80","a200":"#ff5252","a400":"#ff1744","a700":"#d50000"},"pink":{"50":"#fce4ec","100":"#f8bbd0","200":"#f48fb1","300":"#f06292","400":"#ec407a","500":"#e91e63","600":"#d81b60","700":"#c2185b","800":"#ad1457","900":"#880e4f","a100":"#ff80ab","a200":"#ff4081","a400":"#f50057","a700":"#c51162"},"purple":{"50":"#f3e5f5","100":"#e1bee7","200":"#ce93d8","300":"#ba68c8","400":"#ab47bc","500":"#9c27b0","600":"#8e24aa","700":"#7b1fa2","800":"#6a1b9a","900":"#4a148c","a100":"#ea80fc","a200":"#e040fb","a400":"#d500f9","a700":"#aa00ff"},"deepPurple":{"50":"#ede7f6","100":"#d1c4e9","200":"#b39ddb","300":"#9575cd","400":"#7e57c2","500":"#673ab7","600":"#5e35b1","700":"#512da8","800":"#4527a0","900":"#311b92","a100":"#b388ff","a200":"#7c4dff","a400":"#651fff","a700":"#6200ea"},"indigo":{"50":"#e8eaf6","100":"#c5cae9","200":"#9fa8da","300":"#7986cb","400":"#5c6bc0","500":"#3f51b5","600":"#3949ab","700":"#303f9f","800":"#283593","900":"#1a237e","a100":"#8c9eff","a200":"#536dfe","a400":"#3d5afe","a700":"#304ffe"},"blue":{"50":"#e3f2fd","100":"#bbdefb","200":"#90caf9","300":"#64b5f6","400":"#42a5f5","500":"#2196f3","600":"#1e88e5","700":"#1976d2","800":"#1565c0","900":"#0d47a1","a100":"#82b1ff","a200":"#448aff","a400":"#2979ff","a700":"#2962ff"},"lightBlue":{"50":"#e1f5fe","100":"#b3e5fc","200":"#81d4fa","300":"#4fc3f7","400":"#29b6f6","500":"#03a9f4","600":"#039be5","700":"#0288d1","800":"#0277bd","900":"#01579b","a100":"#80d8ff","a200":"#40c4ff","a400":"#00b0ff","a700":"#0091ea"},"cyan":{"50":"#e0f7fa","100":"#b2ebf2","200":"#80deea","300":"#4dd0e1","400":"#26c6da","500":"#00bcd4","600":"#00acc1","700":"#0097a7","800":"#00838f","900":"#006064","a100":"#84ffff","a200":"#18ffff","a400":"#00e5ff","a700":"#00b8d4"},"teal":{"50":"#e0f2f1","100":"#b2dfdb","200":"#80cbc4","300":"#4db6ac","400":"#26a69a","500":"#009688","600":"#00897b","700":"#00796b","800":"#00695c","900":"#004d40","a100":"#a7ffeb","a200":"#64ffda","a400":"#1de9b6","a700":"#00bfa5"},"green":{"50":"#e8f5e9","100":"#c8e6c9","200":"#a5d6a7","300":"#81c784","400":"#66bb6a","500":"#4caf50","600":"#43a047","700":"#388e3c","800":"#2e7d32","900":"#1b5e20","a100":"#b9f6ca","a200":"#69f0ae","a400":"#00e676","a700":"#00c853"},"lightGreen":{"50":"#f1f8e9","100":"#dcedc8","200":"#c5e1a5","300":"#aed581","400":"#9ccc65","500":"#8bc34a","600":"#7cb342","700":"#689f38","800":"#558b2f","900":"#33691e","a100":"#ccff90","a200":"#b2ff59","a400":"#76ff03","a700":"#64dd17"},"lime":{"50":"#f9fbe7","100":"#f0f4c3","200":"#e6ee9c","300":"#dce775","400":"#d4e157","500":"#cddc39","600":"#c0ca33","700":"#afb42b","800":"#9e9d24","900":"#827717","a100":"#f4ff81","a200":"#eeff41","a400":"#c6ff00","a700":"#aeea00"},"yellow":{"50":"#fffde7","100":"#fff9c4","200":"#fff59d","300":"#fff176","400":"#ffee58","500":"#ffeb3b","600":"#fdd835","700":"#fbc02d","800":"#f9a825","900":"#f57f17","a100":"#ffff8d","a200":"#ffff00","a400":"#ffea00","a700":"#ffd600"},"amber":{"50":"#fff8e1","100":"#ffecb3","200":"#ffe082","300":"#ffd54f","400":"#ffca28","500":"#ffc107","600":"#ffb300","700":"#ffa000","800":"#ff8f00","900":"#ff6f00","a100":"#ffe57f","a200":"#ffd740","a400":"#ffc400","a700":"#ffab00"},"orange":{"50":"#fff3e0","100":"#ffe0b2","200":"#ffcc80","300":"#ffb74d","400":"#ffa726","500":"#ff9800","600":"#fb8c00","700":"#f57c00","800":"#ef6c00","900":"#e65100","a100":"#ffd180","a200":"#ffab40","a400":"#ff9100","a700":"#ff6d00"},"deepOrange":{"50":"#fbe9e7","100":"#ffccbc","200":"#ffab91","300":"#ff8a65","400":"#ff7043","500":"#ff5722","600":"#f4511e","700":"#e64a19","800":"#d84315","900":"#bf360c","a100":"#ff9e80","a200":"#ff6e40","a400":"#ff3d00","a700":"#dd2c00"},"brown":{"50":"#efebe9","100":"#d7ccc8","200":"#bcaaa4","300":"#a1887f","400":"#8d6e63","500":"#795548","600":"#6d4c41","700":"#5d4037","800":"#4e342e","900":"#3e2723"},"grey":{"50":"#fafafa","100":"#f5f5f5","200":"#eeeeee","300":"#e0e0e0","400":"#bdbdbd","500":"#9e9e9e","600":"#757575","700":"#616161","800":"#424242","900":"#212121"},"blueGrey":{"50":"#eceff1","100":"#cfd8dc","200":"#b0bec5","300":"#90a4ae","400":"#78909c","500":"#607d8b","600":"#546e7a","700":"#455a64","800":"#37474f","900":"#263238"},"darkText":{"primary":"rgba(0, 0, 0, 0.87)","secondary":"rgba(0, 0, 0, 0.54)","disabled":"rgba(0, 0, 0, 0.38)","dividers":"rgba(0, 0, 0, 0.12)"},"lightText":{"primary":"rgba(255, 255, 255, 1)","secondary":"rgba(255, 255, 255, 0.7)","disabled":"rgba(255, 255, 255, 0.5)","dividers":"rgba(255, 255, 255, 0.12)"},"darkIcons":{"active":"rgba(0, 0, 0, 0.54)","inactive":"rgba(0, 0, 0, 0.38)"},"lightIcons":{"active":"rgba(255, 255, 255, 1)","inactive":"rgba(255, 255, 255, 0.5)"},"white":"#ffffff","black":"#000000"};
});


/***/ }),

/***/ 57114:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__(90696)


/***/ }),

/***/ 94334:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = __webpack_require__(16066);

function emptyFunction() {}
function emptyFunctionWithReset() {}
emptyFunctionWithReset.resetWarningCache = emptyFunction;

module.exports = function() {
  function shim(props, propName, componentName, location, propFullName, secret) {
    if (secret === ReactPropTypesSecret) {
      // It is still safe when called from React.
      return;
    }
    var err = new Error(
      'Calling PropTypes validators directly is not supported by the `prop-types` package. ' +
      'Use PropTypes.checkPropTypes() to call them. ' +
      'Read more at http://fb.me/use-check-prop-types'
    );
    err.name = 'Invariant Violation';
    throw err;
  };
  shim.isRequired = shim;
  function getShim() {
    return shim;
  };
  // Important!
  // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.
  var ReactPropTypes = {
    array: shim,
    bigint: shim,
    bool: shim,
    func: shim,
    number: shim,
    object: shim,
    string: shim,
    symbol: shim,

    any: shim,
    arrayOf: getShim,
    element: shim,
    elementType: shim,
    instanceOf: getShim,
    node: shim,
    objectOf: getShim,
    oneOf: getShim,
    oneOfType: getShim,
    shape: getShim,
    exact: getShim,

    checkPropTypes: emptyFunctionWithReset,
    resetWarningCache: emptyFunction
  };

  ReactPropTypes.PropTypes = ReactPropTypes;

  return ReactPropTypes;
};


/***/ }),

/***/ 55601:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

if (false) { var throwOnDirectAccess, ReactIs; } else {
  // By explicitly using `prop-types` you are opting into new production behavior.
  // http://fb.me/prop-types-in-prod
  module.exports = __webpack_require__(94334)();
}


/***/ }),

/***/ 16066:
/***/ ((module) => {

"use strict";
/**
 * Copyright (c) 2013-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */



var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';

module.exports = ReactPropTypesSecret;


/***/ }),

/***/ 25854:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlphaPicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(63128);

var _AlphaPointer = __webpack_require__(86586);

var _AlphaPointer2 = _interopRequireDefault(_AlphaPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPicker = exports.AlphaPicker = function AlphaPicker(_ref) {
  var rgb = _ref.rgb,
      hsl = _ref.hsl,
      width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      direction = _ref.direction,
      style = _ref.style,
      renderers = _ref.renderers,
      pointer = _ref.pointer,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      alpha: {
        radius: '2px',
        style: style
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'alpha-picker ' + className },
    _react2.default.createElement(_common.Alpha, _extends({}, styles.alpha, {
      rgb: rgb,
      hsl: hsl,
      pointer: pointer,
      renderers: renderers,
      onChange: onChange,
      direction: direction
    }))
  );
};

AlphaPicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _AlphaPointer2.default
};

exports["default"] = (0, _common.ColorWrap)(AlphaPicker);

/***/ }),

/***/ 86586:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.AlphaPointer = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AlphaPointer = exports.AlphaPointer = function AlphaPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = AlphaPointer;

/***/ }),

/***/ 18271:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Block = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

var _BlockSwatches = __webpack_require__(23708);

var _BlockSwatches2 = _interopRequireDefault(_BlockSwatches);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Block = exports.Block = function Block(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var transparent = hex === 'transparent';
  var handleChange = function handleChange(hexCode, e) {
    color.isValidHex(hexCode) && onChange({
      hex: hexCode,
      source: 'hex'
    }, e);
  };

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        boxShadow: '0 1px rgba(0,0,0,.1)',
        borderRadius: '6px',
        position: 'relative'
      },
      head: {
        height: '110px',
        background: hex,
        borderRadius: '6px 6px 0 0',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative'
      },
      body: {
        padding: '10px'
      },
      label: {
        fontSize: '18px',
        color: color.getContrastingColor(hex),
        position: 'relative'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 10px 10px 10px',
        borderColor: 'transparent transparent ' + hex + ' transparent',
        position: 'absolute',
        top: '-10px',
        left: '50%',
        marginLeft: '-10px'
      },
      input: {
        width: '100%',
        fontSize: '12px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '22px',
        boxShadow: 'inset 0 0 0 1px #ddd',
        borderRadius: '4px',
        padding: '0 7px',
        boxSizing: 'border-box'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      }
    }
  }, passedStyles), { 'hide-triangle': triangle === 'hide' });

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'block-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.head },
      transparent && _react2.default.createElement(_common.Checkboard, { borderRadius: '6px 6px 0 0' }),
      _react2.default.createElement(
        'div',
        { style: styles.label },
        hex
      )
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(_BlockSwatches2.default, { colors: colors, onClick: handleChange, onSwatchHover: onSwatchHover }),
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input },
        value: hex,
        onChange: handleChange
      })
    )
  );
};

Block.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  triangle: _propTypes2.default.oneOf(['top', 'hide']),
  styles: _propTypes2.default.object
};

Block.defaultProps = {
  width: 170,
  colors: ['#D9E3F0', '#F47373', '#697689', '#37D67A', '#2CCCE4', '#555555', '#dce775', '#ff8a65', '#ba68c8'],
  triangle: 'top',
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Block);

/***/ }),

/***/ 23708:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.BlockSwatches = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _common = __webpack_require__(63128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var BlockSwatches = exports.BlockSwatches = function BlockSwatches(_ref) {
  var colors = _ref.colors,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginRight: '-10px'
      },
      swatch: {
        width: '22px',
        height: '22px',
        float: 'left',
        marginRight: '10px',
        marginBottom: '10px',
        borderRadius: '4px'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_common.Swatch, {
        key: c,
        color: c,
        style: styles.swatch,
        onClick: onClick,
        onHover: onSwatchHover,
        focusStyle: {
          boxShadow: '0 0 4px ' + c
        }
      });
    }),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports["default"] = BlockSwatches;

/***/ }),

/***/ 3978:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Chrome = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _ChromeFields = __webpack_require__(17597);

var _ChromeFields2 = _interopRequireDefault(_ChromeFields);

var _ChromePointer = __webpack_require__(82386);

var _ChromePointer2 = _interopRequireDefault(_ChromePointer);

var _ChromePointerCircle = __webpack_require__(76973);

var _ChromePointerCircle2 = _interopRequireDefault(_ChromePointerCircle);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Chrome = exports.Chrome = function Chrome(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      disableAlpha = _ref.disableAlpha,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      renderers = _ref.renderers,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className,
      defaultView = _ref.defaultView;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        borderRadius: '2px',
        boxShadow: '0 0 2px rgba(0,0,0,.3), 0 4px 8px rgba(0,0,0,.3)',
        boxSizing: 'initial',
        fontFamily: 'Menlo'
      },
      saturation: {
        width: '100%',
        paddingBottom: '55%',
        position: 'relative',
        borderRadius: '2px 2px 0 0',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '2px 2px 0 0'
      },
      body: {
        padding: '16px 16px 12px'
      },
      controls: {
        display: 'flex'
      },
      color: {
        width: '32px'
      },
      swatch: {
        marginTop: '6px',
        width: '16px',
        height: '16px',
        borderRadius: '8px',
        position: 'relative',
        overflow: 'hidden'
      },
      active: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '8px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.1)',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', ' + rgb.a + ')',
        zIndex: '2'
      },
      toggles: {
        flex: '1'
      },
      hue: {
        height: '10px',
        position: 'relative',
        marginBottom: '8px'
      },
      Hue: {
        radius: '2px'
      },
      alpha: {
        height: '10px',
        position: 'relative'
      },
      Alpha: {
        radius: '2px'
      }
    },
    'disableAlpha': {
      color: {
        width: '22px'
      },
      alpha: {
        display: 'none'
      },
      hue: {
        marginBottom: '0px'
      },
      swatch: {
        width: '10px',
        height: '10px',
        marginTop: '0px'
      }
    }
  }, passedStyles), { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'chrome-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        pointer: _ChromePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.color },
          _react2.default.createElement(
            'div',
            { style: styles.swatch },
            _react2.default.createElement('div', { style: styles.active }),
            _react2.default.createElement(_common.Checkboard, { renderers: renderers })
          )
        ),
        _react2.default.createElement(
          'div',
          { style: styles.toggles },
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              style: styles.Hue,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              onChange: onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.Alpha, {
              style: styles.Alpha,
              rgb: rgb,
              hsl: hsl,
              pointer: _ChromePointer2.default,
              renderers: renderers,
              onChange: onChange
            })
          )
        )
      ),
      _react2.default.createElement(_ChromeFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        view: defaultView,
        onChange: onChange,
        disableAlpha: disableAlpha
      })
    )
  );
};

Chrome.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  disableAlpha: _propTypes2.default.bool,
  styles: _propTypes2.default.object,
  defaultView: _propTypes2.default.oneOf(["hex", "rgb", "hsl"])
};

Chrome.defaultProps = {
  width: 225,
  disableAlpha: false,
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Chrome);

/***/ }),

/***/ 17597:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChromeFields = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _isUndefined = __webpack_require__(51218);

var _isUndefined2 = _interopRequireDefault(_isUndefined);

var _common = __webpack_require__(63128);

var _UnfoldMoreHorizontalIcon = __webpack_require__(11515);

var _UnfoldMoreHorizontalIcon2 = _interopRequireDefault(_UnfoldMoreHorizontalIcon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable react/no-did-mount-set-state, no-param-reassign */

var ChromeFields = exports.ChromeFields = function (_React$Component) {
  _inherits(ChromeFields, _React$Component);

  function ChromeFields(props) {
    _classCallCheck(this, ChromeFields);

    var _this = _possibleConstructorReturn(this, (ChromeFields.__proto__ || Object.getPrototypeOf(ChromeFields)).call(this));

    _this.toggleViews = function () {
      if (_this.state.view === 'hex') {
        _this.setState({ view: 'rgb' });
      } else if (_this.state.view === 'rgb') {
        _this.setState({ view: 'hsl' });
      } else if (_this.state.view === 'hsl') {
        if (_this.props.hsl.a === 1) {
          _this.setState({ view: 'hex' });
        } else {
          _this.setState({ view: 'rgb' });
        }
      }
    };

    _this.handleChange = function (data, e) {
      if (data.hex) {
        color.isValidHex(data.hex) && _this.props.onChange({
          hex: data.hex,
          source: 'hex'
        }, e);
      } else if (data.r || data.g || data.b) {
        _this.props.onChange({
          r: data.r || _this.props.rgb.r,
          g: data.g || _this.props.rgb.g,
          b: data.b || _this.props.rgb.b,
          source: 'rgb'
        }, e);
      } else if (data.a) {
        if (data.a < 0) {
          data.a = 0;
        } else if (data.a > 1) {
          data.a = 1;
        }

        _this.props.onChange({
          h: _this.props.hsl.h,
          s: _this.props.hsl.s,
          l: _this.props.hsl.l,
          a: Math.round(data.a * 100) / 100,
          source: 'rgb'
        }, e);
      } else if (data.h || data.s || data.l) {
        // Remove any occurances of '%'.
        if (typeof data.s === 'string' && data.s.includes('%')) {
          data.s = data.s.replace('%', '');
        }
        if (typeof data.l === 'string' && data.l.includes('%')) {
          data.l = data.l.replace('%', '');
        }

        // We store HSL as a unit interval so we need to override the 1 input to 0.01
        if (data.s == 1) {
          data.s = 0.01;
        } else if (data.l == 1) {
          data.l = 0.01;
        }

        _this.props.onChange({
          h: data.h || _this.props.hsl.h,
          s: Number(!(0, _isUndefined2.default)(data.s) ? data.s : _this.props.hsl.s),
          l: Number(!(0, _isUndefined2.default)(data.l) ? data.l : _this.props.hsl.l),
          source: 'hsl'
        }, e);
      }
    };

    _this.showHighlight = function (e) {
      e.currentTarget.style.background = '#eee';
    };

    _this.hideHighlight = function (e) {
      e.currentTarget.style.background = 'transparent';
    };

    if (props.hsl.a !== 1 && props.view === "hex") {
      _this.state = {
        view: "rgb"
      };
    } else {
      _this.state = {
        view: props.view
      };
    }
    return _this;
  }

  _createClass(ChromeFields, [{
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            paddingTop: '16px',
            display: 'flex'
          },
          fields: {
            flex: '1',
            display: 'flex',
            marginLeft: '-6px'
          },
          field: {
            paddingLeft: '6px',
            width: '100%'
          },
          alpha: {
            paddingLeft: '6px',
            width: '100%'
          },
          toggle: {
            width: '32px',
            textAlign: 'right',
            position: 'relative'
          },
          icon: {
            marginRight: '-4px',
            marginTop: '12px',
            cursor: 'pointer',
            position: 'relative'
          },
          iconHighlight: {
            position: 'absolute',
            width: '24px',
            height: '28px',
            background: '#eee',
            borderRadius: '4px',
            top: '10px',
            left: '12px',
            display: 'none'
          },
          input: {
            fontSize: '11px',
            color: '#333',
            width: '100%',
            borderRadius: '2px',
            border: 'none',
            boxShadow: 'inset 0 0 0 1px #dadada',
            height: '21px',
            textAlign: 'center'
          },
          label: {
            textTransform: 'uppercase',
            fontSize: '11px',
            lineHeight: '11px',
            color: '#969696',
            textAlign: 'center',
            display: 'block',
            marginTop: '12px'
          },
          svg: {
            fill: '#333',
            width: '24px',
            height: '24px',
            border: '1px transparent solid',
            borderRadius: '5px'
          }
        },
        'disableAlpha': {
          alpha: {
            display: 'none'
          }
        }
      }, this.props, this.state);

      var fields = void 0;
      if (this.state.view === 'hex') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'hex', value: this.props.hex,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'rgb') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'r',
              value: this.props.rgb.r,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'g',
              value: this.props.rgb.g,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'b',
              value: this.props.rgb.b,
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.rgb.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      } else if (this.state.view === 'hsl') {
        fields = _react2.default.createElement(
          'div',
          { style: styles.fields, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'h',
              value: Math.round(this.props.hsl.h),
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 's',
              value: Math.round(this.props.hsl.s * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.field },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'l',
              value: Math.round(this.props.hsl.l * 100) + '%',
              onChange: this.handleChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.alpha },
            _react2.default.createElement(_common.EditableInput, {
              style: { input: styles.input, label: styles.label },
              label: 'a',
              value: this.props.hsl.a,
              arrowOffset: 0.01,
              onChange: this.handleChange
            })
          )
        );
      }

      return _react2.default.createElement(
        'div',
        { style: styles.wrap, className: 'flexbox-fix' },
        fields,
        _react2.default.createElement(
          'div',
          { style: styles.toggle },
          _react2.default.createElement(
            'div',
            { style: styles.icon, onClick: this.toggleViews, ref: function ref(icon) {
                return _this2.icon = icon;
              } },
            _react2.default.createElement(_UnfoldMoreHorizontalIcon2.default, {
              style: styles.svg,
              onMouseOver: this.showHighlight,
              onMouseEnter: this.showHighlight,
              onMouseOut: this.hideHighlight
            })
          )
        )
      );
    }
  }], [{
    key: 'getDerivedStateFromProps',
    value: function getDerivedStateFromProps(nextProps, state) {
      if (nextProps.hsl.a !== 1 && state.view === 'hex') {
        return { view: 'rgb' };
      }
      return null;
    }
  }]);

  return ChromeFields;
}(_react2.default.Component);

ChromeFields.defaultProps = {
  view: "hex"
};

exports["default"] = ChromeFields;

/***/ }),

/***/ 82386:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChromePointer = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointer = exports.ChromePointer = function ChromePointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        transform: 'translate(-6px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = ChromePointer;

/***/ }),

/***/ 76973:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ChromePointerCircle = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ChromePointerCircle = exports.ChromePointerCircle = function ChromePointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = ChromePointerCircle;

/***/ }),

/***/ 93719:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Circle = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _materialColors = __webpack_require__(9974);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(63128);

var _CircleSwatch = __webpack_require__(67303);

var _CircleSwatch2 = _interopRequireDefault(_CircleSwatch);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Circle = exports.Circle = function Circle(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      circleSize = _ref.circleSize,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      circleSpacing = _ref.circleSpacing,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        display: 'flex',
        flexWrap: 'wrap',
        marginRight: -circleSpacing,
        marginBottom: -circleSpacing
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(hexCode, e) {
    return onChange({ hex: hexCode, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'circle-picker ' + className },
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_CircleSwatch2.default, {
        key: c,
        color: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover,
        active: hex === c.toLowerCase(),
        circleSize: circleSize,
        circleSpacing: circleSpacing
      });
    })
  );
};

Circle.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  circleSize: _propTypes2.default.number,
  circleSpacing: _propTypes2.default.number,
  styles: _propTypes2.default.object
};

Circle.defaultProps = {
  width: 252,
  circleSize: 28,
  circleSpacing: 14,
  colors: [material.red['500'], material.pink['500'], material.purple['500'], material.deepPurple['500'], material.indigo['500'], material.blue['500'], material.lightBlue['500'], material.cyan['500'], material.teal['500'], material.green['500'], material.lightGreen['500'], material.lime['500'], material.yellow['500'], material.amber['500'], material.orange['500'], material.deepOrange['500'], material.brown['500'], material.blueGrey['500']],
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Circle);

/***/ }),

/***/ 67303:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CircleSwatch = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(63128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CircleSwatch = exports.CircleSwatch = function CircleSwatch(_ref) {
  var color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      hover = _ref.hover,
      active = _ref.active,
      circleSize = _ref.circleSize,
      circleSpacing = _ref.circleSpacing;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: circleSize,
        height: circleSize,
        marginRight: circleSpacing,
        marginBottom: circleSpacing,
        transform: 'scale(1)',
        transition: '100ms transform ease'
      },
      Swatch: {
        borderRadius: '50%',
        background: 'transparent',
        boxShadow: 'inset 0 0 0 ' + (circleSize / 2 + 1) + 'px ' + color,
        transition: '100ms box-shadow ease'
      }
    },
    'hover': {
      swatch: {
        transform: 'scale(1.2)'
      }
    },
    'active': {
      Swatch: {
        boxShadow: 'inset 0 0 0 3px ' + color
      }
    }
  }, { hover: hover, active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      style: styles.Swatch,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: styles.Swatch.boxShadow + ', 0 0 5px ' + color }
    })
  );
};

CircleSwatch.defaultProps = {
  circleSize: 28,
  circleSpacing: 14
};

exports["default"] = (0, _reactcss.handleHover)(CircleSwatch);

/***/ }),

/***/ 82078:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Alpha = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _alpha = __webpack_require__(75394);

var alpha = _interopRequireWildcard(_alpha);

var _Checkboard = __webpack_require__(76988);

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Alpha = exports.Alpha = function (_ref) {
  _inherits(Alpha, _ref);

  function Alpha() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Alpha);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Alpha.__proto__ || Object.getPrototypeOf(Alpha)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = alpha.calculateChange(e, _this.props.hsl, _this.props.direction, _this.props.a, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleChange);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Alpha, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var rgb = this.props.rgb;
      var styles = (0, _reactcss2.default)({
        'default': {
          alpha: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          checkboard: {
            absolute: '0px 0px 0px 0px',
            overflow: 'hidden',
            borderRadius: this.props.radius
          },
          gradient: {
            absolute: '0px 0px 0px 0px',
            background: 'linear-gradient(to right, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          container: {
            position: 'relative',
            height: '100%',
            margin: '0 3px'
          },
          pointer: {
            position: 'absolute',
            left: rgb.a * 100 + '%'
          },
          slider: {
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            marginTop: '1px',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          gradient: {
            background: 'linear-gradient(to bottom, rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 0) 0%,\n           rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ', 1) 100%)'
          },
          pointer: {
            left: 0,
            top: rgb.a * 100 + '%'
          }
        },
        'overwrite': _extends({}, this.props.style)
      }, {
        vertical: this.props.direction === 'vertical',
        overwrite: true
      });

      return _react2.default.createElement(
        'div',
        { style: styles.alpha },
        _react2.default.createElement(
          'div',
          { style: styles.checkboard },
          _react2.default.createElement(_Checkboard2.default, { renderers: this.props.renderers })
        ),
        _react2.default.createElement('div', { style: styles.gradient }),
        _react2.default.createElement(
          'div',
          {
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Alpha;
}(_react.PureComponent || _react.Component);

exports["default"] = Alpha;

/***/ }),

/***/ 76988:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Checkboard = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _checkboard = __webpack_require__(86689);

var checkboard = _interopRequireWildcard(_checkboard);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Checkboard = exports.Checkboard = function Checkboard(_ref) {
  var white = _ref.white,
      grey = _ref.grey,
      size = _ref.size,
      renderers = _ref.renderers,
      borderRadius = _ref.borderRadius,
      boxShadow = _ref.boxShadow,
      children = _ref.children;

  var styles = (0, _reactcss2.default)({
    'default': {
      grid: {
        borderRadius: borderRadius,
        boxShadow: boxShadow,
        absolute: '0px 0px 0px 0px',
        background: 'url(' + checkboard.get(white, grey, size, renderers.canvas) + ') center left'
      }
    }
  });
  return (0, _react.isValidElement)(children) ? _react2.default.cloneElement(children, _extends({}, children.props, { style: _extends({}, children.props.style, styles.grid) })) : _react2.default.createElement('div', { style: styles.grid });
};

Checkboard.defaultProps = {
  size: 8,
  white: 'transparent',
  grey: 'rgba(0,0,0,.08)',
  renderers: {}
};

exports["default"] = Checkboard;

/***/ }),

/***/ 19520:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ColorWrap = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _debounce = __webpack_require__(27487);

var _debounce2 = _interopRequireDefault(_debounce);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ColorWrap = exports.ColorWrap = function ColorWrap(Picker) {
  var ColorPicker = function (_ref) {
    _inherits(ColorPicker, _ref);

    function ColorPicker(props) {
      _classCallCheck(this, ColorPicker);

      var _this = _possibleConstructorReturn(this, (ColorPicker.__proto__ || Object.getPrototypeOf(ColorPicker)).call(this));

      _this.handleChange = function (data, event) {
        var isValidColor = color.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = color.toState(data, data.h || _this.state.oldHue);
          _this.setState(colors);
          _this.props.onChangeComplete && _this.debounce(_this.props.onChangeComplete, colors, event);
          _this.props.onChange && _this.props.onChange(colors, event);
        }
      };

      _this.handleSwatchHover = function (data, event) {
        var isValidColor = color.simpleCheckForValidColor(data);
        if (isValidColor) {
          var colors = color.toState(data, data.h || _this.state.oldHue);
          _this.props.onSwatchHover && _this.props.onSwatchHover(colors, event);
        }
      };

      _this.state = _extends({}, color.toState(props.color, 0));

      _this.debounce = (0, _debounce2.default)(function (fn, data, event) {
        fn(data, event);
      }, 100);
      return _this;
    }

    _createClass(ColorPicker, [{
      key: 'render',
      value: function render() {
        var optionalEvents = {};
        if (this.props.onSwatchHover) {
          optionalEvents.onSwatchHover = this.handleSwatchHover;
        }

        return _react2.default.createElement(Picker, _extends({}, this.props, this.state, {
          onChange: this.handleChange
        }, optionalEvents));
      }
    }], [{
      key: 'getDerivedStateFromProps',
      value: function getDerivedStateFromProps(nextProps, state) {
        return _extends({}, color.toState(nextProps.color, state.oldHue));
      }
    }]);

    return ColorPicker;
  }(_react.PureComponent || _react.Component);

  ColorPicker.propTypes = _extends({}, Picker.propTypes);

  ColorPicker.defaultProps = _extends({}, Picker.defaultProps, {
    color: {
      h: 250,
      s: 0.50,
      l: 0.20,
      a: 1
    }
  });

  return ColorPicker;
};

exports["default"] = ColorWrap;

/***/ }),

/***/ 66787:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.EditableInput = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var DEFAULT_ARROW_OFFSET = 1;

var UP_KEY_CODE = 38;
var DOWN_KEY_CODE = 40;
var VALID_KEY_CODES = [UP_KEY_CODE, DOWN_KEY_CODE];
var isValidKeyCode = function isValidKeyCode(keyCode) {
  return VALID_KEY_CODES.indexOf(keyCode) > -1;
};
var getNumberValue = function getNumberValue(value) {
  return Number(String(value).replace(/%/g, ''));
};

var idCounter = 1;

var EditableInput = exports.EditableInput = function (_ref) {
  _inherits(EditableInput, _ref);

  function EditableInput(props) {
    _classCallCheck(this, EditableInput);

    var _this = _possibleConstructorReturn(this, (EditableInput.__proto__ || Object.getPrototypeOf(EditableInput)).call(this));

    _this.handleBlur = function () {
      if (_this.state.blurValue) {
        _this.setState({ value: _this.state.blurValue, blurValue: null });
      }
    };

    _this.handleChange = function (e) {
      _this.setUpdatedValue(e.target.value, e);
    };

    _this.handleKeyDown = function (e) {
      // In case `e.target.value` is a percentage remove the `%` character
      // and update accordingly with a percentage
      // https://github.com/casesandberg/react-color/issues/383
      var value = getNumberValue(e.target.value);
      if (!isNaN(value) && isValidKeyCode(e.keyCode)) {
        var offset = _this.getArrowOffset();
        var updatedValue = e.keyCode === UP_KEY_CODE ? value + offset : value - offset;

        _this.setUpdatedValue(updatedValue, e);
      }
    };

    _this.handleDrag = function (e) {
      if (_this.props.dragLabel) {
        var newValue = Math.round(_this.props.value + e.movementX);
        if (newValue >= 0 && newValue <= _this.props.dragMax) {
          _this.props.onChange && _this.props.onChange(_this.getValueObjectWithLabel(newValue), e);
        }
      }
    };

    _this.handleMouseDown = function (e) {
      if (_this.props.dragLabel) {
        e.preventDefault();
        _this.handleDrag(e);
        window.addEventListener('mousemove', _this.handleDrag);
        window.addEventListener('mouseup', _this.handleMouseUp);
      }
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.unbindEventListeners = function () {
      window.removeEventListener('mousemove', _this.handleDrag);
      window.removeEventListener('mouseup', _this.handleMouseUp);
    };

    _this.state = {
      value: String(props.value).toUpperCase(),
      blurValue: String(props.value).toUpperCase()
    };

    _this.inputId = 'rc-editable-input-' + idCounter++;
    return _this;
  }

  _createClass(EditableInput, [{
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      if (this.props.value !== this.state.value && (prevProps.value !== this.props.value || prevState.value !== this.state.value)) {
        if (this.input === document.activeElement) {
          this.setState({ blurValue: String(this.props.value).toUpperCase() });
        } else {
          this.setState({ value: String(this.props.value).toUpperCase(), blurValue: !this.state.blurValue && String(this.props.value).toUpperCase() });
        }
      }
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'getValueObjectWithLabel',
    value: function getValueObjectWithLabel(value) {
      return _defineProperty({}, this.props.label, value);
    }
  }, {
    key: 'getArrowOffset',
    value: function getArrowOffset() {
      return this.props.arrowOffset || DEFAULT_ARROW_OFFSET;
    }
  }, {
    key: 'setUpdatedValue',
    value: function setUpdatedValue(value, e) {
      var onChangeValue = this.props.label ? this.getValueObjectWithLabel(value) : value;
      this.props.onChange && this.props.onChange(onChangeValue, e);

      this.setState({ value: value });
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var styles = (0, _reactcss2.default)({
        'default': {
          wrap: {
            position: 'relative'
          }
        },
        'user-override': {
          wrap: this.props.style && this.props.style.wrap ? this.props.style.wrap : {},
          input: this.props.style && this.props.style.input ? this.props.style.input : {},
          label: this.props.style && this.props.style.label ? this.props.style.label : {}
        },
        'dragLabel-true': {
          label: {
            cursor: 'ew-resize'
          }
        }
      }, {
        'user-override': true
      }, this.props);

      return _react2.default.createElement(
        'div',
        { style: styles.wrap },
        _react2.default.createElement('input', {
          id: this.inputId,
          style: styles.input,
          ref: function ref(input) {
            return _this2.input = input;
          },
          value: this.state.value,
          onKeyDown: this.handleKeyDown,
          onChange: this.handleChange,
          onBlur: this.handleBlur,
          placeholder: this.props.placeholder,
          spellCheck: 'false'
        }),
        this.props.label && !this.props.hideLabel ? _react2.default.createElement(
          'label',
          {
            htmlFor: this.inputId,
            style: styles.label,
            onMouseDown: this.handleMouseDown
          },
          this.props.label
        ) : null
      );
    }
  }]);

  return EditableInput;
}(_react.PureComponent || _react.Component);

exports["default"] = EditableInput;

/***/ }),

/***/ 99351:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Hue = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _hue = __webpack_require__(67209);

var hue = _interopRequireWildcard(_hue);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Hue = exports.Hue = function (_ref) {
  _inherits(Hue, _ref);

  function Hue() {
    var _ref2;

    var _temp, _this, _ret;

    _classCallCheck(this, Hue);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref2 = Hue.__proto__ || Object.getPrototypeOf(Hue)).call.apply(_ref2, [this].concat(args))), _this), _this.handleChange = function (e) {
      var change = hue.calculateChange(e, _this.props.direction, _this.props.hsl, _this.container);
      change && typeof _this.props.onChange === 'function' && _this.props.onChange(change, e);
    }, _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      window.addEventListener('mousemove', _this.handleChange);
      window.addEventListener('mouseup', _this.handleMouseUp);
    }, _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(Hue, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.unbindEventListeners();
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      window.removeEventListener('mousemove', this.handleChange);
      window.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _props$direction = this.props.direction,
          direction = _props$direction === undefined ? 'horizontal' : _props$direction;


      var styles = (0, _reactcss2.default)({
        'default': {
          hue: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius,
            boxShadow: this.props.shadow
          },
          container: {
            padding: '0 2px',
            position: 'relative',
            height: '100%',
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            left: this.props.hsl.h * 100 / 360 + '%'
          },
          slider: {
            marginTop: '1px',
            width: '4px',
            borderRadius: '1px',
            height: '8px',
            boxShadow: '0 0 2px rgba(0, 0, 0, .6)',
            background: '#fff',
            transform: 'translateX(-2px)'
          }
        },
        'vertical': {
          pointer: {
            left: '0px',
            top: -(this.props.hsl.h * 100 / 360) + 100 + '%'
          }
        }
      }, { vertical: direction === 'vertical' });

      return _react2.default.createElement(
        'div',
        { style: styles.hue },
        _react2.default.createElement(
          'div',
          {
            className: 'hue-' + direction,
            style: styles.container,
            ref: function ref(container) {
              return _this2.container = container;
            },
            onMouseDown: this.handleMouseDown,
            onTouchMove: this.handleChange,
            onTouchStart: this.handleChange
          },
          _react2.default.createElement(
            'style',
            null,
            '\n            .hue-horizontal {\n              background: linear-gradient(to right, #f00 0%, #ff0 17%, #0f0\n                33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to right, #f00 0%, #ff0\n                17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n\n            .hue-vertical {\n              background: linear-gradient(to top, #f00 0%, #ff0 17%, #0f0 33%,\n                #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n              background: -webkit-linear-gradient(to top, #f00 0%, #ff0 17%,\n                #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%);\n            }\n          '
          ),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.slider })
          )
        )
      );
    }
  }]);

  return Hue;
}(_react.PureComponent || _react.Component);

exports["default"] = Hue;

/***/ }),

/***/ 24734:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Raised = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Raised = exports.Raised = function Raised(_ref) {
  var zDepth = _ref.zDepth,
      radius = _ref.radius,
      background = _ref.background,
      children = _ref.children,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      wrap: {
        position: 'relative',
        display: 'inline-block'
      },
      content: {
        position: 'relative'
      },
      bg: {
        absolute: '0px 0px 0px 0px',
        boxShadow: '0 ' + zDepth + 'px ' + zDepth * 4 + 'px rgba(0,0,0,.24)',
        borderRadius: radius,
        background: background
      }
    },
    'zDepth-0': {
      bg: {
        boxShadow: 'none'
      }
    },

    'zDepth-1': {
      bg: {
        boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)'
      }
    },
    'zDepth-2': {
      bg: {
        boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)'
      }
    },
    'zDepth-3': {
      bg: {
        boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)'
      }
    },
    'zDepth-4': {
      bg: {
        boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)'
      }
    },
    'zDepth-5': {
      bg: {
        boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)'
      }
    },
    'square': {
      bg: {
        borderRadius: '0'
      }
    },
    'circle': {
      bg: {
        borderRadius: '50%'
      }
    }
  }, passedStyles), { 'zDepth-1': zDepth === 1 });

  return _react2.default.createElement(
    'div',
    { style: styles.wrap },
    _react2.default.createElement('div', { style: styles.bg }),
    _react2.default.createElement(
      'div',
      { style: styles.content },
      children
    )
  );
};

Raised.propTypes = {
  background: _propTypes2.default.string,
  zDepth: _propTypes2.default.oneOf([0, 1, 2, 3, 4, 5]),
  radius: _propTypes2.default.number,
  styles: _propTypes2.default.object
};

Raised.defaultProps = {
  background: '#fff',
  zDepth: 1,
  radius: 2,
  styles: {}
};

exports["default"] = Raised;

/***/ }),

/***/ 43056:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Saturation = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _throttle = __webpack_require__(41588);

var _throttle2 = _interopRequireDefault(_throttle);

var _saturation = __webpack_require__(39351);

var saturation = _interopRequireWildcard(_saturation);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Saturation = exports.Saturation = function (_ref) {
  _inherits(Saturation, _ref);

  function Saturation(props) {
    _classCallCheck(this, Saturation);

    var _this = _possibleConstructorReturn(this, (Saturation.__proto__ || Object.getPrototypeOf(Saturation)).call(this, props));

    _this.handleChange = function (e) {
      typeof _this.props.onChange === 'function' && _this.throttle(_this.props.onChange, saturation.calculateChange(e, _this.props.hsl, _this.container), e);
    };

    _this.handleMouseDown = function (e) {
      _this.handleChange(e);
      var renderWindow = _this.getContainerRenderWindow();
      renderWindow.addEventListener('mousemove', _this.handleChange);
      renderWindow.addEventListener('mouseup', _this.handleMouseUp);
    };

    _this.handleMouseUp = function () {
      _this.unbindEventListeners();
    };

    _this.throttle = (0, _throttle2.default)(function (fn, data, e) {
      fn(data, e);
    }, 50);
    return _this;
  }

  _createClass(Saturation, [{
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      this.throttle.cancel();
      this.unbindEventListeners();
    }
  }, {
    key: 'getContainerRenderWindow',
    value: function getContainerRenderWindow() {
      var container = this.container;

      var renderWindow = window;
      while (!renderWindow.document.contains(container) && renderWindow.parent !== renderWindow) {
        renderWindow = renderWindow.parent;
      }
      return renderWindow;
    }
  }, {
    key: 'unbindEventListeners',
    value: function unbindEventListeners() {
      var renderWindow = this.getContainerRenderWindow();
      renderWindow.removeEventListener('mousemove', this.handleChange);
      renderWindow.removeEventListener('mouseup', this.handleMouseUp);
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var _ref2 = this.props.style || {},
          color = _ref2.color,
          white = _ref2.white,
          black = _ref2.black,
          pointer = _ref2.pointer,
          circle = _ref2.circle;

      var styles = (0, _reactcss2.default)({
        'default': {
          color: {
            absolute: '0px 0px 0px 0px',
            background: 'hsl(' + this.props.hsl.h + ',100%, 50%)',
            borderRadius: this.props.radius
          },
          white: {
            absolute: '0px 0px 0px 0px',
            borderRadius: this.props.radius
          },
          black: {
            absolute: '0px 0px 0px 0px',
            boxShadow: this.props.shadow,
            borderRadius: this.props.radius
          },
          pointer: {
            position: 'absolute',
            top: -(this.props.hsv.v * 100) + 100 + '%',
            left: this.props.hsv.s * 100 + '%',
            cursor: 'default'
          },
          circle: {
            width: '4px',
            height: '4px',
            boxShadow: '0 0 0 1.5px #fff, inset 0 0 1px 1px rgba(0,0,0,.3),\n            0 0 1px 2px rgba(0,0,0,.4)',
            borderRadius: '50%',
            cursor: 'hand',
            transform: 'translate(-2px, -2px)'
          }
        },
        'custom': {
          color: color,
          white: white,
          black: black,
          pointer: pointer,
          circle: circle
        }
      }, { 'custom': !!this.props.style });

      return _react2.default.createElement(
        'div',
        {
          style: styles.color,
          ref: function ref(container) {
            return _this2.container = container;
          },
          onMouseDown: this.handleMouseDown,
          onTouchMove: this.handleChange,
          onTouchStart: this.handleChange
        },
        _react2.default.createElement(
          'style',
          null,
          '\n          .saturation-white {\n            background: -webkit-linear-gradient(to right, #fff, rgba(255,255,255,0));\n            background: linear-gradient(to right, #fff, rgba(255,255,255,0));\n          }\n          .saturation-black {\n            background: -webkit-linear-gradient(to top, #000, rgba(0,0,0,0));\n            background: linear-gradient(to top, #000, rgba(0,0,0,0));\n          }\n        '
        ),
        _react2.default.createElement(
          'div',
          { style: styles.white, className: 'saturation-white' },
          _react2.default.createElement('div', { style: styles.black, className: 'saturation-black' }),
          _react2.default.createElement(
            'div',
            { style: styles.pointer },
            this.props.pointer ? _react2.default.createElement(this.props.pointer, this.props) : _react2.default.createElement('div', { style: styles.circle })
          )
        )
      );
    }
  }]);

  return Saturation;
}(_react.PureComponent || _react.Component);

exports["default"] = Saturation;

/***/ }),

/***/ 53426:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Swatch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _interaction = __webpack_require__(13410);

var _Checkboard = __webpack_require__(76988);

var _Checkboard2 = _interopRequireDefault(_Checkboard);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var ENTER = 13;

var Swatch = exports.Swatch = function Swatch(_ref) {
  var color = _ref.color,
      style = _ref.style,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onHover = _ref.onHover,
      _ref$title = _ref.title,
      title = _ref$title === undefined ? color : _ref$title,
      children = _ref.children,
      focus = _ref.focus,
      _ref$focusStyle = _ref.focusStyle,
      focusStyle = _ref$focusStyle === undefined ? {} : _ref$focusStyle;

  var transparent = color === 'transparent';
  var styles = (0, _reactcss2.default)({
    default: {
      swatch: _extends({
        background: color,
        height: '100%',
        width: '100%',
        cursor: 'pointer',
        position: 'relative',
        outline: 'none'
      }, style, focus ? focusStyle : {})
    }
  });

  var handleClick = function handleClick(e) {
    return onClick(color, e);
  };
  var handleKeyDown = function handleKeyDown(e) {
    return e.keyCode === ENTER && onClick(color, e);
  };
  var handleHover = function handleHover(e) {
    return onHover(color, e);
  };

  var optionalEvents = {};
  if (onHover) {
    optionalEvents.onMouseOver = handleHover;
  }

  return _react2.default.createElement(
    'div',
    _extends({
      style: styles.swatch,
      onClick: handleClick,
      title: title,
      tabIndex: 0,
      onKeyDown: handleKeyDown
    }, optionalEvents),
    children,
    transparent && _react2.default.createElement(_Checkboard2.default, {
      borderRadius: styles.swatch.borderRadius,
      boxShadow: 'inset 0 0 0 1px rgba(0,0,0,0.1)'
    })
  );
};

exports["default"] = (0, _interaction.handleFocus)(Swatch);

/***/ }),

/***/ 63128:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));

var _Alpha = __webpack_require__(82078);

Object.defineProperty(exports, "Alpha", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
}));

var _Checkboard = __webpack_require__(76988);

Object.defineProperty(exports, "Checkboard", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Checkboard).default;
  }
}));

var _EditableInput = __webpack_require__(66787);

Object.defineProperty(exports, "EditableInput", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_EditableInput).default;
  }
}));

var _Hue = __webpack_require__(99351);

Object.defineProperty(exports, "Hue", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
}));

var _Raised = __webpack_require__(24734);

Object.defineProperty(exports, "Raised", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Raised).default;
  }
}));

var _Saturation = __webpack_require__(43056);

Object.defineProperty(exports, "Saturation", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Saturation).default;
  }
}));

var _ColorWrap = __webpack_require__(19520);

Object.defineProperty(exports, "ColorWrap", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
}));

var _Swatch = __webpack_require__(53426);

Object.defineProperty(exports, "Swatch", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatch).default;
  }
}));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ }),

/***/ 18543:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Compact = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

var _CompactColor = __webpack_require__(83648);

var _CompactColor2 = _interopRequireDefault(_CompactColor);

var _CompactFields = __webpack_require__(67134);

var _CompactFields2 = _interopRequireDefault(_CompactFields);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Compact = exports.Compact = function Compact(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      Compact: {
        background: '#f6f6f6',
        radius: '4px'
      },
      compact: {
        paddingTop: '5px',
        paddingLeft: '5px',
        boxSizing: 'initial',
        width: '240px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else {
      onChange(data, e);
    }
  };

  return _react2.default.createElement(
    _common.Raised,
    { style: styles.Compact, styles: passedStyles },
    _react2.default.createElement(
      'div',
      { style: styles.compact, className: 'compact-picker ' + className },
      _react2.default.createElement(
        'div',
        null,
        (0, _map2.default)(colors, function (c) {
          return _react2.default.createElement(_CompactColor2.default, {
            key: c,
            color: c,
            active: c.toLowerCase() === hex,
            onClick: handleChange,
            onSwatchHover: onSwatchHover
          });
        }),
        _react2.default.createElement('div', { style: styles.clear })
      ),
      _react2.default.createElement(_CompactFields2.default, { hex: hex, rgb: rgb, onChange: handleChange })
    )
  );
};

Compact.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  styles: _propTypes2.default.object
};

Compact.defaultProps = {
  colors: ['#4D4D4D', '#999999', '#FFFFFF', '#F44E3B', '#FE9200', '#FCDC00', '#DBDF00', '#A4DD00', '#68CCCA', '#73D8FF', '#AEA1FF', '#FDA1FF', '#333333', '#808080', '#cccccc', '#D33115', '#E27300', '#FCC400', '#B0BC00', '#68BC00', '#16A5A5', '#009CE0', '#7B64FF', '#FA28FF', '#000000', '#666666', '#B3B3B3', '#9F0500', '#C45100', '#FB9E00', '#808900', '#194D33', '#0C797D', '#0062B1', '#653294', '#AB149E'],
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Compact);

/***/ }),

/***/ 83648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompactColor = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(36580);

var colorUtils = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactColor = exports.CompactColor = function CompactColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        background: color,
        width: '15px',
        height: '15px',
        float: 'left',
        marginRight: '5px',
        marginBottom: '5px',
        position: 'relative',
        cursor: 'pointer'
      },
      dot: {
        absolute: '5px 5px 5px 5px',
        background: colorUtils.getContrastingColor(color),
        borderRadius: '50%',
        opacity: '0'
      }
    },
    'active': {
      dot: {
        opacity: '1'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      dot: {
        background: '#000'
      }
    },
    'transparent': {
      dot: {
        background: '#000'
      }
    }
  }, { active: active, 'color-#FFFFFF': color === '#FFFFFF', 'transparent': color === 'transparent' });

  return _react2.default.createElement(
    _common.Swatch,
    {
      style: styles.color,
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement('div', { style: styles.dot })
  );
};

exports["default"] = CompactColor;

/***/ }),

/***/ 67134:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.CompactFields = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(63128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var CompactFields = exports.CompactFields = function CompactFields(_ref) {
  var hex = _ref.hex,
      rgb = _ref.rgb,
      onChange = _ref.onChange;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingBottom: '6px',
        paddingRight: '5px',
        position: 'relative'
      },
      active: {
        position: 'absolute',
        top: '6px',
        left: '5px',
        height: '9px',
        width: '9px',
        background: hex
      },
      HEXwrap: {
        flex: '6',
        position: 'relative'
      },
      HEXinput: {
        width: '80%',
        padding: '0px',
        paddingLeft: '20%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      HEXlabel: {
        display: 'none'
      },
      RGBwrap: {
        flex: '3',
        position: 'relative'
      },
      RGBinput: {
        width: '70%',
        padding: '0px',
        paddingLeft: '30%',
        border: 'none',
        outline: 'none',
        background: 'none',
        fontSize: '12px',
        color: '#333',
        height: '16px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '3px',
        left: '0px',
        lineHeight: '16px',
        textTransform: 'uppercase',
        fontSize: '12px',
        color: '#999'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else {
      onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement('div', { style: styles.active }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: 'hex',
      value: hex,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    })
  );
};

exports["default"] = CompactFields;

/***/ }),

/***/ 48842:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Github = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _GithubSwatch = __webpack_require__(35360);

var _GithubSwatch2 = _interopRequireDefault(_GithubSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Github = exports.Github = function Github(_ref) {
  var width = _ref.width,
      colors = _ref.colors,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '1px solid rgba(0,0,0,0.2)',
        boxShadow: '0 3px 12px rgba(0,0,0,0.15)',
        borderRadius: '4px',
        position: 'relative',
        padding: '5px',
        display: 'flex',
        flexWrap: 'wrap'
      },
      triangle: {
        position: 'absolute',
        border: '7px solid transparent',
        borderBottomColor: '#fff'
      },
      triangleShadow: {
        position: 'absolute',
        border: '8px solid transparent',
        borderBottomColor: 'rgba(0,0,0,0.15)'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-14px',
        left: '10px'
      },
      triangleShadow: {
        top: '-16px',
        left: '9px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-14px',
        right: '10px'
      },
      triangleShadow: {
        top: '-16px',
        right: '9px'
      }
    },
    'bottom-left-triangle': {
      triangle: {
        top: '35px',
        left: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        left: '9px',
        transform: 'rotate(180deg)'
      }
    },
    'bottom-right-triangle': {
      triangle: {
        top: '35px',
        right: '10px',
        transform: 'rotate(180deg)'
      },
      triangleShadow: {
        top: '37px',
        right: '9px',
        transform: 'rotate(180deg)'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right',
    'bottom-left-triangle': triangle === 'bottom-left',
    'bottom-right-triangle': triangle === 'bottom-right'
  });

  var handleChange = function handleChange(hex, e) {
    return onChange({ hex: hex, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'github-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    (0, _map2.default)(colors, function (c) {
      return _react2.default.createElement(_GithubSwatch2.default, {
        color: c,
        key: c,
        onClick: handleChange,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

Github.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right', 'bottom-left', 'bottom-right']),
  styles: _propTypes2.default.object
};

Github.defaultProps = {
  width: 200,
  colors: ['#B80000', '#DB3E00', '#FCCB00', '#008B02', '#006B76', '#1273DE', '#004DCF', '#5300EB', '#EB9694', '#FAD0C3', '#FEF3BD', '#C1E1C5', '#BEDADC', '#C4DEF6', '#BED3F3', '#D4C4FB'],
  triangle: 'top-left',
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Github);

/***/ }),

/***/ 35360:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GithubSwatch = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(63128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GithubSwatch = exports.GithubSwatch = function GithubSwatch(_ref) {
  var hover = _ref.hover,
      color = _ref.color,
      onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover;

  var hoverSwatch = {
    position: 'relative',
    zIndex: '2',
    outline: '2px solid #fff',
    boxShadow: '0 0 5px 2px rgba(0,0,0,0.25)'
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        width: '25px',
        height: '25px',
        fontSize: '0'
      }
    },
    'hover': {
      swatch: hoverSwatch
    }
  }, { hover: hover });

  return _react2.default.createElement(
    'div',
    { style: styles.swatch },
    _react2.default.createElement(_common.Swatch, {
      color: color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: hoverSwatch
    })
  );
};

exports["default"] = (0, _reactcss.handleHover)(GithubSwatch);

/***/ }),

/***/ 89289:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Google = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _GooglePointerCircle = __webpack_require__(76753);

var _GooglePointerCircle2 = _interopRequireDefault(_GooglePointerCircle);

var _GooglePointer = __webpack_require__(94065);

var _GooglePointer2 = _interopRequireDefault(_GooglePointer);

var _GoogleFields = __webpack_require__(49155);

var _GoogleFields2 = _interopRequireDefault(_GoogleFields);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Google = exports.Google = function Google(_ref) {
  var width = _ref.width,
      onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hsv = _ref.hsv,
      hex = _ref.hex,
      header = _ref.header,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        width: width,
        background: '#fff',
        border: '1px solid #dfe1e5',
        boxSizing: 'initial',
        display: 'flex',
        flexWrap: 'wrap',
        borderRadius: '8px 8px 0px 0px'
      },
      head: {
        height: '57px',
        width: '100%',
        paddingTop: '16px',
        paddingBottom: '16px',
        paddingLeft: '16px',
        fontSize: '20px',
        boxSizing: 'border-box',
        fontFamily: 'Roboto-Regular,HelveticaNeue,Arial,sans-serif'
      },
      saturation: {
        width: '70%',
        padding: '0px',
        position: 'relative',
        overflow: 'hidden'
      },
      swatch: {
        width: '30%',
        height: '228px',
        padding: '0px',
        background: 'rgba(' + rgb.r + ', ' + rgb.g + ', ' + rgb.b + ', 1)',
        position: 'relative',
        overflow: 'hidden'
      },
      body: {
        margin: 'auto',
        width: '95%'
      },
      controls: {
        display: 'flex',
        boxSizing: 'border-box',
        height: '52px',
        paddingTop: '22px'
      },
      color: {
        width: '32px'
      },
      hue: {
        height: '8px',
        position: 'relative',
        margin: '0px 16px 0px 16px',
        width: '100%'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));
  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'google-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.head },
      header
    ),
    _react2.default.createElement('div', { style: styles.swatch }),
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        hsl: hsl,
        hsv: hsv,
        pointer: _GooglePointerCircle2.default,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      _react2.default.createElement(
        'div',
        { style: styles.controls, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            radius: '4px',
            pointer: _GooglePointer2.default,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(_GoogleFields2.default, {
        rgb: rgb,
        hsl: hsl,
        hex: hex,
        hsv: hsv,
        onChange: onChange
      })
    )
  );
};

Google.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  styles: _propTypes2.default.object,
  header: _propTypes2.default.string

};

Google.defaultProps = {
  width: 652,
  styles: {},
  header: 'Color picker'
};

exports["default"] = (0, _common.ColorWrap)(Google);

/***/ }),

/***/ 49155:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GoogleFields = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GoogleFields = exports.GoogleFields = function GoogleFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      hsv = _ref.hsv;


  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.rgb) {
      var values = data.rgb.split(',');
      color.isvalidColorString(data.rgb, 'rgb') && onChange({
        r: values[0],
        g: values[1],
        b: values[2],
        a: 1,
        source: 'rgb'
      }, e);
    } else if (data.hsv) {
      var _values = data.hsv.split(',');
      if (color.isvalidColorString(data.hsv, 'hsv')) {
        _values[2] = _values[2].replace('%', '');
        _values[1] = _values[1].replace('%', '');
        _values[0] = _values[0].replace('°', '');
        if (_values[1] == 1) {
          _values[1] = 0.01;
        } else if (_values[2] == 1) {
          _values[2] = 0.01;
        }
        onChange({
          h: Number(_values[0]),
          s: Number(_values[1]),
          v: Number(_values[2]),
          source: 'hsv'
        }, e);
      }
    } else if (data.hsl) {
      var _values2 = data.hsl.split(',');
      if (color.isvalidColorString(data.hsl, 'hsl')) {
        _values2[2] = _values2[2].replace('%', '');
        _values2[1] = _values2[1].replace('%', '');
        _values2[0] = _values2[0].replace('°', '');
        if (hsvValue[1] == 1) {
          hsvValue[1] = 0.01;
        } else if (hsvValue[2] == 1) {
          hsvValue[2] = 0.01;
        }
        onChange({
          h: Number(_values2[0]),
          s: Number(_values2[1]),
          v: Number(_values2[2]),
          source: 'hsl'
        }, e);
      }
    }
  };

  var styles = (0, _reactcss2.default)({
    'default': {
      wrap: {
        display: 'flex',
        height: '100px',
        marginTop: '4px'
      },
      fields: {
        width: '100%'
      },
      column: {
        paddingTop: '10px',
        display: 'flex',
        justifyContent: 'space-between'
      },
      double: {
        padding: '0px 4.4px',
        boxSizing: 'border-box'
      },
      input: {
        width: '100%',
        height: '38px',
        boxSizing: 'border-box',
        padding: '4px 10% 3px',
        textAlign: 'center',
        border: '1px solid #dadce0',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      input2: {
        height: '38px',
        width: '100%',
        border: '1px solid #dadce0',
        boxSizing: 'border-box',
        fontSize: '11px',
        textTransform: 'lowercase',
        borderRadius: '5px',
        outline: 'none',
        paddingLeft: '10px',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      label: {
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '35px',
        top: '-6px',
        left: '0',
        right: '0',
        marginLeft: 'auto',
        marginRight: 'auto',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      label2: {
        left: '10px',
        textAlign: 'center',
        fontSize: '12px',
        background: '#fff',
        position: 'absolute',
        textTransform: 'uppercase',
        color: '#3c4043',
        width: '32px',
        top: '-6px',
        fontFamily: 'Roboto,Arial,sans-serif'
      },
      single: {
        flexGrow: '1',
        margin: '0px 4.4px'
      }
    }
  });

  var rgbValue = rgb.r + ', ' + rgb.g + ', ' + rgb.b;
  var hslValue = Math.round(hsl.h) + '\xB0, ' + Math.round(hsl.s * 100) + '%, ' + Math.round(hsl.l * 100) + '%';
  var hsvValue = Math.round(hsv.h) + '\xB0, ' + Math.round(hsv.s * 100) + '%, ' + Math.round(hsv.v * 100) + '%';

  return _react2.default.createElement(
    'div',
    { style: styles.wrap, className: 'flexbox-fix' },
    _react2.default.createElement(
      'div',
      { style: styles.fields },
      _react2.default.createElement(
        'div',
        { style: styles.double },
        _react2.default.createElement(_common.EditableInput, {
          style: { input: styles.input, label: styles.label },
          label: 'hex',
          value: hex,
          onChange: handleChange
        })
      ),
      _react2.default.createElement(
        'div',
        { style: styles.column },
        _react2.default.createElement(
          'div',
          { style: styles.single },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: 'rgb',
            value: rgbValue,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.single },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: 'hsv',
            value: hsvValue,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.single },
          _react2.default.createElement(_common.EditableInput, {
            style: { input: styles.input2, label: styles.label2 },
            label: 'hsl',
            value: hslValue,
            onChange: handleChange
          })
        )
      )
    )
  );
};

exports["default"] = GoogleFields;

/***/ }),

/***/ 94065:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GooglePointer = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GooglePointer = exports.GooglePointer = function GooglePointer(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        transform: 'translate(-10px, -7px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', 100%, 50%)',
        border: '2px white solid'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

GooglePointer.propTypes = {
  hsl: _propTypes2.default.shape({
    h: _propTypes2.default.number,
    s: _propTypes2.default.number,
    l: _propTypes2.default.number,
    a: _propTypes2.default.number
  })
};

GooglePointer.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 }
};

exports["default"] = GooglePointer;

/***/ }),

/***/ 76753:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.GooglePointerCircle = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var GooglePointerCircle = exports.GooglePointerCircle = function GooglePointerCircle(props) {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '20px',
        height: '20px',
        borderRadius: '22px',
        border: '2px #fff solid',
        transform: 'translate(-12px, -13px)',
        background: 'hsl(' + Math.round(props.hsl.h) + ', ' + Math.round(props.hsl.s * 100) + '%, ' + Math.round(props.hsl.l * 100) + '%)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

GooglePointerCircle.propTypes = {
  hsl: _propTypes2.default.shape({
    h: _propTypes2.default.number,
    s: _propTypes2.default.number,
    l: _propTypes2.default.number,
    a: _propTypes2.default.number
  })
};

GooglePointerCircle.defaultProps = {
  hsl: { a: 1, h: 249.94, l: 0.2, s: 0.50 }
};

exports["default"] = GooglePointerCircle;

/***/ }),

/***/ 11801:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.HuePicker = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _HuePointer = __webpack_require__(48718);

var _HuePointer2 = _interopRequireDefault(_HuePointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var HuePicker = exports.HuePicker = function HuePicker(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      hsl = _ref.hsl,
      direction = _ref.direction,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        position: 'relative',
        width: width,
        height: height
      },
      hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  // Overwrite to provide pure hue color
  var handleChange = function handleChange(data) {
    return onChange({ a: 1, h: data.h, l: 0.5, s: 1 });
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'hue-picker ' + className },
    _react2.default.createElement(_common.Hue, _extends({}, styles.hue, {
      hsl: hsl,
      pointer: pointer,
      onChange: handleChange,
      direction: direction
    }))
  );
};

HuePicker.propTypes = {
  styles: _propTypes2.default.object
};
HuePicker.defaultProps = {
  width: '316px',
  height: '16px',
  direction: 'horizontal',
  pointer: _HuePointer2.default,
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(HuePicker);

/***/ }),

/***/ 48718:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderPointer = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer(_ref) {
  var direction = _ref.direction;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '18px',
        height: '18px',
        borderRadius: '50%',
        transform: 'translate(-9px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    },
    'vertical': {
      picker: {
        transform: 'translate(-3px, -9px)'
      }
    }
  }, { vertical: direction === 'vertical' });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = SliderPointer;

/***/ }),

/***/ 88811:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Material = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Material = exports.Material = function Material(_ref) {
  var onChange = _ref.onChange,
      hex = _ref.hex,
      rgb = _ref.rgb,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      material: {
        width: '98px',
        height: '98px',
        padding: '16px',
        fontFamily: 'Roboto'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '2px solid ' + hex,
        outline: 'none',
        height: '30px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      Hex: {
        style: {}
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        width: '100%',
        marginTop: '12px',
        fontSize: '15px',
        color: '#333',
        padding: '0px',
        border: '0px',
        borderBottom: '1px solid #eee',
        outline: 'none',
        height: '30px'
      },
      RGBlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        fontSize: '11px',
        color: '#999999',
        textTransform: 'capitalize'
      },
      split: {
        display: 'flex',
        marginRight: '-10px',
        paddingTop: '11px'
      },
      third: {
        flex: '1',
        paddingRight: '10px'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    _common.Raised,
    { styles: passedStyles },
    _react2.default.createElement(
      'div',
      { style: styles.material, className: 'material-picker ' + className },
      _react2.default.createElement(_common.EditableInput, {
        style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
        label: 'hex',
        value: hex,
        onChange: handleChange
      }),
      _react2.default.createElement(
        'div',
        { style: styles.split, className: 'flexbox-fix' },
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'r', value: rgb.r,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'g',
            value: rgb.g,
            onChange: handleChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.third },
          _react2.default.createElement(_common.EditableInput, {
            style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
            label: 'b',
            value: rgb.b,
            onChange: handleChange
          })
        )
      )
    )
  );
};

exports["default"] = (0, _common.ColorWrap)(Material);

/***/ }),

/***/ 5189:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Photoshop = undefined;

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _PhotoshopFields = __webpack_require__(16267);

var _PhotoshopFields2 = _interopRequireDefault(_PhotoshopFields);

var _PhotoshopPointerCircle = __webpack_require__(36257);

var _PhotoshopPointerCircle2 = _interopRequireDefault(_PhotoshopPointerCircle);

var _PhotoshopPointer = __webpack_require__(79238);

var _PhotoshopPointer2 = _interopRequireDefault(_PhotoshopPointer);

var _PhotoshopButton = __webpack_require__(51082);

var _PhotoshopButton2 = _interopRequireDefault(_PhotoshopButton);

var _PhotoshopPreviews = __webpack_require__(90169);

var _PhotoshopPreviews2 = _interopRequireDefault(_PhotoshopPreviews);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Photoshop = exports.Photoshop = function (_React$Component) {
  _inherits(Photoshop, _React$Component);

  function Photoshop(props) {
    _classCallCheck(this, Photoshop);

    var _this = _possibleConstructorReturn(this, (Photoshop.__proto__ || Object.getPrototypeOf(Photoshop)).call(this));

    _this.state = {
      currentColor: props.hex
    };
    return _this;
  }

  _createClass(Photoshop, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          _props$styles = _props.styles,
          passedStyles = _props$styles === undefined ? {} : _props$styles,
          _props$className = _props.className,
          className = _props$className === undefined ? '' : _props$className;

      var styles = (0, _reactcss2.default)((0, _merge2.default)({
        'default': {
          picker: {
            background: '#DCDCDC',
            borderRadius: '4px',
            boxShadow: '0 0 0 1px rgba(0,0,0,.25), 0 8px 16px rgba(0,0,0,.15)',
            boxSizing: 'initial',
            width: '513px'
          },
          head: {
            backgroundImage: 'linear-gradient(-180deg, #F0F0F0 0%, #D4D4D4 100%)',
            borderBottom: '1px solid #B1B1B1',
            boxShadow: 'inset 0 1px 0 0 rgba(255,255,255,.2), inset 0 -1px 0 0 rgba(0,0,0,.02)',
            height: '23px',
            lineHeight: '24px',
            borderRadius: '4px 4px 0 0',
            fontSize: '13px',
            color: '#4D4D4D',
            textAlign: 'center'
          },
          body: {
            padding: '15px 15px 0',
            display: 'flex'
          },
          saturation: {
            width: '256px',
            height: '256px',
            position: 'relative',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0',
            overflow: 'hidden'
          },
          hue: {
            position: 'relative',
            height: '256px',
            width: '19px',
            marginLeft: '10px',
            border: '2px solid #B3B3B3',
            borderBottom: '2px solid #F0F0F0'
          },
          controls: {
            width: '180px',
            marginLeft: '10px'
          },
          top: {
            display: 'flex'
          },
          previews: {
            width: '60px'
          },
          actions: {
            flex: '1',
            marginLeft: '20px'
          }
        }
      }, passedStyles));

      return _react2.default.createElement(
        'div',
        { style: styles.picker, className: 'photoshop-picker ' + className },
        _react2.default.createElement(
          'div',
          { style: styles.head },
          this.props.header
        ),
        _react2.default.createElement(
          'div',
          { style: styles.body, className: 'flexbox-fix' },
          _react2.default.createElement(
            'div',
            { style: styles.saturation },
            _react2.default.createElement(_common.Saturation, {
              hsl: this.props.hsl,
              hsv: this.props.hsv,
              pointer: _PhotoshopPointerCircle2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.hue },
            _react2.default.createElement(_common.Hue, {
              direction: 'vertical',
              hsl: this.props.hsl,
              pointer: _PhotoshopPointer2.default,
              onChange: this.props.onChange
            })
          ),
          _react2.default.createElement(
            'div',
            { style: styles.controls },
            _react2.default.createElement(
              'div',
              { style: styles.top, className: 'flexbox-fix' },
              _react2.default.createElement(
                'div',
                { style: styles.previews },
                _react2.default.createElement(_PhotoshopPreviews2.default, {
                  rgb: this.props.rgb,
                  currentColor: this.state.currentColor
                })
              ),
              _react2.default.createElement(
                'div',
                { style: styles.actions },
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'OK', onClick: this.props.onAccept, active: true }),
                _react2.default.createElement(_PhotoshopButton2.default, { label: 'Cancel', onClick: this.props.onCancel }),
                _react2.default.createElement(_PhotoshopFields2.default, {
                  onChange: this.props.onChange,
                  rgb: this.props.rgb,
                  hsv: this.props.hsv,
                  hex: this.props.hex
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Photoshop;
}(_react2.default.Component);

Photoshop.propTypes = {
  header: _propTypes2.default.string,
  styles: _propTypes2.default.object
};

Photoshop.defaultProps = {
  header: 'Color Picker',
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Photoshop);

/***/ }),

/***/ 51082:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopButton = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopButton = exports.PhotoshopButton = function PhotoshopButton(_ref) {
  var onClick = _ref.onClick,
      label = _ref.label,
      children = _ref.children,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      button: {
        backgroundImage: 'linear-gradient(-180deg, #FFFFFF 0%, #E6E6E6 100%)',
        border: '1px solid #878787',
        borderRadius: '2px',
        height: '20px',
        boxShadow: '0 1px 0 0 #EAEAEA',
        fontSize: '14px',
        color: '#000',
        lineHeight: '20px',
        textAlign: 'center',
        marginBottom: '10px',
        cursor: 'pointer'
      }
    },
    'active': {
      button: {
        boxShadow: '0 0 0 1px #878787'
      }
    }
  }, { active: active });

  return _react2.default.createElement(
    'div',
    { style: styles.button, onClick: onClick },
    label || children
  );
};

exports["default"] = PhotoshopButton;

/***/ }),

/***/ 16267:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPicker = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPicker = exports.PhotoshopPicker = function PhotoshopPicker(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsv = _ref.hsv,
      hex = _ref.hex;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        paddingTop: '5px',
        paddingBottom: '9px',
        width: '80px',
        position: 'relative'
      },
      divider: {
        height: '5px'
      },
      RGBwrap: {
        position: 'relative'
      },
      RGBinput: {
        marginLeft: '40%',
        width: '40%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '5px',
        fontSize: '13px',
        paddingLeft: '3px',
        marginRight: '10px'
      },
      RGBlabel: {
        left: '0px',
        top: '0px',
        width: '34px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px',
        position: 'absolute'
      },
      HEXwrap: {
        position: 'relative'
      },
      HEXinput: {
        marginLeft: '20%',
        width: '80%',
        height: '18px',
        border: '1px solid #888888',
        boxShadow: 'inset 0 1px 1px rgba(0,0,0,.1), 0 1px 0 0 #ECECEC',
        marginBottom: '6px',
        fontSize: '13px',
        paddingLeft: '3px'
      },
      HEXlabel: {
        position: 'absolute',
        top: '0px',
        left: '0px',
        width: '14px',
        textTransform: 'uppercase',
        fontSize: '13px',
        height: '18px',
        lineHeight: '22px'
      },
      fieldSymbols: {
        position: 'absolute',
        top: '5px',
        right: '-7px',
        fontSize: '13px'
      },
      symbol: {
        height: '20px',
        lineHeight: '22px',
        paddingBottom: '7px'
      }
    }
  });

  var handleChange = function handleChange(data, e) {
    if (data['#']) {
      color.isValidHex(data['#']) && onChange({
        hex: data['#'],
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        source: 'rgb'
      }, e);
    } else if (data.h || data.s || data.v) {
      onChange({
        h: data.h || hsv.h,
        s: data.s || hsv.s,
        v: data.v || hsv.v,
        source: 'hsv'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields },
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'h',
      value: Math.round(hsv.h),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 's',
      value: Math.round(hsv.s * 100),
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'v',
      value: Math.round(hsv.v * 100),
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'r',
      value: rgb.r,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'g',
      value: rgb.g,
      onChange: handleChange
    }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.RGBwrap, input: styles.RGBinput, label: styles.RGBlabel },
      label: 'b',
      value: rgb.b,
      onChange: handleChange
    }),
    _react2.default.createElement('div', { style: styles.divider }),
    _react2.default.createElement(_common.EditableInput, {
      style: { wrap: styles.HEXwrap, input: styles.HEXinput, label: styles.HEXlabel },
      label: '#',
      value: hex.replace('#', ''),
      onChange: handleChange
    }),
    _react2.default.createElement(
      'div',
      { style: styles.fieldSymbols },
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '\xB0'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      ),
      _react2.default.createElement(
        'div',
        { style: styles.symbol },
        '%'
      )
    )
  );
};

exports["default"] = PhotoshopPicker;

/***/ }),

/***/ 79238:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle() {
  var styles = (0, _reactcss2.default)({
    'default': {
      triangle: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '4px 0 4px 6px',
        borderColor: 'transparent transparent transparent #fff',
        position: 'absolute',
        top: '1px',
        left: '1px'
      },
      triangleBorder: {
        width: 0,
        height: 0,
        borderStyle: 'solid',
        borderWidth: '5px 0 5px 8px',
        borderColor: 'transparent transparent transparent #555'
      },

      left: {
        Extend: 'triangleBorder',
        transform: 'translate(-13px, -4px)'
      },
      leftInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      },

      right: {
        Extend: 'triangleBorder',
        transform: 'translate(20px, -14px) rotate(180deg)'
      },
      rightInside: {
        Extend: 'triangle',
        transform: 'translate(-8px, -5px)'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.pointer },
    _react2.default.createElement(
      'div',
      { style: styles.left },
      _react2.default.createElement('div', { style: styles.leftInside })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.right },
      _react2.default.createElement('div', { style: styles.rightInside })
    )
  );
};

exports["default"] = PhotoshopPointerCircle;

/***/ }),

/***/ 36257:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPointerCircle = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPointerCircle = exports.PhotoshopPointerCircle = function PhotoshopPointerCircle(_ref) {
  var hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '12px',
        height: '12px',
        borderRadius: '6px',
        boxShadow: 'inset 0 0 0 1px #fff',
        transform: 'translate(-6px, -6px)'
      }
    },
    'black-outline': {
      picker: {
        boxShadow: 'inset 0 0 0 1px #000'
      }
    }
  }, { 'black-outline': hsl.l > 0.5 });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = PhotoshopPointerCircle;

/***/ }),

/***/ 90169:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.PhotoshopPreviews = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var PhotoshopPreviews = exports.PhotoshopPreviews = function PhotoshopPreviews(_ref) {
  var rgb = _ref.rgb,
      currentColor = _ref.currentColor;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        border: '1px solid #B3B3B3',
        borderBottom: '1px solid #F0F0F0',
        marginBottom: '2px',
        marginTop: '1px'
      },
      new: {
        height: '34px',
        background: 'rgb(' + rgb.r + ',' + rgb.g + ', ' + rgb.b + ')',
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 1px 0 #000'
      },
      current: {
        height: '34px',
        background: currentColor,
        boxShadow: 'inset 1px 0 0 #000, inset -1px 0 0 #000, inset 0 -1px 0 #000'
      },
      label: {
        fontSize: '14px',
        color: '#000',
        textAlign: 'center'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    null,
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'new'
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement('div', { style: styles.new }),
      _react2.default.createElement('div', { style: styles.current })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.label },
      'current'
    )
  );
};

exports["default"] = PhotoshopPreviews;

/***/ }),

/***/ 26704:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Sketch = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _SketchFields = __webpack_require__(65974);

var _SketchFields2 = _interopRequireDefault(_SketchFields);

var _SketchPresetColors = __webpack_require__(68025);

var _SketchPresetColors2 = _interopRequireDefault(_SketchPresetColors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Sketch = exports.Sketch = function Sketch(_ref) {
  var width = _ref.width,
      rgb = _ref.rgb,
      hex = _ref.hex,
      hsv = _ref.hsv,
      hsl = _ref.hsl,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      disableAlpha = _ref.disableAlpha,
      presetColors = _ref.presetColors,
      renderers = _ref.renderers,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': _extends({
      picker: {
        width: width,
        padding: '10px 10px 0',
        boxSizing: 'initial',
        background: '#fff',
        borderRadius: '4px',
        boxShadow: '0 0 0 1px rgba(0,0,0,.15), 0 8px 16px rgba(0,0,0,.15)'
      },
      saturation: {
        width: '100%',
        paddingBottom: '75%',
        position: 'relative',
        overflow: 'hidden'
      },
      Saturation: {
        radius: '3px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      controls: {
        display: 'flex'
      },
      sliders: {
        padding: '4px 0',
        flex: '1'
      },
      color: {
        width: '24px',
        height: '24px',
        position: 'relative',
        marginTop: '4px',
        marginLeft: '4px',
        borderRadius: '3px'
      },
      activeColor: {
        absolute: '0px 0px 0px 0px',
        borderRadius: '2px',
        background: 'rgba(' + rgb.r + ',' + rgb.g + ',' + rgb.b + ',' + rgb.a + ')',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },
      hue: {
        position: 'relative',
        height: '10px',
        overflow: 'hidden'
      },
      Hue: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      },

      alpha: {
        position: 'relative',
        height: '10px',
        marginTop: '4px',
        overflow: 'hidden'
      },
      Alpha: {
        radius: '2px',
        shadow: 'inset 0 0 0 1px rgba(0,0,0,.15), inset 0 0 4px rgba(0,0,0,.25)'
      }
    }, passedStyles),
    'disableAlpha': {
      color: {
        height: '10px'
      },
      hue: {
        height: '10px'
      },
      alpha: {
        display: 'none'
      }
    }
  }, passedStyles), { disableAlpha: disableAlpha });

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'sketch-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.saturation },
      _react2.default.createElement(_common.Saturation, {
        style: styles.Saturation,
        hsl: hsl,
        hsv: hsv,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.controls, className: 'flexbox-fix' },
      _react2.default.createElement(
        'div',
        { style: styles.sliders },
        _react2.default.createElement(
          'div',
          { style: styles.hue },
          _react2.default.createElement(_common.Hue, {
            style: styles.Hue,
            hsl: hsl,
            onChange: onChange
          })
        ),
        _react2.default.createElement(
          'div',
          { style: styles.alpha },
          _react2.default.createElement(_common.Alpha, {
            style: styles.Alpha,
            rgb: rgb,
            hsl: hsl,
            renderers: renderers,
            onChange: onChange
          })
        )
      ),
      _react2.default.createElement(
        'div',
        { style: styles.color },
        _react2.default.createElement(_common.Checkboard, null),
        _react2.default.createElement('div', { style: styles.activeColor })
      )
    ),
    _react2.default.createElement(_SketchFields2.default, {
      rgb: rgb,
      hsl: hsl,
      hex: hex,
      onChange: onChange,
      disableAlpha: disableAlpha
    }),
    _react2.default.createElement(_SketchPresetColors2.default, {
      colors: presetColors,
      onClick: onChange,
      onSwatchHover: onSwatchHover
    })
  );
};

Sketch.propTypes = {
  disableAlpha: _propTypes2.default.bool,
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  styles: _propTypes2.default.object
};

Sketch.defaultProps = {
  disableAlpha: false,
  width: 200,
  styles: {},
  presetColors: ['#D0021B', '#F5A623', '#F8E71C', '#8B572A', '#7ED321', '#417505', '#BD10E0', '#9013FE', '#4A90E2', '#50E3C2', '#B8E986', '#000000', '#4A4A4A', '#9B9B9B', '#FFFFFF']
};

exports["default"] = (0, _common.ColorWrap)(Sketch);

/***/ }),

/***/ 65974:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SketchFields = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/* eslint-disable no-param-reassign */

var SketchFields = exports.SketchFields = function SketchFields(_ref) {
  var onChange = _ref.onChange,
      rgb = _ref.rgb,
      hsl = _ref.hsl,
      hex = _ref.hex,
      disableAlpha = _ref.disableAlpha;

  var styles = (0, _reactcss2.default)({
    'default': {
      fields: {
        display: 'flex',
        paddingTop: '4px'
      },
      single: {
        flex: '1',
        paddingLeft: '6px'
      },
      alpha: {
        flex: '1',
        paddingLeft: '6px'
      },
      double: {
        flex: '2'
      },
      input: {
        width: '80%',
        padding: '4px 10% 3px',
        border: 'none',
        boxShadow: 'inset 0 0 0 1px #ccc',
        fontSize: '11px'
      },
      label: {
        display: 'block',
        textAlign: 'center',
        fontSize: '11px',
        color: '#222',
        paddingTop: '3px',
        paddingBottom: '4px',
        textTransform: 'capitalize'
      }
    },
    'disableAlpha': {
      alpha: {
        display: 'none'
      }
    }
  }, { disableAlpha: disableAlpha });

  var handleChange = function handleChange(data, e) {
    if (data.hex) {
      color.isValidHex(data.hex) && onChange({
        hex: data.hex,
        source: 'hex'
      }, e);
    } else if (data.r || data.g || data.b) {
      onChange({
        r: data.r || rgb.r,
        g: data.g || rgb.g,
        b: data.b || rgb.b,
        a: rgb.a,
        source: 'rgb'
      }, e);
    } else if (data.a) {
      if (data.a < 0) {
        data.a = 0;
      } else if (data.a > 100) {
        data.a = 100;
      }

      data.a /= 100;
      onChange({
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: data.a,
        source: 'rgb'
      }, e);
    }
  };

  return _react2.default.createElement(
    'div',
    { style: styles.fields, className: 'flexbox-fix' },
    _react2.default.createElement(
      'div',
      { style: styles.double },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'hex',
        value: hex.replace('#', ''),
        onChange: handleChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'r',
        value: rgb.r,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'g',
        value: rgb.g,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.single },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'b',
        value: rgb.b,
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '255'
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.alpha },
      _react2.default.createElement(_common.EditableInput, {
        style: { input: styles.input, label: styles.label },
        label: 'a',
        value: Math.round(rgb.a * 100),
        onChange: handleChange,
        dragLabel: 'true',
        dragMax: '100'
      })
    )
  );
};

exports["default"] = SketchFields;

/***/ }),

/***/ 68025:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SketchPresetColors = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _common = __webpack_require__(63128);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SketchPresetColors = exports.SketchPresetColors = function SketchPresetColors(_ref) {
  var colors = _ref.colors,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover;

  var styles = (0, _reactcss2.default)({
    'default': {
      colors: {
        margin: '0 -10px',
        padding: '10px 0 0 10px',
        borderTop: '1px solid #eee',
        display: 'flex',
        flexWrap: 'wrap',
        position: 'relative'
      },
      swatchWrap: {
        width: '16px',
        height: '16px',
        margin: '0 10px 10px 0'
      },
      swatch: {
        borderRadius: '3px',
        boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15)'
      }
    },
    'no-presets': {
      colors: {
        display: 'none'
      }
    }
  }, {
    'no-presets': !colors || !colors.length
  });

  var handleClick = function handleClick(hex, e) {
    onClick({
      hex: hex,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.colors, className: 'flexbox-fix' },
    colors.map(function (colorObjOrString) {
      var c = typeof colorObjOrString === 'string' ? { color: colorObjOrString } : colorObjOrString;
      var key = '' + c.color + (c.title || '');
      return _react2.default.createElement(
        'div',
        { key: key, style: styles.swatchWrap },
        _react2.default.createElement(_common.Swatch, _extends({}, c, {
          style: styles.swatch,
          onClick: handleClick,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: 'inset 0 0 0 1px rgba(0,0,0,.15), 0 0 4px ' + c.color
          }
        }))
      );
    })
  );
};

SketchPresetColors.propTypes = {
  colors: _propTypes2.default.arrayOf(_propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.shape({
    color: _propTypes2.default.string,
    title: _propTypes2.default.string
  })])).isRequired
};

exports["default"] = SketchPresetColors;

/***/ }),

/***/ 41312:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Slider = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _common = __webpack_require__(63128);

var _SliderSwatches = __webpack_require__(67405);

var _SliderSwatches2 = _interopRequireDefault(_SliderSwatches);

var _SliderPointer = __webpack_require__(94046);

var _SliderPointer2 = _interopRequireDefault(_SliderPointer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Slider = exports.Slider = function Slider(_ref) {
  var hsl = _ref.hsl,
      onChange = _ref.onChange,
      pointer = _ref.pointer,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      hue: {
        height: '12px',
        position: 'relative'
      },
      Hue: {
        radius: '2px'
      }
    }
  }, passedStyles));

  return _react2.default.createElement(
    'div',
    { style: styles.wrap || {}, className: 'slider-picker ' + className },
    _react2.default.createElement(
      'div',
      { style: styles.hue },
      _react2.default.createElement(_common.Hue, {
        style: styles.Hue,
        hsl: hsl,
        pointer: pointer,
        onChange: onChange
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatches },
      _react2.default.createElement(_SliderSwatches2.default, { hsl: hsl, onClick: onChange })
    )
  );
};

Slider.propTypes = {
  styles: _propTypes2.default.object
};
Slider.defaultProps = {
  pointer: _SliderPointer2.default,
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Slider);

/***/ }),

/***/ 94046:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderPointer = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderPointer = exports.SliderPointer = function SliderPointer() {
  var styles = (0, _reactcss2.default)({
    'default': {
      picker: {
        width: '14px',
        height: '14px',
        borderRadius: '6px',
        transform: 'translate(-7px, -1px)',
        backgroundColor: 'rgb(248, 248, 248)',
        boxShadow: '0 1px 4px 0 rgba(0, 0, 0, 0.37)'
      }
    }
  });

  return _react2.default.createElement('div', { style: styles.picker });
};

exports["default"] = SliderPointer;

/***/ }),

/***/ 10269:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderSwatch = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatch = exports.SliderSwatch = function SliderSwatch(_ref) {
  var hsl = _ref.hsl,
      offset = _ref.offset,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      active = _ref.active,
      first = _ref.first,
      last = _ref.last;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatch: {
        height: '12px',
        background: 'hsl(' + hsl.h + ', 50%, ' + offset * 100 + '%)',
        cursor: 'pointer'
      }
    },
    'first': {
      swatch: {
        borderRadius: '2px 0 0 2px'
      }
    },
    'last': {
      swatch: {
        borderRadius: '0 2px 2px 0'
      }
    },
    'active': {
      swatch: {
        transform: 'scaleY(1.8)',
        borderRadius: '3.6px/2px'
      }
    }
  }, { active: active, first: first, last: last });

  var handleClick = function handleClick(e) {
    return onClick({
      h: hsl.h,
      s: 0.5,
      l: offset,
      source: 'hsl'
    }, e);
  };

  return _react2.default.createElement('div', { style: styles.swatch, onClick: handleClick });
};

exports["default"] = SliderSwatch;

/***/ }),

/***/ 67405:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SliderSwatches = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _SliderSwatch = __webpack_require__(10269);

var _SliderSwatch2 = _interopRequireDefault(_SliderSwatch);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SliderSwatches = exports.SliderSwatches = function SliderSwatches(_ref) {
  var onClick = _ref.onClick,
      hsl = _ref.hsl;

  var styles = (0, _reactcss2.default)({
    'default': {
      swatches: {
        marginTop: '20px'
      },
      swatch: {
        boxSizing: 'border-box',
        width: '20%',
        paddingRight: '1px',
        float: 'left'
      },
      clear: {
        clear: 'both'
      }
    }
  });

  // Acceptible difference in floating point equality
  var epsilon = 0.1;

  return _react2.default.createElement(
    'div',
    { style: styles.swatches },
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.80',
        active: Math.abs(hsl.l - 0.80) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick,
        first: true
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.65',
        active: Math.abs(hsl.l - 0.65) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.50',
        active: Math.abs(hsl.l - 0.50) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.35',
        active: Math.abs(hsl.l - 0.35) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick
      })
    ),
    _react2.default.createElement(
      'div',
      { style: styles.swatch },
      _react2.default.createElement(_SliderSwatch2.default, {
        hsl: hsl,
        offset: '.20',
        active: Math.abs(hsl.l - 0.20) < epsilon && Math.abs(hsl.s - 0.50) < epsilon,
        onClick: onClick,
        last: true
      })
    ),
    _react2.default.createElement('div', { style: styles.clear })
  );
};

exports["default"] = SliderSwatches;

/***/ }),

/***/ 297:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Swatches = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _materialColors = __webpack_require__(9974);

var material = _interopRequireWildcard(_materialColors);

var _common = __webpack_require__(63128);

var _SwatchesGroup = __webpack_require__(44815);

var _SwatchesGroup2 = _interopRequireDefault(_SwatchesGroup);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Swatches = exports.Swatches = function Swatches(_ref) {
  var width = _ref.width,
      height = _ref.height,
      onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      colors = _ref.colors,
      hex = _ref.hex,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      picker: {
        width: width,
        height: height
      },
      overflow: {
        height: height,
        overflowY: 'scroll'
      },
      body: {
        padding: '16px 0 6px 16px'
      },
      clear: {
        clear: 'both'
      }
    }
  }, passedStyles));

  var handleChange = function handleChange(data, e) {
    return onChange({ hex: data, source: 'hex' }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.picker, className: 'swatches-picker ' + className },
    _react2.default.createElement(
      _common.Raised,
      null,
      _react2.default.createElement(
        'div',
        { style: styles.overflow },
        _react2.default.createElement(
          'div',
          { style: styles.body },
          (0, _map2.default)(colors, function (group) {
            return _react2.default.createElement(_SwatchesGroup2.default, {
              key: group.toString(),
              group: group,
              active: hex,
              onClick: handleChange,
              onSwatchHover: onSwatchHover
            });
          }),
          _react2.default.createElement('div', { style: styles.clear })
        )
      )
    )
  );
};

Swatches.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  height: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.arrayOf(_propTypes2.default.string)),
  styles: _propTypes2.default.object

  /* eslint-disable max-len */
};Swatches.defaultProps = {
  width: 320,
  height: 240,
  colors: [[material.red['900'], material.red['700'], material.red['500'], material.red['300'], material.red['100']], [material.pink['900'], material.pink['700'], material.pink['500'], material.pink['300'], material.pink['100']], [material.purple['900'], material.purple['700'], material.purple['500'], material.purple['300'], material.purple['100']], [material.deepPurple['900'], material.deepPurple['700'], material.deepPurple['500'], material.deepPurple['300'], material.deepPurple['100']], [material.indigo['900'], material.indigo['700'], material.indigo['500'], material.indigo['300'], material.indigo['100']], [material.blue['900'], material.blue['700'], material.blue['500'], material.blue['300'], material.blue['100']], [material.lightBlue['900'], material.lightBlue['700'], material.lightBlue['500'], material.lightBlue['300'], material.lightBlue['100']], [material.cyan['900'], material.cyan['700'], material.cyan['500'], material.cyan['300'], material.cyan['100']], [material.teal['900'], material.teal['700'], material.teal['500'], material.teal['300'], material.teal['100']], ['#194D33', material.green['700'], material.green['500'], material.green['300'], material.green['100']], [material.lightGreen['900'], material.lightGreen['700'], material.lightGreen['500'], material.lightGreen['300'], material.lightGreen['100']], [material.lime['900'], material.lime['700'], material.lime['500'], material.lime['300'], material.lime['100']], [material.yellow['900'], material.yellow['700'], material.yellow['500'], material.yellow['300'], material.yellow['100']], [material.amber['900'], material.amber['700'], material.amber['500'], material.amber['300'], material.amber['100']], [material.orange['900'], material.orange['700'], material.orange['500'], material.orange['300'], material.orange['100']], [material.deepOrange['900'], material.deepOrange['700'], material.deepOrange['500'], material.deepOrange['300'], material.deepOrange['100']], [material.brown['900'], material.brown['700'], material.brown['500'], material.brown['300'], material.brown['100']], [material.blueGrey['900'], material.blueGrey['700'], material.blueGrey['500'], material.blueGrey['300'], material.blueGrey['100']], ['#000000', '#525252', '#969696', '#D9D9D9', '#FFFFFF']],
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Swatches);

/***/ }),

/***/ 92293:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SwatchesColor = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _color = __webpack_require__(36580);

var colorUtils = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

var _CheckIcon = __webpack_require__(57775);

var _CheckIcon2 = _interopRequireDefault(_CheckIcon);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesColor = exports.SwatchesColor = function SwatchesColor(_ref) {
  var color = _ref.color,
      _ref$onClick = _ref.onClick,
      onClick = _ref$onClick === undefined ? function () {} : _ref$onClick,
      onSwatchHover = _ref.onSwatchHover,
      first = _ref.first,
      last = _ref.last,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      color: {
        width: '40px',
        height: '24px',
        cursor: 'pointer',
        background: color,
        marginBottom: '1px'
      },
      check: {
        color: colorUtils.getContrastingColor(color),
        marginLeft: '8px',
        display: 'none'
      }
    },
    'first': {
      color: {
        overflow: 'hidden',
        borderRadius: '2px 2px 0 0'
      }
    },
    'last': {
      color: {
        overflow: 'hidden',
        borderRadius: '0 0 2px 2px'
      }
    },
    'active': {
      check: {
        display: 'block'
      }
    },
    'color-#FFFFFF': {
      color: {
        boxShadow: 'inset 0 0 0 1px #ddd'
      },
      check: {
        color: '#333'
      }
    },
    'transparent': {
      check: {
        color: '#333'
      }
    }
  }, {
    first: first,
    last: last,
    active: active,
    'color-#FFFFFF': color === '#FFFFFF',
    'transparent': color === 'transparent'
  });

  return _react2.default.createElement(
    _common.Swatch,
    {
      color: color,
      style: styles.color,
      onClick: onClick,
      onHover: onSwatchHover,
      focusStyle: { boxShadow: '0 0 4px ' + color }
    },
    _react2.default.createElement(
      'div',
      { style: styles.check },
      _react2.default.createElement(_CheckIcon2.default, null)
    )
  );
};

exports["default"] = SwatchesColor;

/***/ }),

/***/ 44815:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.SwatchesGroup = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _SwatchesColor = __webpack_require__(92293);

var _SwatchesColor2 = _interopRequireDefault(_SwatchesColor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var SwatchesGroup = exports.SwatchesGroup = function SwatchesGroup(_ref) {
  var onClick = _ref.onClick,
      onSwatchHover = _ref.onSwatchHover,
      group = _ref.group,
      active = _ref.active;

  var styles = (0, _reactcss2.default)({
    'default': {
      group: {
        paddingBottom: '10px',
        width: '40px',
        float: 'left',
        marginRight: '10px'
      }
    }
  });

  return _react2.default.createElement(
    'div',
    { style: styles.group },
    (0, _map2.default)(group, function (color, i) {
      return _react2.default.createElement(_SwatchesColor2.default, {
        key: color,
        color: color,
        active: color.toLowerCase() === active,
        first: i === 0,
        last: i === group.length - 1,
        onClick: onClick,
        onSwatchHover: onSwatchHover
      });
    })
  );
};

exports["default"] = SwatchesGroup;

/***/ }),

/***/ 18057:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.Twitter = undefined;

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

var _propTypes = __webpack_require__(55601);

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactcss = __webpack_require__(21682);

var _reactcss2 = _interopRequireDefault(_reactcss);

var _map = __webpack_require__(27594);

var _map2 = _interopRequireDefault(_map);

var _merge = __webpack_require__(91154);

var _merge2 = _interopRequireDefault(_merge);

var _color = __webpack_require__(36580);

var color = _interopRequireWildcard(_color);

var _common = __webpack_require__(63128);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var Twitter = exports.Twitter = function Twitter(_ref) {
  var onChange = _ref.onChange,
      onSwatchHover = _ref.onSwatchHover,
      hex = _ref.hex,
      colors = _ref.colors,
      width = _ref.width,
      triangle = _ref.triangle,
      _ref$styles = _ref.styles,
      passedStyles = _ref$styles === undefined ? {} : _ref$styles,
      _ref$className = _ref.className,
      className = _ref$className === undefined ? '' : _ref$className;

  var styles = (0, _reactcss2.default)((0, _merge2.default)({
    'default': {
      card: {
        width: width,
        background: '#fff',
        border: '0 solid rgba(0,0,0,0.25)',
        boxShadow: '0 1px 4px rgba(0,0,0,0.25)',
        borderRadius: '4px',
        position: 'relative'
      },
      body: {
        padding: '15px 9px 9px 15px'
      },
      label: {
        fontSize: '18px',
        color: '#fff'
      },
      triangle: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent #fff transparent',
        position: 'absolute'
      },
      triangleShadow: {
        width: '0px',
        height: '0px',
        borderStyle: 'solid',
        borderWidth: '0 9px 10px 9px',
        borderColor: 'transparent transparent rgba(0,0,0,.1) transparent',
        position: 'absolute'
      },
      hash: {
        background: '#F0F0F0',
        height: '30px',
        width: '30px',
        borderRadius: '4px 0 0 4px',
        float: 'left',
        color: '#98A1A4',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      },
      input: {
        width: '100px',
        fontSize: '14px',
        color: '#666',
        border: '0px',
        outline: 'none',
        height: '28px',
        boxShadow: 'inset 0 0 0 1px #F0F0F0',
        boxSizing: 'content-box',
        borderRadius: '0 4px 4px 0',
        float: 'left',
        paddingLeft: '8px'
      },
      swatch: {
        width: '30px',
        height: '30px',
        float: 'left',
        borderRadius: '4px',
        margin: '0 6px 6px 0'
      },
      clear: {
        clear: 'both'
      }
    },
    'hide-triangle': {
      triangle: {
        display: 'none'
      },
      triangleShadow: {
        display: 'none'
      }
    },
    'top-left-triangle': {
      triangle: {
        top: '-10px',
        left: '12px'
      },
      triangleShadow: {
        top: '-11px',
        left: '12px'
      }
    },
    'top-right-triangle': {
      triangle: {
        top: '-10px',
        right: '12px'
      },
      triangleShadow: {
        top: '-11px',
        right: '12px'
      }
    }
  }, passedStyles), {
    'hide-triangle': triangle === 'hide',
    'top-left-triangle': triangle === 'top-left',
    'top-right-triangle': triangle === 'top-right'
  });

  var handleChange = function handleChange(hexcode, e) {
    color.isValidHex(hexcode) && onChange({
      hex: hexcode,
      source: 'hex'
    }, e);
  };

  return _react2.default.createElement(
    'div',
    { style: styles.card, className: 'twitter-picker ' + className },
    _react2.default.createElement('div', { style: styles.triangleShadow }),
    _react2.default.createElement('div', { style: styles.triangle }),
    _react2.default.createElement(
      'div',
      { style: styles.body },
      (0, _map2.default)(colors, function (c, i) {
        return _react2.default.createElement(_common.Swatch, {
          key: i,
          color: c,
          hex: c,
          style: styles.swatch,
          onClick: handleChange,
          onHover: onSwatchHover,
          focusStyle: {
            boxShadow: '0 0 4px ' + c
          }
        });
      }),
      _react2.default.createElement(
        'div',
        { style: styles.hash },
        '#'
      ),
      _react2.default.createElement(_common.EditableInput, {
        label: null,
        style: { input: styles.input },
        value: hex.replace('#', ''),
        onChange: handleChange
      }),
      _react2.default.createElement('div', { style: styles.clear })
    )
  );
};

Twitter.propTypes = {
  width: _propTypes2.default.oneOfType([_propTypes2.default.string, _propTypes2.default.number]),
  triangle: _propTypes2.default.oneOf(['hide', 'top-left', 'top-right']),
  colors: _propTypes2.default.arrayOf(_propTypes2.default.string),
  styles: _propTypes2.default.object
};

Twitter.defaultProps = {
  width: 276,
  colors: ['#FF6900', '#FCB900', '#7BDCB5', '#00D084', '#8ED1FC', '#0693E3', '#ABB8C3', '#EB144C', '#F78DA7', '#9900EF'],
  triangle: 'top-left',
  styles: {}
};

exports["default"] = (0, _common.ColorWrap)(Twitter);

/***/ }),

/***/ 75394:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var calculateChange = exports.calculateChange = function calculateChange(e, hsl, direction, initialA, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (direction === 'vertical') {
    var a = void 0;
    if (top < 0) {
      a = 0;
    } else if (top > containerHeight) {
      a = 1;
    } else {
      a = Math.round(top * 100 / containerHeight) / 100;
    }

    if (hsl.a !== a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: a,
        source: 'rgb'
      };
    }
  } else {
    var _a = void 0;
    if (left < 0) {
      _a = 0;
    } else if (left > containerWidth) {
      _a = 1;
    } else {
      _a = Math.round(left * 100 / containerWidth) / 100;
    }

    if (initialA !== _a) {
      return {
        h: hsl.h,
        s: hsl.s,
        l: hsl.l,
        a: _a,
        source: 'rgb'
      };
    }
  }
  return null;
};

/***/ }),

/***/ 86689:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var checkboardCache = {};

var render = exports.render = function render(c1, c2, size, serverCanvas) {
  if (typeof document === 'undefined' && !serverCanvas) {
    return null;
  }
  var canvas = serverCanvas ? new serverCanvas() : document.createElement('canvas');
  canvas.width = size * 2;
  canvas.height = size * 2;
  var ctx = canvas.getContext('2d');
  if (!ctx) {
    return null;
  } // If no context can be found, return early.
  ctx.fillStyle = c1;
  ctx.fillRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = c2;
  ctx.fillRect(0, 0, size, size);
  ctx.translate(size, size);
  ctx.fillRect(0, 0, size, size);
  return canvas.toDataURL();
};

var get = exports.get = function get(c1, c2, size, serverCanvas) {
  var key = c1 + '-' + c2 + '-' + size + (serverCanvas ? '-server' : '');

  if (checkboardCache[key]) {
    return checkboardCache[key];
  }

  var checkboard = render(c1, c2, size, serverCanvas);
  checkboardCache[key] = checkboard;
  return checkboard;
};

/***/ }),

/***/ 36580:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.isvalidColorString = exports.red = exports.getContrastingColor = exports.isValidHex = exports.toState = exports.simpleCheckForValidColor = undefined;

var _each = __webpack_require__(73667);

var _each2 = _interopRequireDefault(_each);

var _tinycolor = __webpack_require__(81188);

var _tinycolor2 = _interopRequireDefault(_tinycolor);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simpleCheckForValidColor = exports.simpleCheckForValidColor = function simpleCheckForValidColor(data) {
  var keysToCheck = ['r', 'g', 'b', 'a', 'h', 's', 'l', 'v'];
  var checked = 0;
  var passed = 0;
  (0, _each2.default)(keysToCheck, function (letter) {
    if (data[letter]) {
      checked += 1;
      if (!isNaN(data[letter])) {
        passed += 1;
      }
      if (letter === 's' || letter === 'l') {
        var percentPatt = /^\d+%$/;
        if (percentPatt.test(data[letter])) {
          passed += 1;
        }
      }
    }
  });
  return checked === passed ? data : false;
};

var toState = exports.toState = function toState(data, oldHue) {
  var color = data.hex ? (0, _tinycolor2.default)(data.hex) : (0, _tinycolor2.default)(data);
  var hsl = color.toHsl();
  var hsv = color.toHsv();
  var rgb = color.toRgb();
  var hex = color.toHex();
  if (hsl.s === 0) {
    hsl.h = oldHue || 0;
    hsv.h = oldHue || 0;
  }
  var transparent = hex === '000000' && rgb.a === 0;

  return {
    hsl: hsl,
    hex: transparent ? 'transparent' : '#' + hex,
    rgb: rgb,
    hsv: hsv,
    oldHue: data.h || oldHue || hsl.h,
    source: data.source
  };
};

var isValidHex = exports.isValidHex = function isValidHex(hex) {
  if (hex === 'transparent') {
    return true;
  }
  // disable hex4 and hex8
  var lh = String(hex).charAt(0) === '#' ? 1 : 0;
  return hex.length !== 4 + lh && hex.length < 7 + lh && (0, _tinycolor2.default)(hex).isValid();
};

var getContrastingColor = exports.getContrastingColor = function getContrastingColor(data) {
  if (!data) {
    return '#fff';
  }
  var col = toState(data);
  if (col.hex === 'transparent') {
    return 'rgba(0,0,0,0.4)';
  }
  var yiq = (col.rgb.r * 299 + col.rgb.g * 587 + col.rgb.b * 114) / 1000;
  return yiq >= 128 ? '#000' : '#fff';
};

var red = exports.red = {
  hsl: { a: 1, h: 0, l: 0.5, s: 1 },
  hex: '#ff0000',
  rgb: { r: 255, g: 0, b: 0, a: 1 },
  hsv: { h: 0, s: 1, v: 1, a: 1 }
};

var isvalidColorString = exports.isvalidColorString = function isvalidColorString(string, type) {
  var stringWithoutDegree = string.replace('°', '');
  return (0, _tinycolor2.default)(type + ' (' + stringWithoutDegree + ')')._ok;
};

/***/ }),

/***/ 67209:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var calculateChange = exports.calculateChange = function calculateChange(e, direction, hsl, container) {
  var containerWidth = container.clientWidth;
  var containerHeight = container.clientHeight;
  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (direction === 'vertical') {
    var h = void 0;
    if (top < 0) {
      h = 359;
    } else if (top > containerHeight) {
      h = 0;
    } else {
      var percent = -(top * 100 / containerHeight) + 100;
      h = 360 * percent / 100;
    }

    if (hsl.h !== h) {
      return {
        h: h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  } else {
    var _h = void 0;
    if (left < 0) {
      _h = 0;
    } else if (left > containerWidth) {
      _h = 359;
    } else {
      var _percent = left * 100 / containerWidth;
      _h = 360 * _percent / 100;
    }

    if (hsl.h !== _h) {
      return {
        h: _h,
        s: hsl.s,
        l: hsl.l,
        a: hsl.a,
        source: 'hsl'
      };
    }
  }
  return null;
};

/***/ }),

/***/ 13410:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.handleFocus = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint-disable no-invalid-this */


var handleFocus = exports.handleFocus = function handleFocus(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';
  return function (_React$Component) {
    _inherits(Focus, _React$Component);

    function Focus() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Focus);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Focus.__proto__ || Object.getPrototypeOf(Focus)).call.apply(_ref, [this].concat(args))), _this), _this.state = { focus: false }, _this.handleFocus = function () {
        return _this.setState({ focus: true });
      }, _this.handleBlur = function () {
        return _this.setState({ focus: false });
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    _createClass(Focus, [{
      key: 'render',
      value: function render() {
        return _react2.default.createElement(
          Span,
          { onFocus: this.handleFocus, onBlur: this.handleBlur },
          _react2.default.createElement(Component, _extends({}, this.props, this.state))
        );
      }
    }]);

    return Focus;
  }(_react2.default.Component);
};

/***/ }),

/***/ 39351:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var calculateChange = exports.calculateChange = function calculateChange(e, hsl, container) {
  var _container$getBoundin = container.getBoundingClientRect(),
      containerWidth = _container$getBoundin.width,
      containerHeight = _container$getBoundin.height;

  var x = typeof e.pageX === 'number' ? e.pageX : e.touches[0].pageX;
  var y = typeof e.pageY === 'number' ? e.pageY : e.touches[0].pageY;
  var left = x - (container.getBoundingClientRect().left + window.pageXOffset);
  var top = y - (container.getBoundingClientRect().top + window.pageYOffset);

  if (left < 0) {
    left = 0;
  } else if (left > containerWidth) {
    left = containerWidth;
  }

  if (top < 0) {
    top = 0;
  } else if (top > containerHeight) {
    top = containerHeight;
  }

  var saturation = left / containerWidth;
  var bright = 1 - top / containerHeight;

  return {
    h: hsl.h,
    s: saturation,
    v: bright,
    a: hsl.a,
    source: 'hsv'
  };
};

/***/ }),

/***/ 87796:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({
  value: true
});
__webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = exports.AI = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = __webpack_unused_export__ = undefined;

var _Alpha = __webpack_require__(25854);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Alpha).default;
  }
});

var _Block = __webpack_require__(18271);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Block).default;
  }
});

var _Circle = __webpack_require__(93719);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Circle).default;
  }
});

var _Chrome = __webpack_require__(3978);

Object.defineProperty(exports, "AI", ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Chrome).default;
  }
}));

var _Compact = __webpack_require__(18543);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Compact).default;
  }
});

var _Github = __webpack_require__(48842);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Github).default;
  }
});

var _Hue = __webpack_require__(11801);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Hue).default;
  }
});

var _Material = __webpack_require__(88811);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Material).default;
  }
});

var _Photoshop = __webpack_require__(5189);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Photoshop).default;
  }
});

var _Sketch = __webpack_require__(26704);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Sketch).default;
  }
});

var _Slider = __webpack_require__(41312);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Slider).default;
  }
});

var _Swatches = __webpack_require__(297);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Swatches).default;
  }
});

var _Twitter = __webpack_require__(18057);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Twitter).default;
  }
});

var _Google = __webpack_require__(89289);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_Google).default;
  }
});

var _ColorWrap = __webpack_require__(19520);

__webpack_unused_export__ = ({
  enumerable: true,
  get: function get() {
    return _interopRequireDefault(_ColorWrap).default;
  }
});

var _Chrome2 = _interopRequireDefault(_Chrome);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

__webpack_unused_export__ = _Chrome2.default;

/***/ }),

/***/ 88369:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

var React = __webpack_require__(18038);

/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".styles_scrollable-div__prSCv {\r\n  max-height: inherit;\r\n  height: inherit;\r\n  overflow-y: auto;\r\n}\r\n";
var styles = {"scrollable-div":"styles_scrollable-div__prSCv","scrollableDiv":"styles_scrollable-div__prSCv"};
styleInject(css_248z);

var ScrollableFeed = /** @class */ (function (_super) {
    __extends(ScrollableFeed, _super);
    function ScrollableFeed(props) {
        var _this = _super.call(this, props) || this;
        _this.bottomRef = React.createRef();
        _this.wrapperRef = React.createRef();
        _this.handleScroll = _this.handleScroll.bind(_this);
        return _this;
    }
    ScrollableFeed.prototype.getSnapshotBeforeUpdate = function () {
        if (this.wrapperRef.current && this.bottomRef.current) {
            var viewableDetectionEpsilon = this.props.viewableDetectionEpsilon;
            return ScrollableFeed.isViewable(this.wrapperRef.current, this.bottomRef.current, viewableDetectionEpsilon); //This argument is passed down to componentDidUpdate as 3rd parameter
        }
        return false;
    };
    ScrollableFeed.prototype.componentDidUpdate = function (previousProps, _a, snapshot) {
        var _b = this.props, forceScroll = _b.forceScroll, changeDetectionFilter = _b.changeDetectionFilter;
        var isValidChange = changeDetectionFilter(previousProps, this.props);
        if (isValidChange && (forceScroll || snapshot) && this.bottomRef.current && this.wrapperRef.current) {
            this.scrollParentToChild(this.wrapperRef.current, this.bottomRef.current);
        }
    };
    ScrollableFeed.prototype.componentDidMount = function () {
        //Scroll to bottom from the start
        if (this.bottomRef.current && this.wrapperRef.current) {
            this.scrollParentToChild(this.wrapperRef.current, this.bottomRef.current);
        }
    };
    /**
     * Scrolls a parent element such that the child element will be in view
     * @param parent
     * @param child
     */
    ScrollableFeed.prototype.scrollParentToChild = function (parent, child) {
        var viewableDetectionEpsilon = this.props.viewableDetectionEpsilon;
        if (!ScrollableFeed.isViewable(parent, child, viewableDetectionEpsilon)) {
            //Source: https://stackoverflow.com/a/45411081/6316091
            var parentRect = parent.getBoundingClientRect();
            var childRect = child.getBoundingClientRect();
            //Scroll by offset relative to parent
            var scrollOffset = (childRect.top + parent.scrollTop) - parentRect.top;
            var _a = this.props, animateScroll = _a.animateScroll, onScrollComplete = _a.onScrollComplete;
            if (animateScroll) {
                animateScroll(parent, scrollOffset);
                onScrollComplete();
            }
        }
    };
    /**
     * Returns whether a child element is visible within a parent element
     *
     * @param parent
     * @param child
     * @param epsilon
     */
    ScrollableFeed.isViewable = function (parent, child, epsilon) {
        epsilon = epsilon || 0;
        //Source: https://stackoverflow.com/a/45411081/6316091
        var parentRect = parent.getBoundingClientRect();
        var childRect = child.getBoundingClientRect();
        var childTopIsViewable = (childRect.top >= parentRect.top);
        var childOffsetToParentBottom = parentRect.top + parent.clientHeight - childRect.top;
        var childBottomIsViewable = childOffsetToParentBottom + epsilon >= 0;
        return childTopIsViewable && childBottomIsViewable;
    };
    /**
     * Fires the onScroll event, sending isAtBottom boolean as its first parameter
     */
    ScrollableFeed.prototype.handleScroll = function () {
        var _a = this.props, viewableDetectionEpsilon = _a.viewableDetectionEpsilon, onScroll = _a.onScroll;
        if (onScroll && this.bottomRef.current && this.wrapperRef.current) {
            var isAtBottom = ScrollableFeed.isViewable(this.wrapperRef.current, this.bottomRef.current, viewableDetectionEpsilon);
            onScroll(isAtBottom);
        }
    };
    /**
     * Scroll to the bottom
     */
    ScrollableFeed.prototype.scrollToBottom = function () {
        if (this.bottomRef.current && this.wrapperRef.current) {
            this.scrollParentToChild(this.wrapperRef.current, this.bottomRef.current);
        }
    };
    ScrollableFeed.prototype.render = function () {
        var _a = this.props, children = _a.children, className = _a.className;
        var joinedClassName = styles.scrollableDiv + (className ? " " + className : "");
        return (React.createElement("div", { className: joinedClassName, ref: this.wrapperRef, onScroll: this.handleScroll },
            children,
            React.createElement("div", { ref: this.bottomRef })));
    };
    ScrollableFeed.defaultProps = {
        forceScroll: false,
        animateScroll: function (element, offset) {
            if (element.scrollBy) {
                element.scrollBy({ top: offset });
            }
            else {
                element.scrollTop = offset;
            }
        },
        onScrollComplete: function () { },
        changeDetectionFilter: function () { return true; },
        viewableDetectionEpsilon: 2,
        onScroll: function () { },
    };
    return ScrollableFeed;
}(React.Component));

exports.Z = ScrollableFeed;
//# sourceMappingURL=index.js.map


/***/ }),

/***/ 57003:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.autoprefix = undefined;

var _forOwn2 = __webpack_require__(11764);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var transforms = {
  borderRadius: function borderRadius(value) {
    return {
      msBorderRadius: value,
      MozBorderRadius: value,
      OBorderRadius: value,
      WebkitBorderRadius: value,
      borderRadius: value
    };
  },
  boxShadow: function boxShadow(value) {
    return {
      msBoxShadow: value,
      MozBoxShadow: value,
      OBoxShadow: value,
      WebkitBoxShadow: value,
      boxShadow: value
    };
  },
  userSelect: function userSelect(value) {
    return {
      WebkitTouchCallout: value,
      KhtmlUserSelect: value,
      MozUserSelect: value,
      msUserSelect: value,
      WebkitUserSelect: value,
      userSelect: value
    };
  },

  flex: function flex(value) {
    return {
      WebkitBoxFlex: value,
      MozBoxFlex: value,
      WebkitFlex: value,
      msFlex: value,
      flex: value
    };
  },
  flexBasis: function flexBasis(value) {
    return {
      WebkitFlexBasis: value,
      flexBasis: value
    };
  },
  justifyContent: function justifyContent(value) {
    return {
      WebkitJustifyContent: value,
      justifyContent: value
    };
  },

  transition: function transition(value) {
    return {
      msTransition: value,
      MozTransition: value,
      OTransition: value,
      WebkitTransition: value,
      transition: value
    };
  },

  transform: function transform(value) {
    return {
      msTransform: value,
      MozTransform: value,
      OTransform: value,
      WebkitTransform: value,
      transform: value
    };
  },
  absolute: function absolute(value) {
    var direction = value && value.split(' ');
    return {
      position: 'absolute',
      top: direction && direction[0],
      right: direction && direction[1],
      bottom: direction && direction[2],
      left: direction && direction[3]
    };
  },
  extend: function extend(name, otherElementStyles) {
    var otherStyle = otherElementStyles[name];
    if (otherStyle) {
      return otherStyle;
    }
    return {
      'extend': name
    };
  }
};

var autoprefix = exports.autoprefix = function autoprefix(elements) {
  var prefixed = {};
  (0, _forOwn3.default)(elements, function (styles, element) {
    var expanded = {};
    (0, _forOwn3.default)(styles, function (value, key) {
      var transform = transforms[key];
      if (transform) {
        expanded = _extends({}, expanded, transform(value));
      } else {
        expanded[key] = value;
      }
    });
    prefixed[element] = expanded;
  });
  return prefixed;
};

exports["default"] = autoprefix;

/***/ }),

/***/ 29696:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.active = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var active = exports.active = function active(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Active, _React$Component);

    function Active() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Active);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Active.__proto__ || Object.getPrototypeOf(Active)).call.apply(_ref, [this].concat(args))), _this), _this.state = { active: false }, _this.handleMouseDown = function () {
        return _this.setState({ active: true });
      }, _this.handleMouseUp = function () {
        return _this.setState({ active: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseDown: _this.handleMouseDown, onMouseUp: _this.handleMouseUp },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Active;
  }(_react2.default.Component);
};

exports["default"] = active;

/***/ }),

/***/ 90068:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.hover = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(18038);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var hover = exports.hover = function hover(Component) {
  var Span = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'span';

  return function (_React$Component) {
    _inherits(Hover, _React$Component);

    function Hover() {
      var _ref;

      var _temp, _this, _ret;

      _classCallCheck(this, Hover);

      for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = Hover.__proto__ || Object.getPrototypeOf(Hover)).call.apply(_ref, [this].concat(args))), _this), _this.state = { hover: false }, _this.handleMouseOver = function () {
        return _this.setState({ hover: true });
      }, _this.handleMouseOut = function () {
        return _this.setState({ hover: false });
      }, _this.render = function () {
        return _react2.default.createElement(
          Span,
          { onMouseOver: _this.handleMouseOver, onMouseOut: _this.handleMouseOut },
          _react2.default.createElement(Component, _extends({}, _this.props, _this.state))
        );
      }, _temp), _possibleConstructorReturn(_this, _ret);
    }

    return Hover;
  }(_react2.default.Component);
};

exports["default"] = hover;

/***/ }),

/***/ 57466:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.flattenNames = undefined;

var _isString2 = __webpack_require__(83131);

var _isString3 = _interopRequireDefault(_isString2);

var _forOwn2 = __webpack_require__(11764);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _isPlainObject2 = __webpack_require__(7997);

var _isPlainObject3 = _interopRequireDefault(_isPlainObject2);

var _map2 = __webpack_require__(27594);

var _map3 = _interopRequireDefault(_map2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var flattenNames = exports.flattenNames = function flattenNames() {
  var things = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

  var names = [];

  (0, _map3.default)(things, function (thing) {
    if (Array.isArray(thing)) {
      flattenNames(thing).map(function (name) {
        return names.push(name);
      });
    } else if ((0, _isPlainObject3.default)(thing)) {
      (0, _forOwn3.default)(thing, function (value, key) {
        value === true && names.push(key);
        names.push(key + '-' + value);
      });
    } else if ((0, _isString3.default)(thing)) {
      names.push(thing);
    }
  });

  return names;
};

exports["default"] = flattenNames;

/***/ }),

/***/ 21682:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.ReactCSS = exports.loop = exports.handleActive = exports.handleHover = exports.hover = undefined;

var _flattenNames = __webpack_require__(57466);

var _flattenNames2 = _interopRequireDefault(_flattenNames);

var _mergeClasses = __webpack_require__(62648);

var _mergeClasses2 = _interopRequireDefault(_mergeClasses);

var _autoprefix = __webpack_require__(57003);

var _autoprefix2 = _interopRequireDefault(_autoprefix);

var _hover2 = __webpack_require__(90068);

var _hover3 = _interopRequireDefault(_hover2);

var _active = __webpack_require__(29696);

var _active2 = _interopRequireDefault(_active);

var _loop2 = __webpack_require__(71758);

var _loop3 = _interopRequireDefault(_loop2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.hover = _hover3.default;
exports.handleHover = _hover3.default;
exports.handleActive = _active2.default;
exports.loop = _loop3.default;
var ReactCSS = exports.ReactCSS = function ReactCSS(classes) {
  for (var _len = arguments.length, activations = Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    activations[_key - 1] = arguments[_key];
  }

  var activeNames = (0, _flattenNames2.default)(activations);
  var merged = (0, _mergeClasses2.default)(classes, activeNames);
  return (0, _autoprefix2.default)(merged);
};

exports["default"] = ReactCSS;

/***/ }),

/***/ 71758:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
var loopable = function loopable(i, length) {
  var props = {};
  var setProp = function setProp(name) {
    var value = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

    props[name] = value;
  };

  i === 0 && setProp('first-child');
  i === length - 1 && setProp('last-child');
  (i === 0 || i % 2 === 0) && setProp('even');
  Math.abs(i % 2) === 1 && setProp('odd');
  setProp('nth-child', i);

  return props;
};

exports["default"] = loopable;

/***/ }),

/***/ 62648:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports.mergeClasses = undefined;

var _forOwn2 = __webpack_require__(11764);

var _forOwn3 = _interopRequireDefault(_forOwn2);

var _cloneDeep2 = __webpack_require__(24653);

var _cloneDeep3 = _interopRequireDefault(_cloneDeep2);

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var mergeClasses = exports.mergeClasses = function mergeClasses(classes) {
  var activeNames = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  var styles = classes.default && (0, _cloneDeep3.default)(classes.default) || {};
  activeNames.map(function (name) {
    var toMerge = classes[name];
    if (toMerge) {
      (0, _forOwn3.default)(toMerge, function (value, key) {
        if (!styles[key]) {
          styles[key] = {};
        }

        styles[key] = _extends({}, styles[key], toMerge[key]);
      });
    }

    return name;
  });
  return styles;
};

exports["default"] = mergeClasses;

/***/ }),

/***/ 81188:
/***/ (function(module) {

// This file is autogenerated. It's used to publish CJS to npm.
(function (global, factory) {
   true ? module.exports = factory() :
  0;
})(this, (function () { 'use strict';

  function _typeof(obj) {
    "@babel/helpers - typeof";

    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
      return typeof obj;
    } : function (obj) {
      return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    }, _typeof(obj);
  }

  // https://github.com/bgrins/TinyColor
  // Brian Grinstead, MIT License

  var trimLeft = /^\s+/;
  var trimRight = /\s+$/;
  function tinycolor(color, opts) {
    color = color ? color : "";
    opts = opts || {};

    // If input is already a tinycolor, return itself
    if (color instanceof tinycolor) {
      return color;
    }
    // If we are called as a function, call using new instead
    if (!(this instanceof tinycolor)) {
      return new tinycolor(color, opts);
    }
    var rgb = inputToRGB(color);
    this._originalInput = color, this._r = rgb.r, this._g = rgb.g, this._b = rgb.b, this._a = rgb.a, this._roundA = Math.round(100 * this._a) / 100, this._format = opts.format || rgb.format;
    this._gradientType = opts.gradientType;

    // Don't let the range of [0,255] come back in [0,1].
    // Potentially lose a little bit of precision here, but will fix issues where
    // .5 gets interpreted as half of the total, instead of half of 1
    // If it was supposed to be 128, this was already taken care of by `inputToRgb`
    if (this._r < 1) this._r = Math.round(this._r);
    if (this._g < 1) this._g = Math.round(this._g);
    if (this._b < 1) this._b = Math.round(this._b);
    this._ok = rgb.ok;
  }
  tinycolor.prototype = {
    isDark: function isDark() {
      return this.getBrightness() < 128;
    },
    isLight: function isLight() {
      return !this.isDark();
    },
    isValid: function isValid() {
      return this._ok;
    },
    getOriginalInput: function getOriginalInput() {
      return this._originalInput;
    },
    getFormat: function getFormat() {
      return this._format;
    },
    getAlpha: function getAlpha() {
      return this._a;
    },
    getBrightness: function getBrightness() {
      //http://www.w3.org/TR/AERT#color-contrast
      var rgb = this.toRgb();
      return (rgb.r * 299 + rgb.g * 587 + rgb.b * 114) / 1000;
    },
    getLuminance: function getLuminance() {
      //http://www.w3.org/TR/2008/REC-WCAG20-20081211/#relativeluminancedef
      var rgb = this.toRgb();
      var RsRGB, GsRGB, BsRGB, R, G, B;
      RsRGB = rgb.r / 255;
      GsRGB = rgb.g / 255;
      BsRGB = rgb.b / 255;
      if (RsRGB <= 0.03928) R = RsRGB / 12.92;else R = Math.pow((RsRGB + 0.055) / 1.055, 2.4);
      if (GsRGB <= 0.03928) G = GsRGB / 12.92;else G = Math.pow((GsRGB + 0.055) / 1.055, 2.4);
      if (BsRGB <= 0.03928) B = BsRGB / 12.92;else B = Math.pow((BsRGB + 0.055) / 1.055, 2.4);
      return 0.2126 * R + 0.7152 * G + 0.0722 * B;
    },
    setAlpha: function setAlpha(value) {
      this._a = boundAlpha(value);
      this._roundA = Math.round(100 * this._a) / 100;
      return this;
    },
    toHsv: function toHsv() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      return {
        h: hsv.h * 360,
        s: hsv.s,
        v: hsv.v,
        a: this._a
      };
    },
    toHsvString: function toHsvString() {
      var hsv = rgbToHsv(this._r, this._g, this._b);
      var h = Math.round(hsv.h * 360),
        s = Math.round(hsv.s * 100),
        v = Math.round(hsv.v * 100);
      return this._a == 1 ? "hsv(" + h + ", " + s + "%, " + v + "%)" : "hsva(" + h + ", " + s + "%, " + v + "%, " + this._roundA + ")";
    },
    toHsl: function toHsl() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      return {
        h: hsl.h * 360,
        s: hsl.s,
        l: hsl.l,
        a: this._a
      };
    },
    toHslString: function toHslString() {
      var hsl = rgbToHsl(this._r, this._g, this._b);
      var h = Math.round(hsl.h * 360),
        s = Math.round(hsl.s * 100),
        l = Math.round(hsl.l * 100);
      return this._a == 1 ? "hsl(" + h + ", " + s + "%, " + l + "%)" : "hsla(" + h + ", " + s + "%, " + l + "%, " + this._roundA + ")";
    },
    toHex: function toHex(allow3Char) {
      return rgbToHex(this._r, this._g, this._b, allow3Char);
    },
    toHexString: function toHexString(allow3Char) {
      return "#" + this.toHex(allow3Char);
    },
    toHex8: function toHex8(allow4Char) {
      return rgbaToHex(this._r, this._g, this._b, this._a, allow4Char);
    },
    toHex8String: function toHex8String(allow4Char) {
      return "#" + this.toHex8(allow4Char);
    },
    toRgb: function toRgb() {
      return {
        r: Math.round(this._r),
        g: Math.round(this._g),
        b: Math.round(this._b),
        a: this._a
      };
    },
    toRgbString: function toRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ")" : "rgba(" + Math.round(this._r) + ", " + Math.round(this._g) + ", " + Math.round(this._b) + ", " + this._roundA + ")";
    },
    toPercentageRgb: function toPercentageRgb() {
      return {
        r: Math.round(bound01(this._r, 255) * 100) + "%",
        g: Math.round(bound01(this._g, 255) * 100) + "%",
        b: Math.round(bound01(this._b, 255) * 100) + "%",
        a: this._a
      };
    },
    toPercentageRgbString: function toPercentageRgbString() {
      return this._a == 1 ? "rgb(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%)" : "rgba(" + Math.round(bound01(this._r, 255) * 100) + "%, " + Math.round(bound01(this._g, 255) * 100) + "%, " + Math.round(bound01(this._b, 255) * 100) + "%, " + this._roundA + ")";
    },
    toName: function toName() {
      if (this._a === 0) {
        return "transparent";
      }
      if (this._a < 1) {
        return false;
      }
      return hexNames[rgbToHex(this._r, this._g, this._b, true)] || false;
    },
    toFilter: function toFilter(secondColor) {
      var hex8String = "#" + rgbaToArgbHex(this._r, this._g, this._b, this._a);
      var secondHex8String = hex8String;
      var gradientType = this._gradientType ? "GradientType = 1, " : "";
      if (secondColor) {
        var s = tinycolor(secondColor);
        secondHex8String = "#" + rgbaToArgbHex(s._r, s._g, s._b, s._a);
      }
      return "progid:DXImageTransform.Microsoft.gradient(" + gradientType + "startColorstr=" + hex8String + ",endColorstr=" + secondHex8String + ")";
    },
    toString: function toString(format) {
      var formatSet = !!format;
      format = format || this._format;
      var formattedString = false;
      var hasAlpha = this._a < 1 && this._a >= 0;
      var needsAlphaFormat = !formatSet && hasAlpha && (format === "hex" || format === "hex6" || format === "hex3" || format === "hex4" || format === "hex8" || format === "name");
      if (needsAlphaFormat) {
        // Special case for "transparent", all other non-alpha formats
        // will return rgba when there is transparency.
        if (format === "name" && this._a === 0) {
          return this.toName();
        }
        return this.toRgbString();
      }
      if (format === "rgb") {
        formattedString = this.toRgbString();
      }
      if (format === "prgb") {
        formattedString = this.toPercentageRgbString();
      }
      if (format === "hex" || format === "hex6") {
        formattedString = this.toHexString();
      }
      if (format === "hex3") {
        formattedString = this.toHexString(true);
      }
      if (format === "hex4") {
        formattedString = this.toHex8String(true);
      }
      if (format === "hex8") {
        formattedString = this.toHex8String();
      }
      if (format === "name") {
        formattedString = this.toName();
      }
      if (format === "hsl") {
        formattedString = this.toHslString();
      }
      if (format === "hsv") {
        formattedString = this.toHsvString();
      }
      return formattedString || this.toHexString();
    },
    clone: function clone() {
      return tinycolor(this.toString());
    },
    _applyModification: function _applyModification(fn, args) {
      var color = fn.apply(null, [this].concat([].slice.call(args)));
      this._r = color._r;
      this._g = color._g;
      this._b = color._b;
      this.setAlpha(color._a);
      return this;
    },
    lighten: function lighten() {
      return this._applyModification(_lighten, arguments);
    },
    brighten: function brighten() {
      return this._applyModification(_brighten, arguments);
    },
    darken: function darken() {
      return this._applyModification(_darken, arguments);
    },
    desaturate: function desaturate() {
      return this._applyModification(_desaturate, arguments);
    },
    saturate: function saturate() {
      return this._applyModification(_saturate, arguments);
    },
    greyscale: function greyscale() {
      return this._applyModification(_greyscale, arguments);
    },
    spin: function spin() {
      return this._applyModification(_spin, arguments);
    },
    _applyCombination: function _applyCombination(fn, args) {
      return fn.apply(null, [this].concat([].slice.call(args)));
    },
    analogous: function analogous() {
      return this._applyCombination(_analogous, arguments);
    },
    complement: function complement() {
      return this._applyCombination(_complement, arguments);
    },
    monochromatic: function monochromatic() {
      return this._applyCombination(_monochromatic, arguments);
    },
    splitcomplement: function splitcomplement() {
      return this._applyCombination(_splitcomplement, arguments);
    },
    // Disabled until https://github.com/bgrins/TinyColor/issues/254
    // polyad: function (number) {
    //   return this._applyCombination(polyad, [number]);
    // },
    triad: function triad() {
      return this._applyCombination(polyad, [3]);
    },
    tetrad: function tetrad() {
      return this._applyCombination(polyad, [4]);
    }
  };

  // If input is an object, force 1 into "1.0" to handle ratios properly
  // String input requires "1.0" as input, so 1 will be treated as 1
  tinycolor.fromRatio = function (color, opts) {
    if (_typeof(color) == "object") {
      var newColor = {};
      for (var i in color) {
        if (color.hasOwnProperty(i)) {
          if (i === "a") {
            newColor[i] = color[i];
          } else {
            newColor[i] = convertToPercentage(color[i]);
          }
        }
      }
      color = newColor;
    }
    return tinycolor(color, opts);
  };

  // Given a string or object, convert that input to RGB
  // Possible string inputs:
  //
  //     "red"
  //     "#f00" or "f00"
  //     "#ff0000" or "ff0000"
  //     "#ff000000" or "ff000000"
  //     "rgb 255 0 0" or "rgb (255, 0, 0)"
  //     "rgb 1.0 0 0" or "rgb (1, 0, 0)"
  //     "rgba (255, 0, 0, 1)" or "rgba 255, 0, 0, 1"
  //     "rgba (1.0, 0, 0, 1)" or "rgba 1.0, 0, 0, 1"
  //     "hsl(0, 100%, 50%)" or "hsl 0 100% 50%"
  //     "hsla(0, 100%, 50%, 1)" or "hsla 0 100% 50%, 1"
  //     "hsv(0, 100%, 100%)" or "hsv 0 100% 100%"
  //
  function inputToRGB(color) {
    var rgb = {
      r: 0,
      g: 0,
      b: 0
    };
    var a = 1;
    var s = null;
    var v = null;
    var l = null;
    var ok = false;
    var format = false;
    if (typeof color == "string") {
      color = stringInputToObject(color);
    }
    if (_typeof(color) == "object") {
      if (isValidCSSUnit(color.r) && isValidCSSUnit(color.g) && isValidCSSUnit(color.b)) {
        rgb = rgbToRgb(color.r, color.g, color.b);
        ok = true;
        format = String(color.r).substr(-1) === "%" ? "prgb" : "rgb";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.v)) {
        s = convertToPercentage(color.s);
        v = convertToPercentage(color.v);
        rgb = hsvToRgb(color.h, s, v);
        ok = true;
        format = "hsv";
      } else if (isValidCSSUnit(color.h) && isValidCSSUnit(color.s) && isValidCSSUnit(color.l)) {
        s = convertToPercentage(color.s);
        l = convertToPercentage(color.l);
        rgb = hslToRgb(color.h, s, l);
        ok = true;
        format = "hsl";
      }
      if (color.hasOwnProperty("a")) {
        a = color.a;
      }
    }
    a = boundAlpha(a);
    return {
      ok: ok,
      format: color.format || format,
      r: Math.min(255, Math.max(rgb.r, 0)),
      g: Math.min(255, Math.max(rgb.g, 0)),
      b: Math.min(255, Math.max(rgb.b, 0)),
      a: a
    };
  }

  // Conversion Functions
  // --------------------

  // `rgbToHsl`, `rgbToHsv`, `hslToRgb`, `hsvToRgb` modified from:
  // <http://mjijackson.com/2008/02/rgb-to-hsl-and-rgb-to-hsv-color-model-conversion-algorithms-in-javascript>

  // `rgbToRgb`
  // Handle bounds / percentage checking to conform to CSS color spec
  // <http://www.w3.org/TR/css3-color/>
  // *Assumes:* r, g, b in [0, 255] or [0, 1]
  // *Returns:* { r, g, b } in [0, 255]
  function rgbToRgb(r, g, b) {
    return {
      r: bound01(r, 255) * 255,
      g: bound01(g, 255) * 255,
      b: bound01(b, 255) * 255
    };
  }

  // `rgbToHsl`
  // Converts an RGB color value to HSL.
  // *Assumes:* r, g, and b are contained in [0, 255] or [0, 1]
  // *Returns:* { h, s, l } in [0,1]
  function rgbToHsl(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      var d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h,
      s: s,
      l: l
    };
  }

  // `hslToRgb`
  // Converts an HSL color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and l are contained [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hslToRgb(h, s, l) {
    var r, g, b;
    h = bound01(h, 360);
    s = bound01(s, 100);
    l = bound01(l, 100);
    function hue2rgb(p, q, t) {
      if (t < 0) t += 1;
      if (t > 1) t -= 1;
      if (t < 1 / 6) return p + (q - p) * 6 * t;
      if (t < 1 / 2) return q;
      if (t < 2 / 3) return p + (q - p) * (2 / 3 - t) * 6;
      return p;
    }
    if (s === 0) {
      r = g = b = l; // achromatic
    } else {
      var q = l < 0.5 ? l * (1 + s) : l + s - l * s;
      var p = 2 * l - q;
      r = hue2rgb(p, q, h + 1 / 3);
      g = hue2rgb(p, q, h);
      b = hue2rgb(p, q, h - 1 / 3);
    }
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  // `rgbToHsv`
  // Converts an RGB color value to HSV
  // *Assumes:* r, g, and b are contained in the set [0, 255] or [0, 1]
  // *Returns:* { h, s, v } in [0,1]
  function rgbToHsv(r, g, b) {
    r = bound01(r, 255);
    g = bound01(g, 255);
    b = bound01(b, 255);
    var max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    var h,
      s,
      v = max;
    var d = max - min;
    s = max === 0 ? 0 : d / max;
    if (max == min) {
      h = 0; // achromatic
    } else {
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
      }
      h /= 6;
    }
    return {
      h: h,
      s: s,
      v: v
    };
  }

  // `hsvToRgb`
  // Converts an HSV color value to RGB.
  // *Assumes:* h is contained in [0, 1] or [0, 360] and s and v are contained in [0, 1] or [0, 100]
  // *Returns:* { r, g, b } in the set [0, 255]
  function hsvToRgb(h, s, v) {
    h = bound01(h, 360) * 6;
    s = bound01(s, 100);
    v = bound01(v, 100);
    var i = Math.floor(h),
      f = h - i,
      p = v * (1 - s),
      q = v * (1 - f * s),
      t = v * (1 - (1 - f) * s),
      mod = i % 6,
      r = [v, q, p, p, t, v][mod],
      g = [t, v, v, q, p, p][mod],
      b = [p, p, t, v, v, q][mod];
    return {
      r: r * 255,
      g: g * 255,
      b: b * 255
    };
  }

  // `rgbToHex`
  // Converts an RGB color to hex
  // Assumes r, g, and b are contained in the set [0, 255]
  // Returns a 3 or 6 character hex
  function rgbToHex(r, g, b, allow3Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];

    // Return a 3 character hex if possible
    if (allow3Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0);
    }
    return hex.join("");
  }

  // `rgbaToHex`
  // Converts an RGBA color plus alpha transparency to hex
  // Assumes r, g, b are contained in the set [0, 255] and
  // a in [0, 1]. Returns a 4 or 8 character rgba hex
  function rgbaToHex(r, g, b, a, allow4Char) {
    var hex = [pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16)), pad2(convertDecimalToHex(a))];

    // Return a 4 character hex if possible
    if (allow4Char && hex[0].charAt(0) == hex[0].charAt(1) && hex[1].charAt(0) == hex[1].charAt(1) && hex[2].charAt(0) == hex[2].charAt(1) && hex[3].charAt(0) == hex[3].charAt(1)) {
      return hex[0].charAt(0) + hex[1].charAt(0) + hex[2].charAt(0) + hex[3].charAt(0);
    }
    return hex.join("");
  }

  // `rgbaToArgbHex`
  // Converts an RGBA color to an ARGB Hex8 string
  // Rarely used, but required for "toFilter()"
  function rgbaToArgbHex(r, g, b, a) {
    var hex = [pad2(convertDecimalToHex(a)), pad2(Math.round(r).toString(16)), pad2(Math.round(g).toString(16)), pad2(Math.round(b).toString(16))];
    return hex.join("");
  }

  // `equals`
  // Can be called with any tinycolor input
  tinycolor.equals = function (color1, color2) {
    if (!color1 || !color2) return false;
    return tinycolor(color1).toRgbString() == tinycolor(color2).toRgbString();
  };
  tinycolor.random = function () {
    return tinycolor.fromRatio({
      r: Math.random(),
      g: Math.random(),
      b: Math.random()
    });
  };

  // Modification Functions
  // ----------------------
  // Thanks to less.js for some of the basics here
  // <https://github.com/cloudhead/less.js/blob/master/lib/less/functions.js>

  function _desaturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s -= amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _saturate(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.s += amount / 100;
    hsl.s = clamp01(hsl.s);
    return tinycolor(hsl);
  }
  function _greyscale(color) {
    return tinycolor(color).desaturate(100);
  }
  function _lighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l += amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }
  function _brighten(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var rgb = tinycolor(color).toRgb();
    rgb.r = Math.max(0, Math.min(255, rgb.r - Math.round(255 * -(amount / 100))));
    rgb.g = Math.max(0, Math.min(255, rgb.g - Math.round(255 * -(amount / 100))));
    rgb.b = Math.max(0, Math.min(255, rgb.b - Math.round(255 * -(amount / 100))));
    return tinycolor(rgb);
  }
  function _darken(color, amount) {
    amount = amount === 0 ? 0 : amount || 10;
    var hsl = tinycolor(color).toHsl();
    hsl.l -= amount / 100;
    hsl.l = clamp01(hsl.l);
    return tinycolor(hsl);
  }

  // Spin takes a positive or negative amount within [-360, 360] indicating the change of hue.
  // Values outside of this range will be wrapped into this range.
  function _spin(color, amount) {
    var hsl = tinycolor(color).toHsl();
    var hue = (hsl.h + amount) % 360;
    hsl.h = hue < 0 ? 360 + hue : hue;
    return tinycolor(hsl);
  }

  // Combination Functions
  // ---------------------
  // Thanks to jQuery xColor for some of the ideas behind these
  // <https://github.com/infusion/jQuery-xcolor/blob/master/jquery.xcolor.js>

  function _complement(color) {
    var hsl = tinycolor(color).toHsl();
    hsl.h = (hsl.h + 180) % 360;
    return tinycolor(hsl);
  }
  function polyad(color, number) {
    if (isNaN(number) || number <= 0) {
      throw new Error("Argument to polyad must be a positive number");
    }
    var hsl = tinycolor(color).toHsl();
    var result = [tinycolor(color)];
    var step = 360 / number;
    for (var i = 1; i < number; i++) {
      result.push(tinycolor({
        h: (hsl.h + i * step) % 360,
        s: hsl.s,
        l: hsl.l
      }));
    }
    return result;
  }
  function _splitcomplement(color) {
    var hsl = tinycolor(color).toHsl();
    var h = hsl.h;
    return [tinycolor(color), tinycolor({
      h: (h + 72) % 360,
      s: hsl.s,
      l: hsl.l
    }), tinycolor({
      h: (h + 216) % 360,
      s: hsl.s,
      l: hsl.l
    })];
  }
  function _analogous(color, results, slices) {
    results = results || 6;
    slices = slices || 30;
    var hsl = tinycolor(color).toHsl();
    var part = 360 / slices;
    var ret = [tinycolor(color)];
    for (hsl.h = (hsl.h - (part * results >> 1) + 720) % 360; --results;) {
      hsl.h = (hsl.h + part) % 360;
      ret.push(tinycolor(hsl));
    }
    return ret;
  }
  function _monochromatic(color, results) {
    results = results || 6;
    var hsv = tinycolor(color).toHsv();
    var h = hsv.h,
      s = hsv.s,
      v = hsv.v;
    var ret = [];
    var modification = 1 / results;
    while (results--) {
      ret.push(tinycolor({
        h: h,
        s: s,
        v: v
      }));
      v = (v + modification) % 1;
    }
    return ret;
  }

  // Utility Functions
  // ---------------------

  tinycolor.mix = function (color1, color2, amount) {
    amount = amount === 0 ? 0 : amount || 50;
    var rgb1 = tinycolor(color1).toRgb();
    var rgb2 = tinycolor(color2).toRgb();
    var p = amount / 100;
    var rgba = {
      r: (rgb2.r - rgb1.r) * p + rgb1.r,
      g: (rgb2.g - rgb1.g) * p + rgb1.g,
      b: (rgb2.b - rgb1.b) * p + rgb1.b,
      a: (rgb2.a - rgb1.a) * p + rgb1.a
    };
    return tinycolor(rgba);
  };

  // Readability Functions
  // ---------------------
  // <http://www.w3.org/TR/2008/REC-WCAG20-20081211/#contrast-ratiodef (WCAG Version 2)

  // `contrast`
  // Analyze the 2 colors and returns the color contrast defined by (WCAG Version 2)
  tinycolor.readability = function (color1, color2) {
    var c1 = tinycolor(color1);
    var c2 = tinycolor(color2);
    return (Math.max(c1.getLuminance(), c2.getLuminance()) + 0.05) / (Math.min(c1.getLuminance(), c2.getLuminance()) + 0.05);
  };

  // `isReadable`
  // Ensure that foreground and background color combinations meet WCAG2 guidelines.
  // The third argument is an optional Object.
  //      the 'level' property states 'AA' or 'AAA' - if missing or invalid, it defaults to 'AA';
  //      the 'size' property states 'large' or 'small' - if missing or invalid, it defaults to 'small'.
  // If the entire object is absent, isReadable defaults to {level:"AA",size:"small"}.

  // *Example*
  //    tinycolor.isReadable("#000", "#111") => false
  //    tinycolor.isReadable("#000", "#111",{level:"AA",size:"large"}) => false
  tinycolor.isReadable = function (color1, color2, wcag2) {
    var readability = tinycolor.readability(color1, color2);
    var wcag2Parms, out;
    out = false;
    wcag2Parms = validateWCAG2Parms(wcag2);
    switch (wcag2Parms.level + wcag2Parms.size) {
      case "AAsmall":
      case "AAAlarge":
        out = readability >= 4.5;
        break;
      case "AAlarge":
        out = readability >= 3;
        break;
      case "AAAsmall":
        out = readability >= 7;
        break;
    }
    return out;
  };

  // `mostReadable`
  // Given a base color and a list of possible foreground or background
  // colors for that base, returns the most readable color.
  // Optionally returns Black or White if the most readable color is unreadable.
  // *Example*
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:false}).toHexString(); // "#112255"
  //    tinycolor.mostReadable(tinycolor.mostReadable("#123", ["#124", "#125"],{includeFallbackColors:true}).toHexString();  // "#ffffff"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"large"}).toHexString(); // "#faf3f3"
  //    tinycolor.mostReadable("#a8015a", ["#faf3f3"],{includeFallbackColors:true,level:"AAA",size:"small"}).toHexString(); // "#ffffff"
  tinycolor.mostReadable = function (baseColor, colorList, args) {
    var bestColor = null;
    var bestScore = 0;
    var readability;
    var includeFallbackColors, level, size;
    args = args || {};
    includeFallbackColors = args.includeFallbackColors;
    level = args.level;
    size = args.size;
    for (var i = 0; i < colorList.length; i++) {
      readability = tinycolor.readability(baseColor, colorList[i]);
      if (readability > bestScore) {
        bestScore = readability;
        bestColor = tinycolor(colorList[i]);
      }
    }
    if (tinycolor.isReadable(baseColor, bestColor, {
      level: level,
      size: size
    }) || !includeFallbackColors) {
      return bestColor;
    } else {
      args.includeFallbackColors = false;
      return tinycolor.mostReadable(baseColor, ["#fff", "#000"], args);
    }
  };

  // Big List of Colors
  // ------------------
  // <https://www.w3.org/TR/css-color-4/#named-colors>
  var names = tinycolor.names = {
    aliceblue: "f0f8ff",
    antiquewhite: "faebd7",
    aqua: "0ff",
    aquamarine: "7fffd4",
    azure: "f0ffff",
    beige: "f5f5dc",
    bisque: "ffe4c4",
    black: "000",
    blanchedalmond: "ffebcd",
    blue: "00f",
    blueviolet: "8a2be2",
    brown: "a52a2a",
    burlywood: "deb887",
    burntsienna: "ea7e5d",
    cadetblue: "5f9ea0",
    chartreuse: "7fff00",
    chocolate: "d2691e",
    coral: "ff7f50",
    cornflowerblue: "6495ed",
    cornsilk: "fff8dc",
    crimson: "dc143c",
    cyan: "0ff",
    darkblue: "00008b",
    darkcyan: "008b8b",
    darkgoldenrod: "b8860b",
    darkgray: "a9a9a9",
    darkgreen: "006400",
    darkgrey: "a9a9a9",
    darkkhaki: "bdb76b",
    darkmagenta: "8b008b",
    darkolivegreen: "556b2f",
    darkorange: "ff8c00",
    darkorchid: "9932cc",
    darkred: "8b0000",
    darksalmon: "e9967a",
    darkseagreen: "8fbc8f",
    darkslateblue: "483d8b",
    darkslategray: "2f4f4f",
    darkslategrey: "2f4f4f",
    darkturquoise: "00ced1",
    darkviolet: "9400d3",
    deeppink: "ff1493",
    deepskyblue: "00bfff",
    dimgray: "696969",
    dimgrey: "696969",
    dodgerblue: "1e90ff",
    firebrick: "b22222",
    floralwhite: "fffaf0",
    forestgreen: "228b22",
    fuchsia: "f0f",
    gainsboro: "dcdcdc",
    ghostwhite: "f8f8ff",
    gold: "ffd700",
    goldenrod: "daa520",
    gray: "808080",
    green: "008000",
    greenyellow: "adff2f",
    grey: "808080",
    honeydew: "f0fff0",
    hotpink: "ff69b4",
    indianred: "cd5c5c",
    indigo: "4b0082",
    ivory: "fffff0",
    khaki: "f0e68c",
    lavender: "e6e6fa",
    lavenderblush: "fff0f5",
    lawngreen: "7cfc00",
    lemonchiffon: "fffacd",
    lightblue: "add8e6",
    lightcoral: "f08080",
    lightcyan: "e0ffff",
    lightgoldenrodyellow: "fafad2",
    lightgray: "d3d3d3",
    lightgreen: "90ee90",
    lightgrey: "d3d3d3",
    lightpink: "ffb6c1",
    lightsalmon: "ffa07a",
    lightseagreen: "20b2aa",
    lightskyblue: "87cefa",
    lightslategray: "789",
    lightslategrey: "789",
    lightsteelblue: "b0c4de",
    lightyellow: "ffffe0",
    lime: "0f0",
    limegreen: "32cd32",
    linen: "faf0e6",
    magenta: "f0f",
    maroon: "800000",
    mediumaquamarine: "66cdaa",
    mediumblue: "0000cd",
    mediumorchid: "ba55d3",
    mediumpurple: "9370db",
    mediumseagreen: "3cb371",
    mediumslateblue: "7b68ee",
    mediumspringgreen: "00fa9a",
    mediumturquoise: "48d1cc",
    mediumvioletred: "c71585",
    midnightblue: "191970",
    mintcream: "f5fffa",
    mistyrose: "ffe4e1",
    moccasin: "ffe4b5",
    navajowhite: "ffdead",
    navy: "000080",
    oldlace: "fdf5e6",
    olive: "808000",
    olivedrab: "6b8e23",
    orange: "ffa500",
    orangered: "ff4500",
    orchid: "da70d6",
    palegoldenrod: "eee8aa",
    palegreen: "98fb98",
    paleturquoise: "afeeee",
    palevioletred: "db7093",
    papayawhip: "ffefd5",
    peachpuff: "ffdab9",
    peru: "cd853f",
    pink: "ffc0cb",
    plum: "dda0dd",
    powderblue: "b0e0e6",
    purple: "800080",
    rebeccapurple: "663399",
    red: "f00",
    rosybrown: "bc8f8f",
    royalblue: "4169e1",
    saddlebrown: "8b4513",
    salmon: "fa8072",
    sandybrown: "f4a460",
    seagreen: "2e8b57",
    seashell: "fff5ee",
    sienna: "a0522d",
    silver: "c0c0c0",
    skyblue: "87ceeb",
    slateblue: "6a5acd",
    slategray: "708090",
    slategrey: "708090",
    snow: "fffafa",
    springgreen: "00ff7f",
    steelblue: "4682b4",
    tan: "d2b48c",
    teal: "008080",
    thistle: "d8bfd8",
    tomato: "ff6347",
    turquoise: "40e0d0",
    violet: "ee82ee",
    wheat: "f5deb3",
    white: "fff",
    whitesmoke: "f5f5f5",
    yellow: "ff0",
    yellowgreen: "9acd32"
  };

  // Make it easy to access colors via `hexNames[hex]`
  var hexNames = tinycolor.hexNames = flip(names);

  // Utilities
  // ---------

  // `{ 'name1': 'val1' }` becomes `{ 'val1': 'name1' }`
  function flip(o) {
    var flipped = {};
    for (var i in o) {
      if (o.hasOwnProperty(i)) {
        flipped[o[i]] = i;
      }
    }
    return flipped;
  }

  // Return a valid alpha value [0,1] with all invalid values being set to 1
  function boundAlpha(a) {
    a = parseFloat(a);
    if (isNaN(a) || a < 0 || a > 1) {
      a = 1;
    }
    return a;
  }

  // Take input from [0, n] and return it as [0, 1]
  function bound01(n, max) {
    if (isOnePointZero(n)) n = "100%";
    var processPercent = isPercentage(n);
    n = Math.min(max, Math.max(0, parseFloat(n)));

    // Automatically convert percentage into number
    if (processPercent) {
      n = parseInt(n * max, 10) / 100;
    }

    // Handle floating point rounding errors
    if (Math.abs(n - max) < 0.000001) {
      return 1;
    }

    // Convert into [0, 1] range if it isn't already
    return n % max / parseFloat(max);
  }

  // Force a number between 0 and 1
  function clamp01(val) {
    return Math.min(1, Math.max(0, val));
  }

  // Parse a base-16 hex value into a base-10 integer
  function parseIntFromHex(val) {
    return parseInt(val, 16);
  }

  // Need to handle 1.0 as 100%, since once it is a number, there is no difference between it and 1
  // <http://stackoverflow.com/questions/7422072/javascript-how-to-detect-number-as-a-decimal-including-1-0>
  function isOnePointZero(n) {
    return typeof n == "string" && n.indexOf(".") != -1 && parseFloat(n) === 1;
  }

  // Check to see if string passed in is a percentage
  function isPercentage(n) {
    return typeof n === "string" && n.indexOf("%") != -1;
  }

  // Force a hex value to have 2 characters
  function pad2(c) {
    return c.length == 1 ? "0" + c : "" + c;
  }

  // Replace a decimal with it's percentage value
  function convertToPercentage(n) {
    if (n <= 1) {
      n = n * 100 + "%";
    }
    return n;
  }

  // Converts a decimal to a hex value
  function convertDecimalToHex(d) {
    return Math.round(parseFloat(d) * 255).toString(16);
  }
  // Converts a hex value to a decimal
  function convertHexToDecimal(h) {
    return parseIntFromHex(h) / 255;
  }
  var matchers = function () {
    // <http://www.w3.org/TR/css3-values/#integers>
    var CSS_INTEGER = "[-\\+]?\\d+%?";

    // <http://www.w3.org/TR/css3-values/#number-value>
    var CSS_NUMBER = "[-\\+]?\\d*\\.\\d+%?";

    // Allow positive/negative integer/number.  Don't capture the either/or, just the entire outcome.
    var CSS_UNIT = "(?:" + CSS_NUMBER + ")|(?:" + CSS_INTEGER + ")";

    // Actual matching.
    // Parentheses and commas are optional, but not required.
    // Whitespace can take the place of commas or opening paren
    var PERMISSIVE_MATCH3 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    var PERMISSIVE_MATCH4 = "[\\s|\\(]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")[,|\\s]+(" + CSS_UNIT + ")\\s*\\)?";
    return {
      CSS_UNIT: new RegExp(CSS_UNIT),
      rgb: new RegExp("rgb" + PERMISSIVE_MATCH3),
      rgba: new RegExp("rgba" + PERMISSIVE_MATCH4),
      hsl: new RegExp("hsl" + PERMISSIVE_MATCH3),
      hsla: new RegExp("hsla" + PERMISSIVE_MATCH4),
      hsv: new RegExp("hsv" + PERMISSIVE_MATCH3),
      hsva: new RegExp("hsva" + PERMISSIVE_MATCH4),
      hex3: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex6: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,
      hex4: /^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,
      hex8: /^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/
    };
  }();

  // `isValidCSSUnit`
  // Take in a single string / number and check to see if it looks like a CSS unit
  // (see `matchers` above for definition).
  function isValidCSSUnit(color) {
    return !!matchers.CSS_UNIT.exec(color);
  }

  // `stringInputToObject`
  // Permissive string parsing.  Take in a number of formats, and output an object
  // based on detected format.  Returns `{ r, g, b }` or `{ h, s, l }` or `{ h, s, v}`
  function stringInputToObject(color) {
    color = color.replace(trimLeft, "").replace(trimRight, "").toLowerCase();
    var named = false;
    if (names[color]) {
      color = names[color];
      named = true;
    } else if (color == "transparent") {
      return {
        r: 0,
        g: 0,
        b: 0,
        a: 0,
        format: "name"
      };
    }

    // Try to match string input using regular expressions.
    // Keep most of the number bounding out of this function - don't worry about [0,1] or [0,100] or [0,360]
    // Just return an object and let the conversion functions handle that.
    // This way the result will be the same whether the tinycolor is initialized with string or object.
    var match;
    if (match = matchers.rgb.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3]
      };
    }
    if (match = matchers.rgba.exec(color)) {
      return {
        r: match[1],
        g: match[2],
        b: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsl.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3]
      };
    }
    if (match = matchers.hsla.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        l: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hsv.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3]
      };
    }
    if (match = matchers.hsva.exec(color)) {
      return {
        h: match[1],
        s: match[2],
        v: match[3],
        a: match[4]
      };
    }
    if (match = matchers.hex8.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        a: convertHexToDecimal(match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex6.exec(color)) {
      return {
        r: parseIntFromHex(match[1]),
        g: parseIntFromHex(match[2]),
        b: parseIntFromHex(match[3]),
        format: named ? "name" : "hex"
      };
    }
    if (match = matchers.hex4.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        a: convertHexToDecimal(match[4] + "" + match[4]),
        format: named ? "name" : "hex8"
      };
    }
    if (match = matchers.hex3.exec(color)) {
      return {
        r: parseIntFromHex(match[1] + "" + match[1]),
        g: parseIntFromHex(match[2] + "" + match[2]),
        b: parseIntFromHex(match[3] + "" + match[3]),
        format: named ? "name" : "hex"
      };
    }
    return false;
  }
  function validateWCAG2Parms(parms) {
    // return valid WCAG2 parms for isReadable.
    // If input parms are invalid, return {"level":"AA", "size":"small"}
    var level, size;
    parms = parms || {
      level: "AA",
      size: "small"
    };
    level = (parms.level || "AA").toUpperCase();
    size = (parms.size || "small").toLowerCase();
    if (level !== "AA" && level !== "AAA") {
      level = "AA";
    }
    if (size !== "small" && size !== "large") {
      size = "small";
    }
    return {
      level: level,
      size: size
    };
  }

  return tinycolor;

}));


/***/ }),

/***/ 64900:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Z: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
	"locale": "en",
	"long": {
		"year": {
			"previous": "last year",
			"current": "this year",
			"next": "next year",
			"past": {
				"one": "{0} year ago",
				"other": "{0} years ago"
			},
			"future": {
				"one": "in {0} year",
				"other": "in {0} years"
			}
		},
		"quarter": {
			"previous": "last quarter",
			"current": "this quarter",
			"next": "next quarter",
			"past": {
				"one": "{0} quarter ago",
				"other": "{0} quarters ago"
			},
			"future": {
				"one": "in {0} quarter",
				"other": "in {0} quarters"
			}
		},
		"month": {
			"previous": "last month",
			"current": "this month",
			"next": "next month",
			"past": {
				"one": "{0} month ago",
				"other": "{0} months ago"
			},
			"future": {
				"one": "in {0} month",
				"other": "in {0} months"
			}
		},
		"week": {
			"previous": "last week",
			"current": "this week",
			"next": "next week",
			"past": {
				"one": "{0} week ago",
				"other": "{0} weeks ago"
			},
			"future": {
				"one": "in {0} week",
				"other": "in {0} weeks"
			}
		},
		"day": {
			"previous": "yesterday",
			"current": "today",
			"next": "tomorrow",
			"past": {
				"one": "{0} day ago",
				"other": "{0} days ago"
			},
			"future": {
				"one": "in {0} day",
				"other": "in {0} days"
			}
		},
		"hour": {
			"current": "this hour",
			"past": {
				"one": "{0} hour ago",
				"other": "{0} hours ago"
			},
			"future": {
				"one": "in {0} hour",
				"other": "in {0} hours"
			}
		},
		"minute": {
			"current": "this minute",
			"past": {
				"one": "{0} minute ago",
				"other": "{0} minutes ago"
			},
			"future": {
				"one": "in {0} minute",
				"other": "in {0} minutes"
			}
		},
		"second": {
			"current": "now",
			"past": {
				"one": "{0} second ago",
				"other": "{0} seconds ago"
			},
			"future": {
				"one": "in {0} second",
				"other": "in {0} seconds"
			}
		}
	},
	"short": {
		"year": {
			"previous": "last yr.",
			"current": "this yr.",
			"next": "next yr.",
			"past": "{0} yr. ago",
			"future": "in {0} yr."
		},
		"quarter": {
			"previous": "last qtr.",
			"current": "this qtr.",
			"next": "next qtr.",
			"past": {
				"one": "{0} qtr. ago",
				"other": "{0} qtrs. ago"
			},
			"future": {
				"one": "in {0} qtr.",
				"other": "in {0} qtrs."
			}
		},
		"month": {
			"previous": "last mo.",
			"current": "this mo.",
			"next": "next mo.",
			"past": "{0} mo. ago",
			"future": "in {0} mo."
		},
		"week": {
			"previous": "last wk.",
			"current": "this wk.",
			"next": "next wk.",
			"past": "{0} wk. ago",
			"future": "in {0} wk."
		},
		"day": {
			"previous": "yesterday",
			"current": "today",
			"next": "tomorrow",
			"past": {
				"one": "{0} day ago",
				"other": "{0} days ago"
			},
			"future": {
				"one": "in {0} day",
				"other": "in {0} days"
			}
		},
		"hour": {
			"current": "this hour",
			"past": "{0} hr. ago",
			"future": "in {0} hr."
		},
		"minute": {
			"current": "this minute",
			"past": "{0} min. ago",
			"future": "in {0} min."
		},
		"second": {
			"current": "now",
			"past": "{0} sec. ago",
			"future": "in {0} sec."
		}
	},
	"narrow": {
		"year": {
			"previous": "last yr.",
			"current": "this yr.",
			"next": "next yr.",
			"past": "{0}y ago",
			"future": "in {0}y"
		},
		"quarter": {
			"previous": "last qtr.",
			"current": "this qtr.",
			"next": "next qtr.",
			"past": "{0}q ago",
			"future": "in {0}q"
		},
		"month": {
			"previous": "last mo.",
			"current": "this mo.",
			"next": "next mo.",
			"past": "{0}mo ago",
			"future": "in {0}mo"
		},
		"week": {
			"previous": "last wk.",
			"current": "this wk.",
			"next": "next wk.",
			"past": "{0}w ago",
			"future": "in {0}w"
		},
		"day": {
			"previous": "yesterday",
			"current": "today",
			"next": "tomorrow",
			"past": "{0}d ago",
			"future": "in {0}d"
		},
		"hour": {
			"current": "this hour",
			"past": "{0}h ago",
			"future": "in {0}h"
		},
		"minute": {
			"current": "this minute",
			"past": "{0}m ago",
			"future": "in {0}m"
		},
		"second": {
			"current": "now",
			"past": "{0}s ago",
			"future": "in {0}s"
		}
	},
	"now": {
		"now": {
			"current": "now",
			"future": "in a moment",
			"past": "just now"
		}
	},
	"mini": {
		"year": "{0}yr",
		"month": "{0}mo",
		"week": "{0}wk",
		"day": "{0}d",
		"hour": "{0}h",
		"minute": "{0}m",
		"second": "{0}s",
		"now": "now"
	},
	"short-time": {
		"year": "{0} yr.",
		"month": "{0} mo.",
		"week": "{0} wk.",
		"day": {
			"one": "{0} day",
			"other": "{0} days"
		},
		"hour": "{0} hr.",
		"minute": "{0} min.",
		"second": "{0} sec."
	},
	"long-time": {
		"year": {
			"one": "{0} year",
			"other": "{0} years"
		},
		"month": {
			"one": "{0} month",
			"other": "{0} months"
		},
		"week": {
			"one": "{0} week",
			"other": "{0} weeks"
		},
		"day": {
			"one": "{0} day",
			"other": "{0} days"
		},
		"hour": {
			"one": "{0} hour",
			"other": "{0} hours"
		},
		"minute": {
			"one": "{0} minute",
			"other": "{0} minutes"
		},
		"second": {
			"one": "{0} second",
			"other": "{0} seconds"
		}
	}
});

/***/ }),

/***/ 1799:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* binding */ TimeAgo)
});

;// CONCATENATED MODULE: ./node_modules/relative-time-format/modules/LocaleDataStore.js
// Fallback locale.
// (when not a single one of the supplied "preferred" locales is available)
var defaultLocale = 'en'; // For all locales added
// their relative time formatter messages will be stored here.

var localesData = {}; // According to the spec BCP 47 language tags are case-insensitive.
// https://tools.ietf.org/html/rfc5646

var lowercaseLocaleLookup = {};
function getDefaultLocale() {
  return defaultLocale;
}
function setDefaultLocale(locale) {
  defaultLocale = locale;
}
/**
 * Gets locale data previously added by `addLocaleData()`.
 * @return  {object} [localeData]
 */

function getLocaleData(locale) {
  return localesData[locale];
}
/**
 * Adds locale data.
 * Is called by `RelativeTimeFormat.addLocale(...)`.
 * @param  {object} localeData
 */

function addLocaleData(localeData) {
  if (!localeData) {
    throw new Error('No locale data passed');
  } // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.


  localesData[localeData.locale] = localeData;
  lowercaseLocaleLookup[localeData.locale.toLowerCase()] = localeData.locale;
}
/**
 * Returns a locale for which locale data has been added
 * via `RelativeTimeFormat.addLocale(...)`.
 * @param  {string} locale
 * @return {string} [locale]
 */

function resolveLocale(locale) {
  if (localesData[locale]) {
    return locale;
  }

  if (lowercaseLocaleLookup[locale.toLowerCase()]) {
    return lowercaseLocaleLookup[locale.toLowerCase()];
  }
}
//# sourceMappingURL=LocaleDataStore.js.map
;// CONCATENATED MODULE: ./node_modules/relative-time-format/modules/resolveLocale.js

/**
 * Resolves a locale to a supported one (if any).
 * @param  {string} locale
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocale("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocale("xx-Latn")
 */

function resolveLocale_resolveLocale(locale) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  var localeMatcher = options.localeMatcher || 'lookup';

  switch (localeMatcher) {
    case 'lookup':
      return resolveLocaleLookup(locale);
    // "best fit" locale matching is not supported.
    // https://github.com/catamphetamine/relative-time-format/issues/2

    case 'best fit':
      // return resolveLocaleBestFit(locale)
      return resolveLocaleLookup(locale);

    default:
      throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
  }
}
/**
 * Resolves a locale to a supported one (if any).
 * Starts from the most specific locale and gradually
 * falls back to less specific ones.
 * This is a basic implementation of the "lookup" algorithm.
 * https://tools.ietf.org/html/rfc4647#section-3.4
 * @param  {string} locale
 * @return {string} [locale]
 * @example
 * // Returns "sr"
 * resolveLocaleLookup("sr-Cyrl-BA")
 * // Returns `undefined`
 * resolveLocaleLookup("xx-Latn")
 */

function resolveLocaleLookup(locale) {
  var resolvedLocale = resolveLocale(locale);

  if (resolvedLocale) {
    return resolvedLocale;
  } // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.


  var parts = locale.split('-');

  while (locale.length > 1) {
    parts.pop();
    locale = parts.join('-');

    var _resolvedLocale = resolveLocale(locale);

    if (_resolvedLocale) {
      return _resolvedLocale;
    }
  }
}
//# sourceMappingURL=resolveLocale.js.map
;// CONCATENATED MODULE: ./node_modules/relative-time-format/modules/PluralRuleFunctions.js
// (this file was autogenerated by `generate-locales`)
// "plural rules" functions are not stored in locale JSON files because they're not strings.
// This file isn't big — it's about 5 kilobytes in size (minified).
// Alternatively, the pluralization rules for each locale could be stored
// in their JSON files in a non-parsed form and later parsed via `make-plural` library.
// But `make-plural` library itself is relatively big in size:
// `make-plural.min.js` is about 6 kilobytes (https://unpkg.com/make-plural/).
// So, it's more practical to bypass runtime `make-plural` pluralization rules compilation
// and just include the already compiled pluarlization rules for all locales in the library code.
var $ = {
  af: function af(n) {
    return n == 1 ? 'one' : 'other';
  },
  am: function am(n) {
    return n >= 0 && n <= 1 ? 'one' : 'other';
  },
  ar: function ar(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 99 ? 'many' : 'other';
  },
  ast: function ast(n) {
    var s = String(n).split('.'),
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : 'other';
  },
  be: function be(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && n100 != 11 ? 'one' : n10 >= 2 && n10 <= 4 && (n100 < 12 || n100 > 14) ? 'few' : t0 && n10 == 0 || n10 >= 5 && n10 <= 9 || n100 >= 11 && n100 <= 14 ? 'many' : 'other';
  },
  br: function br(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        n1000000 = t0 && s[0].slice(-6);
    return n10 == 1 && n100 != 11 && n100 != 71 && n100 != 91 ? 'one' : n10 == 2 && n100 != 12 && n100 != 72 && n100 != 92 ? 'two' : (n10 == 3 || n10 == 4 || n10 == 9) && (n100 < 10 || n100 > 19) && (n100 < 70 || n100 > 79) && (n100 < 90 || n100 > 99) ? 'few' : n != 0 && t0 && n1000000 == 0 ? 'many' : 'other';
  },
  bs: function bs(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) || f10 >= 2 && f10 <= 4 && (f100 < 12 || f100 > 14) ? 'few' : 'other';
  },
  ca: function ca(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 && v0 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ceb: function ceb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        f10 = f.slice(-1);
    return v0 && (i == 1 || i == 2 || i == 3) || v0 && i10 != 4 && i10 != 6 && i10 != 9 || !v0 && f10 != 4 && f10 != 6 && f10 != 9 ? 'one' : 'other';
  },
  cs: function cs(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return n == 1 && v0 ? 'one' : i >= 2 && i <= 4 && v0 ? 'few' : !v0 ? 'many' : 'other';
  },
  cy: function cy(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : n == 2 ? 'two' : n == 3 ? 'few' : n == 6 ? 'many' : 'other';
  },
  da: function da(n) {
    var s = String(n).split('.'),
        i = s[0],
        t0 = Number(s[0]) == n;
    return n == 1 || !t0 && (i == 0 || i == 1) ? 'one' : 'other';
  },
  dsb: function dsb(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i100 = i.slice(-2),
        f100 = f.slice(-2);
    return v0 && i100 == 1 || f100 == 1 ? 'one' : v0 && i100 == 2 || f100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || f100 == 3 || f100 == 4 ? 'few' : 'other';
  },
  dz: function dz(n) {
    return 'other';
  },
  es: function es(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ff: function ff(n) {
    return n >= 0 && n < 2 ? 'one' : 'other';
  },
  fr: function fr(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return n >= 0 && n < 2 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ga: function ga(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 ? 'one' : n == 2 ? 'two' : t0 && n >= 3 && n <= 6 ? 'few' : t0 && n >= 7 && n <= 10 ? 'many' : 'other';
  },
  gd: function gd(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n;
    return n == 1 || n == 11 ? 'one' : n == 2 || n == 12 ? 'two' : t0 && n >= 3 && n <= 10 || t0 && n >= 13 && n <= 19 ? 'few' : 'other';
  },
  he: function he(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1];
    return i == 1 && v0 || i == 0 && !v0 ? 'one' : i == 2 && v0 ? 'two' : 'other';
  },
  is: function is(n) {
    var s = String(n).split('.'),
        i = s[0],
        t = (s[1] || '').replace(/0+$/, ''),
        t0 = Number(s[0]) == n,
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return t0 && i10 == 1 && i100 != 11 || t % 10 == 1 && t % 100 != 11 ? 'one' : 'other';
  },
  ksh: function ksh(n) {
    return n == 0 ? 'zero' : n == 1 ? 'one' : 'other';
  },
  lt: function lt(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2);
    return n10 == 1 && (n100 < 11 || n100 > 19) ? 'one' : n10 >= 2 && n10 <= 9 && (n100 < 11 || n100 > 19) ? 'few' : f != 0 ? 'many' : 'other';
  },
  lv: function lv(n) {
    var s = String(n).split('.'),
        f = s[1] || '',
        v = f.length,
        t0 = Number(s[0]) == n,
        n10 = t0 && s[0].slice(-1),
        n100 = t0 && s[0].slice(-2),
        f100 = f.slice(-2),
        f10 = f.slice(-1);
    return t0 && n10 == 0 || n100 >= 11 && n100 <= 19 || v == 2 && f100 >= 11 && f100 <= 19 ? 'zero' : n10 == 1 && n100 != 11 || v == 2 && f10 == 1 && f100 != 11 || v != 2 && f10 == 1 ? 'one' : 'other';
  },
  mk: function mk(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '',
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2),
        f10 = f.slice(-1),
        f100 = f.slice(-2);
    return v0 && i10 == 1 && i100 != 11 || f10 == 1 && f100 != 11 ? 'one' : 'other';
  },
  mt: function mt(n) {
    var s = String(n).split('.'),
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 ? 'one' : n == 2 ? 'two' : n == 0 || n100 >= 3 && n100 <= 10 ? 'few' : n100 >= 11 && n100 <= 19 ? 'many' : 'other';
  },
  pa: function pa(n) {
    return n == 0 || n == 1 ? 'one' : 'other';
  },
  pl: function pl(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return n == 1 && v0 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i != 1 && (i10 == 0 || i10 == 1) || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 12 && i100 <= 14 ? 'many' : 'other';
  },
  pt: function pt(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i1000000 = i.slice(-6);
    return i == 0 || i == 1 ? 'one' : i != 0 && i1000000 == 0 && v0 ? 'many' : 'other';
  },
  ro: function ro(n) {
    var s = String(n).split('.'),
        v0 = !s[1],
        t0 = Number(s[0]) == n,
        n100 = t0 && s[0].slice(-2);
    return n == 1 && v0 ? 'one' : !v0 || n == 0 || n != 1 && n100 >= 1 && n100 <= 19 ? 'few' : 'other';
  },
  ru: function ru(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i10 = i.slice(-1),
        i100 = i.slice(-2);
    return v0 && i10 == 1 && i100 != 11 ? 'one' : v0 && i10 >= 2 && i10 <= 4 && (i100 < 12 || i100 > 14) ? 'few' : v0 && i10 == 0 || v0 && i10 >= 5 && i10 <= 9 || v0 && i100 >= 11 && i100 <= 14 ? 'many' : 'other';
  },
  se: function se(n) {
    return n == 1 ? 'one' : n == 2 ? 'two' : 'other';
  },
  si: function si(n) {
    var s = String(n).split('.'),
        i = s[0],
        f = s[1] || '';
    return n == 0 || n == 1 || i == 0 && f == 1 ? 'one' : 'other';
  },
  sl: function sl(n) {
    var s = String(n).split('.'),
        i = s[0],
        v0 = !s[1],
        i100 = i.slice(-2);
    return v0 && i100 == 1 ? 'one' : v0 && i100 == 2 ? 'two' : v0 && (i100 == 3 || i100 == 4) || !v0 ? 'few' : 'other';
  }
};
$.as = $.am;
$.az = $.af;
$.bg = $.af;
$.bn = $.am;
$.brx = $.af;
$.ce = $.af;
$.chr = $.af;
$.de = $.ast;
$.ee = $.af;
$.el = $.af;
$.en = $.ast;
$.et = $.ast;
$.eu = $.af;
$.fa = $.am;
$.fi = $.ast;
$.fil = $.ceb;
$.fo = $.af;
$.fur = $.af;
$.fy = $.ast;
$.gl = $.ast;
$.gu = $.am;
$.ha = $.af;
$.hi = $.am;
$.hr = $.bs;
$.hsb = $.dsb;
$.hu = $.af;
$.hy = $.ff;
$.ia = $.ast;
$.id = $.dz;
$.ig = $.dz;
$.it = $.ca;
$.ja = $.dz;
$.jgo = $.af;
$.jv = $.dz;
$.ka = $.af;
$.kea = $.dz;
$.kk = $.af;
$.kl = $.af;
$.km = $.dz;
$.kn = $.am;
$.ko = $.dz;
$.ks = $.af;
$.ku = $.af;
$.ky = $.af;
$.lb = $.af;
$.lkt = $.dz;
$.lo = $.dz;
$.ml = $.af;
$.mn = $.af;
$.mr = $.af;
$.ms = $.dz;
$.my = $.dz;
$.nb = $.af;
$.ne = $.af;
$.nl = $.ast;
$.nn = $.af;
$.no = $.af;
$.or = $.af;
$.pcm = $.am;
$.ps = $.af;
$.rm = $.af;
$.sah = $.dz;
$.sc = $.ast;
$.sd = $.af;
$.sk = $.cs;
$.so = $.af;
$.sq = $.af;
$.sr = $.bs;
$.su = $.dz;
$.sv = $.ast;
$.sw = $.ast;
$.ta = $.af;
$.te = $.af;
$.th = $.dz;
$.ti = $.pa;
$.tk = $.af;
$.to = $.dz;
$.tr = $.af;
$.ug = $.af;
$.uk = $.ru;
$.ur = $.ast;
$.uz = $.af;
$.vi = $.dz;
$.wae = $.af;
$.wo = $.dz;
$.xh = $.af;
$.yi = $.ast;
$.yo = $.dz;
$.yue = $.dz;
$.zh = $.dz;
$.zu = $.am;
/* harmony default export */ const PluralRuleFunctions = ($);
//# sourceMappingURL=PluralRuleFunctions.js.map
;// CONCATENATED MODULE: ./node_modules/relative-time-format/modules/getPluralRulesLocale.js
/**
 * Returns a `locale` for which a function exists in `./PluralRuleFunctions.js`.
 * @param  {string} locale
 * @return {string}
 * @example
 * getPluralRulesLocale("ru-RU-Cyrl") // Returns "ru".
 */
function getPluralRulesLocale(locale) {
  // "pt" language is the only one having different pluralization rules
  // for the one ("pt") (Portuguese) locale and the other ("pt-PT") (European Portuguese).
  // http://www.unicode.org/cldr/charts/latest/supplemental/language_plural_rules.html
  // (see the entries for "pt" and "pt_PT" there)
  if (locale === 'pt-PT') {
    return locale;
  }

  return getLanguageFromLanguageTag(locale);
}
/**
 * Extracts language from an IETF BCP 47 language tag.
 * @param {string} languageTag - IETF BCP 47 language tag.
 * @return {string}
 * @example
 * // Returns "he"
 * getLanguageFromLanguageTag("he-IL-u-ca-hebrew-tz-jeruslm")
 * // Returns "ar"
 * getLanguageFromLanguageTag("ar-u-nu-latn")
 */

var LANGUAGE_REG_EXP = /^([a-z0-9]+)/i;

function getLanguageFromLanguageTag(languageTag) {
  var match = languageTag.match(LANGUAGE_REG_EXP);

  if (!match) {
    throw new TypeError("Invalid locale: ".concat(languageTag));
  }

  return match[1];
}
//# sourceMappingURL=getPluralRulesLocale.js.map
;// CONCATENATED MODULE: ./node_modules/relative-time-format/modules/PluralRules.js
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

// Importing `PluralRule` polyfill from a separate package
// results in a bundle that is larger by 1kB for some reason.
// export { default as default } from 'intl-plural-rules-polyfill/cardinal'


/**
 * `Intl.PluralRules` polyfill.
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/PluralRules
 */

var PluralRules = /*#__PURE__*/function () {
  function PluralRules(locale, options) {
    _classCallCheck(this, PluralRules);

    var locales = PluralRules.supportedLocalesOf(locale);

    if (locales.length === 0) {
      throw new RangeError("Unsupported locale: " + locale);
    }

    if (options && options.type !== "cardinal") {
      throw new RangeError("Only \"cardinal\" \"type\" is supported");
    }

    this.$ = PluralRuleFunctions[getPluralRulesLocale(locales[0])];
  }

  _createClass(PluralRules, [{
    key: "select",
    value: function select(number) {
      return this.$(number);
    }
  }], [{
    key: "supportedLocalesOf",
    value: function supportedLocalesOf(locales) {
      if (typeof locales === "string") {
        locales = [locales];
      }

      return locales.filter(function (locale) {
        return PluralRuleFunctions[getPluralRulesLocale(locale)];
      });
    }
  }]);

  return PluralRules;
}();


//# sourceMappingURL=PluralRules.js.map
;// CONCATENATED MODULE: ./node_modules/relative-time-format/modules/RelativeTimeFormat.js
function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function RelativeTimeFormat_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function RelativeTimeFormat_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function RelativeTimeFormat_createClass(Constructor, protoProps, staticProps) { if (protoProps) RelativeTimeFormat_defineProperties(Constructor.prototype, protoProps); if (staticProps) RelativeTimeFormat_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }



 // Importing `PluralRule` polyfill from a separate package
// results in a bundle that is larger by 1kB for some reason.
// import PluralRules from 'intl-plural-rules-polyfill/cardinal'
// Valid time units.

var UNITS = ["second", "minute", "hour", "day", "week", "month", "quarter", "year"]; // Valid values for the `numeric` option.

var NUMERIC_VALUES = ["auto", "always"]; // Valid values for the `style` option.

var STYLE_VALUES = ["long", "short", "narrow"]; // Valid values for the `localeMatcher` option.

var LOCALE_MATCHER_VALUES = ["lookup", "best fit"];
/**
 * Polyfill for `Intl.RelativeTimeFormat` proposal.
 * https://github.com/tc39/proposal-intl-relative-time
 * https://github.com/tc39/proposal-intl-relative-time/issues/55
 */

var RelativeTimeFormat = /*#__PURE__*/function () {
  /**
   * @param {(string|string[])} [locales] - Preferred locales (or locale).
   * @param {Object} [options] - Formatting options.
   * @param {string} [options.style="long"] - One of: "long", "short", "narrow".
   * @param {string} [options.numeric="always"] - (Version >= 2) One of: "always", "auto".
   * @param {string} [options.localeMatcher="lookup"] - One of: "lookup", "best fit". Currently only "lookup" is supported.
   */
  function RelativeTimeFormat() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

    RelativeTimeFormat_classCallCheck(this, RelativeTimeFormat);

    var numeric = options.numeric,
        style = options.style,
        localeMatcher = options.localeMatcher;
    this.numeric = "always";
    this.style = "long";
    this.localeMatcher = "lookup"; // Set `numeric` option.

    if (numeric !== undefined) {
      if (NUMERIC_VALUES.indexOf(numeric) < 0) {
        throw new RangeError("Invalid \"numeric\" option: ".concat(numeric));
      }

      this.numeric = numeric;
    } // Set `style` option.


    if (style !== undefined) {
      if (STYLE_VALUES.indexOf(style) < 0) {
        throw new RangeError("Invalid \"style\" option: ".concat(style));
      }

      this.style = style;
    } // Set `localeMatcher` option.


    if (localeMatcher !== undefined) {
      if (LOCALE_MATCHER_VALUES.indexOf(localeMatcher) < 0) {
        throw new RangeError("Invalid \"localeMatcher\" option: ".concat(localeMatcher));
      }

      this.localeMatcher = localeMatcher;
    } // Set `locale`.
    // Convert `locales` to an array.


    if (typeof locales === 'string') {
      locales = [locales];
    } // Add default locale.


    locales.push(getDefaultLocale()); // Choose the most appropriate locale.

    this.locale = RelativeTimeFormat.supportedLocalesOf(locales, {
      localeMatcher: this.localeMatcher
    })[0];

    if (!this.locale) {
      throw new Error("No supported locale was found");
    } // Construct an `Intl.PluralRules` instance (polyfill).


    if (PluralRules.supportedLocalesOf(this.locale).length > 0) {
      this.pluralRules = new PluralRules(this.locale);
    } else {
      console.warn("\"".concat(this.locale, "\" locale is not supported"));
    } // Use `Intl.NumberFormat` for formatting numbers (when available).


    if (typeof Intl !== 'undefined' && Intl.NumberFormat) {
      this.numberFormat = new Intl.NumberFormat(this.locale);
      this.numberingSystem = this.numberFormat.resolvedOptions().numberingSystem;
    } else {
      this.numberingSystem = 'latn';
    }

    this.locale = resolveLocale_resolveLocale(this.locale, {
      localeMatcher: this.localeMatcher
    });
  }
  /**
   * Formats time `number` in `units` (either in past or in future).
   * @param {number} number - Time interval value.
   * @param {string} unit - Time interval measurement unit.
   * @return {string}
   * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
   * @example
   * // Returns "2 days ago"
   * rtf.format(-2, "day")
   * // Returns "in 5 minutes"
   * rtf.format(5, "minute")
   */


  RelativeTimeFormat_createClass(RelativeTimeFormat, [{
    key: "format",
    value: function format() {
      var _parseFormatArgs = parseFormatArgs(arguments),
          _parseFormatArgs2 = _slicedToArray(_parseFormatArgs, 2),
          number = _parseFormatArgs2[0],
          unit = _parseFormatArgs2[1];

      return this.getRule(number, unit).replace('{0}', this.formatNumber(Math.abs(number)));
    }
    /**
     * Formats time `number` in `units` (either in past or in future).
     * @param {number} number - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {Object[]} The parts (`{ type, value, unit? }`).
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Version 1 (deprecated).
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "day", value: "100" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     * //
     * // Version 2.
     * // Returns [
     * //   { type: "literal", value: "in " },
     * //   { type: "integer", value: "100", unit: "day" },
     * //   { type: "literal", value: " days" }
     * // ]
     * rtf.formatToParts(100, "day")
     */

  }, {
    key: "formatToParts",
    value: function formatToParts() {
      var _parseFormatArgs3 = parseFormatArgs(arguments),
          _parseFormatArgs4 = _slicedToArray(_parseFormatArgs3, 2),
          number = _parseFormatArgs4[0],
          unit = _parseFormatArgs4[1];

      var rule = this.getRule(number, unit);
      var valueIndex = rule.indexOf("{0}"); // "yesterday"/"today"/"tomorrow".

      if (valueIndex < 0) {
        return [{
          type: "literal",
          value: rule
        }];
      }

      var parts = [];

      if (valueIndex > 0) {
        parts.push({
          type: "literal",
          value: rule.slice(0, valueIndex)
        });
      }

      parts = parts.concat(this.formatNumberToParts(Math.abs(number)).map(function (part) {
        return _objectSpread(_objectSpread({}, part), {}, {
          unit: unit
        });
      }));

      if (valueIndex + "{0}".length < rule.length - 1) {
        parts.push({
          type: "literal",
          value: rule.slice(valueIndex + "{0}".length)
        });
      }

      return parts;
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {number} value - Time interval value.
     * @param {string} unit - Time interval measurement unit.
     * @return {string}
     * @throws {RangeError} If unit is not one of "second", "minute", "hour", "day", "week", "month", "quarter".
     * @example
     * // Returns "{0} days ago"
     * getRule(-2, "day")
     */

  }, {
    key: "getRule",
    value: function getRule(value, unit) {
      // Get locale-specific time interval formatting rules
      // of a given `style` for the given value of measurement `unit`.
      //
      // E.g.:
      //
      // ```json
      // {
      //  "past": {
      //    "one": "a second ago",
      //    "other": "{0} seconds ago"
      //  },
      //  "future": {
      //    "one": "in a second",
      //    "other": "in {0} seconds"
      //  }
      // }
      // ```
      //
      var unitMessages = getLocaleData(this.locale)[this.style][unit]; // Bundle size optimization technique for styles like
      // "tiny" in `javascript-time-ago`: "1m", "2h", "3d"...

      if (typeof unitMessages === 'string') {
        return unitMessages;
      } // Special case for "yesterday"/"today"/"tomorrow".


      if (this.numeric === "auto") {
        // "yesterday", "the day before yesterday", etc.
        if (value === -2 || value === -1) {
          var message = unitMessages["previous".concat(value === -1 ? '' : '-' + Math.abs(value))];

          if (message) {
            return message;
          }
        } // "tomorrow", "the day after tomorrow", etc.
        else if (value === 1 || value === 2) {
          var _message = unitMessages["next".concat(value === 1 ? '' : '-' + Math.abs(value))];

          if (_message) {
            return _message;
          }
        } // "today"
        else if (value === 0) {
          if (unitMessages.current) {
            return unitMessages.current;
          }
        }
      } // Choose either "past" or "future" based on time `value` sign.
      // If there's only "other" then it's being collapsed.
      // (the resulting bundle size optimization technique)


      var pluralizedMessages = unitMessages[isNegative(value) ? "past" : "future"]; // Bundle size optimization technique for styles like "narrow"
      // having messages like "in {0} d." or "{0} d. ago".

      if (typeof pluralizedMessages === "string") {
        return pluralizedMessages;
      } // Quantify `value`.
      // There seems to be no such locale in CLDR
      // for which "plural rules" function is missing.


      var quantifier = this.pluralRules && this.pluralRules.select(Math.abs(value)) || 'other'; // "other" rule is supposed to be always present.
      // If only "other" rule is present then "rules" is not an object and is a string.

      return pluralizedMessages[quantifier] || pluralizedMessages.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */

  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Formats a number into a list of parts.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {object[]}
     */

  }, {
    key: "formatNumberToParts",
    value: function formatNumberToParts(number) {
      // `Intl.NumberFormat.formatToParts()` is not present, for example,
      // in Node.js 8.x while `Intl.NumberFormat` itself is present.
      return this.numberFormat && this.numberFormat.formatToParts ? this.numberFormat.formatToParts(number) : [{
        type: "integer",
        value: this.formatNumber(number)
      }];
    }
    /**
     * Returns a new object with properties reflecting the locale and date and time formatting options computed during initialization of this DateTimeFormat object.
     * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/DateTimeFormat/resolvedOptions
     * @return {Object}
     */

  }, {
    key: "resolvedOptions",
    value: function resolvedOptions() {
      return {
        locale: this.locale,
        style: this.style,
        numeric: this.numeric,
        numberingSystem: this.numberingSystem
      };
    }
  }]);

  return RelativeTimeFormat;
}();
/**
 * Returns an array containing those of the provided locales
 * that are supported in collation without having to fall back
 * to the runtime's default locale.
 * @param {(string|string[])} locale - A string with a BCP 47 language tag, or an array of such strings. For the general form of the locales argument, see the Intl page.
 * @param {Object} [options] - An object that may have the following property:
 * @param {string} [options.localeMatcher="lookup"] - The locale matching algorithm to use. Possible values are "lookup" and "best fit". Currently only "lookup" is supported.
 * @return {string[]} An array of strings representing a subset of the given locale tags that are supported in collation without having to fall back to the runtime's default locale.
 * @example
 * var locales = ['ban', 'id-u-co-pinyin', 'es-PY']
 * var options = { localeMatcher: 'lookup' }
 * // Returns ["id", "es-PY"]
 * Intl.RelativeTimeFormat.supportedLocalesOf(locales, options)
 */




RelativeTimeFormat.supportedLocalesOf = function (locales) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // Convert `locales` to an array.
  if (typeof locales === 'string') {
    locales = [locales];
  } else if (!Array.isArray(locales)) {
    throw new TypeError('Invalid "locales" argument');
  }

  return locales.filter(function (locale) {
    return resolveLocale_resolveLocale(locale, options);
  });
};
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */


RelativeTimeFormat.addLocale = addLocaleData;
/**
 * Sets default locale.
 * @param  {string} locale
 */

RelativeTimeFormat.setDefaultLocale = setDefaultLocale;
/**
 * Gets default locale.
 * @return  {string} locale
 */

RelativeTimeFormat.getDefaultLocale = getDefaultLocale;
/**
 * Export `Intl.PluralRules` just in case it's used somewhere else.
 */

RelativeTimeFormat.PluralRules = PluralRules; // The specification allows units to be in plural form.
// Convert plural to singular.
// Example: "seconds" -> "second".

var UNIT_ERROR = 'Invalid "unit" argument';

function parseUnit(unit) {
  if (_typeof(unit) === 'symbol') {
    throw new TypeError(UNIT_ERROR);
  }

  if (typeof unit !== 'string') {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }

  if (unit[unit.length - 1] === 's') {
    unit = unit.slice(0, unit.length - 1);
  }

  if (UNITS.indexOf(unit) < 0) {
    throw new RangeError("".concat(UNIT_ERROR, ": ").concat(unit));
  }

  return unit;
} // Converts `value` to a `Number`.
// The specification allows value to be a non-number.
// For example, "-0" is supposed to be treated as `-0`.
// Also checks if `value` is a finite number.


var NUMBER_ERROR = 'Invalid "number" argument';

function parseNumber(value) {
  value = Number(value);

  if (Number.isFinite) {
    if (!Number.isFinite(value)) {
      throw new RangeError("".concat(NUMBER_ERROR, ": ").concat(value));
    }
  }

  return value;
}
/**
 * Tells `0` from `-0`.
 * https://stackoverflow.com/questions/7223359/are-0-and-0-the-same
 * @param  {number} number
 * @return {Boolean}
 * @example
 * isNegativeZero(0); // false
 * isNegativeZero(-0); // true
 */


function isNegativeZero(number) {
  return 1 / number === -Infinity;
}

function isNegative(number) {
  return number < 0 || number === 0 && isNegativeZero(number);
}

function parseFormatArgs(args) {
  if (args.length < 2) {
    throw new TypeError("\"unit\" argument is required");
  }

  return [parseNumber(args[0]), parseUnit(args[1])];
}
//# sourceMappingURL=RelativeTimeFormat.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/cache.js
function cache_typeof(obj) { "@babel/helpers - typeof"; return cache_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, cache_typeof(obj); }

function cache_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function cache_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function cache_createClass(Constructor, protoProps, staticProps) { if (protoProps) cache_defineProperties(Constructor.prototype, protoProps); if (staticProps) cache_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

/**
 * A basic in-memory cache.
 *
 * import Cache from 'javascript-time-ago/Cache'
 * const cache = new Cache()
 * const object = cache.get('key1', 'key2', ...) || cache.put('key1', 'key2', ..., createObject())
 */
var Cache = /*#__PURE__*/function () {
  function Cache() {
    cache_classCallCheck(this, Cache);

    this.cache = {};
  }

  cache_createClass(Cache, [{
    key: "get",
    value: function get() {
      var cache = this.cache;

      for (var _len = arguments.length, keys = new Array(_len), _key = 0; _key < _len; _key++) {
        keys[_key] = arguments[_key];
      }

      for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
        var key = _keys[_i];

        if (cache_typeof(cache) !== 'object') {
          return;
        }

        cache = cache[key];
      }

      return cache;
    }
  }, {
    key: "put",
    value: function put() {
      for (var _len2 = arguments.length, keys = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        keys[_key2] = arguments[_key2];
      }

      var value = keys.pop();
      var lastKey = keys.pop();
      var cache = this.cache;

      for (var _i2 = 0, _keys2 = keys; _i2 < _keys2.length; _i2++) {
        var key = _keys2[_i2];

        if (cache_typeof(cache[key]) !== 'object') {
          cache[key] = {};
        }

        cache = cache[key];
      }

      return cache[lastKey] = value;
    }
  }]);

  return Cache;
}();


//# sourceMappingURL=cache.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/locale.js
function locale_typeof(obj) { "@babel/helpers - typeof"; return locale_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, locale_typeof(obj); }

function _createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = locale_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function locale_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return locale_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return locale_arrayLikeToArray(o, minLen); }

function locale_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

/**
 * Chooses the most appropriate locale
 * (one of the registered ones)
 * based on the list of preferred `locales` supplied by the user.
 *
 * @param {string[]} locales - the list of preferable locales (in [IETF format](https://en.wikipedia.org/wiki/IETF_language_tag)).
 * @param {Function} isLocaleDataAvailable - tests if a locale is available.
 *
 * @returns {string} The most suitable locale.
 *
 * @example
 * // Returns 'en'
 * chooseLocale(['en-US'], undefined, (locale) => locale === 'ru' || locale === 'en')
 */
function chooseLocale(locales, isLocaleDataAvailable) {
  // This is not an intelligent algorithm,
  // but it will do for this library's case.
  // `sr-Cyrl-BA` -> `sr-Cyrl` -> `sr`.
  for (var _iterator = _createForOfIteratorHelperLoose(locales), _step; !(_step = _iterator()).done;) {
    var locale = _step.value;

    if (isLocaleDataAvailable(locale)) {
      return locale;
    }

    var parts = locale.split('-');

    while (parts.length > 1) {
      parts.pop();
      locale = parts.join('-');

      if (isLocaleDataAvailable(locale)) {
        return locale;
      }
    }
  }

  throw new Error("No locale data has been registered for any of the locales: ".concat(locales.join(', ')));
}
/**
 * Whether can use `Intl.DateTimeFormat` for these `locales`.
 * Returns the first suitable one.
 * @param  {(string|string[])} locales
 * @return {?string} The first locale that can be used.
 */

function intlDateTimeFormatSupportedLocale(locales) {
  /* istanbul ignore else */
  if (intlDateTimeFormatSupported()) {
    return Intl.DateTimeFormat.supportedLocalesOf(locales)[0];
  }
}
/**
 * Whether can use `Intl.DateTimeFormat`.
 * @return {boolean}
 */

function intlDateTimeFormatSupported() {
  // Babel transforms `typeof` into some "branches"
  // so istanbul will show this as "branch not covered".

  /* istanbul ignore next */
  var isIntlAvailable = (typeof Intl === "undefined" ? "undefined" : locale_typeof(Intl)) === 'object';
  return isIntlAvailable && typeof Intl.DateTimeFormat === 'function';
}
//# sourceMappingURL=locale.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/isStyleObject.js
function isStyleObject_typeof(obj) { "@babel/helpers - typeof"; return isStyleObject_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, isStyleObject_typeof(obj); }

function isStyleObject(object) {
  return isObject(object) && (Array.isArray(object.steps) || // `gradation` property is deprecated: it has been renamed to `steps`.
  Array.isArray(object.gradation) || // `flavour` property is deprecated: it has been renamed to `labels`.
  Array.isArray(object.flavour) || typeof object.flavour === 'string' || Array.isArray(object.labels) || typeof object.labels === 'string' || // `units` property is deprecated.
  Array.isArray(object.units) || // `custom` property is deprecated.
  typeof object.custom === 'function');
}
var OBJECT_CONSTRUCTOR = {}.constructor;

function isObject(object) {
  return isStyleObject_typeof(object) !== undefined && object !== null && object.constructor === OBJECT_CONSTRUCTOR;
}
//# sourceMappingURL=isStyleObject.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/units.js
var minute = 60; // in seconds

var hour = 60 * minute; // in seconds

var day = 24 * hour; // in seconds

var week = 7 * day; // in seconds
// https://www.quora.com/What-is-the-average-number-of-days-in-a-month

var month = 30.44 * day; // in seconds
// "400 years have 146097 days (taking into account leap year rules)"

var year = 146097 / 400 * day; // in seconds

function getSecondsInUnit(unit) {
  switch (unit) {
    case 'second':
      return 1;

    case 'minute':
      return minute;

    case 'hour':
      return hour;

    case 'day':
      return day;

    case 'week':
      return week;

    case 'month':
      return month;

    case 'year':
      return year;
  }
} // export function getPreviousUnitFor(unit) {
// 	switch (unit) {
// 		case 'second':
// 			return 'now'
// 		case 'minute':
// 			return 'second'
// 		case 'hour':
// 			return 'minute'
// 		case 'day':
// 			return 'hour'
// 		case 'week':
// 			return 'day'
// 		case 'month':
// 			return 'week'
// 		case 'year':
// 			return 'month'
// 	}
// }
//# sourceMappingURL=units.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/getStepDenominator.js

function getStepDenominator(step) {
  // `factor` is a legacy property.
  if (step.factor !== undefined) {
    return step.factor;
  } // "unit" is now called "formatAs".


  return getSecondsInUnit(step.unit || step.formatAs) || 1;
}
//# sourceMappingURL=getStepDenominator.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/round.js
function getRoundFunction(round) {
  switch (round) {
    case 'floor':
      return Math.floor;

    default:
      return Math.round;
  }
} // For non-negative numbers.

function getDiffRatioToNextRoundedNumber(round) {
  switch (round) {
    case 'floor':
      // Math.floor(x) = x
      // Math.floor(x + 1) = x + 1
      return 1;

    default:
      // Math.round(x) = x
      // Math.round(x + 0.5) = x + 1
      return 0.5;
  }
}
//# sourceMappingURL=round.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/getStepMinTime.js
function getStepMinTime_typeof(obj) { "@babel/helpers - typeof"; return getStepMinTime_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, getStepMinTime_typeof(obj); }



function getStepMinTime(step, _ref) {
  var prevStep = _ref.prevStep,
      timestamp = _ref.timestamp,
      now = _ref.now,
      future = _ref.future,
      round = _ref.round;
  var minTime; // "threshold_for_xxx" is a legacy property.

  if (prevStep) {
    if (prevStep.id || prevStep.unit) {
      minTime = step["threshold_for_".concat(prevStep.id || prevStep.unit)];
    }
  }

  if (minTime === undefined) {
    // "threshold" is a legacy property.
    if (step.threshold !== undefined) {
      // "threshold" is a legacy name for "minTime".
      minTime = step.threshold; // "threshold" function is deprecated.

      if (typeof minTime === 'function') {
        minTime = minTime(now, future);
      }
    }
  }

  if (minTime === undefined) {
    minTime = step.minTime;
  } // A deprecated way of specifying a different threshold
  // depending on the previous step's unit.


  if (getStepMinTime_typeof(minTime) === 'object') {
    if (prevStep && prevStep.id && minTime[prevStep.id] !== undefined) {
      minTime = minTime[prevStep.id];
    } else {
      minTime = minTime["default"];
    }
  }

  if (typeof minTime === 'function') {
    minTime = minTime(timestamp, {
      future: future,
      getMinTimeForUnit: function getMinTimeForUnit(toUnit, fromUnit) {
        return _getMinTimeForUnit(toUnit, fromUnit || prevStep && prevStep.formatAs, {
          round: round
        });
      }
    });
  } // Evaluate the `test()` function.
  // `test()` function is deprecated.


  if (minTime === undefined) {
    if (step.test) {
      if (step.test(timestamp, {
        now: now,
        future: future
      })) {
        // `0` threshold always passes.
        minTime = 0;
      } else {
        // `MAX_SAFE_INTEGER` threshold won't ever pass in real life.
        minTime = 9007199254740991; // Number.MAX_SAFE_INTEGER
      }
    }
  }

  if (minTime === undefined) {
    if (prevStep) {
      if (step.formatAs && prevStep.formatAs) {
        minTime = _getMinTimeForUnit(step.formatAs, prevStep.formatAs, {
          round: round
        });
      }
    } else {
      // The first step's `minTime` is `0` by default.
      minTime = 0;
    }
  } // Warn if no `minTime` was defined or could be deduced.


  if (minTime === undefined) {
    console.warn('[javascript-time-ago] A step should specify `minTime`:\n' + JSON.stringify(step, null, 2));
  }

  return minTime;
}

function _getMinTimeForUnit(toUnit, fromUnit, _ref2) {
  var round = _ref2.round;
  var toUnitAmount = getSecondsInUnit(toUnit); // if (!fromUnit) {
  // 	return toUnitAmount;
  // }
  // if (!fromUnit) {
  // 	fromUnit = getPreviousUnitFor(toUnit)
  // }

  var fromUnitAmount;

  if (fromUnit === 'now') {
    fromUnitAmount = getSecondsInUnit(toUnit);
  } else {
    fromUnitAmount = getSecondsInUnit(fromUnit);
  }

  if (toUnitAmount !== undefined && fromUnitAmount !== undefined) {
    return toUnitAmount - fromUnitAmount * (1 - getDiffRatioToNextRoundedNumber(round));
  }
}
//# sourceMappingURL=getStepMinTime.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/getStep.js
function getStep_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function getStep_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? getStep_ownKeys(Object(source), !0).forEach(function (key) { getStep_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : getStep_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function getStep_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/**
 * Finds an appropriate `step` of `steps` for the time interval (in seconds).
 *
 * @param {Object[]} steps - Time formatting steps.
 *
 * @param {number} secondsPassed - Time interval (in seconds).
 *                                 `< 0` for past dates and `> 0` for future dates.
 *
 * @param {number} options.now - Current timestamp.
 *
 * @param {boolean} [options.future] - Whether the date should be formatted as a future one
 *                                     instead of a past one.
 *
 * @param {string} [options.round] - (undocumented) Rounding mechanism.
 *
 * @param {string[]} [options.units] - A list of allowed time units.
 *                                     (Example: ['second', 'minute', 'hour', …])
 *
 * @param {boolean} [options.getNextStep] - Pass true to return `[step, nextStep]` instead of just `step`.
 *
 * @return {Object|Object[]} [step] — Either a `step` or `[prevStep, step, nextStep]`.
 */

function getStep(steps, secondsPassed, _ref) {
  var now = _ref.now,
      future = _ref.future,
      round = _ref.round,
      units = _ref.units,
      getNextStep = _ref.getNextStep;
  // Ignore steps having not-supported time units in `formatAs`.
  steps = filterStepsByUnits(steps, units);

  var step = _getStep(steps, secondsPassed, {
    now: now,
    future: future,
    round: round
  });

  if (getNextStep) {
    if (step) {
      var prevStep = steps[steps.indexOf(step) - 1];
      var nextStep = steps[steps.indexOf(step) + 1];
      return [prevStep, step, nextStep];
    }

    return [undefined, undefined, steps[0]];
  }

  return step;
}

function _getStep(steps, secondsPassed, _ref2) {
  var now = _ref2.now,
      future = _ref2.future,
      round = _ref2.round;

  // If no steps fit the conditions then return nothing.
  if (steps.length === 0) {
    return;
  } // Find the most appropriate step.


  var i = getStepIndex(steps, secondsPassed, {
    now: now,
    future: future || secondsPassed < 0,
    round: round
  }); // If no step is applicable the return nothing.

  if (i === -1) {
    return;
  }

  var step = steps[i]; // Apply granularity to the time amount
  // (and fall back to the previous step
  //  if the first level of granularity
  //  isn't met by this amount)

  if (step.granularity) {
    // Recalculate the amount of seconds passed based on `granularity`.
    var secondsPassedGranular = getRoundFunction(round)(Math.abs(secondsPassed) / getStepDenominator(step) / step.granularity) * step.granularity; // If the granularity for this step is too high,
    // then fall back to the previous step.
    // (if there is any previous step)

    if (secondsPassedGranular === 0 && i > 0) {
      return steps[i - 1];
    }
  }

  return step;
}
/**
 * Iterates through steps until it finds the maximum one satisfying the `minTime` threshold.
 * @param  {Object} steps - Steps.
 * @param  {number} secondsPassed - How much seconds have passed since the date till `now`.
 * @param  {number} options.now - Current timestamp.
 * @param  {boolean} options.future - Whether the time interval should be formatted as a future one.
 * @param  {number} [i] - Gradation step currently being tested.
 * @return {number} Gradation step index.
 */


function getStepIndex(steps, secondsPassed, options) {
  var i = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
  var minTime = getStepMinTime(steps[i], getStep_objectSpread({
    prevStep: steps[i - 1],
    timestamp: options.now - secondsPassed * 1000
  }, options)); // If `minTime` isn't defined or deduceable for this step, then stop.

  if (minTime === undefined) {
    return i - 1;
  } // If the `minTime` threshold for moving from previous step
  // to this step is too high then return the previous step.


  if (Math.abs(secondsPassed) < minTime) {
    return i - 1;
  } // If it's the last step then return it.


  if (i === steps.length - 1) {
    return i;
  } // Move to the next step.


  return getStepIndex(steps, secondsPassed, options, i + 1);
}
/**
 * Leaves only allowed steps.
 * @param  {Object[]} steps
 * @param  {string[]} units - Allowed time units.
 * @return {Object[]}
 */


function filterStepsByUnits(steps, units) {
  return steps.filter(function (_ref3) {
    var unit = _ref3.unit,
        formatAs = _ref3.formatAs;
    // "unit" is now called "formatAs".
    unit = unit || formatAs; // If this step has a `unit` defined
    // then this `unit` must be in the list of allowed `units`.

    if (unit) {
      return units.indexOf(unit) >= 0;
    } // A step is not required to specify a `unit`:
    // alternatively, it could specify `format()`.
    // (see "twitter" style for an example)


    return true;
  });
}
//# sourceMappingURL=getStep.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/getTimeToNextUpdateForUnit.js


/**
 * Gets the time to next update for a step with a time unit defined.
 * @param  {string} unit
 * @param  {number} date — The date passed to `.format()`, converted to a timestamp.
 * @param  {number} options.now
 * @param  {string} [options.round] — (undocumented) Rounding mechanism.
 * @return {number} [timeToNextUpdate]
 */

function getTimeToNextUpdateForUnit_getTimeToNextUpdateForUnit(unit, timestamp, _ref) {
  var now = _ref.now,
      round = _ref.round;

  // For some units, like "now", there's no defined amount of seconds in them.
  if (!getSecondsInUnit(unit)) {
    // If there's no amount of seconds defined for this unit
    // then the update interval can't be determined reliably.
    return;
  }

  var unitDenominator = getSecondsInUnit(unit) * 1000;
  var future = timestamp > now;
  var preciseAmount = Math.abs(timestamp - now);
  var roundedAmount = getRoundFunction(round)(preciseAmount / unitDenominator) * unitDenominator;

  if (future) {
    if (roundedAmount > 0) {
      // Amount decreases with time.
      return preciseAmount - roundedAmount + getDiffToPreviousRoundedNumber(round, unitDenominator);
    } else {
      // Refresh right after the zero point,
      // when "future" changes to "past".
      return preciseAmount - roundedAmount + 1;
    }
  } // Amount increases with time.


  return -(preciseAmount - roundedAmount) + getDiffToNextRoundedNumber(round, unitDenominator);
}

function getDiffToNextRoundedNumber(round, unitDenominator) {
  return getDiffRatioToNextRoundedNumber(round) * unitDenominator;
}

function getDiffToPreviousRoundedNumber(round, unitDenominator) {
  return (1 - getDiffRatioToNextRoundedNumber(round)) * unitDenominator + 1;
}
//# sourceMappingURL=getTimeToNextUpdateForUnit.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/getTimeToNextUpdate.js


 // A thousand years is practically a metaphor for "infinity".

var YEAR = 365 * 24 * 60 * 60 * 1000;
var INFINITY = 1000 * YEAR;
/**
 * Gets the time to next update for a date and a step.
 * @param  {number} date — The date passed to `.format()`, converted to a timestamp.
 * @param  {object} step
 * @param  {object} [options.previousStep]
 * @param  {object} [options.nextStep]
 * @param  {number} options.now
 * @param  {boolean} options.future
 * @param  {string} [options.round] - (undocumented) Rounding mechanism.
 * @return {number} [timeToNextUpdate]
 */

function getTimeToNextUpdate(date, step, _ref) {
  var prevStep = _ref.prevStep,
      nextStep = _ref.nextStep,
      now = _ref.now,
      future = _ref.future,
      round = _ref.round;
  var timestamp = date.getTime ? date.getTime() : date;

  var getTimeToNextUpdateForUnit = function getTimeToNextUpdateForUnit(unit) {
    return getTimeToNextUpdateForUnit_getTimeToNextUpdateForUnit(unit, timestamp, {
      now: now,
      round: round
    });
  }; // For future dates, steps move from the last one to the first one,
  // while for past dates, steps move from the first one to the last one,
  // due to the fact that time flows in one direction,
  // and future dates' interval naturally becomes smaller
  // while past dates' interval naturally grows larger.
  //
  // For future dates, it's the transition
  // from the current step to the previous step,
  // therefore check the `minTime` of the current step.
  //
  // For past dates, it's the transition
  // from the current step to the next step,
  // therefore check the `minTime` of the next step.
  //


  var timeToStepChange = getTimeToStepChange(future ? step : nextStep, timestamp, {
    future: future,
    now: now,
    round: round,
    prevStep: future ? prevStep : step // isFirstStep: future && isFirstStep

  });

  if (timeToStepChange === undefined) {
    // Can't reliably determine "time to next update"
    // if not all of the steps provide `minTime`.
    return;
  }

  var timeToNextUpdate;

  if (step) {
    if (step.getTimeToNextUpdate) {
      timeToNextUpdate = step.getTimeToNextUpdate(timestamp, {
        getTimeToNextUpdateForUnit: getTimeToNextUpdateForUnit,
        getRoundFunction: getRoundFunction,
        now: now,
        future: future,
        round: round
      });
    }

    if (timeToNextUpdate === undefined) {
      // "unit" is now called "formatAs".
      var unit = step.unit || step.formatAs;

      if (unit) {
        // For some units, like "now", there's no defined amount of seconds in them.
        // In such cases, `getTimeToNextUpdateForUnit()` returns `undefined`,
        // and the next step's `minTime` could be used to calculate the update interval:
        // it will just assume that the label never changes for this step.
        timeToNextUpdate = getTimeToNextUpdateForUnit(unit);
      }
    }
  }

  if (timeToNextUpdate === undefined) {
    return timeToStepChange;
  }

  return Math.min(timeToNextUpdate, timeToStepChange);
}
function getStepChangesAt(currentOrNextStep, timestamp, _ref2) {
  var now = _ref2.now,
      future = _ref2.future,
      round = _ref2.round,
      prevStep = _ref2.prevStep;
  // The first step's `minTime` is `0` by default.
  // It doesn't "change" steps at zero point
  // but it does change the wording when switching
  // from "future" to "past": "in ..." -> "... ago".
  // Therefore, the label should be updated at zero-point too.
  var minTime = getStepMinTime(currentOrNextStep, {
    timestamp: timestamp,
    now: now,
    future: future,
    round: round,
    prevStep: prevStep
  });

  if (minTime === undefined) {
    return;
  }

  if (future) {
    // The step changes to the previous step
    // as soon as `timestamp - now` becomes
    // less than the `minTime` of the current step:
    // `timestamp - now === minTime - 1`
    // => `now === timestamp - minTime + 1`.
    return timestamp - minTime * 1000 + 1;
  } else {
    // The step changes to the next step
    // as soon as `now - timestamp` becomes
    // equal to `minTime` of the next step:
    // `now - timestamp === minTime`
    // => `now === timestamp + minTime`.
    // This is a special case when double-update could be skipped.
    if (minTime === 0 && timestamp === now) {
      return INFINITY;
    }

    return timestamp + minTime * 1000;
  }
}
function getTimeToStepChange(step, timestamp, _ref3) {
  var now = _ref3.now,
      future = _ref3.future,
      round = _ref3.round,
      prevStep = _ref3.prevStep;

  if (step) {
    var stepChangesAt = getStepChangesAt(step, timestamp, {
      now: now,
      future: future,
      round: round,
      prevStep: prevStep
    });

    if (stepChangesAt === undefined) {
      return;
    }

    return stepChangesAt - now;
  } else {
    if (future) {
      // No step.
      // Update right after zero point, when it changes from "future" to "past".
      return timestamp - now + 1;
    } else {
      // The last step doesn't ever change when `date` is in the past.
      return INFINITY;
    }
  }
}
//# sourceMappingURL=getTimeToNextUpdate.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/LocaleDataStore.js
// For all locales added
// their relative time formatter messages will be stored here.
var LocaleDataStore_localesData = {};
function LocaleDataStore_getLocaleData(locale) {
  return LocaleDataStore_localesData[locale];
}
function LocaleDataStore_addLocaleData(localeData) {
  if (!localeData) {
    throw new Error('[javascript-time-ago] No locale data passed.');
  } // This locale data is stored in a global variable
  // and later used when calling `.format(time)`.


  LocaleDataStore_localesData[localeData.locale] = localeData;
}
//# sourceMappingURL=LocaleDataStore.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/round.js
// just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// …
// 3 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
/* harmony default export */ const round = ([{
  formatAs: 'now'
}, {
  formatAs: 'second'
}, {
  formatAs: 'minute'
}, {
  formatAs: 'hour'
}, {
  formatAs: 'day'
}, {
  formatAs: 'week'
}, {
  formatAs: 'month'
}, {
  formatAs: 'year'
}]);
//# sourceMappingURL=round.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/round.js
 // just now
// 1 second ago
// 2 seconds ago
// …
// 59 seconds ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// 3 weeks ago
// 4 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
//

/* harmony default export */ const style_round = ({
  steps: round,
  labels: 'long'
});
//# sourceMappingURL=round.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/roundMinute.js
function roundMinute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function roundMinute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? roundMinute_ownKeys(Object(source), !0).forEach(function (key) { roundMinute_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : roundMinute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function roundMinute_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

 // just now
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 minute ago
// 2 minutes ago
// …
// 59 minutes ago
// 1 hour ago
// 2 hours ago
// …
// 24 hours ago
// 1 day ago
// 2 days ago
// …
// 6 days ago
// 1 week ago
// 2 weeks ago
// 3 weeks ago
// 4 weeks ago
// 1 month ago
// 2 months ago
// …
// 11 months ago
// 1 year ago
// 2 years ago
// …
//

/* harmony default export */ const roundMinute = (roundMinute_objectSpread(roundMinute_objectSpread({}, style_round), {}, {
  // Skip "seconds".
  steps: style_round.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
}));
//# sourceMappingURL=roundMinute.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/approximate.js
 // "factor" is a legacy property.
// Developers shouldn't need to use it in their custom steps.
// "threshold" is a legacy name of "min".
// Developers should use "min" property name instead of "threshold".
// "threshold_for_idOrUnit: value" is a legacy way of specifying "min: { id: value }".
// Developers should use "min" property instead of "threshold".
// just now
// 1 minute ago
// 2 minutes ago
// 5 minutes ago
// 10 minutes ago
// 15 minutes ago
// 20 minutes ago
// …
// 50 minutes ago
// an hour ago
// 2 hours ago
// …
// 20 hours ago
// a day ago
// 2 days ago
// 5 days ago
// a week ago
// 2 weeks ago
// 3 weeks ago
// a month ago
// 2 months ago
// 4 months ago
// a year ago
// 2 years ago
// …

/* harmony default export */ const approximate = ([{
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "now" labels are used for formatting the output.
  unit: 'now'
}, {
  // When the language doesn't support `now` unit,
  // the first step is ignored, and it uses this `second` unit.
  threshold: 1,
  // `threshold_for_now` should be the same as `threshold` on minutes.
  threshold_for_now: 45.5,
  // This step returns the amount of seconds
  // by dividing the amount of seconds by `1`.
  factor: 1,
  // "second" labels are used for formatting the output.
  unit: 'second'
}, {
  // `threshold` should be the same as `threshold_for_now` on seconds.
  threshold: 45.5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: minute,
  // "minute" labels are used for formatting the output.
  unit: 'minute'
}, {
  // This step is effective starting from 2.5 minutes.
  threshold: 2.5 * minute,
  // Allow only 5-minute increments of minutes starting from 2.5 minutes.
  // `granularity` — (advanced) Time interval value "granularity".
  // For example, it could be set to `5` for minutes to allow only 5-minute increments
  // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
  // Perhaps this feature will be removed because there seem to be no use cases
  // of it in the real world.
  granularity: 5,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a minute.
  factor: minute,
  // "minute" labels are used for formatting the output.
  unit: 'minute'
}, {
  // This step is effective starting from 22.5 minutes.
  threshold: 22.5 * minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in  half-an-hour.
  factor: 0.5 * hour,
  // "half-hour" labels are used for formatting the output.
  // (if available, which is no longer the case)
  unit: 'half-hour'
}, {
  // This step is effective starting from 42.5 minutes.
  threshold: 42.5 * minute,
  threshold_for_minute: 52.5 * minute,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in an hour.
  factor: hour,
  // "hour" labels are used for formatting the output.
  unit: 'hour'
}, {
  // This step is effective starting from 20.5 hours.
  threshold: 20.5 / 24 * day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a day.
  factor: day,
  // "day" labels are used for formatting the output.
  unit: 'day'
}, {
  // This step is effective starting from 5.5 days.
  threshold: 5.5 * day,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a week.
  factor: week,
  // "week" labels are used for formatting the output.
  unit: 'week'
}, {
  // This step is effective starting from 3.5 weeks.
  threshold: 3.5 * week,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a month.
  factor: month,
  // "month" labels are used for formatting the output.
  unit: 'month'
}, {
  // This step is effective starting from 10.5 months.
  threshold: 10.5 * month,
  // Return the amount of minutes by dividing the amount
  // of seconds by the amount of seconds in a year.
  factor: year,
  // "year" labels are used for formatting the output.
  unit: 'year'
}]);
//# sourceMappingURL=approximate.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/approximate.js
 // "gradation" is a legacy name for "steps".
// It's here just for legacy compatibility.
// Use "steps" name instead.
// "flavour" is a legacy name for "labels".
// It's here just for legacy compatibility.
// Use "labels" name instead.
// "units" is a legacy property.
// It's here just for legacy compatibility.
// Developers shouldn't need to use it in their custom styles.

/* harmony default export */ const style_approximate = ({
  gradation: approximate,
  flavour: 'long',
  units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
});
//# sourceMappingURL=approximate.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/approximateTime.js
 // "gradation" is a legacy name for "steps".
// It's here just for legacy compatibility.
// Use "steps" name instead.
// "flavour" is a legacy name for "labels".
// It's here just for legacy compatibility.
// Use "labels" name instead.
// "units" is a legacy property.
// It's here just for legacy compatibility.
// Developers shouldn't need to use it in their custom styles.
// Similar to the default style but with "ago" omitted.
//
// just now
// 5 minutes
// 10 minutes
// 15 minutes
// 20 minutes
// an hour
// 2 hours
// …
// 20 hours
// 1 day
// 2 days
// a week
// 2 weeks
// 3 weeks
// a month
// 2 months
// 3 months
// 4 months
// a year
// 2 years
//

/* harmony default export */ const approximateTime = ({
  gradation: approximate,
  flavour: 'long-time',
  units: ['now', 'minute', 'hour', 'day', 'week', 'month', 'year']
});
//# sourceMappingURL=approximateTime.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/steps/helpers.js
// Looks like this one's deprecated.
// /**
//  * Returns a step corresponding to the unit.
//  * @param  {Object[]} steps
//  * @param  {string} unit
//  * @return {?Object}
//  */
// export function getStepForUnit(steps, unit) {
// 	for (const step of steps) {
// 		if (step.unit === unit) {
// 			return step
// 		}
// 	}
// }
// Looks like this one won't be used in the next major version.

/**
 * Converts value to a `Date`
 * @param {(number|Date)} value
 * @return {Date}
 */
function getDate(value) {
  return value instanceof Date ? value : new Date(value);
}
//# sourceMappingURL=helpers.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/twitter.js

 // For compatibility with the old versions of this library.

 // Twitter-style relative date/time formatting.
// ("1m", "2h", "Mar 3", "Apr 4, 2012").
//
// Seconds, minutes or hours are shown for shorter intervals,
// and longer intervals are formatted using full date format.

var steps = [{
  formatAs: 'second'
}, {
  formatAs: 'minute'
}, {
  formatAs: 'hour'
}]; // A cache for `Intl.DateTimeFormat` formatters
// for various locales (is a global variable).

var formatters = {}; // Starting from day intervals, output month and day.

var monthAndDay = {
  minTime: function minTime(timestamp, _ref) {
    var future = _ref.future,
        getMinTimeForUnit = _ref.getMinTimeForUnit;
    // Returns `23.5 * 60 * 60` when `round` is "round",
    // and `24 * 60 * 60` when `round` is "floor".
    return getMinTimeForUnit('day');
  },
  format: function format(value, locale) {
    /* istanbul ignore else */
    if (!formatters[locale]) {
      formatters[locale] = {};
    }
    /* istanbul ignore else */


    if (!formatters[locale].dayMonth) {
      // "Apr 11" (MMMd)
      formatters[locale].dayMonth = new Intl.DateTimeFormat(locale, {
        month: 'short',
        day: 'numeric'
      });
    } // Output month and day.


    return formatters[locale].dayMonth.format(getDate(value));
  }
}; // If the `date` happened/happens outside of current year,
// then output day, month and year.
// The interval should be such that the `date` lies outside of the current year.

var yearMonthAndDay = {
  minTime: function minTime(timestamp, _ref2) {
    var future = _ref2.future;

    if (future) {
      // January 1, 00:00, of the `date`'s year is right after
      // the maximum `now` for formatting a future date:
      // When `now` is before that date, the `date` is formatted as "day/month/year" (this step),
      // When `now` is equal to or after that date, the `date` is formatted as "day/month" (another step).
      // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
      // The date is right after the maximum `now` for formatting a future date,
      // so subtract 1 millisecond from it.
      var maxFittingNow = new Date(new Date(timestamp).getFullYear(), 0).getTime() - 1; // Return `minTime` (in seconds).

      return (timestamp - maxFittingNow) / 1000;
    } else {
      // January 1, 00:00, of the year following the `date`'s year
      // is the minimum `now` for formatting a past date:
      // When `now` is before that date, the `date` is formatted as "day/month" (another step),
      // When `now` is equal to or after that date, the `date` is formatted as "day/month/year" (this step).
      // After that, it's hours, minutes, seconds, and after that it's no longer `future`.
      var minFittingNow = new Date(new Date(timestamp).getFullYear() + 1, 0).getTime(); // Return `minTime` (in seconds).

      return (minFittingNow - timestamp) / 1000;
    }
  },
  format: function format(value, locale) {
    /* istanbul ignore if */
    if (!formatters[locale]) {
      formatters[locale] = {};
    }
    /* istanbul ignore else */


    if (!formatters[locale].dayMonthYear) {
      // "Apr 11, 2017" (yMMMd)
      formatters[locale].dayMonthYear = new Intl.DateTimeFormat(locale, {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
      });
    } // Output day, month and year.


    return formatters[locale].dayMonthYear.format(getDate(value));
  }
}; // If `Intl.DateTimeFormat` is supported,
// then longer time intervals will be formatted as dates.

/* istanbul ignore else */

if (intlDateTimeFormatSupported()) {
  steps.push(monthAndDay, yearMonthAndDay);
} // Otherwise, if `Intl.DateTimeFormat` is not supported,
// which could be the case when using Internet Explorer,
// then simply mimick "round" steps.
else {
  steps.push({
    formatAs: 'day'
  }, {
    formatAs: 'week'
  }, {
    formatAs: 'month'
  }, {
    formatAs: 'year'
  });
}

/* harmony default export */ const twitter = ({
  steps: steps,
  labels: [// "mini" labels are only defined for a few languages.
  'mini', // "short-time" labels are only defined for a few languages.
  'short-time', // "narrow" and "short" labels are defined for all languages.
  // "narrow" labels can sometimes be weird (like "+5d."),
  // but "short" labels have the " ago" part, so "narrow" seem
  // more appropriate.
  // "short" labels would have been more appropriate if they
  // didn't have the " ago" part, hence the "short-time" above.
  'narrow', // Since "narrow" labels are always present, "short" element
  // of this array can be removed.
  'short']
});
//# sourceMappingURL=twitter.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/twitterNow.js
function twitterNow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function twitterNow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? twitterNow_ownKeys(Object(source), !0).forEach(function (key) { twitterNow_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : twitterNow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function twitterNow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const twitterNow = (twitterNow_objectSpread(twitterNow_objectSpread({}, twitter), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(twitter.steps)
}));
//# sourceMappingURL=twitterNow.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/twitterMinute.js
function twitterMinute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function twitterMinute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? twitterMinute_ownKeys(Object(source), !0).forEach(function (key) { twitterMinute_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : twitterMinute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function twitterMinute_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const twitterMinute = (twitterMinute_objectSpread(twitterMinute_objectSpread({}, twitter), {}, {
  // Skip "seconds".
  steps: twitter.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
}));
//# sourceMappingURL=twitterMinute.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/twitterMinuteNow.js
function twitterMinuteNow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function twitterMinuteNow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? twitterMinuteNow_ownKeys(Object(source), !0).forEach(function (key) { twitterMinuteNow_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : twitterMinuteNow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function twitterMinuteNow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const twitterMinuteNow = (twitterMinuteNow_objectSpread(twitterMinuteNow_objectSpread({}, twitterMinute), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(twitterMinute.steps)
}));
//# sourceMappingURL=twitterMinuteNow.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/twitterFirstMinute.js
function twitterFirstMinute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function twitterFirstMinute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? twitterFirstMinute_ownKeys(Object(source), !0).forEach(function (key) { twitterFirstMinute_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : twitterFirstMinute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function twitterFirstMinute_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ const twitterFirstMinute = (twitterFirstMinute_objectSpread(twitterFirstMinute_objectSpread({}, twitter), {}, {
  // Skip "seconds".
  steps: twitter.steps.filter(function (step) {
    return step.formatAs !== 'second';
  }) // Start showing `1m` from the first minute.
  .map(function (step) {
    return step.formatAs === 'minute' ? twitterFirstMinute_objectSpread(twitterFirstMinute_objectSpread({}, step), {}, {
      minTime: minute
    }) : step;
  })
}));
//# sourceMappingURL=twitterFirstMinute.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/mini.js
/* harmony default export */ const mini = ({
  steps: [{
    formatAs: 'second'
  }, {
    formatAs: 'minute'
  }, {
    formatAs: 'hour'
  }, {
    formatAs: 'day'
  }, {
    formatAs: 'month'
  }, {
    formatAs: 'year'
  }],
  labels: [// "mini" labels are only defined for a few languages.
  'mini', // "short-time" labels are only defined for a few languages.
  'short-time', // "narrow" and "short" labels are defined for all languages.
  // "narrow" labels can sometimes be weird (like "+5d."),
  // but "short" labels have the " ago" part, so "narrow" seem
  // more appropriate.
  // "short" labels would have been more appropriate if they
  // didn't have the " ago" part, hence the "short-time" above.
  'narrow', // Since "narrow" labels are always present, "short" element
  // of this array can be removed.
  'short']
});
//# sourceMappingURL=mini.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/miniNow.js
function miniNow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function miniNow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? miniNow_ownKeys(Object(source), !0).forEach(function (key) { miniNow_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : miniNow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function miniNow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const miniNow = (miniNow_objectSpread(miniNow_objectSpread({}, mini), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(mini.steps)
}));
//# sourceMappingURL=miniNow.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/miniMinute.js
function miniMinute_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function miniMinute_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? miniMinute_ownKeys(Object(source), !0).forEach(function (key) { miniMinute_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : miniMinute_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function miniMinute_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const miniMinute = (miniMinute_objectSpread(miniMinute_objectSpread({}, mini), {}, {
  // Skip "seconds".
  steps: mini.steps.filter(function (step) {
    return step.formatAs !== 'second';
  })
}));
//# sourceMappingURL=miniMinute.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/miniMinuteNow.js
function miniMinuteNow_ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function miniMinuteNow_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? miniMinuteNow_ownKeys(Object(source), !0).forEach(function (key) { miniMinuteNow_defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : miniMinuteNow_ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function miniMinuteNow_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ const miniMinuteNow = (miniMinuteNow_objectSpread(miniMinuteNow_objectSpread({}, miniMinute), {}, {
  // Add "now".
  steps: [{
    formatAs: 'now'
  }].concat(miniMinute.steps)
}));
//# sourceMappingURL=miniMinuteNow.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/style/getStyleByName.js

 // `approximate` style is deprecated.

 // `approximateTime` style is deprecated.











function getStyleByName(style) {
  switch (style) {
    // "default" style name is deprecated.
    case 'default':
    case 'round':
      return style_round;

    case 'round-minute':
      return roundMinute;

    case 'approximate':
      return style_approximate;
    // "time" style name is deprecated.

    case 'time':
    case 'approximate-time':
      return approximateTime;

    case 'mini':
      return mini;

    case 'mini-now':
      return miniNow;

    case 'mini-minute':
      return miniMinute;

    case 'mini-minute-now':
      return miniMinuteNow;

    case 'twitter':
      return twitter;

    case 'twitter-now':
      return twitterNow;

    case 'twitter-minute':
      return twitterMinute;

    case 'twitter-minute-now':
      return twitterMinuteNow;

    case 'twitter-first-minute':
      return twitterFirstMinute;

    default:
      // For historical reasons, the default style is "approximate".
      return style_approximate;
  }
}
//# sourceMappingURL=getStyleByName.js.map
;// CONCATENATED MODULE: ./node_modules/javascript-time-ago/modules/TimeAgo.js
function TimeAgo_typeof(obj) { "@babel/helpers - typeof"; return TimeAgo_typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, TimeAgo_typeof(obj); }

function TimeAgo_createForOfIteratorHelperLoose(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (it) return (it = it.call(o)).next.bind(it); if (Array.isArray(o) || (it = TimeAgo_unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; return function () { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TimeAgo_slicedToArray(arr, i) { return TimeAgo_arrayWithHoles(arr) || TimeAgo_iterableToArrayLimit(arr, i) || TimeAgo_unsupportedIterableToArray(arr, i) || TimeAgo_nonIterableRest(); }

function TimeAgo_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function TimeAgo_unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return TimeAgo_arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return TimeAgo_arrayLikeToArray(o, minLen); }

function TimeAgo_arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function TimeAgo_iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function TimeAgo_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function TimeAgo_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function TimeAgo_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function TimeAgo_createClass(Constructor, protoProps, staticProps) { if (protoProps) TimeAgo_defineProperties(Constructor.prototype, protoProps); if (staticProps) TimeAgo_defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }











 // Valid time units.

var TimeAgo_UNITS = (/* unused pure expression or super */ null && (['now', // The rest are the same as in `Intl.RelativeTimeFormat`.
'second', 'minute', 'hour', 'day', 'week', 'month', 'quarter', 'year']));

var TimeAgo = /*#__PURE__*/function () {
  /**
   * @param {(string|string[])} locales=[] - Preferred locales (or locale).
   * @param {boolean} [polyfill] — Pass `false` to use native `Intl.RelativeTimeFormat` and `Intl.PluralRules` instead of the polyfills.
   */
  function TimeAgo() {
    var locales = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

    var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
        polyfill = _ref.polyfill;

    TimeAgo_classCallCheck(this, TimeAgo);

    // Convert `locales` to an array.
    if (typeof locales === 'string') {
      locales = [locales];
    } // Choose the most appropriate locale
    // from the list of `locales` added by the user.
    // For example, new TimeAgo("en-US") -> "en".


    this.locale = chooseLocale(locales.concat(TimeAgo.getDefaultLocale()), LocaleDataStore_getLocaleData);

    if (typeof Intl !== 'undefined') {
      // Use `Intl.NumberFormat` for formatting numbers (when available).
      if (Intl.NumberFormat) {
        this.numberFormat = new Intl.NumberFormat(this.locale);
      }
    } // Some people have requested the ability to use native
    // `Intl.RelativeTimeFormat` and `Intl.PluralRules`
    // instead of the polyfills.
    // https://github.com/catamphetamine/javascript-time-ago/issues/21


    if (polyfill === false) {
      this.IntlRelativeTimeFormat = Intl.RelativeTimeFormat;
      this.IntlPluralRules = Intl.PluralRules;
    } else {
      this.IntlRelativeTimeFormat = RelativeTimeFormat;
      this.IntlPluralRules = RelativeTimeFormat.PluralRules;
    } // Cache `Intl.RelativeTimeFormat` instance.


    this.relativeTimeFormatCache = new Cache(); // Cache `Intl.PluralRules` instance.

    this.pluralRulesCache = new Cache();
  }
  /**
   * Formats relative date/time.
   *
   * @param {(number|Date)} input — A `Date` or a javascript timestamp.
   *
   * @param {(string|object)} style — Date/time formatting style. Either one of the built-in style names or a "custom" style definition object having `steps: object[]` and `labels: string[]`.
   *
   * @param {number} [options.now] - Sets the current date timestamp.
   *
   * @param  {boolean} [options.future] — Tells how to format value `0`:
   *         as "future" (`true`) or "past" (`false`).
   *         Is `false` by default, but should have been `true` actually,
   *         in order to correspond to `Intl.RelativeTimeFormat`
   *         that uses `future` formatting for `0` unless `-0` is passed.
   *
   * @param {string} [options.round] — Rounding method. Overrides the style's one.
   *
   * @param {boolean} [options.getTimeToNextUpdate] — Pass `true` to return `[formattedDate, timeToNextUpdate]` instead of just `formattedDate`.
   *
   * @return {string} The formatted relative date/time. If no eligible `step` is found, then an empty string is returned.
   */


  TimeAgo_createClass(TimeAgo, [{
    key: "format",
    value: function format(input, style, options) {
      if (!options) {
        if (style && !isStyle(style)) {
          options = style;
          style = undefined;
        } else {
          options = {};
        }
      }

      if (!style) {
        style = roundMinute;
      }

      if (typeof style === 'string') {
        style = getStyleByName(style);
      }

      var timestamp = getTimestamp(input); // Get locale messages for this type of labels.
      // "flavour" is a legacy name for "labels".

      var _this$getLabels = this.getLabels(style.flavour || style.labels),
          labels = _this$getLabels.labels,
          labelsType = _this$getLabels.labelsType;

      var now; // Can pass a custom `now`, e.g. for testing purposes.
      //
      // Legacy way was passing `now` in `style`.
      // That way is deprecated.

      if (style.now !== undefined) {
        now = style.now;
      } // The new way is passing `now` option to `.format()`.


      if (now === undefined && options.now !== undefined) {
        now = options.now;
      }

      if (now === undefined) {
        now = Date.now();
      } // how much time has passed (in seconds)


      var secondsPassed = (now - timestamp) / 1000; // in seconds

      var future = options.future || secondsPassed < 0;
      var nowLabel = getNowLabel(labels, LocaleDataStore_getLocaleData(this.locale).now, LocaleDataStore_getLocaleData(this.locale)["long"], future); // `custom` – A function of `{ elapsed, time, date, now, locale }`.
      //
      // Looks like `custom` function is deprecated and will be removed
      // in the next major version.
      //
      // If this function returns a value, then the `.format()` call will return that value.
      // Otherwise the relative date/time is formatted as usual.
      // This feature is currently not used anywhere and is here
      // just for providing the ultimate customization point
      // in case anyone would ever need that. Prefer using
      // `steps[step].format(value, locale)` instead.
      //

      if (style.custom) {
        var custom = style.custom({
          now: now,
          date: new Date(timestamp),
          time: timestamp,
          elapsed: secondsPassed,
          locale: this.locale
        });

        if (custom !== undefined) {
          // Won't return `timeToNextUpdate` here
          // because `custom()` seems deprecated.
          return custom;
        }
      } // Get the list of available time interval units.


      var units = getTimeIntervalMeasurementUnits( // Controlling `style.steps` through `style.units` seems to be deprecated:
      // create a new custom `style` instead.
      style.units, labels, nowLabel); // // If no available time unit is suitable, just output an empty string.
      // if (units.length === 0) {
      // 	console.error(`None of the "${units.join(', ')}" time units have been found in "${labelsType}" labels for "${this.locale}" locale.`)
      // 	return ''
      // }

      var round = options.round || style.round; // Choose the appropriate time measurement unit
      // and get the corresponding rounded time amount.

      var _getStep = getStep( // "gradation" is a legacy name for "steps".
      // For historical reasons, "approximate" steps are used by default.
      // In the next major version, there'll be no default for `steps`.
      style.gradation || style.steps || roundMinute.steps, secondsPassed, {
        now: now,
        units: units,
        round: round,
        future: future,
        getNextStep: true
      }),
          _getStep2 = TimeAgo_slicedToArray(_getStep, 3),
          prevStep = _getStep2[0],
          step = _getStep2[1],
          nextStep = _getStep2[2];

      var formattedDate = this.formatDateForStep(timestamp, step, secondsPassed, {
        labels: labels,
        labelsType: labelsType,
        nowLabel: nowLabel,
        now: now,
        future: future,
        round: round
      }) || '';

      if (options.getTimeToNextUpdate) {
        var timeToNextUpdate = getTimeToNextUpdate(timestamp, step, {
          nextStep: nextStep,
          prevStep: prevStep,
          now: now,
          future: future,
          round: round
        });
        return [formattedDate, timeToNextUpdate];
      }

      return formattedDate;
    }
  }, {
    key: "formatDateForStep",
    value: function formatDateForStep(timestamp, step, secondsPassed, _ref2) {
      var _this = this;

      var labels = _ref2.labels,
          labelsType = _ref2.labelsType,
          nowLabel = _ref2.nowLabel,
          now = _ref2.now,
          future = _ref2.future,
          round = _ref2.round;

      // If no step matches, then output an empty string.
      if (!step) {
        return;
      }

      if (step.format) {
        return step.format(timestamp, this.locale, {
          formatAs: function formatAs(unit, value) {
            // Mimicks `Intl.RelativeTimeFormat.format()`.
            return _this.formatValue(value, unit, {
              labels: labels,
              future: future
            });
          },
          now: now,
          future: future
        });
      } // "unit" is now called "formatAs".


      var unit = step.unit || step.formatAs;

      if (!unit) {
        throw new Error("[javascript-time-ago] Each step must define either `formatAs` or `format()`. Step: ".concat(JSON.stringify(step)));
      } // `Intl.RelativeTimeFormat` doesn't operate in "now" units.
      // Therefore, threat "now" as a special case.


      if (unit === 'now') {
        return nowLabel;
      } // Amount in units.


      var amount = Math.abs(secondsPassed) / getStepDenominator(step); // Apply granularity to the time amount
      // (and fallback to the previous step
      //  if the first level of granularity
      //  isn't met by this amount)
      //
      // `granularity` — (advanced) Time interval value "granularity".
      // For example, it could be set to `5` for minutes to allow only 5-minute increments
      // when formatting time intervals: `0 minutes`, `5 minutes`, `10 minutes`, etc.
      // Perhaps this feature will be removed because there seem to be no use cases
      // of it in the real world.
      //

      if (step.granularity) {
        // Recalculate the amount of seconds passed based on granularity
        amount = getRoundFunction(round)(amount / step.granularity) * step.granularity;
      }

      var valueForFormatting = -1 * Math.sign(secondsPassed) * getRoundFunction(round)(amount); // By default, this library formats a `0` in "past" mode,
      // unless `future: true` option is passed.
      // This is different to `relative-time-format`'s behavior
      // which formats a `0` in "future" mode by default, unless it's a `-0`.
      // So, convert `0` to `-0` if `future: true` option wasn't passed.
      // `=== 0` matches both `0` and `-0`.

      if (valueForFormatting === 0) {
        if (future) {
          valueForFormatting = 0;
        } else {
          valueForFormatting = -0;
        }
      }

      switch (labelsType) {
        case 'long':
        case 'short':
        case 'narrow':
          // Format the amount using `Intl.RelativeTimeFormat`.
          return this.getFormatter(labelsType).format(valueForFormatting, unit);

        default:
          // Format the amount.
          // (mimicks `Intl.RelativeTimeFormat` behavior for other time label styles)
          return this.formatValue(valueForFormatting, unit, {
            labels: labels,
            future: future
          });
      }
    }
    /**
     * Mimicks what `Intl.RelativeTimeFormat` does for additional locale styles.
     * @param  {number} value
     * @param  {string} unit
     * @param  {object} options.labels — Relative time labels.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default, but should have been `true` actually.
     * @return {string}
     */

  }, {
    key: "formatValue",
    value: function formatValue(value, unit, _ref3) {
      var labels = _ref3.labels,
          future = _ref3.future;
      return this.getFormattingRule(labels, unit, value, {
        future: future
      }).replace('{0}', this.formatNumber(Math.abs(value)));
    }
    /**
     * Returns formatting rule for `value` in `units` (either in past or in future).
     * @param {object} formattingRules — Relative time labels for different units.
     * @param {string} unit - Time interval measurement unit.
     * @param {number} value - Time interval value.
     * @param  {boolean} [options.future] — Tells how to format value `0`: as "future" (`true`) or "past" (`false`). Is `false` by default.
     * @return {string}
     * @example
     * // Returns "{0} days ago"
     * getFormattingRule(en.long, "day", -2, 'en')
     */

  }, {
    key: "getFormattingRule",
    value: function getFormattingRule(formattingRules, unit, value, _ref4) {
      var future = _ref4.future;
      // Passing the language is required in order to
      // be able to correctly classify the `value` as a number.
      var locale = this.locale;
      formattingRules = formattingRules[unit]; // Check for a special "compacted" rules case:
      // if formatting rules are the same for "past" and "future",
      // and also for all possible `value`s, then those rules are
      // stored as a single string.

      if (typeof formattingRules === 'string') {
        return formattingRules;
      } // Choose either "past" or "future" based on time `value` sign.
      // If "past" is same as "future" then they're stored as "other".
      // If there's only "other" then it's being collapsed.


      var pastOrFuture = value === 0 ? future ? 'future' : 'past' : value < 0 ? 'past' : 'future';
      var quantifierRules = formattingRules[pastOrFuture] || formattingRules; // Bundle size optimization technique.

      if (typeof quantifierRules === 'string') {
        return quantifierRules;
      } // Quantify `value`.


      var quantifier = this.getPluralRules().select(Math.abs(value)); // "other" rule is supposed to always be present.
      // If only "other" rule is present then "rules" is not an object and is a string.

      return quantifierRules[quantifier] || quantifierRules.other;
    }
    /**
     * Formats a number into a string.
     * Uses `Intl.NumberFormat` when available.
     * @param  {number} number
     * @return {string}
     */

  }, {
    key: "formatNumber",
    value: function formatNumber(number) {
      return this.numberFormat ? this.numberFormat.format(number) : String(number);
    }
    /**
     * Returns an `Intl.RelativeTimeFormat` for a given `labelsType`.
     * @param {string} labelsType
     * @return {object} `Intl.RelativeTimeFormat` instance
     */

  }, {
    key: "getFormatter",
    value: function getFormatter(labelsType) {
      // `Intl.RelativeTimeFormat` instance creation is (hypothetically) assumed
      // a lengthy operation so the instances are cached and reused.
      return this.relativeTimeFormatCache.get(this.locale, labelsType) || this.relativeTimeFormatCache.put(this.locale, labelsType, new this.IntlRelativeTimeFormat(this.locale, {
        style: labelsType
      }));
    }
    /**
     * Returns an `Intl.PluralRules` instance.
     * @return {object} `Intl.PluralRules` instance
     */

  }, {
    key: "getPluralRules",
    value: function getPluralRules() {
      // `Intl.PluralRules` instance creation is (hypothetically) assumed
      // a lengthy operation so the instances are cached and reused.
      return this.pluralRulesCache.get(this.locale) || this.pluralRulesCache.put(this.locale, new this.IntlPluralRules(this.locale));
    }
    /**
     * Gets localized labels for this type of labels.
     *
     * @param {(string|string[])} labelsType - Relative date/time labels type.
     *                                     If it's an array then all label types are tried
     *                                     until a suitable one is found.
     *
     * @returns {Object} Returns an object of shape { labelsType, labels }
     */

  }, {
    key: "getLabels",
    value: function getLabels() {
      var labelsType = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];

      // Convert `labels` to an array.
      if (typeof labelsType === 'string') {
        labelsType = [labelsType];
      } // Supports legacy "tiny" and "mini-time" label styles.


      labelsType = labelsType.map(function (labelsType) {
        switch (labelsType) {
          case 'tiny':
          case 'mini-time':
            return 'mini';

          default:
            return labelsType;
        }
      }); // "long" labels type is the default one.
      // (it's always present for all languages)

      labelsType = labelsType.concat('long'); // Find a suitable labels type.

      var localeData = LocaleDataStore_getLocaleData(this.locale);

      for (var _iterator = TimeAgo_createForOfIteratorHelperLoose(labelsType), _step; !(_step = _iterator()).done;) {
        var _labelsType = _step.value;

        if (localeData[_labelsType]) {
          return {
            labelsType: _labelsType,
            labels: localeData[_labelsType]
          };
        }
      }
    }
  }]);

  return TimeAgo;
}();
/**
 * Default locale global variable.
 */



var TimeAgo_defaultLocale = 'en';
/**
 * Gets default locale.
 * @return  {string} locale
 */

TimeAgo.getDefaultLocale = function () {
  return TimeAgo_defaultLocale;
};
/**
 * Sets default locale.
 * @param  {string} locale
 */


TimeAgo.setDefaultLocale = function (locale) {
  return TimeAgo_defaultLocale = locale;
};
/**
 * Adds locale data for a specific locale and marks the locale as default.
 * @param {Object} localeData
 */


TimeAgo.addDefaultLocale = function (localeData) {
  if (defaultLocaleHasBeenSpecified) {
    return console.error('[javascript-time-ago] `TimeAgo.addDefaultLocale()` can only be called once. To add other locales, use `TimeAgo.addLocale()`.');
  }

  defaultLocaleHasBeenSpecified = true;
  TimeAgo.setDefaultLocale(localeData.locale);
  TimeAgo.addLocale(localeData);
};

var defaultLocaleHasBeenSpecified;
/**
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 */

TimeAgo.addLocale = function (localeData) {
  LocaleDataStore_addLocaleData(localeData);
  RelativeTimeFormat.addLocale(localeData);
};
/**
 * (legacy alias)
 * Adds locale data for a specific locale.
 * @param {Object} localeData
 * @deprecated
 */


TimeAgo.locale = TimeAgo.addLocale;
/**
 * Adds custom labels to locale data.
 * @param {string} locale
 * @param {string} name
 * @param {object} labels
 */

TimeAgo.addLabels = function (locale, name, labels) {
  var localeData = LocaleDataStore_getLocaleData(locale);

  if (!localeData) {
    LocaleDataStore_addLocaleData({
      locale: locale
    });
    localeData = LocaleDataStore_getLocaleData(locale); // throw new Error(`[javascript-time-ago] No data for locale "${locale}"`)
  }

  localeData[name] = labels;
}; // Normalizes `.format()` `time` argument.


function getTimestamp(input) {
  if (input.constructor === Date || isMockedDate(input)) {
    return input.getTime();
  }

  if (typeof input === 'number') {
    return input;
  } // For some weird reason istanbul doesn't see this `throw` covered.

  /* istanbul ignore next */


  throw new Error("Unsupported relative time formatter input: ".concat(TimeAgo_typeof(input), ", ").concat(input));
} // During testing via some testing libraries `Date`s aren't actually `Date`s.
// https://github.com/catamphetamine/javascript-time-ago/issues/22


function isMockedDate(object) {
  return TimeAgo_typeof(object) === 'object' && typeof object.getTime === 'function';
} // Get available time interval measurement units.


function getTimeIntervalMeasurementUnits(allowedUnits, labels, nowLabel) {
  // Get all time interval measurement units that're available
  // in locale data for a given time labels style.
  var units = Object.keys(labels); // `now` unit is handled separately and is shipped in its own `now.json` file.
  // `now.json` isn't present for all locales, so it could be substituted with
  // ".second.current".
  // Add `now` unit if it's available in locale data.

  if (nowLabel) {
    units.push('now');
  } // If only a specific set of available time measurement units can be used
  // then only those units are allowed (if they're present in locale data).


  if (allowedUnits) {
    units = allowedUnits.filter(function (unit) {
      return unit === 'now' || units.indexOf(unit) >= 0;
    });
  }

  return units;
}

function getNowLabel(labels, nowLabels, longLabels, future) {
  var nowLabel = labels.now || nowLabels && nowLabels.now; // Specific "now" message form extended locale data (if present).

  if (nowLabel) {
    // Bundle size optimization technique.
    if (typeof nowLabel === 'string') {
      return nowLabel;
    } // Not handling `value === 0` as `localeData.now.current` here
    // because it wouldn't make sense: "now" is a moment,
    // so one can't possibly differentiate between a
    // "previous" moment, a "current" moment and a "next moment".
    // It can only be differentiated between "past" and "future".


    if (future) {
      return nowLabel.future;
    } else {
      return nowLabel.past;
    }
  } // Use ".second.current" as "now" message.


  if (longLabels && longLabels.second && longLabels.second.current) {
    return longLabels.second.current;
  }
}

function isStyle(variable) {
  return typeof variable === 'string' || isStyleObject(variable);
}
//# sourceMappingURL=TimeAgo.js.map

/***/ })

};
;