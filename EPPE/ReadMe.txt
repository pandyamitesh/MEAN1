C:\Projects\EPPE_A\EPPE>bower init
? name EPPE
? description EPPE Built With MEAN Stack
? main file
? keywords EPPE MEAN DUA GOV CMS
? authors Mitesh Pandya and Team
? license GOV
? homepage
? set currently installed components as dependencies? No
? add commonly ignored files to ignore list? Yes
? would you like to mark this package as private which prevents it from being accidentally publis
 to the registry? Yes

{
  name: 'EPPE',
  description: 'EPPE Built With MEAN Stack',
  main: '',
  keywords: [
    'EPPE',
    'MEAN',
    'DUA',
    'GOV',
    'CMS'
  ],
  authors: [
    'Mitesh Pandya and Team'
  ],
  license: 'GOV',
  homepage: '',
  private: true,
  ignore: [
    '**/.*',
    'node_modules',
    'bower_components',
    'test',
    'tests'
  ]
}

? Looks good? Yes

C:\Projects\EPPE_A\EPPE>npm install -g bower-installer
npm WARN deprecated graceful-fs@3.0.8: graceful-fs v3.0.0 and before will fail on node releases >
7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it
 the tree.
npm WARN deprecated graceful-fs@2.0.3: graceful-fs v3.0.0 and before will fail on node releases >
7.0. Please update to graceful-fs@^4.0.0 as soon as possible. Use 'npm ls graceful-fs' to find it
 the tree.
npm WARN deprecated npmconf@2.1.2: this package has been reintegrated into npm and is now out of
e with respect to npm
npm WARN deprecated lodash@2.4.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^3.0.0
npm WARN deprecated lodash@0.9.2: lodash@<3.0.0 is no longer maintained. Upgrade to lodash@^3.0.0
C:\Users\mitesh.pandya\AppData\Roaming\npm\bower-installer -> C:\Users\mitesh.pandya\AppData\Roam
\npm\node_modules\bower-installer\bower-installer.js
C:\Users\mitesh.pandya\AppData\Roaming\npm
└─┬ bower-installer@1.2.0
  ├── async@0.2.10
  ├─┬ bower@1.3.12
  │ ├── abbrev@1.0.7
  │ ├── archy@0.0.2
  │ ├─┬ bower-config@0.5.2
  │ │ ├── graceful-fs@2.0.3
  │ │ ├─┬ optimist@0.6.1
  │ │ │ ├── minimist@0.0.10
  │ │ │ └── wordwrap@0.0.3
  │ │ └── osenv@0.0.3
  │ ├── bower-endpoint-parser@0.2.2
  │ ├─┬ bower-json@0.4.0
  │ │ ├── deep-extend@0.2.11
  │ │ ├── graceful-fs@2.0.3
  │ │ └── intersect@0.0.3
  │ ├── bower-logger@0.2.2
  │ ├─┬ bower-registry-client@0.2.4
  │ │ ├── graceful-fs@2.0.3
  │ │ ├── lru-cache@2.3.1
  │ │ ├─┬ request@2.51.0
  │ │ │ ├── caseless@0.8.0
  │ │ │ ├─┬ combined-stream@0.0.7
  │ │ │ │ └── delayed-stream@0.0.5
  │ │ │ ├─┬ form-data@0.2.0
  │ │ │ │ ├── async@0.9.2
  │ │ │ │ └─┬ mime-types@2.0.14
  │ │ │ │   └── mime-db@1.12.0
  │ │ │ ├── oauth-sign@0.5.0
  │ │ │ └── qs@2.3.3
  │ │ └── request-replay@0.2.0
  │ ├─┬ cardinal@0.4.0
  │ │ └─┬ redeyed@0.4.4
  │ │   └── esprima@1.0.4
  │ ├─┬ chalk@0.5.0
  │ │ ├── ansi-styles@1.1.0
  │ │ ├── escape-string-regexp@1.0.5
  │ │ ├─┬ has-ansi@0.1.0
  │ │ │ └── ansi-regex@0.2.1
  │ │ ├── strip-ansi@0.3.0
  │ │ └── supports-color@0.2.0
  │ ├── chmodr@0.1.0
  │ ├─┬ decompress-zip@0.0.8
  │ │ ├─┬ binary@0.3.0
  │ │ │ ├── buffers@0.1.1
  │ │ │ └─┬ chainsaw@0.1.0
  │ │ │   └── traverse@0.3.9
  │ │ ├── mkpath@0.1.0
  │ │ ├── nopt@2.2.1
  │ │ ├─┬ readable-stream@1.1.14
  │ │ │ ├── core-util-is@1.0.2
  │ │ │ ├── isarray@0.0.1
  │ │ │ └── string_decoder@0.10.31
  │ │ └─┬ touch@0.0.2
  │ │   └── nopt@1.0.10
  │ ├─┬ fstream@1.0.9
  │ │ ├── graceful-fs@4.1.4
  │ │ └─┬ mkdirp@0.5.1
  │ │   └── minimist@0.0.8
  │ ├─┬ fstream-ignore@1.0.5
  │ │ └─┬ minimatch@3.0.0
  │ │   └─┬ brace-expansion@1.1.4
  │ │     ├── balanced-match@0.4.1
  │ │     └── concat-map@0.0.1
  │ ├─┬ glob@4.0.6
  │ │ ├── minimatch@1.0.0
  │ │ └─┬ once@1.3.3
  │ │   └── wrappy@1.0.2
  │ ├── graceful-fs@3.0.8
  │ ├─┬ handlebars@2.0.0
  │ │ ├── optimist@0.3.7
  │ │ └─┬ uglify-js@2.3.6
  │ │   ├── optimist@0.3.7
  │ │   └─┬ source-map@0.1.43
  │ │     └── amdefine@1.0.0
  │ ├─┬ inquirer@0.7.1
  │ │ ├─┬ cli-color@0.3.3
  │ │ │ ├── d@0.1.1
  │ │ │ ├─┬ es5-ext@0.10.11
  │ │ │ │ ├── es6-iterator@2.0.0
  │ │ │ │ └── es6-symbol@3.0.2
  │ │ │ ├─┬ memoizee@0.3.10
  │ │ │ │ ├─┬ es6-weak-map@0.1.4
  │ │ │ │ │ ├── es6-iterator@0.1.3
  │ │ │ │ │ └── es6-symbol@2.0.1
  │ │ │ │ ├── event-emitter@0.3.4
  │ │ │ │ ├── lru-queue@0.1.0
  │ │ │ │ └── next-tick@0.2.2
  │ │ │ └── timers-ext@0.1.0
  │ │ ├─┬ figures@1.7.0
  │ │ │ └── object-assign@4.1.0
  │ │ ├── lodash@2.4.2
  │ │ ├── mute-stream@0.0.4
  │ │ ├─┬ readline2@0.1.1
  │ │ │ └─┬ strip-ansi@2.0.1
  │ │ │   └── ansi-regex@1.1.1
  │ │ ├── rx@2.5.3
  │ │ └── through@2.3.8
  │ ├─┬ insight@0.4.3
  │ │ ├── async@0.9.2
  │ │ ├── chalk@0.5.1
  │ │ ├─┬ configstore@0.3.2
  │ │ │ ├─┬ js-yaml@3.6.1
  │ │ │ │ ├─┬ argparse@1.0.7
  │ │ │ │ │ └── sprintf-js@1.0.3
  │ │ │ │ └── esprima@2.7.2
  │ │ │ ├─┬ mkdirp@0.5.1
  │ │ │ │ └── minimist@0.0.8
  │ │ │ ├── object-assign@2.1.1
  │ │ │ ├── user-home@1.1.1
  │ │ │ ├── uuid@2.0.2
  │ │ │ └── xdg-basedir@1.0.1
  │ │ ├─┬ inquirer@0.6.0
  │ │ │ └── lodash@2.4.2
  │ │ ├─┬ lodash.debounce@2.4.1
  │ │ │ ├── lodash.isfunction@2.4.1
  │ │ │ ├─┬ lodash.isobject@2.4.1
  │ │ │ │ └── lodash._objecttypes@2.4.1
  │ │ │ └─┬ lodash.now@2.4.1
  │ │ │   └── lodash._isnative@2.4.1
  │ │ ├── object-assign@1.0.0
  │ │ ├─┬ os-name@1.0.3
  │ │ │ ├─┬ osx-release@1.1.0
  │ │ │ │ └── minimist@1.2.0
  │ │ │ └─┬ win-release@1.1.1
  │ │ │   └── semver@5.1.0
  │ │ └─┬ tough-cookie@0.12.1
  │ │   └── punycode@1.4.1
  │ ├── is-root@1.0.0
  │ ├── junk@1.0.2
  │ ├── lockfile@1.0.1
  │ ├── lru-cache@2.5.2
  │ ├─┬ mkdirp@0.5.0
  │ │ └── minimist@0.0.8
  │ ├── mout@0.9.1
  │ ├── nopt@3.0.6
  │ ├── opn@1.0.2
  │ ├── osenv@0.1.0
  │ ├─┬ p-throttler@0.1.0
  │ │ └── q@0.9.7
  │ ├─┬ promptly@0.2.0
  │ │ └── read@1.0.7
  │ ├── q@1.0.1
  │ ├─┬ request@2.42.0
  │ │ ├── aws-sign2@0.5.0
  │ │ ├─┬ bl@0.9.5
  │ │ │ └── readable-stream@1.0.34
  │ │ ├── caseless@0.6.0
  │ │ ├── forever-agent@0.5.2
  │ │ ├─┬ form-data@0.1.4
  │ │ │ ├── async@0.9.2
  │ │ │ └── mime@1.2.11
  │ │ ├─┬ hawk@1.1.1
  │ │ │ ├── boom@0.4.2
  │ │ │ ├── cryptiles@0.2.2
  │ │ │ ├── hoek@0.9.1
  │ │ │ └── sntp@0.2.4
  │ │ ├─┬ http-signature@0.10.1
  │ │ │ ├── asn1@0.1.11
  │ │ │ ├── assert-plus@0.1.5
  │ │ │ └── ctype@0.5.3
  │ │ ├── json-stringify-safe@5.0.1
  │ │ ├── mime-types@1.0.2
  │ │ ├── node-uuid@1.4.7
  │ │ ├── oauth-sign@0.4.0
  │ │ ├── qs@1.2.2
  │ │ ├── stringstream@0.0.5
  │ │ ├── tough-cookie@2.2.2
  │ │ └── tunnel-agent@0.4.3
  │ ├─┬ request-progress@0.3.0
  │ │ └── throttleit@0.0.2
  │ ├── retry@0.6.0
  │ ├── rimraf@2.2.8
  │ ├── semver@2.3.2
  │ ├─┬ shell-quote@1.4.3
  │ │ ├── array-filter@0.0.1
  │ │ ├── array-map@0.0.0
  │ │ ├── array-reduce@0.0.0
  │ │ └── jsonify@0.0.0
  │ ├── stringify-object@1.0.1
  │ ├─┬ tar-fs@0.5.2
  │ │ ├─┬ mkdirp@0.5.1
  │ │ │ └── minimist@0.0.8
  │ │ ├─┬ pump@0.3.5
  │ │ │ ├── end-of-stream@1.0.0
  │ │ │ └── once@1.2.0
  │ │ └─┬ tar-stream@0.4.7
  │ │   └── xtend@4.0.1
  │ ├── tmp@0.0.23
  │ ├─┬ update-notifier@0.2.0
  │ │ ├─┬ latest-version@0.2.0
  │ │ │ └─┬ package-json@0.2.0
  │ │ │   ├─┬ got@0.3.0
  │ │ │   │ └── object-assign@0.3.1
  │ │ │   └─┬ registry-url@0.1.1
  │ │ │     └─┬ npmconf@2.1.2
  │ │ │       ├─┬ config-chain@1.1.10
  │ │ │       │ └── proto-list@1.2.4
  │ │ │       ├── ini@1.3.4
  │ │ │       ├─┬ mkdirp@0.5.1
  │ │ │       │ └── minimist@0.0.8
  │ │ │       ├── nopt@3.0.6
  │ │ │       └── uid-number@0.0.5
  │ │ ├── semver-diff@0.1.0
  │ │ └─┬ string-length@0.1.2
  │ │   └─┬ strip-ansi@0.2.2
  │ │     └── ansi-regex@0.1.0
  │ └── which@1.0.9
  ├── colors@0.6.2
  ├─┬ glob@3.2.11
  │ ├── inherits@2.0.1
  │ └─┬ minimatch@0.3.0
  │   └── sigmund@1.0.1
  ├── lodash@0.9.2
  ├── mkdirp@0.3.5
  ├── node-fs@0.1.7
  └── nopt@2.1.2


C:\Projects\EPPE_A\EPPE>bower install angular#1.5.5 --save
bower invalid-meta  The "name" is recommended to be lowercase, can contain digits, dots, dashes
bower not-cached    https://github.com/angular/bower-angular.git#1.5.5
bower resolve       https://github.com/angular/bower-angular.git#1.5.5
bower checkout      angular#v1.5.5
bower resolved      https://github.com/angular/bower-angular.git#1.5.5
bower install       angular#1.5.5

angular#1.5.5 bower_components\angular

C:\Projects\EPPE_A\EPPE>bower-installer
Setting up install paths...Finished
Running bower install...Finished
Installing:
        bootstrap : C:\Projects\EPPE_A\EPPE/bootstrap.less
        bootstrap : C:\Projects\EPPE_A\EPPE/app/lib/js/bootstrap/bootstrap.js
        jquery : C:\Projects\EPPE_A\EPPE/app/lib/js/jquery/jquery.js
        angular : C:\Projects\EPPE_A\EPPE/app/lib/js/angular/angular.js
Success

C:\Projects\EPPE_A\EPPE>bower install angular-route --save
bower invalid-meta  The "name" is recommended to be lowercase, can contain digits, dots, dashes
bower not-cached    https://github.com/angular/bower-angular-route.git#*
bower resolve       https://github.com/angular/bower-angular-route.git#*
bower checkout      angular-route#v1.5.5
bower resolved      https://github.com/angular/bower-angular-route.git#1.5.5
bower install       angular-route#1.5.5

angular-route#1.5.5 bower_components\angular-route
└── angular#1.5.5

C:\Projects\EPPE_A\EPPE>bower-installer
Setting up install paths...Finished
Running bower install...Finished
Installing:
        angular-route : C:\Projects\EPPE_A\EPPE/app/lib/js/angular-route/angular-route.js
        bootstrap : C:\Projects\EPPE_A\EPPE/app/lib/js/bootstrap/bootstrap.js
        bootstrap : C:\Projects\EPPE_A\EPPE/bootstrap.less
        jquery : C:\Projects\EPPE_A\EPPE/app/lib/js/jquery/jquery.js
        angular : C:\Projects\EPPE_A\EPPE/app/lib/js/angular/angular.js
Success

C:\Projects\EPPE_A\EPPE>