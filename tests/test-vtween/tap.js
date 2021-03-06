const tap = require('tap');

function approximate(a, b, maxDiff) {
  maxDiff = maxDiff || 0.000001;
  return Math.abs(a - b) <= maxDiff;
}

tap.Test.prototype.addAssert('approximate', 3, function (found, wanted, maxDifferent, message, extra) {
  let diff = Math.abs(found - wanted);

  maxDifferent = maxDifferent || 0.0001;
  message = message || `should be approximate (${maxDifferent})`;

  if (diff <= maxDifferent) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('deepapproximate', 3, function (found, wanted, maxDifferent, message, extra) {
  maxDifferent = maxDifferent || 0.0001;
  message = message || `should be approximate (${maxDifferent})`;

  for (let name in found) {
    let diff = Math.abs(found[name] - wanted[name]);

    if (diff > maxDifferent) {
      extra.found = found;
      extra.wanted = wanted;
      extra.compare = '~=';

      return this.fail(message, extra);
    }
  }

  return this.pass(message, extra);
});

tap.Test.prototype.addAssert('approximateArray', 3, function (found, wanted, maxDifferent, message, extra) {
  if (found.length !== wanted.length) {
    return this.fail(message, extra);
  }

  maxDifferent = maxDifferent || 0.0001;
  message = message || `should be approximate (${maxDifferent})`;

  for (let i = 0; i < found.length; ++i) {
    let diff = Math.abs(found[i] - wanted[i]);
    if (diff <= maxDifferent) {
      return this.pass(message, extra);
    }
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('notapproximate', 3, function (found, wanted, maxDifferent, message, extra) {
  let diff = Math.abs(found - wanted);

  maxDifferent = maxDifferent || 0.0001;
  message = message || `should be not approximate (${maxDifferent})`;

  if (diff > maxDifferent) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '!~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('equal_v2', 2, function (found, wanted, message, extra) {
  let result = approximate(found.x, wanted[0]) && approximate(found.y, wanted[1]);

  if (result) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('equal_v3', 2, function (found, wanted, message, extra) {
  let result = approximate(found.x, wanted[0]) && approximate(found.y, wanted[1]) && approximate(found.z, wanted[2]);

  if (result) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('equal_v4', 2, function (found, wanted, message, extra) {
  let result = approximate(found.x, wanted[0]) && approximate(found.y, wanted[1]) && approximate(found.z, wanted[2]) && approximate(found.w, wanted[3]);

  if (result) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('equal_c3', 2, function (found, wanted, message, extra) {
  let result = approximate(found.r, wanted[0]) && approximate(found.g, wanted[1]) && approximate(found.b, wanted[2]);

  if (result) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('equal_c4', 2, function (found, wanted, message, extra) {
  let result = approximate(found.r, wanted[0]) && approximate(found.g, wanted[1]) && approximate(found.b, wanted[2]) && approximate(found.a, wanted[3]);

  if (result) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

tap.Test.prototype.addAssert('equal_m2', 2, function (found, wanted, message, extra) {
  let result =
    approximate(found.m00, wanted[0]) &&
    approximate(found.m01, wanted[1]) &&
    approximate(found.m02, wanted[2]) &&
    approximate(found.m03, wanted[3])
    ;

  if (result) {
    return this.pass(message, extra);
  }

  extra.found = found;
  extra.wanted = wanted;
  extra.compare = '~=';

  return this.fail(message, extra);
});

module.exports = tap;