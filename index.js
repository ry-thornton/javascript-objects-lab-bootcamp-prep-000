var obj = { prop : 1 };

var recipes = {};

var newObj = {}
var newObj = Object.assign({}, object)


function updateObjectWithKeyAndValue(object, key, value) {
  return Object.assign({}, object, {[key]: value})
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
 return delete newObj.key
}

function destructivelyDeleteFromObjectByKey(object, key) {
  delete object.key
}







