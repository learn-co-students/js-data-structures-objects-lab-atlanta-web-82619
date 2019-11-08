let driver = {
  name: 'Mark'
}

function updateDriverWithKeyAndValue(driver, key, value){
  let arr = Object.assign({}, driver, {[key]: value});
  return arr;
}

function destructivelyUpdateDriverWithKeyAndValue(driver, key, value) {
  driver[key] = value;
  return driver;
}

function deleteFromDriverByKey(driver, key) {
  const newDriver = Object.assign({}, driver);
  delete newDriver[key];
  return newDriver;
}

function destructivelyDeleteFromDriverByKey(driver, key) {
  delete driver[key];
  return driver;
}
