//  [version, inc, result, options, identifier, identifierBase]
//  inc(version, inc, options, identifier, identifierBase) -> result
module.exports = [
  ['1.2.3', 'major', '2.0.0'],
  ['1.2.3', 'minor', '1.3.0'],
  ['1.2.3', 'patch', '1.2.4'],
  ['1.2.3tag', 'major', '2.0.0', true],
  ['1.2.3-tag', 'major', '2.0.0'],
  ['1.2.3', 'fake', null],
  ['1.2.0-0', 'patch', '1.2.0'],
  ['fake', 'major', null],
  ['1.2.3-4', 'major', '2.0.0'],
  ['1.2.3-4', 'minor', '1.3.0'],
  ['1.2.3-4', 'patch', '1.2.3'],
  ['1.2.3-alpha.0.beta', 'major', '2.0.0'],
  ['1.2.3-alpha.0.beta', 'minor', '1.3.0'],
  ['1.2.3-alpha.0.beta', 'patch', '1.2.3'],
  ['1.2.4', 'prerelease', '1.2.5-0'],
  ['1.2.3-0', 'prerelease', '1.2.3-1'],
  ['1.2.3-alpha.0', 'prerelease', '1.2.3-alpha.1'],
  ['1.2.3-alpha.1', 'prerelease', '1.2.3-alpha.2'],
  ['1.2.3-alpha.2', 'prerelease', '1.2.3-alpha.3'],
  ['1.2.3-alpha.0.beta', 'prerelease', '1.2.3-alpha.1.beta'],
  ['1.2.3-alpha.1.beta', 'prerelease', '1.2.3-alpha.2.beta'],
  ['1.2.3-alpha.2.beta', 'prerelease', '1.2.3-alpha.3.beta'],
  ['1.2.3-alpha.10.0.beta', 'prerelease', '1.2.3-alpha.10.1.beta'],
  ['1.2.3-alpha.10.1.beta', 'prerelease', '1.2.3-alpha.10.2.beta'],
  ['1.2.3-alpha.10.2.beta', 'prerelease', '1.2.3-alpha.10.3.beta'],
  ['1.2.3-alpha.10.beta.0', 'prerelease', '1.2.3-alpha.10.beta.1'],
  ['1.2.3-alpha.10.beta.1', 'prerelease', '1.2.3-alpha.10.beta.2'],
  ['1.2.3-alpha.10.beta.2', 'prerelease', '1.2.3-alpha.10.beta.3'],
  ['1.2.3-alpha.9.beta', 'prerelease', '1.2.3-alpha.10.beta'],
  ['1.2.3-alpha.10.beta', 'prerelease', '1.2.3-alpha.11.beta'],
  ['1.2.3-alpha.11.beta', 'prerelease', '1.2.3-alpha.12.beta'],
  ['1.0.0', 'prepatch', '1.0.1-alpha.1.1a.0', null, 'alpha.1.1a'],
  ['1.2.0', 'prepatch', '1.2.1-0'],
  ['1.2.0-1', 'prepatch', '1.2.1-0'],
  ['1.2.0', 'preminor', '1.3.0-0'],
  ['1.2.3-1', 'preminor', '1.3.0-0'],
  ['1.2.0', 'premajor', '2.0.0-0'],
  ['1.2.3-1', 'premajor', '2.0.0-0'],
  ['1.2.0-1', 'minor', '1.2.0'],
  ['1.0.0-1', 'major', '1.0.0'],
  ['1.0.0-1', 'release', '1.0.0'],
  ['1.2.0-1', 'release', '1.2.0'],
  ['1.2.3-1', 'release', '1.2.3'],
  ['1.2.3', 'release', null],

  // [version, inc, result, identifierIndex, loose, identifier]
  ['1.2.3', 'major', '2.0.0', false, 'dev'],
  ['1.2.3', 'minor', '1.3.0', false, 'dev'],
  ['1.2.3', 'patch', '1.2.4', false, 'dev'],
  ['1.2.3tag', 'major', '2.0.0', true, 'dev'],
  ['1.2.3-tag', 'major', '2.0.0', false, 'dev'],
  ['1.2.3', 'fake', null, false, 'dev'],
  ['1.2.0-0', 'patch', '1.2.0', false, 'dev'],
  ['fake', 'major', null, false, 'dev'],
  ['1.2.3-4', 'major', '2.0.0', false, 'dev'],
  ['1.2.3-4', 'minor', '1.3.0', false, 'dev'],
  ['1.2.3-4', 'patch', '1.2.3', false, 'dev'],
  ['1.2.3-alpha.0.beta', 'major', '2.0.0', false, 'dev'],
  ['1.2.3-alpha.0.beta', 'minor', '1.3.0', false, 'dev'],
  ['1.2.3-alpha.0.beta', 'patch', '1.2.3', false, 'dev'],
  ['1.2.4', 'prerelease', '1.2.5-dev.0', false, 'dev'],
  ['1.2.3-0', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-alpha.0', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-alpha.0', 'prerelease', '1.2.3-alpha.1', false, 'alpha'],
  ['1.2.3-alpha.0.beta', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-alpha.0.beta', 'prerelease', '1.2.3-alpha.1.beta', false, 'alpha'],
  ['1.2.3-alpha.10.0.beta', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-alpha.10.0.beta', 'prerelease', '1.2.3-alpha.10.1.beta', false, 'alpha'],
  ['1.2.3-alpha.10.1.beta', 'prerelease', '1.2.3-alpha.10.2.beta', false, 'alpha'],
  ['1.2.3-alpha.10.2.beta', 'prerelease', '1.2.3-alpha.10.3.beta', false, 'alpha'],
  ['1.2.3-alpha.10.beta.0', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-alpha.10.beta.0', 'prerelease', '1.2.3-alpha.10.beta.1', false, 'alpha'],
  ['1.2.3-alpha.10.beta.1', 'prerelease', '1.2.3-alpha.10.beta.2', false, 'alpha'],
  ['1.2.3-alpha.10.beta.2', 'prerelease', '1.2.3-alpha.10.beta.3', false, 'alpha'],
  ['1.2.3-alpha.9.beta', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-alpha.9.beta', 'prerelease', '1.2.3-alpha.10.beta', false, 'alpha'],
  ['1.2.3-alpha.10.beta', 'prerelease', '1.2.3-alpha.11.beta', false, 'alpha'],
  ['1.2.3-alpha.11.beta', 'prerelease', '1.2.3-alpha.12.beta', false, 'alpha'],
  ['1.2.0', 'prepatch', '1.2.1-dev.0', false, 'dev'],
  ['1.2.0-1', 'prepatch', '1.2.1-dev.0', false, 'dev'],
  ['1.2.0', 'preminor', '1.3.0-dev.0', false, 'dev'],
  ['1.2.3-1', 'preminor', '1.3.0-dev.0', false, 'dev'],
  ['1.2.0', 'premajor', '2.0.0-dev.0', false, 'dev'],
  ['1.2.3-1', 'premajor', '2.0.0-dev.0', false, 'dev'],
  ['1.2.3-1', 'premajor', '2.0.0-dev.1', false, 'dev', 1],
  ['1.2.0-1', 'minor', '1.2.0', false, 'dev'],
  ['1.0.0-1', 'major', '1.0.0', 'dev'],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev.0', false, 'dev'],
  ['1.2.3-0', 'prerelease', '1.2.3-1.0', false, '1'],
  ['1.2.3-1.0', 'prerelease', '1.2.3-1.1', false, '1'],
  ['1.2.3-1.1', 'prerelease', '1.2.3-1.2', false, '1'],
  ['1.2.3-1.1', 'prerelease', '1.2.3-2.0', false, '2'],

  // [version, inc, result, identifierIndex, loose, identifier, identifierBase]
  ['1.2.0-1', 'prerelease', '1.2.0-alpha.0', false, 'alpha', '0'],
  ['1.2.1', 'prerelease', '1.2.2-alpha.0', false, 'alpha', '0'],
  ['0.2.0', 'prerelease', '0.2.1-alpha.0', false, 'alpha', '0'],
  ['1.2.2', 'prerelease', '1.2.3-alpha.1', false, 'alpha', '1'],
  ['1.2.3', 'prerelease', '1.2.4-alpha.1', false, 'alpha', '1'],
  ['1.2.4', 'prerelease', '1.2.5-alpha.1', false, 'alpha', '1'],
  ['1.2.0', 'prepatch', '1.2.1-dev.1', false, 'dev', '1'],
  ['1.2.0-1', 'prepatch', '1.2.1-dev.1', false, 'dev', '1'],
  ['1.2.0', 'premajor', '2.0.0-dev.0', false, 'dev', '0'],
  ['1.2.3-1', 'premajor', '2.0.0-dev.0', false, 'dev', '0'],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev.0', false, 'dev', '0'],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev.1', false, 'dev', '1'],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev.bar.0', false, '', '0'],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev.bar.1', false, '', '1'],
  ['1.2.0', 'preminor', '1.3.0-dev.1', false, 'dev', '1'],
  ['1.2.3-1', 'preminor', '1.3.0-dev.0', false, 'dev'],
  ['1.2.0', 'prerelease', '1.2.1-1', false, '', '1'],

  ['1.2.0-1', 'prerelease', '1.2.0-alpha', false, 'alpha', false],
  ['1.2.1', 'prerelease', '1.2.2-alpha', false, 'alpha', false],
  ['1.2.2', 'prerelease', '1.2.3-alpha', false, 'alpha', false],
  ['1.2.0', 'prepatch', '1.2.1-dev', false, 'dev', false],
  ['1.2.0-1', 'prepatch', '1.2.1-dev', false, 'dev', false],
  ['1.2.0', 'premajor', '2.0.0-dev', false, 'dev', false],
  ['1.2.3-1', 'premajor', '2.0.0-dev', false, 'dev', false],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev', false, 'dev', false],
  ['1.2.3-dev.bar', 'prerelease', '1.2.3-dev.baz', false, 'dev.baz', false],
  ['1.2.0', 'preminor', '1.3.0-dev', false, 'dev', false],
  ['1.2.3-1', 'preminor', '1.3.0-dev', false, 'dev', false],
  ['1.2.3-dev', 'prerelease', null, false, 'dev', false],
  ['1.2.0-dev', 'premajor', '2.0.0-dev', false, 'dev', false],
  ['1.2.0-dev', 'preminor', '1.3.0-beta', false, 'beta', false],
  ['1.2.0-dev', 'prepatch', '1.2.1-dev', false, 'dev', false],
  ['1.2.0', 'prerelease', null, false, '', false],
  ['1.0.0-rc.1+build.4', 'prerelease', '1.0.0-rc.2', 'rc', false],
  ['1.2.0', 'prerelease', null, false, 'invalid/preid'],
  ['1.2.0', 'prerelease', null, false, 'invalid+build'],
  ['1.2.0beta', 'prerelease', null, { loose: true }, 'invalid/preid'],
]
