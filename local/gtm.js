// Copyright 2012 Google Inc. All rights reserved.
(function (w, g) {
  w[g] = w[g] || {};
  w[g].e = function (s) {
    return eval(s);
  };
})(window, 'google_tag_manager');
(function () {

  var data = {
    "resource": {
      "version": "439",

      "macros": [{"function": "__e"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.pageType"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "viewport.scrollTop"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "viewport.height"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "viewport.width"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){if(\"object\"!==typeof window.nytAnalytics)return\"\";var a=", ["escape", ["macro", 1], 8, 16], "||\"\";a=a.toLowerCase();window.nytAnalytics.comScorePage=window.nytAnalytics.comScorePage||1;if(!a||\"oak\"===a||\"article\"===a){a=window.nytAnalytics.comScorePage;var c=", ["escape", ["macro", 2], 8, 16], ",b=", ["escape", ["macro", 3], 8, 16], ",d=768\u003E", ["escape", ["macro", 4], 8, 16], ";b=d?4*b:2*b;window.nytAnalytics.comScorePage=Math.floor(c\/b)+1;return window.nytAnalytics.comScorePage!==a?\"track\":\"\"}})();"]
      }, {"function": "__k", "vtp_decodeCookie": false, "vtp_name": "NYT-T"}, {
        "function": "__k",
        "vtp_decodeCookie": false,
        "vtp_name": "nyt-purr"
      }, {
        "function": "__u",
        "vtp_component": "PATH",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {"function": "__j", "vtp_name": "location.search"}, {
        "function": "__u",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.name"
      }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!1})();"]}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return!0})();"]
      }, {
        "function": "__remm",
        "vtp_setDefaultValue": true,
        "vtp_input": ["macro", 11],
        "vtp_fullMatch": true,
        "vtp_replaceAfterMatch": true,
        "vtp_defaultValue": ["macro", 12],
        "vtp_ignoreCase": true,
        "vtp_map": ["list", ["map", "key", "test-whitelist", "value", ["macro", 13]], ["map", "key", "article-complete", "value", ["macro", 13]], ["map", "key", "lire-modal", "value", ["macro", 13]], ["map", "key", "LogIn", "value", ["macro", 13]], ["map", "key", "welcome ad", "value", ["macro", 13]], ["map", "key", "review", "value", ["macro", 13]], ["map", "key", "Programs", "value", ["macro", 13]], ["map", "key", "vi-beta-tools", "value", ["macro", 13]], ["map", "key", "inline-message", "value", ["macro", 13]], ["map", "key", "newsletters", "value", ["macro", 13]], ["map", "key", "video-player-share", "value", ["macro", 13]], ["map", "key", "gateway", "value", ["macro", 13]], ["map", "key", "audio-player", "value", ["macro", 13]], ["map", "key", "share-tools", "value", ["macro", 13]], ["map", "key", "comments", "value", ["macro", 13]], ["map", "key", "acm", "value", ["macro", 13]], ["map", "key", "video-player", "value", ["macro", 13]], ["map", "key", "first-scroll", "value", ["macro", 13]], ["map", "key", "^games-prototype.*", "value", ["macro", 13]], ["map", "key", "[M|m]odal", "value", ["macro", 13]], ["map", "key", "settings", "value", ["macro", 13]], ["map", "key", "Puzzle", "value", ["macro", 13]], ["map", "key", "general", "value", ["macro", 13]], ["map", "key", "gameplay", "value", ["macro", 13]], ["map", "key", "^interactive.*", "value", ["macro", 13]], ["map", "key", "out_bound_clicks", "value", ["macro", 13]], ["map", "key", "tap-story", "value", ["macro", 13]]]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.name"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.ga.eventCategory"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].category\u0026\u0026window.nytAnalytics.gaEvent[a].category()||", ["escape", ["macro", 16], 8, 16], "||a})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.url"
      }, {
        "function": "__u",
        "vtp_component": "QUERY",
        "vtp_queryKey": "gclid",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__u",
        "vtp_component": "QUERY",
        "vtp_queryKey": "dclid",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "application.name"
      }, {
        "function": "__u",
        "vtp_component": "QUERY",
        "vtp_queryKey": "query",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var b=", ["escape", ["macro", 18], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname,a=\"\";", ["escape", ["macro", 19], 8, 16], "\u0026\u0026(a+=\"?gclid\\x3d\"+", ["escape", ["macro", 19], 8, 16], ");", ["escape", ["macro", 20], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"dclid\\x3d\"+", ["escape", ["macro", 20], 8, 16], ");\"nyt-help\"===", ["escape", ["macro", 21], 8, 16], "\u0026\u0026", ["escape", ["macro", 22], 8, 16], "\u0026\u0026(a+=(\"\"===a?\"?\":\"\\x26\")+\"query\\x3d\"+", ["escape", ["macro", 22], 8, 16], ");return\"\"===a?b:b+a})();"]
      }, {"function": "__j", "vtp_name": "nytAnalytics.campaignMap.campaignSource"}, {
        "function": "__j",
        "vtp_name": "nytAnalytics.campaignMap.campaignMedium"
      }, {"function": "__j", "vtp_name": "nytAnalytics.campaignMap.campaignName"}, {
        "function": "__j",
        "vtp_name": "nytAnalytics.campaignMap.campaignContent"
      }, {"function": "__j", "vtp_name": "nytAnalytics.campaignMap.campaignKeyword"}, {
        "function": "__f",
        "vtp_component": "URL"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 29],
        "vtp_name": "referrer.url"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 30], 8, 16], "\u0026\u0026\"null\"!==", ["escape", ["macro", 30], 8, 16], "?", ["escape", ["macro", 30], 8, 16], ":", ["escape", ["macro", 29], 8, 16], "})();"]
      }, {"function": "__c", "vtp_value": "1"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.CG?nytAnalytics.pagemeta.CG.toLowerCase():\"null\"})();"]
      }, {"function": "__c", "vtp_value": "2"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.SCG?nytAnalytics.pagemeta.SCG.toLowerCase():\"null\"})();"]
      }, {"function": "__c", "vtp_value": "3"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PT?nytAnalytics.pagemeta.PT.toLowerCase():\"null\"})();"]
      }, {"function": "__c", "vtp_value": "4"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"object\"===typeof nytAnalytics.pagemeta\u0026\u0026nytAnalytics.pagemeta.PST?nytAnalytics.pagemeta.PST.toLowerCase():\"null\"})();"]
      }, {"function": "__c", "vtp_value": "1"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.url"
      }, {"function": "__c", "vtp_value": "2"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 12],
        "vtp_name": "asset.is_refresh"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a;(a=document.location.href)\u0026\u0026\"string\"===typeof a\u0026\u0026(a=a.replace(\/=[!#\\$%'\\*\\+\\-\\\/=\\?\\^_`\\{\\|\\}~;\\.,\"\\(\\),:;\u003C\u003E\\[\\\\\\]\\w]+(@|%40)[^.]+\\.[^\u0026]+\/g,\"\\x3demail_block\"));if(", ["escape", ["macro", 43], 8, 16], "){var b=-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\";a+=b+\"WT.z_jog\\x3d1\"}return a})();"]
      }, {"function": "__c", "vtp_value": "3"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=document.location.search;", ["escape", ["macro", 43], 8, 16], "\u0026\u0026(connector=-1\u003CcleanURL.indexOf(\"?\")?\"\\x26\":\"?\",a+=connector+\"WT.z_jog\\x3d1\");return a})();"]
      }, {"function": "__c", "vtp_value": "4"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.section"
      }, {"function": "__c", "vtp_value": "5"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.paid_post"
      }, {"function": "__c", "vtp_value": "6"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.name"
      }, {"function": "__c", "vtp_value": "7"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.pagetype"
      }, {"function": "__c", "vtp_value": "8"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.region"
      }, {"function": "__c", "vtp_value": "9"}, {"function": "__c", "vtp_value": "10"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return nytAnalytics.derivedReferrer.source?nytAnalytics.derivedReferrer.source:\"null\"})();"]
      }, {"function": "__c", "vtp_value": "11"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.collection"
      }, {"function": "__c", "vtp_value": "12"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.subsection"
      }, {"function": "__c", "vtp_value": "13"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.subchannel?nytAnalytics.derivedReferrer.subchannel:\"null\";return a})();"]
      }, {"function": "__c", "vtp_value": "14"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "asset.derivedDesk"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 67], 8, 16], "?", ["escape", ["macro", 67], 8, 16], ":\"null\";return a})();"]
      }, {"function": "__c", "vtp_value": "15"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.type?nytAnalytics.derivedReferrer.type:\"null\";return a})();"]
      }, {"function": "__c", "vtp_value": "16"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=nytAnalytics.derivedReferrer.channel?nytAnalytics.derivedReferrer.channel:\"null\";return a})();"]
      }, {"function": "__c", "vtp_value": "17"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.id"
      }, {"function": "__c", "vtp_value": "18"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.authors"
      }, {"function": "__c", "vtp_value": "19"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.headline"
      }, {"function": "__c", "vtp_value": "20"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.kicker"
      }, {"function": "__c", "vtp_value": "21"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.pageType"
      }, {"function": "__c", "vtp_value": "22"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.printPublishDate"
      }, {"function": "__c", "vtp_value": "23"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.section"
      }, {"function": "__c", "vtp_value": "24"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.gatewayViewed"
      }, {"function": "__c", "vtp_value": "25"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.subsection"
      }, {"function": "__c", "vtp_value": "26"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.publishedTimestamp"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"year\"):\"null\"})();"]
      }, {"function": "__c", "vtp_value": "27"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"date\"):\"null\"})();"]
      }, {"function": "__c", "vtp_value": "28"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"day\"):\"null\"})();"]
      }, {"function": "__c", "vtp_value": "29"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"hours\"):\"null\"})();"]
      }, {"function": "__c", "vtp_value": "30"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "null",
        "vtp_name": "asset.lastUpdatedTimestamp"
      }, {"function": "__c", "vtp_value": "31"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.characterCount"
      }, {"function": "__c", "vtp_value": "32"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.collectionName"
      }, {"function": "__c", "vtp_value": "33"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.collectionType"
      }, {"function": "__c", "vtp_value": "34"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.contentTone"
      }, {"function": "__c", "vtp_value": "35"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.series"
      }, {"function": "__c", "vtp_value": "36"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "asset.slug"
      }, {"function": "__c", "vtp_value": "37"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.wordCount"
      }, {"function": "__c", "vtp_value": "38"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.desk"
      }, {"function": "__c", "vtp_value": "39"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.typeOfMaterials"
      }, {"function": "__c", "vtp_value": "40"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.sourceNewsOrg"
      }, {"function": "__c", "vtp_value": "41"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.sourceUSvsIntl"
      }, {"function": "__c", "vtp_value": "42"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "application.name"
      }, {"function": "__c", "vtp_value": "43"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.desFacets"
      }, {"function": "__c", "vtp_value": "44"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.orgFacets"
      }, {"function": "__c", "vtp_value": "45"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.perFacets"
      }, {"function": "__c", "vtp_value": "46"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.geoFacets"
      }, {"function": "__c", "vtp_value": "47"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.paidPostParameter"
      }, {"function": "__c", "vtp_value": "48"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 92], 8, 16], "?window.nytAnalytics.formatDates(", ["escape", ["macro", 92], 8, 16], ",\"month\"):\"null\"})();"]
      }, {"function": "__c", "vtp_value": "49"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.wordCount"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return 100\u003E", ["escape", ["macro", 139], 8, 16], "?\"blurb_under_100\":400\u003E", ["escape", ["macro", 139], 8, 16], "?\"super_short_100_399\":800\u003E", ["escape", ["macro", 139], 8, 16], "?\"short_400_799\":1200\u003E", ["escape", ["macro", 139], 8, 16], "?\"medium_800_1199\":1600\u003E=", ["escape", ["macro", 139], 8, 16], "?\"long_1200_1600\":1600\u003C", ["escape", ["macro", 139], 8, 16], "?\"heave_over_1600\":\"\"})();"]
      }, {"function": "__c", "vtp_value": "50"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.pageSubType"
      }, {"function": "__c", "vtp_value": "51"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 21], 8, 16], "})();"]
      }, {"function": "__c", "vtp_value": "52"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=document.querySelector('meta[name\\x3d\"applicationName\"]');return a?a.content:\"\"})();"]
      }, {"function": "__c", "vtp_value": "53"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.originatingDesk"
      }, {"function": "__c", "vtp_value": "54"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 67], 8, 16], "?", ["escape", ["macro", 67], 8, 16], ":\"null\";return a})();"]
      }, {"function": "__c", "vtp_value": "55"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.isLoggedIn"
      }, {"function": "__c", "vtp_value": "56"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.type"
      }, {"function": "__c", "vtp_value": "57"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.type"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 156], 8, 16], "?1:0})();"]
      }, {"function": "__c", "vtp_value": "58"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.regiId"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 159], 8, 16], "?1:0})();"]
      }, {"function": "__c", "vtp_value": "59"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.regiId"
      }, {"function": "__c", "vtp_value": "60"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.regiId"
      }, {"function": "__c", "vtp_value": "61"}, {
        "function": "__k",
        "vtp_decodeCookie": false,
        "vtp_name": "nyt-m"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var g=function(b,a){if((b=(new RegExp(b+\"\\x3d([il]{1}).([^\\x26]+)\")).exec(a))\u0026\u00263\u003C=b.length)switch(b[1]){case \"i\":return parseInt(b[2],10);case \"l\":return b[2].split(\".\").slice(1).map(function(a){return parseInt(a,10)})}return null},a,d={},e=", ["escape", ["macro", 166], 8, 16], ";if(e){var c=[\"v\",\"t\"];for(a=0;a\u003Cc.length;a++){var f=g(c[a],e);null!==f\u0026\u0026(d[c[a]]=f)}}return d})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"object\"===typeof ", ["escape", ["macro", 167], 8, 16], "?", ["escape", ["macro", 167], 8, 16], ".v:\"\"})();"]
      }, {"function": "__c", "vtp_value": ["macro", 168]}, {"function": "__c", "vtp_value": "62"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.edition"
      }, {"function": "__c", "vtp_value": "63"}, {
        "function": "__k",
        "vtp_decodeCookie": false,
        "vtp_name": "nyt-a"
      }, {"function": "__c", "vtp_value": ["macro", 173]}, {"function": "__c", "vtp_value": "64"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.isLoggedIn"
      }, {"function": "__c", "vtp_value": "65"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.type"
      }, {"function": "__c", "vtp_value": "66"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.DMA"
      }, {"function": "__c", "vtp_value": "67"}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"sub\"===", ["escape", ["macro", 156], 8, 16], "?1:0})();"]
      }, {"function": "__c", "vtp_value": "68"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.channels"
      }, {"function": "__c", "vtp_value": "69"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.savedArticles"
      }, {"function": "__c", "vtp_value": "72"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.creative"
      }, {"function": "__c", "vtp_value": "73"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.flight"
      }, {"function": "__c", "vtp_value": "74"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.slideshow.length"
      }, {"function": "__c", "vtp_value": "75"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.slideshow.currentEntry"
      }, {"function": "__c", "vtp_value": "76"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.slideshow.title"
      }, {"function": "__c", "vtp_value": "79"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.search.process"
      }, {"function": "__c", "vtp_value": "80"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.search.mood"
      }, {"function": "__c", "vtp_value": "81"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.originalURL"
      }, {"function": "__c", "vtp_value": "82"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.campaignInternal"
      }, {"function": "__c", "vtp_value": "83"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.campaignInternal"
      }, {"function": "__c", "vtp_value": "84"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "application.beta"
      }, {"function": "__c", "vtp_value": "85"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.audioFranchise"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.series"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 211],
        "vtp_name": "video.mData.series"
      }, {
        "function": "__smm",
        "vtp_setDefaultValue": true,
        "vtp_input": ["macro", 11],
        "vtp_defaultValue": ["macro", 210],
        "vtp_map": ["list", ["map", "key", "audio-player", "value", ["macro", 212]]]
      }, {"function": "__c", "vtp_value": "86"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.regiCreateDate"
      }, {"function": "__c", "vtp_value": "87"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.newsletter.subscriber"
      }, {"function": "__c", "vtp_value": "88"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "search.era"
      }, {"function": "__c", "vtp_value": "89"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "search.genre"
      }, {"function": "__c", "vtp_value": "90"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "search.subgenre"
      }, {"function": "__c", "vtp_value": "91"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.newsletter.subscribeDate"
      }, {"function": "__c", "vtp_value": "92"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.offerID"
      }, {"function": "__c", "vtp_value": "93"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscription.stopped"
      }, {"function": "__c", "vtp_value": "94"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscription.corp"
      }, {"function": "__c", "vtp_value": "95"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscriptions.purchaseDate"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscriptions.activeSubscriberSince"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 233], 8, 16], "||", ["escape", ["macro", 234], 8, 16], ";try{var b=nytAnalytics.formatDates(a,\"dateAlone\")}catch(c){}return b})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 235],
        "vtp_name": "user.subscriptions.purchaseDate"
      }, {"function": "__c", "vtp_value": "96"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscriptions.activeBundles.0"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 238],
        "vtp_name": "user.subscriptions.bundle"
      }, {"function": "__c", "vtp_value": "97"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.bundeFilter"
      }, {"function": "__c", "vtp_value": "98"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.payflowType"
      }, {"function": "__c", "vtp_value": "99"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "market.firstSubLanding"
      }, {"function": "__c", "vtp_value": "100"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.IntGraphics"
      }, {"function": "__c", "vtp_value": "101"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.multiLingual"
      }, {"function": "__c", "vtp_value": "102"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.save_type"
      }, {"function": "__c", "vtp_value": "104"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.well.guideTitle"
      }, {"function": "__c", "vtp_value": "105"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.well.cardPosition"
      }, {"function": "__c", "vtp_value": "109"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.realEstateChannel"
      }, {"function": "__c", "vtp_value": "110"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.realEstatePageType"
      }, {"function": "__c", "vtp_value": "111"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.realEstateModuleID"
      }, {"function": "__c", "vtp_value": "112"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.realEstateModuleType"
      }, {"function": "__c", "vtp_value": "113"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.realEstateModuleItemID"
      }, {"function": "__c", "vtp_value": "114"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.payflowsProduct"
      }, {"function": "__c", "vtp_value": "116"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "payflows.region"
      }, {"function": "__c", "vtp_value": "117"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "payflows.rate"
      }, {"function": "__c", "vtp_value": "118"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.story_form"
      }, {"function": "__c", "vtp_value": "119"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.spotlights"
      }, {"function": "__c", "vtp_value": "120"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.krux_segment"
      }, {"function": "__c", "vtp_value": "121"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.print_section"
      }, {"function": "__c", "vtp_value": "122"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.referrer"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 281],
        "vtp_name": "video.referrer"
      }, {"function": "__c", "vtp_value": "123"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.contentId"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 284],
        "vtp_name": "video.contentId"
      }, {"function": "__c", "vtp_value": "124"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoAdDuration"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 287],
        "vtp_name": "video.mData.videoAdDuration"
      }, {"function": "__c", "vtp_value": "125"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoAdPosition"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 290],
        "vtp_name": "video.mData.videoAdPosition"
      }, {"function": "__c", "vtp_value": "126"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoDuration"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 293],
        "vtp_name": "video.mData.videoDuration"
      }, {"function": "__c", "vtp_value": "127"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.durationGroup"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 296],
        "vtp_name": "video.durationGroup"
      }, {"function": "__c", "vtp_value": "128"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.https_test"
      }, {"function": "__c", "vtp_value": "129"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.tracking.sessionStart"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=new Date(", ["escape", ["macro", 301], 8, 16], ");return a=a.getHours()})();"]
      }, {"function": "__c", "vtp_value": "130"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.www_testID"
      }, {"function": "__c", "vtp_value": "131"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.mobileweb_testID"
      }, {"function": "__c", "vtp_value": "132"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.qa_dimension_three"
      }, {"function": "__c", "vtp_value": "133"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "do.we.need.this"
      }, {"function": "__c", "vtp_value": "134"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.qa_dimension_four"
      }, {"function": "__c", "vtp_value": "135"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "asset.column"
      }, {"function": "__c", "vtp_value": "136"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.optimizely"
      }, {"function": "__c", "vtp_value": "137"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.optimizely"
      }, {"function": "__c", "vtp_value": "138"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "media.mData.videoFranchise"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 320],
        "vtp_name": "video.mData.videoFranchise"
      }, {"function": "__c", "vtp_value": "139"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoSection"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 323],
        "vtp_name": "video.mData.videoSection"
      }, {"function": "__c", "vtp_value": "140"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.adblock_enabled"
      }, {"function": "__c", "vtp_value": "141"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoPrimaryPlaylistId"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 328],
        "vtp_name": "video.mData.videoPrimaryPlaylistId"
      }, {"function": "__c", "vtp_value": "142"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoPrimaryPlaylistName"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 331],
        "vtp_name": "video.mData.videoPrimaryPlaylistName"
      }, {"function": "__c", "vtp_value": "143"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.real_estate.listing.id"
      }, {"function": "__c", "vtp_value": "144"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.real_estate.listing.price"
      }, {"function": "__c", "vtp_value": "145"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.real_estate.buildingID"
      }, {"function": "__c", "vtp_value": "146"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.real_estate.new"
      }, {"function": "__c", "vtp_value": "147"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.real_estate.reduced"
      }, {"function": "__c", "vtp_value": "148"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.real_estate.open_house"
      }, {"function": "__c", "vtp_value": "149"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "newsletter.interface"
      }, {"function": "__c", "vtp_value": "150"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "newsletter.subinterface"
      }, {"function": "__c", "vtp_value": "154"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.campaignID_ecommerce"
      }, {"function": "__c", "vtp_value": "160"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.url_path_filter"
      }, {"function": "__c", "vtp_value": "162"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.url"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 354],
        "vtp_name": "video.url"
      }, {"function": "__c", "vtp_value": "163"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoType"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 357],
        "vtp_name": "video.mData.videoType"
      }, {"function": "__c", "vtp_value": "164"}, {"function": "__c", "vtp_value": ["macro", 173]}, {
        "function": "__c",
        "vtp_value": "166"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.missing_paper.eligibility"
      }, {"function": "__c", "vtp_value": "167"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.missing_paper.resolution_type"
      }, {"function": "__c", "vtp_value": "168"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.missing_paper.redelivery_request"
      }, {"function": "__c", "vtp_value": "169"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.missing_paper.user_state"
      }, {"function": "__c", "vtp_value": "172"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.program.breakpoint.initial"
      }, {"function": "__c", "vtp_value": "173"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 370],
        "vtp_name": "presentation.program.breakpoint.rendered"
      }, {"function": "__c", "vtp_value": "179"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.contentId"
      }, {"function": "__c", "vtp_value": "180"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoName"
      }, {"function": "__c", "vtp_value": "181"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoType"
      }, {"function": "__c", "vtp_value": "182"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.section"
      }, {"function": "__c", "vtp_value": "183"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.subSection"
      }, {"function": "__c", "vtp_value": "184"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.duration"
      }, {"function": "__c", "vtp_value": "185"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.durationGroup"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){notprod=!document.location.hostname.match(\/nytimes\\.com\/)||!!document.location.hostname.match(\/test\\.|dev\\.|stg\\.\/);switch(", ["escape", ["macro", 21], 8, 16], "){case \"nyt-help\":return\"UA-58630905-28\";default:return notprod?\"UA-58630905-7\":\"UA-58630905-2\"}})();"]
      }, {
        "function": "__gas",
        "vtp_cookieDomain": "auto",
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_useDebugVersion": false,
        "vtp_fieldsToSet": ["list", ["map", "fieldName", "cookieName", "value", "walley"], ["map", "fieldName", "location", "value", ["macro", 23]], ["map", "fieldName", "campaignSource", "value", ["macro", 24]], ["map", "fieldName", "campaignMedium", "value", ["macro", 25]], ["map", "fieldName", "campaignName", "value", ["macro", 26]], ["map", "fieldName", "campaignContent", "value", ["macro", 27]], ["map", "fieldName", "campaignKeyword", "value", ["macro", 28]], ["map", "fieldName", "referrer", "value", ["macro", 31]], ["map", "fieldName", "anonymizeIp", "value", "true"]],
        "vtp_useHashAutoLink": false,
        "vtp_contentGroup": ["list", ["map", "index", ["macro", 32], "group", ["macro", 33]], ["map", "index", ["macro", 34], "group", ["macro", 35]], ["map", "index", ["macro", 36], "group", ["macro", 37]], ["map", "index", ["macro", 38], "group", ["macro", 39]]],
        "vtp_decorateFormsAutoLink": false,
        "vtp_enableLinkId": false,
        "vtp_dimension": ["list", ["map", "index", ["macro", 40], "dimension", ["macro", 41]], ["map", "index", ["macro", 42], "dimension", ["macro", 44]], ["map", "index", ["macro", 45], "dimension", ["macro", 46]], ["map", "index", ["macro", 47], "dimension", ["macro", 48]], ["map", "index", ["macro", 49], "dimension", ["macro", 50]], ["map", "index", ["macro", 51], "dimension", ["macro", 52]], ["map", "index", ["macro", 53], "dimension", ["macro", 54]], ["map", "index", ["macro", 55], "dimension", ["macro", 56]], ["map", "index", ["macro", 57], "dimension", ["macro", 57]], ["map", "index", ["macro", 58], "dimension", ["macro", 59]], ["map", "index", ["macro", 60], "dimension", ["macro", 61]], ["map", "index", ["macro", 62], "dimension", ["macro", 63]], ["map", "index", ["macro", 64], "dimension", ["macro", 65]], ["map", "index", ["macro", 66], "dimension", ["macro", 68]], ["map", "index", ["macro", 69], "dimension", ["macro", 70]], ["map", "index", ["macro", 71], "dimension", ["macro", 72]], ["map", "index", ["macro", 73], "dimension", ["macro", 74]], ["map", "index", ["macro", 75], "dimension", ["macro", 76]], ["map", "index", ["macro", 77], "dimension", ["macro", 78]], ["map", "index", ["macro", 79], "dimension", ["macro", 80]], ["map", "index", ["macro", 81], "dimension", ["macro", 82]], ["map", "index", ["macro", 83], "dimension", ["macro", 84]], ["map", "index", ["macro", 85], "dimension", ["macro", 86]], ["map", "index", ["macro", 87], "dimension", ["macro", 88]], ["map", "index", ["macro", 89], "dimension", ["macro", 90]], ["map", "index", ["macro", 91], "dimension", ["macro", 93]], ["map", "index", ["macro", 94], "dimension", ["macro", 95]], ["map", "index", ["macro", 96], "dimension", ["macro", 97]], ["map", "index", ["macro", 98], "dimension", ["macro", 99]], ["map", "index", ["macro", 100], "dimension", ["macro", 101]], ["map", "index", ["macro", 102], "dimension", ["macro", 103]], ["map", "index", ["macro", 104], "dimension", ["macro", 105]], ["map", "index", ["macro", 106], "dimension", ["macro", 107]], ["map", "index", ["macro", 108], "dimension", ["macro", 109]], ["map", "index", ["macro", 110], "dimension", ["macro", 111]], ["map", "index", ["macro", 112], "dimension", ["macro", 113]], ["map", "index", ["macro", 114], "dimension", ["macro", 115]], ["map", "index", ["macro", 116], "dimension", ["macro", 117]], ["map", "index", ["macro", 118], "dimension", ["macro", 119]], ["map", "index", ["macro", 120], "dimension", ["macro", 121]], ["map", "index", ["macro", 122], "dimension", ["macro", 123]], ["map", "index", ["macro", 124], "dimension", ["macro", 125]], ["map", "index", ["macro", 126], "dimension", ["macro", 127]], ["map", "index", ["macro", 128], "dimension", ["macro", 129]], ["map", "index", ["macro", 130], "dimension", ["macro", 131]], ["map", "index", ["macro", 132], "dimension", ["macro", 133]], ["map", "index", ["macro", 134], "dimension", ["macro", 135]], ["map", "index", ["macro", 136], "dimension", ["macro", 137]], ["map", "index", ["macro", 138], "dimension", ["macro", 140]], ["map", "index", ["macro", 141], "dimension", ["macro", 142]], ["map", "index", ["macro", 143], "dimension", ["macro", 144]], ["map", "index", ["macro", 145], "dimension", ["macro", 146]], ["map", "index", ["macro", 147], "dimension", ["macro", 148]], ["map", "index", ["macro", 149], "dimension", ["macro", 150]], ["map", "index", ["macro", 151], "dimension", ["macro", 152]], ["map", "index", ["macro", 153], "dimension", ["macro", 154]], ["map", "index", ["macro", 155], "dimension", ["macro", 157]], ["map", "index", ["macro", 158], "dimension", ["macro", 160]], ["map", "index", ["macro", 161], "dimension", ["macro", 162]], ["map", "index", ["macro", 163], "dimension", ["macro", 164]], ["map", "index", ["macro", 165], "dimension", ["macro", 169]], ["map", "index", ["macro", 170], "dimension", ["macro", 171]], ["map", "index", ["macro", 172], "dimension", ["macro", 174]], ["map", "index", ["macro", 175], "dimension", ["macro", 176]], ["map", "index", ["macro", 177], "dimension", ["macro", 178]], ["map", "index", ["macro", 179], "dimension", ["macro", 180]], ["map", "index", ["macro", 181], "dimension", ["macro", 182]], ["map", "index", ["macro", 183], "dimension", ["macro", 184]], ["map", "index", ["macro", 185], "dimension", ["macro", 186]], ["map", "index", ["macro", 187], "dimension", ["macro", 188]], ["map", "index", ["macro", 189], "dimension", ["macro", 190]], ["map", "index", ["macro", 191], "dimension", ["macro", 192]], ["map", "index", ["macro", 193], "dimension", ["macro", 194]], ["map", "index", ["macro", 195], "dimension", ["macro", 196]], ["map", "index", ["macro", 197], "dimension", ["macro", 198]], ["map", "index", ["macro", 199], "dimension", ["macro", 200]], ["map", "index", ["macro", 201], "dimension", ["macro", 202]], ["map", "index", ["macro", 203], "dimension", ["macro", 204]], ["map", "index", ["macro", 205], "dimension", ["macro", 206]], ["map", "index", ["macro", 207], "dimension", ["macro", 208]], ["map", "index", ["macro", 209], "dimension", ["macro", 213]], ["map", "index", ["macro", 214], "dimension", ["macro", 215]], ["map", "index", ["macro", 216], "dimension", ["macro", 217]], ["map", "index", ["macro", 218], "dimension", ["macro", 219]], ["map", "index", ["macro", 220], "dimension", ["macro", 221]], ["map", "index", ["macro", 222], "dimension", ["macro", 223]], ["map", "index", ["macro", 224], "dimension", ["macro", 225]], ["map", "index", ["macro", 226], "dimension", ["macro", 227]], ["map", "index", ["macro", 228], "dimension", ["macro", 229]], ["map", "index", ["macro", 230], "dimension", ["macro", 231]], ["map", "index", ["macro", 232], "dimension", ["macro", 236]], ["map", "index", ["macro", 237], "dimension", ["macro", 239]], ["map", "index", ["macro", 240], "dimension", ["macro", 241]], ["map", "index", ["macro", 242], "dimension", ["macro", 243]], ["map", "index", ["macro", 244], "dimension", ["macro", 245]], ["map", "index", ["macro", 246], "dimension", ["macro", 247]], ["map", "index", ["macro", 248], "dimension", ["macro", 249]], ["map", "index", ["macro", 250], "dimension", ["macro", 251]], ["map", "index", ["macro", 252], "dimension", ["macro", 253]], ["map", "index", ["macro", 254], "dimension", ["macro", 255]], ["map", "index", ["macro", 256], "dimension", ["macro", 257]], ["map", "index", ["macro", 258], "dimension", ["macro", 259]], ["map", "index", ["macro", 260], "dimension", ["macro", 261]], ["map", "index", ["macro", 262], "dimension", ["macro", 263]], ["map", "index", ["macro", 264], "dimension", ["macro", 265]], ["map", "index", ["macro", 266], "dimension", ["macro", 267]], ["map", "index", ["macro", 268], "dimension", ["macro", 269]], ["map", "index", ["macro", 270], "dimension", ["macro", 271]], ["map", "index", ["macro", 272], "dimension", ["macro", 273]], ["map", "index", ["macro", 274], "dimension", ["macro", 275]], ["map", "index", ["macro", 276], "dimension", ["macro", 277]], ["map", "index", ["macro", 278], "dimension", ["macro", 279]], ["map", "index", ["macro", 280], "dimension", ["macro", 282]], ["map", "index", ["macro", 283], "dimension", ["macro", 285]], ["map", "index", ["macro", 286], "dimension", ["macro", 288]], ["map", "index", ["macro", 289], "dimension", ["macro", 291]], ["map", "index", ["macro", 292], "dimension", ["macro", 294]], ["map", "index", ["macro", 295], "dimension", ["macro", 297]], ["map", "index", ["macro", 298], "dimension", ["macro", 299]], ["map", "index", ["macro", 300], "dimension", ["macro", 302]], ["map", "index", ["macro", 303], "dimension", ["macro", 304]], ["map", "index", ["macro", 305], "dimension", ["macro", 306]], ["map", "index", ["macro", 307], "dimension", ["macro", 308]], ["map", "index", ["macro", 309], "dimension", ["macro", 310]], ["map", "index", ["macro", 311], "dimension", ["macro", 312]], ["map", "index", ["macro", 313], "dimension", ["macro", 314]], ["map", "index", ["macro", 315], "dimension", ["macro", 316]], ["map", "index", ["macro", 317], "dimension", ["macro", 318]], ["map", "index", ["macro", 319], "dimension", ["macro", 321]], ["map", "index", ["macro", 322], "dimension", ["macro", 324]], ["map", "index", ["macro", 325], "dimension", ["macro", 326]], ["map", "index", ["macro", 327], "dimension", ["macro", 329]], ["map", "index", ["macro", 330], "dimension", ["macro", 332]], ["map", "index", ["macro", 333], "dimension", ["macro", 334]], ["map", "index", ["macro", 335], "dimension", ["macro", 336]], ["map", "index", ["macro", 337], "dimension", ["macro", 338]], ["map", "index", ["macro", 339], "dimension", ["macro", 340]], ["map", "index", ["macro", 341], "dimension", ["macro", 342]], ["map", "index", ["macro", 343], "dimension", ["macro", 344]], ["map", "index", ["macro", 345], "dimension", ["macro", 346]], ["map", "index", ["macro", 347], "dimension", ["macro", 348]], ["map", "index", ["macro", 349], "dimension", ["macro", 350]], ["map", "index", ["macro", 351], "dimension", ["macro", 352]], ["map", "index", ["macro", 353], "dimension", ["macro", 355]], ["map", "index", ["macro", 356], "dimension", ["macro", 358]], ["map", "index", ["macro", 359], "dimension", ["macro", 360]], ["map", "index", ["macro", 361], "dimension", ["macro", 362]], ["map", "index", ["macro", 363], "dimension", ["macro", 364]], ["map", "index", ["macro", 365], "dimension", ["macro", 366]], ["map", "index", ["macro", 367], "dimension", ["macro", 368]], ["map", "index", ["macro", 369], "dimension", ["macro", 370]], ["map", "index", ["macro", 371], "dimension", ["macro", 372]], ["map", "index", ["macro", 373], "dimension", ["macro", 374]], ["map", "index", ["macro", 375], "dimension", ["macro", 376]], ["map", "index", ["macro", 377], "dimension", ["macro", 378]], ["map", "index", ["macro", 379], "dimension", ["macro", 380]], ["map", "index", ["macro", 381], "dimension", ["macro", 382]], ["map", "index", ["macro", 383], "dimension", ["macro", 384]], ["map", "index", ["macro", 385], "dimension", ["macro", 386]]],
        "vtp_enableEcommerce": false,
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableGA4Schema": false
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "module.ga.eventAction"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "interaction.module.element.name"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.element.name"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].action\u0026\u0026window.nytAnalytics.gaEvent[a].action()||", ["escape", ["macro", 389], 8, 16], "||", ["escape", ["macro", 390], 8, 16], "||", ["escape", ["macro", 391], 8, 16], "})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.ga.eventLabel"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "interaction.region"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.element.label"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.label"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].label\u0026\u0026window.nytAnalytics.gaEvent[a].label()||", ["escape", ["macro", 393], 8, 16], "||", ["escape", ["macro", 394], 8, 16], "||", ["escape", ["macro", 395], 8, 16], "||", ["escape", ["macro", 396], 8, 16], "})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.ga.eventValue"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 15], 8, 16], "||", ["escape", ["macro", 11], 8, 16], ";return\"object\"===typeof window.nytAnalytics.gaEvent\u0026\u0026\"object\"===typeof window.nytAnalytics.gaEvent[a]\u0026\u0026\"function\"===typeof window.nytAnalytics.gaEvent[a].value\u0026\u0026window.nytAnalytics.gaEvent[a].value()||", ["escape", ["macro", 398], 8, 16], "})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var c=", ["escape", ["macro", 395], 8, 16], ",a=", ["escape", ["macro", 391], 8, 16], ",b=", ["escape", ["macro", 11], 8, 16], ";if(\"share-tools\"===b\u0026\u0026a){if(-1\u003Ca.indexOf(\"facebook\"))return 14;if(-1\u003Ca.indexOf(\"twitter\"))return 15;if(-1\u003Ca.indexOf(\"email\"))return 16;if(-1\u003Ca.indexOf(\"pinterest\"))return 17;if(-1\u003Ca.indexOf(\"linkedin\"))return 18;if(-1\u003Ca.indexOf(\"google\"))return 19;if(-1\u003Ca.indexOf(\"reddit\"))return 20;if(-1\u003Ca.indexOf(\"whatsapp\"))return 21;if(-1\u003Ca.indexOf(\"save\"))return 22;if(-1\u003Ca.indexOf(\"permalink\"))return 23}if(\"newsletters\"===\nb\u0026\u0026\"subscribe\"===a)return-1\u003Cc.indexOf(\"opt in\")?10:6;if(\"comments\"===b){if(\"submit-new\"===a)return 11;if(\"submit-reply\"===a)return 33}return\"\"})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return 1})();"]
      }, {"function": "__e"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.eventName"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 403],
        "vtp_name": "video.eventName"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoNonInteractions=window.nytAnalytics.videoNonInteractions||{\"cherry-api-request-error\":!0,\"fw-admanager-load-error\":!0,\"qos-library-load-failure\":!0,\"rendition-not-found\":!0,\"player-load\":!0,\"video-inview\":!0,\"imax-countdown-pause\":!0,\"imax-countdown-complete\":!0};return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 403], 8, 16], "]||!1:window.nytAnalytics.videoNonInteractions[", ["escape", ["macro", 404], 8, 16], "]||\n!1})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.mData.videoDeliveryMethod"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "media.version"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoDeliveryMethod"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 407],
        "vtp_name": "video.version"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?(\"live\"===", ["escape", ["macro", 406], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 407], 8, 16], ":(\"live\"===", ["escape", ["macro", 408], 8, 16], "?\"Live | \":\"Video | \")+", ["escape", ["macro", 409], 8, 16], "})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoActions=window.nytAnalytics.videoActions||{\"ad-complete\":\"ad complete\",\"ad-pause\":\"ad pause\",\"ad-resume\":\"ad resume\",\"ad-start\":\"ad start\",\"exit-fullscreen\":\"exit fullscreen\",\"go-fullscreen\":\"go fullscreen\",\"hd-off\":\"hd off\",\"hd-on\":\"hd on\",pause:\"pause\",resume:\"resume\",\"skip-ad\":\"ad skip\",\"video-load\":\"video load\",\"video-inview\":\"video inview\",\"auto-play-next\":\"autoplay next\",\"auto-play-start\":\"autoplay start\",\"percent-25-viewed\":\"viewed: 25%\",\n\"percent-50-viewed\":\"viewed: 50%\",\"percent-75-viewed\":\"viewed: 75%\",\"3-seconds-viewed\":\"3-seconds-viewed\",\"30-seconds-viewed\":\"30-seconds-viewed\",\"360-drag-start\":\"360-drag-start\",\"360-drag-stop\":\"360-drag-stop\",\"360-compass-click\":\"360-compass-click\",\"share-embed\":\"share: embed\",\"share-facebook\":\"share: facebook\",\"share-twitter\":\"share: twitter\",seek:\"seek\",\"user-play\":\"user play\",\"video-complete\":\"viewed:100%\",\"media-error\":\"media-error\",\"cherry-api-request-error\":\"cherry-api-request-error\",\"fw-admanager-load-error\":\"fw-admanager-load-error\",\n\"qos-library-load-failure\":\"qos-library-load-failure\",\"rendition-not-found\":\"rendition-not-found\",\"player-load\":\"player load\",\"imax-countdown-pause\":\"imax-countdown-pause\",\"imax-countdown-complete\":\"imax-countdown-complete\"};return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?window.nytAnalytics.videoActions[", ["escape", ["macro", 403], 8, 16], "]||", ["escape", ["macro", 403], 8, 16], ":window.nytAnalytics.videoActions[", ["escape", ["macro", 404], 8, 16], "]||", ["escape", ["macro", 404], 8, 16], "})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "media.mData.videoName"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 412],
        "vtp_name": "video.mData.videoName"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"mediaEvent\"===", ["escape", ["macro", 402], 8, 16], "?decodeURIComponent(", ["escape", ["macro", 412], 8, 16], "):decodeURIComponent(", ["escape", ["macro", 413], 8, 16], ")})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){window.nytAnalytics=window.nytAnalytics||{};window.nytAnalytics.videoCustomMetrics=window.nytAnalytics.videoCustomMetrics||{\"auto-play-next\":32,\"auto-play-start\":31,\"percent-25-viewed\":24,\"percent-50-viewed\":25,\"percent-75-viewed\":26,\"3-seconds-viewed\":42,\"30-seconds-viewed\":43,\"360-drag-start\":58,\"360-drag-stop\":59,\"360-compass-click\":60,\"share-embed\":4,\"share-facebook\":4,\"share-twitter\":4,\"user-play\":1,\"video-complete\":3,\"user-play-audio\":34,\"percent-25-heard\":35,\"percent-50-heard\":36,\n\"percent-75-heard\":37,\"audio-complete\":38,\"audio-inview\":63};return window.nytAnalytics.videoCustomMetrics[", ["escape", ["macro", 404], 8, 16], "]||\"\"})();"]
      }, {"function": "__r"}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "eventData.gaAction"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\/OS 10_3_3.*CriOS\\\/[\\d\\.]+ Mobile\/.test(navigator.userAgent)?1:0})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=navigator.userAgent;if(!\/.*(iphone|ipad|ipod|silk).*$\/i.test(a)\u0026\u0026(a=\/Mac OS X (\\d+)[_\\.](\\d+)([_\\.](\\d+))?\/.exec(a))\u0026\u00265\u003C=a.length){var b=parseInt(a[1],10);return 10\u003Eb||10===b\u0026\u00269\u003E=parseInt(a[2],10)?1:0}return 0})();"]
      }, {
        "function": "__u",
        "vtp_component": "URL",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "eventData.hit.hitType"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.eventValue"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.eventCategory"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.metric0Key"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.metric1Key"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.metric2Key"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.eventAction"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.hit.eventLabel"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "eventData.hit.dimension0Key"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "1",
        "vtp_name": "eventData.hit.dimension0Value"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "eventData.hit.dimension1Key"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "1",
        "vtp_name": "eventData.hit.dimension1Value"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "eventData.hit.dimension2Key"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "1",
        "vtp_name": "eventData.hit.dimension2Value"
      }, {
        "function": "__u",
        "vtp_component": "QUERY",
        "vtp_queryKey": "register",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {"function": "__t"}, {"function": "__c", "vtp_value": "nzcub"}, {
        "function": "__remm",
        "vtp_setDefaultValue": true,
        "vtp_input": ["macro", 11],
        "vtp_fullMatch": true,
        "vtp_replaceAfterMatch": true,
        "vtp_defaultValue": ["macro", 12],
        "vtp_ignoreCase": true,
        "vtp_map": ["list", ["map", "key", "dock", "value", ["macro", 13]], ["map", "key", "gateway", "value", ["macro", 13]]]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "media.state"
      }, {"function": "__aev", "vtp_varType": "TEXT"}, {
        "function": "__v",
        "vtp_name": "gtm.triggers",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ""
      }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!0})();"]}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 173],
        "vtp_name": "session.etAgentId"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.propensity.engagementLevel"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.tracking.adv"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.id"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.propensity.p"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.propensity.c1"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.propensity.c2"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.propensity.c3"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.watSegs"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "DL.user.retentionSegment"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "DL.user.subscriberInfo.coreDigiBundle"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "DL.user.subscriberInfo.coreHDBundle"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "gtm.newUrlFragment"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "gtm.oldUrlFragment"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "0",
        "vtp_name": "user.id"
      }, {"function": "__cid"}, {"function": "__ctv"}, {
        "function": "__c",
        "vtp_value": "Production"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"", ["escape", ["macro", 458], 7], "-", ["escape", ["macro", 459], 7], "-", ["escape", ["macro", 460], 7], "\"})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "eventData.trigger"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.type"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "interaction.module.context"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "interaction.module.element.label"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.label"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.slug"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "interaction.module.progress"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "newsletter"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "module"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "interaction.module"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "eventData"
      }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return{}})();"]}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "viewport"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "pageview.performance"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "presentation"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "5000",
        "vtp_name": "pageview.heartbeat.heartbeatInterval"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return navigator.userAgent.match(\/Googlebot|Googlebot-Mobile|Googlebot-Image|Googlebot-News|Googlebot-Video\/i)?1:0})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.progress.timeInGame"
      }, {
        "function": "__u",
        "vtp_stripWww": false,
        "vtp_component": "HOST",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.sectionContent"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.subsection"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.headline"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.authors"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.section"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.desFacets"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "asset.geofacets"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 487],
        "vtp_name": "asset.geoFacets"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.orgFacets"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.perFacets"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.nytdOtherData"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "session.isLoggedIn"
      }, {"function": "__k", "vtp_decodeCookie": true, "vtp_name": "b2b_cig_opt"}, {
        "function": "__k",
        "vtp_decodeCookie": true,
        "vtp_name": "edu_cig_opt"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "asset.column"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.collectionName"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.type"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.emotions"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.actioniq.audience_split_ids"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return 1;if(", ["escape", ["macro", 11], 8, 16], "||", ["escape", ["macro", 462], 8, 16], "===\"module\")return 1;if(", ["escape", ["macro", 480], 8, 16], ".indexOf(\"alpha\")\u003E-1)return 1;return 0})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "card"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "block"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "pageview.ad"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 504],
        "vtp_name": "ad"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "integration"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "container"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "package"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "item"
      }, {
        "function": "__smm",
        "vtp_setDefaultValue": true,
        "vtp_input": ["macro", 11],
        "vtp_defaultValue": ["macro", 12],
        "vtp_map": ["list", ["map", "key", "gateway", "value", ["macro", 13]], ["map", "key", "article_complete", "value", ["macro", 13]], ["map", "key", "mini-modal", "value", ["macro", 13]], ["map", "key", "game-modal", "value", ["macro", 13]], ["map", "key", "regiwall", "value", ["macro", 13]], ["map", "key", "bar1", "value", ["macro", 13]], ["map", "key", "growl", "value", ["macro", 13]], ["map", "key", "meter", "value", ["macro", 13]]]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "impression_id"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "media"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 512],
        "vtp_name": "video"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "abtest.test"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "abtest.variant"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "slideshow"
      }, {
        "function": "__remm",
        "vtp_setDefaultValue": true,
        "vtp_input": ["macro", 460],
        "vtp_fullMatch": true,
        "vtp_replaceAfterMatch": true,
        "vtp_defaultValue": "https:\/\/a.et.stg.nytimes.com",
        "vtp_ignoreCase": true,
        "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/a.et.nytimes.com"]]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 21], 8, 16], "||(document.querySelector(\"meta[name\\x3dsourceApp]\")||{}).content;a||(a=\/parenting\\.\/.test(document.location.host)?\"nyt-parenting\":\/^\\\/puzzles\\\/?|^\\\/crosswords\\\/?\/.test(document.location.pathname)?\"games-crosswords\":\/dg-cookie-policy\/.test(document.location.pathname)||\/help.nytimes.com\/.test(document.location.host)?\"help\":\"nyt-vi\");return a})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "abtest"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "asset"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "session"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 473],
        "vtp_name": "user"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "version"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return{asset:", ["escape", ["macro", 520], 8, 16], ",session:", ["escape", ["macro", 521], 8, 16], ",user:", ["escape", ["macro", 522], 8, 16], ",version:", ["escape", ["macro", 523], 8, 16], "}})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "application.releaseVersion"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "allocs"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 526],
        "vtp_name": "abtest.batch"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return nyt_et.get_pageview_id()})();"]
      }, {
        "function": "__smm",
        "vtp_setDefaultValue": true,
        "vtp_input": ["macro", 460],
        "vtp_defaultValue": "https:\/\/et.stg.nytimes.com\/",
        "vtp_map": ["list", ["map", "key", "Production", "value", "https:\/\/et.nytimes.com\/"]]
      }, {"function": "__v", "vtp_name": "gtm.elementUrl", "vtp_dataLayerVersion": 1}, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return\"object\"===typeof window.navigator\u0026\u0026\"string\"===typeof window.navigator.userAgent\u0026\u0026\/iP(ad|hone|od)\/.test(window.navigator.userAgent)?1:0})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "payload"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo.b2bSubscription"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo.childSubscription"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo.condensedBundleCodes"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo.gatewayHitLM"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo.verizonSchool"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriberInfo.giftSubscriptionRecipient"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscriberInfo.newsletterList"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.tracking.a14dv"
      }, {"function": "__v", "vtp_name": "gtm.element", "vtp_dataLayerVersion": 1}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.subscriberInfo.condensedBundleCodes"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.offers.0.id"
      }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return[]})();"]}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 544],
        "vtp_name": "capture.others"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "referrer.url"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "application.environment"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.characterCount"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.collectionType"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.contentTone"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.desk"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.edition"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.kicker"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.lastUpdatedTimestamp"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.originatingDesk"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.printPublishDate"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.series"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.sourceNewsOrg"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.sourceUSvsIntl"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.geoFacets"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "asset.typeOfMaterials"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.channel"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.collection"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.module.region"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.pagetype"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.source"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "interaction.subchannel"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "marketing.paidPostParameter"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "presentation.pageSubType"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.DMA"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.isLoggedIn"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 284],
        "vtp_name": "video.contentId"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 296],
        "vtp_name": "video.durationGroup"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 287],
        "vtp_name": "video.mData.videoAdDuration"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoAdPosition"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoDuration"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoFranchise"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoPrimaryPlaylistId"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoPrimaryPlaylistName"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoSection"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.mData.videoType"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.referrer"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "video.url"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return ", ["escape", ["macro", 18], 8, 16], "||document.location.protocol+\"\/\/\"+document.location.host+document.location.pathname})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "pageview.id"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 585],
        "vtp_name": "interaction.dfp_page_view_id"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "error.type"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "error.errors"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){var a=", ["escape", ["macro", 588], 8, 16], "||{};return JSON.stringify(a).substr(0,128)})();"]
      }, {"function": "__c", "vtp_value": "70"}, {"function": "__c", "vtp_value": "71"}, {
        "function": "__c",
        "vtp_value": "77"
      }, {"function": "__c", "vtp_value": "78"}, {"function": "__c", "vtp_value": "103"}, {
        "function": "__c",
        "vtp_value": "106"
      }, {"function": "__c", "vtp_value": "107"}, {"function": "__c", "vtp_value": "108"}, {
        "function": "__c",
        "vtp_value": "115"
      }, {"function": "__c", "vtp_value": "151"}, {"function": "__c", "vtp_value": "152"}, {
        "function": "__c",
        "vtp_value": "153"
      }, {"function": "__c", "vtp_value": "155"}, {"function": "__c", "vtp_value": "156"}, {
        "function": "__c",
        "vtp_value": "157"
      }, {"function": "__c", "vtp_value": "158"}, {"function": "__c", "vtp_value": "159"}, {
        "function": "__c",
        "vtp_value": "160"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return Date.now()})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.tracking.pageIndex"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.tracking.avgSessionTime"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.tracking.sessionIndex"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.tracking.firstReferrer"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.tracking"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "card.id"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "eventData.type"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "pageview.heartbeat"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.tracking.activeDays"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriptions"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.nytdOtherData.subscriptions.0.bundle"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "1",
        "vtp_name": "eventData.hit.metric0Value"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "1",
        "vtp_name": "eventData.hit.metric2Value"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "eventData.hit.customMetrics"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "eventData.hit.customMetric"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "1",
        "vtp_name": "eventData.hit.metric1Value"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "module.region"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 420],
        "vtp_name": "abtest.url"
      }, {"function": "__c", "vtp_value": "nzcu0"}, {
        "function": "__d",
        "vtp_elementSelector": "html",
        "vtp_attributeName": "data-nyt-ab",
        "vtp_selectorType": "CSS"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 420], 8, 16], ")})();"]
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return encodeURIComponent(", ["escape", ["macro", 29], 8, 16], ")})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "presentation.program.breakpoint.initial"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": ["macro", 631],
        "vtp_name": "presentation.program.breakpoint.rendered"
      }, {
        "function": "__jsm",
        "vtp_javascript": ["template", "(function(){return!!(window\u0026\u0026window.NYTD\u0026\u0026window.NYTD.Abra)})();"]
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "user.subscriptions.subscriberType"
      }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!1})();"]}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": false,
        "vtp_name": "user.actioniq"
      }, {"function": "__jsm", "vtp_javascript": ["template", "(function(){return!1})();"]}, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "c1_val"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "c2_val"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "c3_val"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "c4_val"
      }, {
        "function": "__v",
        "vtp_dataLayerVersion": 2,
        "vtp_setDefaultValue": true,
        "vtp_defaultValue": "",
        "vtp_name": "c5_val"
      }, {
        "function": "__u",
        "vtp_component": "QUERY",
        "vtp_queryKey": "referrer",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {
        "function": "__u",
        "vtp_component": "HOST",
        "vtp_enableMultiQueryKeys": false,
        "vtp_enableIgnoreEmptyQueryParam": false
      }, {"function": "__r"}, {"function": "__hid"}],
      "tags": [{
        "function": "__html",
        "priority": 2000,
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": ["template", "<div>Hello world</div>"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 18
      }, {
        "function": "__html",
        "priority": 1000,
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E!function(d,G){function y(){var f,a;if(a=d.crypto||d.msCrypto)a=a.getRandomValues(new Uint8Array(18));else for(a=[];18\u003Ea.length;)a.push(256*Math.random()^255\u0026(f=f||+new Date)),f=Math.floor(f\/256);return btoa(String.fromCharCode.apply(String,a)).replace(\/\\+\/g,\"-\").replace(\/\\\/\/g,\"_\")}var p,q,k,C,r,l,t=[],h={pv_id:\"\",ctx_id:\"\",intra:!1,force_xhr:!1,store_last_response:!1},D=\"object\"==typeof d.navigator\u0026\u0026\"string\"==typeof d.navigator.userAgent\u0026\u0026\/iP(ad|hone|od)\/.test(d.navigator.userAgent),z=\"object\"==\ntypeof d.navigator\u0026\u0026d.navigator.sendBeacon,E=z?D?\"xhr_ios\":\"beacon\":\"xhr\";if(d.nyt_et)try{console.warn(\"et2 snippet should only load once per page\")}catch(f){}else d.nyt_et=function(){function f(u){t.length\u0026\u0026(function(b,g,v,w,m){if(!w\u0026\u0026(\"beacon\"===E||z\u0026\u0026v))return b=d.navigator.sendBeacon(b,g),m\u0026\u0026(l=b);var e=\"undefined\"!=typeof XMLHttpRequest?new XMLHttpRequest:new ActiveXObject(\"Microsoft.XMLHTTP\");e.open(\"POST\",b);e.withCredentials=!0;e.setRequestHeader(\"Accept\",\"*\/*\");\"string\"==typeof g?e.setRequestHeader(\"Content-Type\",\n\"text\/plain;charset\\x3dUTF-8\"):\"[object Blob]\"==={}.toString.call(g)\u0026\u0026g.type\u0026\u0026e.setRequestHeader(\"Content-Type\",g.type);m\u0026\u0026!e.onload\u0026\u0026(e.onload=function(){l=e.response},e.onerror=function(F){l=!1});e.send(g)}(p+\"track\",JSON.stringify(t),u,h.force_xhr,h.store_last_response),t.length=0,clearTimeout(r),r=null)}var a,n,A,x,c=arguments;if(\"string\"==typeof c[0]\u0026\u0026\/init\/.test(c[0])\u0026\u0026(h=function(u,b){var g=\"\",v=\"\",w=!1,m=!1,e=!1;if(\"string\"==typeof u\u0026\u0026\"init\"==u\u0026\u0026\"object\"==typeof b\u0026\u0026(\"boolean\"==typeof b.intranet\u0026\u0026\nb.intranet\u0026\u0026(w=!0),\"boolean\"==typeof b.force_xhr\u0026\u0026b.force_xhr\u0026\u0026(m=!0),\"boolean\"==typeof b.store_last_response\u0026\u0026b.store_last_response\u0026\u0026(e=!0),\"string\"==typeof b.pv_id_override\u0026\u0026\"string\"==typeof b.ctx_id_override))if(24\u003C=b.pv_id_override.length\u0026\u002624\u003C=b.ctx_id_override.length)g=b.pv_id_override,v=b.ctx_id_override;else try{console.warn(\"override id(s) must be \\x3e\\x3d 24 chars long\")}catch(F){}return{pv_id:g,ctx_id:v,intra:w,store_last_response:e,force_xhr:m}}(c[0],c[3]),k=h.pv_id||y(),\"init\"==c[0]\u0026\u0026\n!q)){if(q=h.ctx_id||y(),\"string\"!=typeof c[1]||!\/^http\/.test(c[1]))throw Error(\"init must include an et host url\");if(p=String(c[1]).replace(\/([^\\\/])$\/,\"$1\/\"),\"string\"!=typeof c[2])throw Error(\"init must include a source app name\");C=c[2]}var B=c.length-1;c[B]\u0026\u0026\"object\"==typeof c[B]\u0026\u0026(a=c[B]);a||\/init\/.test(c[0])?a\u0026\u0026!a.subject\u0026\u0026console.warn(\"event data {} must include a subject\"):console.warn(\"when invoked without 'init' or 'pageinit', nyt_et() must include a event data\");p\u0026\u0026a\u0026\u0026a.subject\u0026\u0026(n=a.subject,\ndelete a.subject,x=\"page_exit\"==n||\"ob_click\"==(a.eventData||{}).type,A=\"page\"==n||\"page_soft\"==n?k:y(),t.push({context_id:q,pageview_id:k,event_id:A,client_lib:\"v1.2.0\",sourceApp:C,intranet:h.intra?1:void 0,subject:n,how:x\u0026\u0026D\u0026\u0026z?\"beacon_ios\":E,client_ts:+new Date,data:JSON.parse(JSON.stringify(a))}),\"send\"==c[0]||A==k||x?f(x):r||(r=setTimeout(f,5500)))},d.nyt_et.get_pageview_id=function(){return k},d.nyt_et.get_context_id=function(){return q},d.nyt_et.get_host=function(){return p},d.nyt_et.get_last_send_response=\nfunction(){var f=l;return f\u0026\u0026(l=null),f}}(window);\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()||nyt_et(\"init\",", ["escape", ["macro", 517], 8, 16], ",", ["escape", ["macro", 518], 8, 16], ",{subject:\"page\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),gtm:", ["escape", ["macro", 461], 8, 16], ",\nis_iframe:window.top!=window});nytAnalytics=window.nytAnalytics||{};nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 146
      }, {
        "function": "__html",
        "priority": 1000,
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){nytAnalytics=window.nytAnalytics||{};var a={subject:\"page_soft\",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,url:location.href,referrer:", ["escape", ["macro", 31], 8, 16], "||void 0,client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 518], 8, 16], ",\ngtm:", ["escape", ["macro", 461], 8, 16], ",is_iframe:window.top!=window};nytAnalytics.et2_pageview_id===nyt_et.get_pageview_id()?nyt_et(\"pageinit\",", ["escape", ["macro", 517], 8, 16], ",a):nyt_et(a);nytAnalytics.et2_pageview_id=nyt_et.get_pageview_id()}})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 157
      }, {
        "function": "__html",
        "priority": 1,
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){if(window.nyt_et){var a={};3\u003CparseInt(navigator.appVersion,10)\u0026\u0026(\"Microsoft Internet Explorer\"===navigator.appName\u0026\u0026document.body?a.size=document.body.offsetWidth+\"x\"+document.body.offsetHeight:\"Netscape\"===navigator.appName\u0026\u0026(a.size=window.innerWidth+\"x\"+window.innerHeight));var b=new Date;a.timeZone=b.getTimezoneOffset()\/60*-1;a.timeZoneHour=b.getHours();window.matchMedia\u0026\u0026(!0===window.matchMedia(\"(orientation: portrait)\").matches?a.orientation=\"port\":!0===window.matchMedia(\"(orientation: landscape)\").matches\u0026\u0026\n(a.orientation=\"land\"));a.language=\"Netscape\"===navigator.appName?navigator.language:navigator.userLanguage;b=\"undefined\"!==typeof window.ethereum||\"undefined\"!==typeof window.web3;nyt_et({subject:\"page_update\",browser:a,cryptowallet:b,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,articleId:(document.querySelector(\"meta[name\\x3darticleid]\")||\n{}).content,pubpEventId:(document.querySelector(\"meta[name\\x3dpubp_event_id]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,referrer:\"", ["escape", ["macro", 31], 7], "\",gtm:", ["escape", ["macro", 461], 8, 16], ",is_iframe:window.top!=window})}})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 156
      }, {
        "function": "__csm",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_clientId": "3005403",
        "tag_id": 12
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_nonInteraction": false,
        "vtp_useDebugVersion": false,
        "vtp_eventCategory": ["macro", 17],
        "vtp_trackType": "TRACK_EVENT",
        "vtp_gaSettings": ["macro", 388],
        "vtp_eventAction": ["macro", 392],
        "vtp_eventLabel": ["macro", 397],
        "vtp_overrideGaSettings": true,
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_eventValue": ["macro", 399],
        "vtp_metric": ["list", ["map", "index", ["macro", 400], "metric", ["macro", 401]]],
        "vtp_enableLinkId": false,
        "vtp_enableEcommerce": false,
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 36
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_nonInteraction": ["macro", 405],
        "vtp_useDebugVersion": false,
        "vtp_eventCategory": ["macro", 410],
        "vtp_trackType": "TRACK_EVENT",
        "vtp_gaSettings": ["macro", 388],
        "vtp_eventAction": ["macro", 411],
        "vtp_eventLabel": ["macro", 414],
        "vtp_overrideGaSettings": true,
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_metric": ["list", ["map", "index", ["macro", 415], "metric", "1"]],
        "vtp_enableLinkId": false,
        "vtp_enableEcommerce": false,
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 37
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "setup_tags": ["list", ["tag", 106, 0]],
        "once_per_event": true,
        "vtp_overrideGaSettings": true,
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_useDebugVersion": false,
        "vtp_useHashAutoLink": false,
        "vtp_trackType": "TRACK_PAGEVIEW",
        "vtp_decorateFormsAutoLink": false,
        "vtp_enableLinkId": false,
        "vtp_gaSettings": ["macro", 388],
        "vtp_enableEcommerce": false,
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 38
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/www.nytimes.com\/svc\/comscore\/pvc.html",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 46
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "teardown_tags": ["list", ["tag", 104, 0]],
        "once_per_event": true,
        "vtp_nonInteraction": true,
        "vtp_overrideGaSettings": true,
        "vtp_doubleClick": false,
        "vtp_setTrackerName": false,
        "vtp_useDebugVersion": false,
        "vtp_eventCategory": "scroll",
        "vtp_trackType": "TRACK_EVENT",
        "vtp_enableLinkId": false,
        "vtp_gaSettings": ["macro", 388],
        "vtp_eventAction": ["macro", 417],
        "vtp_enableEcommerce": false,
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 52
      }, {
        "function": "__img",
        "metadata": ["map"],
        "setup_tags": ["list", ["tag", 67, 0]],
        "teardown_tags": ["list", ["tag", 66, 0]],
        "once_per_load": true,
        "vtp_useCacheBuster": true,
        "vtp_url": ["template", "https:\/\/stags.bluekai.com\/site\/50136?limit=1\u0026id=", ["escape", ["macro", 173], 12]],
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 93
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_customVariable": ["list", ["map", "key", "u17", "value", ["macro", 420]]],
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "allpa0",
        "vtp_useImageTag": false,
        "vtp_activityTag": "nyti-0",
        "vtp_ordinalType": "UNIQUE",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalUnique": "1",
        "vtp_number": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 115
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "teardown_tags": ["list", ["tag", 104, 0]],
        "once_per_event": true,
        "vtp_nonInteraction": false,
        "vtp_overrideGaSettings": true,
        "vtp_eventValue": ["macro", 422],
        "vtp_eventCategory": ["macro", 423],
        "vtp_trackType": "TRACK_EVENT",
        "vtp_metric": ["list", ["map", "index", ["macro", 424], "metric", "1"], ["map", "index", ["macro", 425], "metric", "1"], ["map", "index", ["macro", 426], "metric", "1"]],
        "vtp_gaSettings": ["macro", 388],
        "vtp_eventAction": ["macro", 427],
        "vtp_eventLabel": ["macro", 428],
        "vtp_dimension": ["list", ["map", "index", ["macro", 429], "dimension", ["macro", 430]], ["map", "index", ["macro", 431], "dimension", ["macro", 432]], ["map", "index", ["macro", 433], "dimension", ["macro", 434]], ["map", "index", ["macro", 81], "dimension", ["macro", 82]]],
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 118
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_customVariable": ["list", ["map", "key", "u9", "value", ["macro", 420]]],
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "newsl0",
        "vtp_useImageTag": false,
        "vtp_activityTag": "nyti-0",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 121
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_customVariable": ["list", ["map", "key", "u17", "value", ["macro", 420]]],
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": false,
        "vtp_activityTag": "regi0",
        "vtp_ordinalType": "UNIQUE",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalUnique": "1",
        "vtp_number": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 133
      }, {
        "function": "__twitter_website_tag",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_event_type": "Signup",
        "vtp_twitter_pixel_id": ["macro", 437],
        "tag_id": 136
      }, {
        "function": "__twitter_website_tag",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_event_type": "CompleteRegistration",
        "vtp_twitter_pixel_id": "nzcu8",
        "tag_id": 137
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_customVariable": ["list", ["map", "key", "u17", "value", ["macro", 420]]],
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "remar0",
        "vtp_useImageTag": false,
        "vtp_activityTag": "gatew0",
        "vtp_ordinalType": "UNIQUE",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalUnique": "1",
        "vtp_number": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 138
      }, {
        "function": "__awct",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_enableProductReporting": false,
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_conversionId": "1008590664",
        "vtp_conversionLabel": "15HpCJzjkogBEMi-9-AD",
        "vtp_url": ["macro", 10],
        "vtp_enableProductReportingCheckbox": true,
        "vtp_enableNewCustomerReportingCheckbox": true,
        "vtp_enableEnhancedConversionsCheckbox": false,
        "vtp_enableEnhancedConversionVariable": true,
        "vtp_enableRdpCheckbox": true,
        "vtp_enableTransportUrl": false,
        "vtp_enableCustomParams": false,
        "tag_id": 153
      }, {
        "function": "__gclidw",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableCrossDomain": false,
        "vtp_enableCookieOverrides": false,
        "vtp_enableCrossDomainFeature": true,
        "vtp_enableCookieFlagsFeature": true,
        "tag_id": 159
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/conv-tm.everesttech.net\/stats\/1\/conv?cpk=r8r9vJweeOxyOVE1yJjr\u0026cak=qUqrnV6o1YdrHwpOUDqY",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 160
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/rtd-tm.everesttech.net\/upi\/?sid=7hUAYoSZMFEXrlLULNp7\u0026cs=1",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 161
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_nonInteraction": true,
        "vtp_overrideGaSettings": false,
        "vtp_eventCategory": "registration",
        "vtp_trackType": "TRACK_EVENT",
        "vtp_gaSettings": ["macro", 388],
        "vtp_eventAction": "register",
        "vtp_eventLabel": ["macro", 435],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 163
      }, {
        "function": "__ua",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_nonInteraction": true,
        "vtp_overrideGaSettings": true,
        "vtp_eventValue": ["macro", 399],
        "vtp_eventCategory": ["macro", 17],
        "vtp_trackType": "TRACK_EVENT",
        "vtp_metric": ["list", ["map", "index", ["macro", 400], "metric", ["macro", 401]]],
        "vtp_gaSettings": ["macro", 388],
        "vtp_eventAction": "impression",
        "vtp_eventLabel": ["macro", 397],
        "vtp_trackingId": ["macro", 387],
        "vtp_enableRecaptchaOption": false,
        "vtp_enableUaRlsa": false,
        "vtp_enableUseInternalVersion": false,
        "vtp_enableFirebaseCampaignData": true,
        "vtp_trackTypeIsEvent": true,
        "vtp_enableGA4Schema": false,
        "tag_id": 165
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "refty",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1223
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "msgnup",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1226
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "podcstq",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1230
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "necovidl",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1233
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "dailylp",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1235
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "fsslp",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1238
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "nwpplay",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1245
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "nwplp",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1246
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "nwpasg",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1250
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "swylp",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1258
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "swyasg",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1260
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "conve0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "swyplay",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1261
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "newsl0",
        "vtp_useImageTag": false,
        "vtp_activityTag": "cvidsch",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1265
      }, {
        "function": "__flc",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_enableConversionLinker": true,
        "vtp_groupTag": "landi0",
        "vtp_useImageTag": true,
        "vtp_activityTag": "audiolp",
        "vtp_ordinalType": "STANDARD",
        "vtp_conversionCookiePrefix": "_gcl",
        "vtp_advertiserId": "5290727",
        "vtp_ordinalStandard": ["macro", 416],
        "vtp_url": ["macro", 10],
        "vtp_useImageTagIsTrue": true,
        "vtp_enableGoogleAttributionOptions": false,
        "vtp_showConversionLinkingControls": true,
        "vtp_enableEnhancedConversions": false,
        "tag_id": 1274
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/www.facebook.com\/tr?id=365162923822779\u0026ev=RSVPSub",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 1292
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=bomn82o\u0026ct=0:s2f54xh\u0026fmt=3\u0026ttl=43200",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 1304
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/insight.adsrvr.org\/track\/pxl\/?adv=bomn82o\u0026ct=0:2ptdgug\u0026fmt=3\u0026ttl=43200",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 1305
      }, {
        "function": "__img",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_useCacheBuster": true,
        "vtp_url": "https:\/\/a.et.nytimes.com\/track\/q?subject=noscript\u0026sourceApp=nyt-vi\u0026client_ts=0",
        "vtp_cacheBusterQueryParam": "gtmcb",
        "vtp_randomNumber": ["macro", 416],
        "tag_id": 1340
      }, {
        "function": "__zone",
        "once_per_event": true,
        "vtp_childContainers": ["list", ["map", "publicId", "GTM-N5P6T9S", "nickname", "NYT - Zone - Marketing POC Pixels"]],
        "vtp_boundaries": ["list", ["zb", "_re", ["macro", 435], ".*", false, false], ["zb", "_sw", ["macro", 6], "out", true, false], ["zb", "_re", ["macro", 7], "^.{4}[ep]", true, false]],
        "vtp_enableTypeRestrictions": true,
        "vtp_whitelistedTypes": ["list", ["map", "typeId", "hl"], ["map", "typeId", "ehl"], ["map", "typeId", "sdl"], ["map", "typeId", "fsl"], ["map", "typeId", "cl"], ["map", "typeId", "tg"], ["map", "typeId", "tl"], ["map", "typeId", "ecl"], ["map", "typeId", "jel"], ["map", "typeId", "ytl"], ["map", "typeId", "lcl"], ["map", "typeId", "evl"], ["map", "typeId", "vis"], ["map", "typeId", "ctv"], ["map", "typeId", "remm"], ["map", "typeId", "smm"], ["map", "typeId", "c"], ["map", "typeId", "d"], ["map", "typeId", "e"], ["map", "typeId", "f"], ["map", "typeId", "j"], ["map", "typeId", "k"], ["map", "typeId", "r"], ["map", "typeId", "u"], ["map", "typeId", "v"], ["map", "typeId", "uv"], ["map", "typeId", "dbg"], ["map", "typeId", "ev"], ["map", "typeId", "cid"], ["map", "typeId", "aev"], ["map", "typeId", "gas"], ["map", "typeId", "img"]],
        "vtp_enableConfiguration": false,
        "tag_id": 1351
      }, {"function": "__hl", "tag_id": 1352}, {"function": "__hl", "tag_id": 1353}, {
        "function": "__hl",
        "tag_id": 1354
      }, {"function": "__hl", "tag_id": 1355}, {"function": "__hl", "tag_id": 1356}, {
        "function": "__hl",
        "tag_id": 1357
      }, {"function": "__hl", "tag_id": 1358}, {"function": "__hl", "tag_id": 1359}, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "2000",
        "vtp_uniqueTriggerId": "2703797_1249",
        "tag_id": 1360
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "2000",
        "vtp_uniqueTriggerId": "2703797_1251",
        "tag_id": 1361
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "2000",
        "vtp_uniqueTriggerId": "2703797_1252",
        "tag_id": 1362
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "2000",
        "vtp_uniqueTriggerId": "2703797_1259",
        "tag_id": 1363
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "2000",
        "vtp_uniqueTriggerId": "2703797_1316",
        "tag_id": 1364
      }, {
        "function": "__lcl",
        "vtp_waitForTags": false,
        "vtp_checkValidation": false,
        "vtp_waitForTagsTimeout": "100",
        "vtp_uniqueTriggerId": "2703797_1331",
        "tag_id": 1365
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.facebookPixel=function(g){function m(b){b=b||{};var a=b.pixelName||\"PageView\";b=f(b,e);fbq(\"track\",a,b)}function f(b,a){var c;b=b||{};a=a||{};for(c in a)b[c]=a[c]\u0026\u0026\"object\"===typeof a[c]?b[c]\u0026\u0026\"object\"===typeof b[c]?f(b[c],a[c]):f({},a[c]):a[c];return b}function n(b){for(var a=2166136261,c=0;c\u003Cb.length;++c)a^=b.charCodeAt(c),a+=(a\u003C\u003C1)+(a\u003C\u003C4)+(a\u003C\u003C7)+(a\u003C\u003C8)+(a\u003C\u003C24);return a\u003E\u003E\u003E0}g=", ["escape", ["macro", 156], 8, 16], ";var l=", ["escape", ["macro", 443], 8, 16], ",k=", ["escape", ["macro", 444], 8, 16], ",e={ad:", ["escape", ["macro", 445], 8, 16], ",articleId:", ["escape", ["macro", 446], 8, 16], "||\n\"\",fbk:localStorage.getItem(\"kxsegs\")||\"\",pScore:", ["escape", ["macro", 447], 8, 16], ",c1Score:", ["escape", ["macro", 448], 8, 16], ",c2Score:", ["escape", ["macro", 449], 8, 16], ",c3Score:", ["escape", ["macro", 450], 8, 16], ",sourceApp:", ["escape", ["macro", 21], 8, 16], "||\"nyt-vi\",watSegs:", ["escape", ["macro", 451], 8, 16], ",fbBrowser:\/\\\/FBIOS\/i.test(navigator.userAgent),content_ids:[n(window.location.pathname)],content_type:\"product\",content_category:nytAnalytics.pagemeta[\"dfp-ad-unit-path\"]||\"\",userAgent:navigator.userAgent,mc:", ["escape", ["macro", 168], 8, 16], "||\"\",referrer:", ["escape", ["macro", 31], 8, 16], ",\npageType:", ["escape", ["macro", 1], 8, 16], "};g\u0026\u0026\"anon\"!==g.toLowerCase()\u0026\u0026(e.userType=g,e.retentionRiskSegment=", ["escape", ["macro", 452], 8, 16], ",e.bundleCoreDigi=", ["escape", ["macro", 453], 8, 16], ",e.bundleCoreHD=", ["escape", ["macro", 454], 8, 16], ");l\u0026\u0026(e.agentID=l);\"number\"==typeof k\u0026\u00260\u003Ck\u0026\u0026(e.engagementLevel=k);window.fbq\u0026\u0026window.nytfbqInitialized||(window.nytfbqInitialized=!0,function(b){!function(a,b,e,g,d,h,f){a.fbq||(d=a.fbq=function(){d.callMethod?d.callMethod.apply(d,arguments):d.queue.push(arguments)},a._fbq||(a._fbq=d),d.push=d,d.loaded=\n!0,d.version=\"2.0\",d.queue=[],h=b.createElement(e),h.async=!0,h.src=g,f=b.getElementsByTagName(e)[0],f.parentNode.insertBefore(h,f))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"592202027582499\")}());return{fire:m}}();", ["escape", ["macro", 435], 8, 16], "\u0026\u0026window.facebookPixel.fire({pixelName:\"CompleteRegistration\"});\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 6
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof window.dataLayer\u0026\u0026window.dataLayer.push({video:\"\",asset:\"\",viewport:\"\"});\"object\"===typeof window.nytAnalytics\u0026\u0026window.nytAnalytics.resetPage();\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 10
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function etEventModuleInteraction(){var eventObj={},modData={};eventObj.assetUrl=", ["escape", ["macro", 18], 8, 16], ";eventObj.url=document.location.href;eventObj.subject=\"module-interactions\";modData={\"action\":\"", ["escape", ["macro", 463], 7], "\",\"context\":\"", ["escape", ["macro", 464], 7], "\",\"module\":\"", ["escape", ["macro", 15], 7], "\",\"eventName\":\"", ["escape", ["macro", 390], 7], "\",\"elementLabel\":\"", ["escape", ["macro", 465], 7], "\",\"label\":\"", ["escape", ["macro", 466], 7], "\",\"pgtype\":\"", ["escape", ["macro", 1], 7], "\",\"region\":\"", ["escape", ["macro", 394], 7], "\",\"slug\":\"", ["escape", ["macro", 467], 7], "\"};if(", ["escape", ["macro", 468], 8, 16], ")modData.progress=\nJSON.stringify(", ["escape", ["macro", 468], 8, 16], ");if(", ["escape", ["macro", 469], 8, 16], ")modData.newsletter=JSON.stringify(", ["escape", ["macro", 469], 8, 16], ");eventObj.moduleData=JSON.stringify(modData);if(typeof nyt_et===\"function\"){var et2ModData=JSON.parse(JSON.stringify({subject:\"interaction\",gtm:", ["escape", ["macro", 461], 8, 16], ",module:", ["escape", ["macro", 470], 8, 16], "||", ["escape", ["macro", 471], 8, 16], ",eventData:", ["escape", ["macro", 472], 8, 16], "||{type:", ["escape", ["macro", 463], 8, 16], ",pagetype:", ["escape", ["macro", 1], 8, 16], ",legacy:1}}));if(!et2ModData.eventData.pagetype\u0026\u0026", ["escape", ["macro", 1], 8, 16], ")et2ModData.eventData.pagetype=\n", ["escape", ["macro", 1], 8, 16], ";if(", ["escape", ["macro", 469], 8, 16], ")et2ModData.newsletter=JSON.parse(JSON.stringify(", ["escape", ["macro", 469], 8, 16], "));nyt_et(\"send\",et2ModData)}})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 34
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"scrolling_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.scrolling({viewport:", ["escape", ["macro", 474], 8, 16], ",performance:", ["escape", ["macro", 475], 8, 16], ",presentation:", ["escape", ["macro", 476], 8, 16], ",assetUrl:", ["escape", ["macro", 18], 8, 16], "});(function(){var a=document.querySelector(\"#scrolling_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 40
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"heartbeat_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.heartbeat({viewport:", ["escape", ["macro", 474], 8, 16], ",heartbeatInterval:", ["escape", ["macro", 477], 8, 16], ",performance:", ["escape", ["macro", 475], 8, 16], ",presentation:", ["escape", ["macro", 476], 8, 16], "});(function(){var a=document.querySelector(\"#heartbeat_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 41
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"addtrackingparams_temp\" type=\"text\/gtmscript\"\u003E(function(){var c=function(a,b){var c=a\u0026\u0026a.length;if(c\u0026\u0026\"function\"===typeof b)if(\"function\"===typeof a.forEach)a.forEach(b);else if(\"function\"===typeof b)for(;c;)c--,b(a[c])},d=function(a,b){b=(-1\u003Ca.indexOf(\"?\")?\"\\x26\":\"?\")+b;return a=-1\u003Ca.indexOf(\"#\")?a.replace(\"#\",b+\"#\"):a+b};c(document.querySelectorAll(\"section[data-block-tracking-id]:not(.gtm-tagged)\"),function(a){var b=\"\";a.classList.add(\"gtm-tagged\");b=a.dataset\u0026\u0026a.dataset.blockTrackingId||\"\";c(a.querySelectorAll(\":not(header) \\x3e a\"),function(a){a.href=\nd(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(b)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 1], 8, 16], ")})});c(document.querySelectorAll(\"#recirc-more-in:not(.gtm-tagged), div[class^\\x3delementStyles-moreInContent]:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");b=b.replace(\"More in \",\"\");a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dMoreInSection\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dTrending-trending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"li a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dTrending\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"#recirc-collection:not(.gtm-tagged)\"),function(a){var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");a.classList.add(\"gtm-tagged\");\nc(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dAssociated\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+b)})});c(document.querySelectorAll(\"#recirc-follow-channel:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");var b=a.parentNode.querySelector(\"h2\");b=b?b.textContent:\"\";b=b.replace(\/\u003C!\\-\\-[^\u003E]*\\-\\-\u003E\/g,\"\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dFollow\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3d\"+\nb)})});c(document.querySelectorAll(\"div[class^\\x3dRecirculation-lonelyTrending]:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3dLonely%20Trending\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\"div[class^\\x3delementStyles-relatedcoverage]\"),function(a){c(a.querySelectorAll(\"article a\"),function(a){a.classList.add(\"gtm-tagged\");\na.href=d(a.href,\"action\\x3dclick\\x26module\\x3dRelatedCoverage\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dRelated\")})});var e=document.querySelector(\"nav[class^\\x3dRibbon-ribbon]:not(.gtm-tagged)\");if(e){var f=\"Ribbon\";e.classList.add(\"gtm-tagged\");c(e.querySelectorAll(\"a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3d\"+encodeURIComponent(f)+\"\\x26pgtype\\x3d\"+", ["escape", ["macro", 1], 8, 16], ")})}c(document.querySelectorAll(\"div[class^\\x3delementStyles-editorContent]:not(.gtm-tagged)\"),\nfunction(a){a.classList.add(\"gtm-tagged\");c(a.querySelectorAll(\"article a\"),function(a){a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dFooter\\x26contentCollection\\x3dTrending\")})});c(document.querySelectorAll(\".StoryBodyCompanionColumn aside\"),function(a){c(a.querySelectorAll(\"article a:not(.gtm-tagged)\"),function(a){a.classList.add(\"gtm-tagged\");a.href=d(a.href,\"action\\x3dclick\\x26module\\x3deditorContent\\x26pgtype\\x3d", ["escape", ["macro", 1], 7], "\\x26region\\x3dCompanionColumn\\x26contentCollection\\x3dTrending\")})});\n(function(){var a=document.querySelector(\"#addtrackingparams_temp\");a\u0026\u0026(a.outerHTML=\"\")})()})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 44
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.dataLayer.push({video:\"\",asset:\"\"});\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 45
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E\"object\"===typeof nytAnalytics\u0026\u0026(nytAnalytics.activeTime=nytAnalytics.activeTime||0,nytAnalytics.activeTime=1E3*", ["escape", ["macro", 479], 8, 16], ");\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 54
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.parent===window\u0026\u0026function(){function d(){var a;return a=(a=unescape(document.cookie).match(\"NYT-Edition\\x3d([^;]+)\"))\u0026\u0026a[1]\u0026\u0026-1!==a[1].indexOf(\"edition|GLOBAL\")?\"international.nytimes.com\":\/^\\\/(games|crosswords|puzzles)\/.test(document.location.pathname)?\"games.nytimes.com\":\"nytimes.com\"}function b(){var a;regex=\/(^.*)(nytimes.com.*)\/;return a=", ["escape", ["macro", 18], 8, 16], "\u0026\u0026", ["escape", ["macro", 18], 8, 16], ".match(regex)[2]}function c(){var a=[];\"Homepage\"===", ["escape", ["macro", 1], 8, 16], "?a.push(\"Homepage\"):(", ["escape", ["macro", 481], 8, 16], "\u0026\u0026\na.push(", ["escape", ["macro", 481], 8, 16], "),", ["escape", ["macro", 482], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 482], 8, 16], "),", ["escape", ["macro", 67], 8, 16], "\u0026\u0026a.push(", ["escape", ["macro", 67], 8, 16], "),\/parenting\\.\/.test(document.location.host)\u0026\u0026a.push(\"parenting\"),0===a.length\u0026\u0026\/\\\/202\\d\\\/\\d\\d\\\/\\d\\d\\\/us\\\/elections\\\/results\/.test(document.location.href)\u0026\u0026(a.push(\"us\"),a.push(\"Elections\")));return a.join(\",\")}if(\"object\"==typeof window._sf_async_config\u0026\u0026\"object\"==typeof pSUPERFLY\u0026\u0026\"function\"==typeof pSUPERFLY.virtualPage)pSUPERFLY.virtualPage({sections:c(),path:b(),\ntitle:", ["escape", ["macro", 483], 8, 16], "||document.title});else{window._sf_async_config={uid:16698,domain:d(),pingServer:\"pnytimes.chartbeat.net\",useCanonical:!0,path:b(),title:", ["escape", ["macro", 483], 8, 16], "||document.title};_cbq=window._cbq=window._cbq||[];switch(", ["escape", ["macro", 156], 8, 16], "){case \"sub\":_cbq.push([\"_acct\",\"paid\"]);break;case \"anon\":_cbq.push([\"_acct\",\"anon\"]);break;case \"regi\":_cbq.push([\"_acct\",\"lgdin\"])}try{window._sf_async_config.sections=c()}catch(a){}try{window._sf_async_config.authors=Array.isArray(", ["escape", ["macro", 484], 8, 16], ")\u0026\u0026\n", ["escape", ["macro", 484], 8, 16], ".join(\",\")}catch(a){}window._sf_endpt=(new Date).getTime();firstScript=document.getElementsByTagName(\"script\")[0];cbScript=document.createElement(\"script\");cbScript.async=!0;cbScript.src=\"https:\/\/static.chartbeat.com\/js\/chartbeat.js\";firstScript.parentNode.insertBefore(cbScript,firstScript)}}();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 68
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\n\u003Ciframe name=\"__bkframe\" height=\"0\" width=\"0\" frameborder=\"0\" style=\"display:none;position:absolute;clip:rect(0px 0px 0px 0px)\" src=\"about:blank\"\u003E\u003C\/iframe\u003E \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bkrtx.com\/js\/bk-coretag.js\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){var e,b,d=[{name:\"Bot\",regex:\"(GomezAgent|yandex.com\/bots|(Googlebot|bingbot|YandexBot|facebookexternalhit)\/[\\\\d]+(?:.[\\\\d]+)?)\"},{name:\"UC Browser\",regex:\"(UCMini|UCBrowser)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Opera\",regex:\"(OPR|Opera)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Sogou Explorer\",regex:\"(SE) ([\\\\d]+)(.[a-zA-Z\\\\d]+)*\"},{name:\"\",regex:\"(Avant Browser)\"},{name:\"\",regex:\"((?:Mobile)?Iron|Puffin|Maxthon|Chromium|Sleipnir|Lightning|QQBrowser|Silk|chromeframe|iCab|Arora|Kindle|Midori|rekonq|Vienna|Epiphany|NetFront|konqueror|PhantomJS|YaBrowser|IEMobile|PaleMoon|Thunderbird|SeaMonkey|baidubrowser|NokiaBrowser|Edge|Avant Browser|Iceweasel|K-Meleon)\/([\\\\d]+)(.[\\\\d]+)*\"},\n{name:\"\",regex:\"(Lunascape)[\/ ]([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Firefox\",regex:\"(Firefox)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"MSIE\",regex:\"(?:(Windows).* Trident\/([\\\\d]+)(.[\\\\d]+)*|(MSIE) ([\\\\d]+)(.[\\\\d]+)*)\"},{name:\"Chrome\",regex:\"(Chrome)\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"Android Browser\",regex:\"(Android)[ \/]([\\\\d]+)(?:.[\\\\d]+.[\\\\d]+)?.*(Mobile )?Safari\"},{name:\"BlackBerry Browser\",regex:\"(BlackBerry|BB[\\\\d]+);.*Mobile Safari\"},{name:\"\",regex:\"(OmniWeb)\/v([\\\\d]+)(?:.[\\\\d]+)\"},{name:\"Chrome iOS\",regex:\"(CriOS)\/([\\\\d]+)(?:.[\\\\d]+)*\"},\n{name:\"Safari\",regex:\"(?:Version\/([\\\\d]+)(?:.[\\\\d]+)* )?(Safari)\/(?:[\\\\d]+(?:.[\\\\d]+)*)\",mobileRegex:\"(iPhone; CPU iPhone OS|iPad; CPU OS).*Mobile\/\"},{name:\"Facebook App\",regex:\"\\\\[(FBAN).*FBAV\/([\\\\d]+)(.[\\\\d]+)*.*\\\\]?\"},{name:\"NYT App\",regex:\"(NYTimes(-[a-zA-Z]+)?|Crosswords|NYTNow|Cooking|NYTOpinion|)\/([\\\\d]+)(.[\\\\d]+)* CFNetwork\/([\\\\d]+)(.[\\\\d]+)*\"},{name:\"AppleWebKit Based Browser\",regex:\"(AppleWebKit)\/([\\\\d]+)(.[\\\\d]+)*\"}];for(e=0;e\u003Cd.length;e++){var c=d[e];if((b=(new RegExp(c.regex)).exec(a))\u0026\u0026\n1\u003Cb.length)return e=c.name||b[1],c.mobileRegex\u0026\u0026(new RegExp(c.mobileRegex)).test(a)\u0026\u0026(e+=\" Mobile\"),e}return\"Unknown\"},a=function(a){return\"object\"===typeof a\u0026\u0026a instanceof Array?a.filter(function(a){return\"\"!==a}).map(function(a){return a.replace(\/,\/g,\" \")}):[]},h=", ["escape", ["macro", 485], 8, 16], "||(document.querySelector(\"meta[name\\x3dCG]\")||{}).content,k=\"\";if(!\/Homepage\/i.test(h)){k=a(", ["escape", ["macro", 486], 8, 16], ");var l=a(", ["escape", ["macro", 488], 8, 16], "||", ["escape", ["macro", 487], 8, 16], "||[]),b=a(", ["escape", ["macro", 489], 8, 16], ");a=a(", ["escape", ["macro", 490], 8, 16], ");\nk=k.concat(l).concat(b).concat(a).join(\",\")}bk_ignore_meta=!0;l=function(a){var b=[];if(null!=a\u0026\u0026\"\"!=a)for(var c in a)null!=a[c]\u0026\u0026\"InclusionFlag\"in a[c]\u0026\u00261==a[c].InclusionFlag\u0026\u0026b.push(c);return b.join(\",\")};bk_addPageCtx(\"regid\",", ["escape", ["macro", 159], 8, 16], ");a=", ["escape", ["macro", 491], 8, 16], "||{};b=", ["escape", ["macro", 492], 8, 16], "||{};b=b.subscriptions||[];var c=!1;0\u003Cb.length\u0026\u0026(c=\"F\"==b[0].grace?!1:!0);bk_addPageCtx(\"usertype\",", ["escape", ["macro", 156], 8, 16], ");bk_addPageCtx(\"userloggedin\",", ["escape", ["macro", 493], 8, 16], ");bk_addPageCtx(\"coresubtenure\",\na.coreSubscriptionTenure?a.coreSubscriptionTenure:\"\");bk_addPageCtx(\"corestop\",a.coreStopCode?a.coreStopCode:\"\");bk_addPageCtx(\"corepromo\",!!a.coreOnPromotion);bk_addPageCtx(\"ingrace\",c);bk_addPageCtx(\"giftrecipient\",!!a.giftSubscriptionRecipient);bk_addPageCtx(\"childsubrecipient\",!!a.childSubscription);bk_addPageCtx(\"bundlecoredigi\",a.coreDigiBundle?a.coreDigiBundle:\"\");bk_addPageCtx(\"bundlecorehd\",a.coreHDBundle?a.coreHDBundle:\"\");bk_addPageCtx(\"bundlexword\",a.crosswordStandaloneBundle?a.crosswordStandaloneBundle:\n\"\");bk_addPageCtx(\"bundlecooking\",a.cookingStandaloneBundle?a.cookingStandaloneBundle:\"\");bk_addPageCtx(\"bundleother\",a.otherBundle?a.otherBundle:\"\");bk_addPageCtx(\"b2bentitle\",!!a.b2bSubscription);bk_addPageCtx(\"marketingoptin\",!!a.marketingOptIn);bk_addPageCtx(\"formercoresub\",!!a.formerCoreSubscriber);bk_addPageCtx(\"formeredusub\",!!a.formerEduSubscriber);bk_addPageCtx(\"formerhdsub\",!!a.formerHDSubscriber);bk_addPageCtx(\"retentionscore\",a.retentionSegment||\"\");bk_addPageCtx(\"topwatseg\",", ["escape", ["macro", 451], 8, 16], ");\nbk_addPageCtx(\"sassegment\",a.sasSegment||\"\");bk_addPageCtx(\"hdstopreasoncode\",a.hdStopReasonCode||\"\");bk_addPageCtx(\"regitenure\",a.regiTenure||\"\");bk_addPageCtx(\"cookinggrace\",!!a.cookingGrace);bk_addPageCtx(\"crosswordsgrace\",!!a.crosswordsGrace);bk_addPageCtx(\"gatewayhitlm\",!!a.gatewayHitLM);bk_addPageCtx(\"coregracelevel\",!!a.coreGraceLevel);bk_addPageCtx(\"activedaysengagement\",a.engagementActiveDays||\"\");bk_addPageCtx(\"authors\",(", ["escape", ["macro", 484], 8, 16], "||[]).join(\",\")||\"\");bk_addPageCtx(\"newsletter\",\na.newsletterList||\"\");b=", ["escape", ["macro", 494], 8, 16], ";c=\"\";if(null!=b){try{var f=JSON.parse(unescape(b))}catch(e){f={}}f.isCorpUser\u0026\u0026(c=f.orgName)}bk_addPageCtx(\"businessname\",c);bk_addPageCtx(\"corpadblock\",\/CORP_ADBLOCK\/i.test(b));f=", ["escape", ["macro", 495], 8, 16], ";c=b=\"\";if(null!=f){try{var g=JSON.parse(unescape(f))}catch(e){g={}}if(c=g.isEduUser||\"\")b=g.nickName}bk_addPageCtx(\"isedu\",c);bk_addPageCtx(\"propensityedu\",b);bk_addPageCtx(\"propensityscore\",", ["escape", ["macro", 447], 8, 16], ");bk_addPageCtx(\"activedays\",", ["escape", ["macro", 445], 8, 16], ");\ng=", ["escape", ["macro", 167], 8, 16], "||{};bk_addPageCtx(\"metercount\",g.v||\"\");bk_addPageCtx(\"propensitysection\",", ["escape", ["macro", 450], 8, 16], ");bk_addPageCtx(\"propensitytype\",", ["escape", ["macro", 449], 8, 16], ");bk_addPageCtx(\"propensitysite\",", ["escape", ["macro", 448], 8, 16], ");bk_addPageCtx(\"url\",window.location.href);bk_addPageCtx(\"referrer\",", ["escape", ["macro", 31], 8, 16], ");bk_addPageCtx(\"section\",h);h=", ["escape", ["macro", 482], 8, 16], "||\"\";bk_addPageCtx(\"subsection\",h);bk_addPageCtx(\"pagetype\",", ["escape", ["macro", 1], 8, 16], ");bk_addPageCtx(\"keywords\",k);bk_addPageCtx(\"sourceapp\",\n", ["escape", ["macro", 125], 8, 16], ");bk_addPageCtx(\"browsername\",d(navigator.userAgent));bk_addPageCtx(\"funnelpropensity\",", ["escape", ["macro", 444], 8, 16], ");bk_addPageCtx(\"column\",", ["escape", ["macro", 496], 8, 16], ");d=", ["escape", ["macro", 497], 8, 16], "||[];bk_addPageCtx(\"collectionname\",d.join(\",\"));bk_addPageCtx(\"contenttype\",", ["escape", ["macro", 498], 8, 16], ");d=l(", ["escape", ["macro", 499], 8, 16], ");bk_addPageCtx(\"emotions\",d);\"object\"===typeof bk_optly\u0026\u0026bk_optly instanceof Array\u0026\u00260\u003Cbk_optly.length\u0026\u0026(bk_addPageCtx(\"optlyexpname\",bk_optly[0].experience||\"\"),bk_addPageCtx(\"optlyexpvariant\",\nbk_optly[0].variant||\"\"));bk_addPageCtx(\"xwordstenure\",a.crosswordsSubscriptionTenure?a.crosswordsSubscriptionTenure:\"\");bk_addPageCtx(\"cookingtenure\",a.cookingSubscriptionTenure?a.cookingSubscriptionTenure:\"\");bk_addPageCtx(\"xwordsstop\",a.crosswordsStopCode?a.crosswordsStopCode:\"\");bk_addPageCtx(\"cookingstop\",a.cookingStopCode?a.cookingStopCode:\"\");bk_addPageCtx(\"productswitch\",a.productSwitch?a.productSwitch:\"\");bk_addPageCtx(\"giftsubgiver\",!!a.giftGiver);bk_addPageCtx(\"formerxwordsub\",!!a.formerCrosswordSubscriber);\nbk_addPageCtx(\"formercookingsub\",!!a.formerCookingSubscriber);bk_addPageCtx(\"watsegs\",a.watString?a.watString:\"\");bk_addPageCtx(\"edusub\",a.eduSubscriber?a.eduSubscriber:\"\");bk_addPageCtx(\"aiqaudience\",(", ["escape", ["macro", 500], 8, 16], "||[]).map(function(a){return a[0]}).join(\",\"));d=50134;navigator.userAgent.match(\/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM\/i)\u0026\u0026(d=50747);bk_allow_multiple_calls=!0;bk_doJSTag(d,4)})();\u003C\/script\u003E\n"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 83
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bluekai.com\/site\/50550?ret=js\u0026amp;limit=1\"\u003E\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 84
      }, {
        "function": "__html",
        "metadata": ["map"],
        "setup_tags": ["list", ["tag", 0, 0]],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"impression_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.impression({module:", ["escape", ["macro", 470], 8, 16], ",card:", ["escape", ["macro", 502], 8, 16], ",block:", ["escape", ["macro", 503], 8, 16], ",eventData:", ["escape", ["macro", 472], 8, 16], ",newsletter:", ["escape", ["macro", 469], 8, 16], ",ad:", ["escape", ["macro", 505], 8, 16], ",integration:", ["escape", ["macro", 506], 8, 16], ",container:", ["escape", ["macro", 507], 8, 16], ",\"package\":", ["escape", ["macro", 508], 8, 16], ",item:", ["escape", ["macro", 509], 8, 16], "},", ["escape", ["macro", 510], 8, 16], ");(function(){var a=document.querySelector(\"#impression_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 107
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"interaction_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.interaction({module:", ["escape", ["macro", 470], 8, 16], ",card:", ["escape", ["macro", 502], 8, 16], ",block:", ["escape", ["macro", 503], 8, 16], ",ad:", ["escape", ["macro", 505], 8, 16], ",newsletter:", ["escape", ["macro", 469], 8, 16], ",eventData:", ["escape", ["macro", 472], 8, 16], ",assetUrl:", ["escape", ["macro", 18], 8, 16], ",impression_id:", ["escape", ["macro", 511], 8, 16], ",\"package\":", ["escape", ["macro", 508], 8, 16], ",item:", ["escape", ["macro", 509], 8, 16], "});dataLayer.push({module:void 0,card:void 0,block:void 0,newsletter:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0},\"package\":void 0,item:void 0,impression_id:void 0});\n(function(){var a=document.querySelector(\"#interaction_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 109
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){function c(d,a){var b=document.createElement(\"script\");b.type=\"text\/javascript\";a\u0026\u0026(b.onload=a,b.onerror=a);a=document.getElementsByTagName(\"head\")[0];a.appendChild(b);b.src=d}c(\"https:\/\/a1.nyt.com\/analytics\/show-ads.js\",function(){window.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",adBlockEnabled:!1!==window.adBlockDetected})})})();\u003C\/script\u003E  ",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 112
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){try{var c=a.ns_,d=a.nyt_streamingAnalytics=a.nyt_streamingAnalytics||new c.ReducedRequirementsStreamingAnalytics({publisherId:\"3005403\"});a=", ["escape", ["macro", 513], 8, 16], "||{};var b=a.eventName,f=\"live\"===a.mData.videoDeliveryMethod,h=g(a);\"pause\"!==b\u0026\u0026\"video-complete\"!==b\u0026\u0026\"ad-pause\"!==b\u0026\u0026\"ad-complete\"!==b||d.stop();if(\"auto-play-start\"===b||\"user-play\"===b||\"resume\"===b)return k(h,f);if(\"ad-start\"===b)return l(a);var k=function(a,m){var b=c.ReducedRequirementsStreamingAnalytics.ContentType,e=\nb.ShortFormOnDemand;m\u0026\u0026(e=b.Live);d.playVideoContentPart(a,e)},l=function(b){var a=c.ReducedRequirementsStreamingAnalytics.AdType;d.playVideoContentPart({ns_st_cl:b.videoDuration},a.LinearOnDemandMidRoll)},g=function(b){var a=b.mData||{};return{ns_st_ci:b.contentId||\"*null\",ns_st_cl:a.videoDuration||\"*null\",ns_st_pu:a.videoFranchise||\"*null\",ns_st_pr:decodeURIComponent(a?a.videoName||\"*null\":\"*null\"),c3:b.contentCollection,ns_st_tpr:\"*null\",ns_st_ep:\"*null\",ns_st_tep:\"*null\",ns_st_sn:\"*null\",ns_st_en:\"*null\",\nns_st_ge:a.videoType||\"*null\",ns_st_ia:1,ns_st_ddt:\"*null\",ns_st_tdt:\"*null\",ns_st_st:\"*null\",c4:\"*null\",c6:\"*null\",ns_st_ce:\"*null\"}}}catch(e){console.log(\"gracefully failed to load comscore.\")}})(window);\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 113
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/a1.nyt.com\/analytics\/comscore-streaming.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 114
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){function f(){if(\"MozAppearance\"in document.documentElement.style){var a=indexedDB.open(\"test\");a.onerror=c;a.onsuccess=d;return!0}}function e(a){b.nyt_et\u0026\u0026nyt_et({subject:\"page_update\",isIncognito:a})}var c,d;b.nyt_et\u0026\u0026function(a,g){c=a||function(){};d=g||function(){};b.webkitRequestFileSystem?(b.webkitRequestFileSystem(b.TEMPORARY,1,d,c),a=!0):a=void 0;if(!(a=a||f()))a:if(0\u003CObject.prototype.toString.call(b.HTMLElement).indexOf(\"Constructor\")||\"[object SafariRemoteNotification]\"===(!b.safari||\nsafari.pushNotification).toString()||b.localStorage\u0026\u0026\/Safari\/.test(b.navigator.userAgent)){try{b.openDatabase(null,null,null,null)}catch(h){c();a=!0;break a}try{localStorage.length||(localStorage.x=1,localStorage.removeItem(\"x\")),d()}catch(h){navigator.cookieEnabled?c():d()}a=!0}else a=void 0;a||(b.indexedDB||!b.PointerEvent\u0026\u0026!b.MSPointerEvent?a=void 0:(c(),a=!0));a||d()}(function(){e(!0)},function(){e(!1)})})(window);\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 120
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){nyt_et(\"send\",{subject:\"ab_alloc\",allocs:[{name:", ["escape", ["macro", 514], 8, 16], ",variant:", ["escape", ["macro", 515], 8, 16], "}],gtm:", ["escape", ["macro", 461], 8, 16], "})})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 123
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(b){var d=\"a.nytimes.com\",e=", ["escape", ["macro", 31], 8, 16], "||encodeURIComponent(document.referrer),f=", ["escape", ["macro", 18], 8, 16], "||encodeURIComponent(document.location.href),a=new XMLHttpRequest;a.withCredentials=!0;a.open(\"GET\",\"https:\/\/\"+d+\"\/svc\/nyt\/data-layer?sourceApp\\x3d\"+", ["escape", ["macro", 21], 8, 16], "+\"\\x26caller_id\\x3d\"+", ["escape", ["macro", 21], 8, 16], "+\"-gtm\\x26referrer\\x3d\"+e+\"\\x26assetUrl\\x3d\"+f+\"\\x26jkcd\\x3d\"+Date.now(),!0);a.onload=function(){var c=JSON.parse(a.responseText);c.event=\"pageDataReady\";window[b].push(c)};\na.addEventListener(\"error\",function(){window[b].push({event:\"pageDataReady\"})});a.send()})(\"dataLayer\");\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 124
      }, {
        "function": "__html",
        "metadata": ["map"],
        "setup_tags": ["list", ["tag", 57, 0]],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=setInterval(function(){window.facebookPixel\u0026\u0026window.facebookPixel.fire\u0026\u0026(window.facebookPixel.fire({pixelName:\"NewsletterSignup\"}),clearInterval(a))},1E3)})();\u003C\/script\u003E  ",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 134
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\" id=\"media_temp\"\u003E(function(){var a=JSON.parse(JSON.stringify(", ["escape", ["macro", 512], 8, 16], "));a.subject=\"media\";a.gtm=", ["escape", ["macro", 461], 8, 16], ";nyt_et(\"send\",a);dataLayer.push({media:null});if(a=document.querySelector(\"#media_temp\"))a.outerHTML=\"\"})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 140
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003EnytAnalytics.slideshow({slideshow:", ["escape", ["macro", 516], 8, 16], "});\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 141
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Evar event=", ["escape", ["macro", 519], 8, 16], ";event.subject=\"ab_expose\";event.gtm=", ["escape", ["macro", 461], 8, 16], ";(function(){nyt_et(\"send\",event)})();dataLayer.push({abtest:null});\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 147
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){window.nyt_et\u0026\u0026nyt_et(\"send\",{subject:\"page_update\",jsonKidd:", ["escape", ["macro", 524], 8, 16], ",canonicalUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),sourceApp:", ["escape", ["macro", 518], 8, 16], ",gtm:", ["escape", ["macro", 461], 8, 16], ",presentation:", ["escape", ["macro", 476], 8, 16], ",\nweb_app:{releaseVersion:", ["escape", ["macro", 525], 8, 16], "}})})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 154
      }, {
        "function": "__html",
        "metadata": ["map"],
        "setup_tags": ["list", ["tag", 1, 0]],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,c){a\u0026\u0026a.length\u0026\u0026(nyt_et(\"send\",{subject:\"ab_alloc\",allocs:a}),a=window.google_tag_manager[", ["escape", ["macro", 458], 8, 16], "],a.dataLayer.set(\"abtest\",void 0),a.dataLayer.set(\"allocs\",void 0))})(", ["escape", ["macro", 527], 8, 16], ",", ["escape", ["macro", 528], 8, 16], ",", ["escape", ["macro", 529], 8, 16], ");\u003C\/script\u003E\n"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 171
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript id=\"gtm_beforeunload_temp\" type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"beforeunload\",function(){window.dataLayer.push({event:\"beforeunload\"});nytAnalytics.exitPriority=!0});(function(){var a=document.querySelector(\"#gtm_beforeunload_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 172
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Enyt_et.get_pageview_id()\u0026\u0026nyt_et(\"send\",{subject:\"page_exit\",assetUrl:(document.querySelector(\"link[rel\\x3dcanonical]\")||{}).href,assetId:(document.querySelector(\"meta[name\\x3darticleid]\")||{}).content,nyt_uri:(document.querySelector(\"meta[name\\x3dnyt_uri]\")||{}).content,url:location.href,referrer:\"", ["escape", ["macro", 31], 7], "\",client_tz_offset:(new Date).getTimezoneOffset(),activeTime:(window.nytAnalytics||{}).activeTime,exit:!0,gtm:", ["escape", ["macro", 461], 8, 16], "});\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 173
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.iterateSettings={apiKey:\"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb21wYW55X2lkIjoiNWMwOThiM2QxNjU0YzEwMDAxMmM2OGY5IiwiaWF0IjoxNTQ0MTI5MzQxfQ.UI13nEXGs0udbZxhjyFLruAEed42XwFO4fZlCqOgY1o\"};\n(function(a,d,f,g,h){function e(){b=d.createElement(f);b.id=g;b.async=1;b.src=\"https:\/\/platform.iteratehq.com\/loader.js\";k.parentNode.insertBefore(b,k)}if(!d.getElementById(g)){a.IterateObjectName=h;var c=function(){c.c(arguments)};c.q=[];c.c=function(l){c.q.push(l)};a[h]=c;var b,k=d.getElementsByTagName(f)[0];\"complete\"===d.readyState?e():a.attachEvent?a.attachEvent(\"onload\",e):a.addEventListener(\"load\",e,!1)}})(window,document,\"script\",\"iterate-js\",\"Iterate\");\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etry{if(window.Iterate\u0026\u0026\"function\"===typeof Iterate){var subscriberInfo=\"", ["escape", ["macro", 491], 7], "\",uType=\"", ["escape", ["macro", 156], 7], "\",eduSubscriber=\"object\"===typeof subscriberInfo?subscriberInfo.eduSubscriber:\"\",userType=\"string\"===typeof uType?uType:\"\",params={eduSubscriber:eduSubscriber,userType:userType};Iterate(\"identify\",params)}}catch(a){console.log(a)};\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 175
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_load": true,
        "vtp_html": "\u003Cscript id=\"gtm_postMessage_tmp\" type=\"text\/gtmscript\"\u003E(function(){function b(a){var b={pageDataReady:!0,scrollComplete:!0,heartbeat:!0,moduleInteraction:!0,trackVirtualPage:!0,dynamicElementsLoaded:!0,videoEvent:!0,mediaEvent:!0,impression:!0,performance:!0,error:!0,\"ab-alloc\":!0,\"ab-expose\":!0,\"send-direct\":!0};\"object\"===typeof a.data\u0026\u0026\"string\"===typeof a.data.event\u0026\u0026b[a.data.event]\u0026\u0026(\/nytimes.com\/.test(a.origin)\u0026\u0026dataLayer.push(a.data),\/googlesyndication.com\/.test(a.origin)\u0026\u0026(a=JSON.parse(JSON.stringify(a.data)),\"moduleInteraction\"===a.event\u0026\u0026(delete a.event,\na.subject=\"dfp-ad-events\",a={event:\"send-direct\",payload:a}),dataLayer.push(a)))}window.addEventListener(\"message\",b,!1)})();(function(){var b=document.querySelector(\"#gtm_postMessage_tmp\");b\u0026\u0026b.parentNode.removeChild(b)})();\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 176
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\n\u003Ciframe name=\"__bkframe\" height=\"0\" width=\"0\" frameborder=\"0\" style=\"display:none;position:absolute;clip:rect(0px 0px 0px 0px)\" src=\"about:blank\"\u003E\u003C\/iframe\u003E \n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/tags.bkrtx.com\/js\/bk-coretag.js\"\u003E\u003C\/script\u003E \n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){bk_addPageCtx(\"url\",window.location.href);bk_addPageCtx(\"gatewayhit\",!0);var a=50134;navigator.userAgent.match(\/Android|iPhone|iPad|iPod|Windows Phone|webOS|BlackBerry|RIM\/i)\u0026\u0026(a=50747);bk_allow_multiple_calls=!0;bk_doJSTag(a,4)})();\u003C\/script\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 178
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"et2-send-direct\" type=\"text\/gtmscript\"\u003E\"function\"===typeof nyt_et\u0026\u0026nyt_et(\"send\",", ["escape", ["macro", 532], 8, 16], ");(function(a){a.parentNode.removeChild(a)})(document.getElementById(\"et2-send-direct\"));\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 179
      }, {
        "function": "__html",
        "metadata": ["map"],
        "setup_tags": ["list", ["tag", 0, 0]],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"performance_temp\" type=\"text\/gtmscript\"\u003EnytAnalytics.performance({performance:", ["escape", ["macro", 475], 8, 16], "});(function(){var a=document.querySelector(\"#performance_temp\");a\u0026\u0026(a.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 182
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,b,c,d,e,f){a.ddjskey=e;a.ddoptions=f||null;a=b.createElement(c);b=b.getElementsByTagName(c)[0];a.async=1;a.src=d;b.parentNode.insertBefore(a,b)}(window,document,\"script\",\"https:\/\/dd.nytimes.com\/tags.js\",\"499AE34129FA4E4FABC31582C3075D\",{endpoint:\"https:\/\/dd.nytimes.com\/js\/\"});\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 183
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"e1c4c748-041c-4910-989a-1847d8a95fb2\");snaptr(\"track\",\"PAGE_VIEW\");\u003C\/script\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 184
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\" id=\"et_mediaevent_temp\"\u003E(function(){var a=JSON.parse(JSON.stringify(", ["escape", ["macro", 512], 8, 16], "));\"object\"===typeof a\u0026\u0026\"video-player\"==a.module\u0026\u0026\"function\"==typeof nyt_et\u0026\u0026(a.subject=\"interaction\",nyt_et(\"send\",a));if(a=document.querySelector(\"#et_mediaevent_temp\"))a.outerHTML=\"\"})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 185
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",c=", ["escape", ["macro", 395], 8, 16], "||\"\",a={};b\u0026\u0026(a.regi_id=b);c\u0026\u0026(a.playaction=c);a[\"WT.tx_e\"]=\"s\";a[\"WT.si_n\"]=\"MiniGame\";a[\"WT.si_x\"]=\"2\";a[\"WT.si_p\"]=\"GameLoad\";ORA.click({data:a})})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1208
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"infinity_marketing_temp\" type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",a={},c=", ["escape", ["macro", 533], 8, 16], "||\"\",d=", ["escape", ["macro", 534], 8, 16], "||\"\",e=", ["escape", ["macro", 535], 8, 16], "||\"\",f=", ["escape", ["macro", 536], 8, 16], "||\"\",g=", ["escape", ["macro", 537], 8, 16], "||\"\",h=", ["escape", ["macro", 538], 8, 16], "||\"\",k=", ["escape", ["macro", 539], 8, 16], "||\"\",l=", ["escape", ["macro", 540], 8, 16], "||\"\";b\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"v\";a[\"WT.si_n\"]=\"MiniGame\";a[\"WT.si_x\"]=\"1\";a[\"WT.si_p\"]=\"GamePage\";c\u0026\u0026(a.b2bsub=c);d\u0026\u0026(a.chldsub=d);e\u0026\u0026(a.condensebundle=e);f\u0026\u0026(a.gtwayHITLM=f);g\u0026\u0026(a.vrzschl=g);h\u0026\u0026(a.giftrecp=h);k\u0026\u0026(a.newletterlist=\nk);l\u0026\u0026(a.a14dv=l);ORA.view({data:a})})();(function(){var b=document.querySelector(\"#infinity_marketing_temp\");b\u0026\u0026(b.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1210
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.oracleinfinity.io\/acs\/account\/cialth61ui\/js\/main\/odc.js?_ora.context=analytics:production\"\u003E\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1212
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(a,b,d){if(!a.snaptr){var c=a.snaptr=function(){c.handleRequest?c.handleRequest.apply(c,arguments):c.queue.push(arguments)};c.queue=[];a=\"script\";r=b.createElement(a);r.async=!0;r.src=d;b=b.getElementsByTagName(a)[0];b.parentNode.insertBefore(r,b)}})(window,document,\"https:\/\/sc-static.net\/scevent.min.js\");snaptr(\"init\",\"874326db-7dc3-49c4-a8b2-8e29732a9ff7\");snaptr(\"track\",\"SIGN_UP\");\u003C\/script\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1216
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({event:\"podcast_link\"})})();\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1248
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=", ["escape", ["macro", 541], 8, 16], ";a.referrerPolicy=\"no-referrer-when-downgrade\"})();\u003C\/script\u003E "],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1315
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"https:\/\/c.oracleinfinity.io\/acs\/account\/cialth61ui\/js\/main\/odc.js?_ora.context=analytics:production\"\u003E\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1318
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript id=\"infinity_marketing_temp\" type=\"text\/gtmscript\"\u003E(function(){var b=", ["escape", ["macro", 159], 8, 16], "||\"\",a={},c=", ["escape", ["macro", 18], 8, 16], "||\"\",d=", ["escape", ["macro", 533], 8, 16], "||\"\",e=", ["escape", ["macro", 534], 8, 16], "||\"\",f=", ["escape", ["macro", 542], 8, 16], "||\"\",g=", ["escape", ["macro", 536], 8, 16], "||\"\",h=", ["escape", ["macro", 537], 8, 16], "||\"\",k=", ["escape", ["macro", 538], 8, 16], "||\"\",l=", ["escape", ["macro", 539], 8, 16], "||\"\",m=", ["escape", ["macro", 540], 8, 16], "||\"\";offerID=", ["escape", ["macro", 543], 8, 16], "||\"\";b\u0026\u0026(a.regi_id=b);a[\"WT.tx_e\"]=\"v\";a[\"WT.si_n\"]=\"Registration Flow\";a[\"WT.si_x\"]=\"1\";a[\"WT.si_p\"]=\"Thank You\";c\u0026\u0026(a[\"asset.url\"]=c);d\u0026\u0026(a.b2bsub=d);e\u0026\u0026(a.chldsub=e);f\u0026\u0026\n(a.condensebundle=f);g\u0026\u0026(a.gtwayHITLM=g);h\u0026\u0026(a.vrzschl=h);k\u0026\u0026(a.giftrecp=k);l\u0026\u0026(a.newletterlist=l);m\u0026\u0026(a.a14dv=m);offerID\u0026\u0026(a[\"WT.offerID\"]=offerID);ORA.view({data:a})})();(function(){var b=document.querySelector(\"#infinity_marketing_temp\");b\u0026\u0026(b.outerHTML=\"\")})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1320
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E!function(a,e,f,b,c,d){a[b]=a[b]||function(){(a[b].q=a[b].q||[]).push(arguments)};setTimeout(function(){c=e.createElement(\"script\");d=e.getElementsByTagName(\"script\")[0];c.src=f;d.parentNode.insertBefore(c,d)},0)}(window,document,\"https:\/\/ext.chtbl.com\/trackable.js\",\"trackable\");trackable(\"init\",\"7086cdd56a02cc5b64556972a2a22098\");trackable(\"addToCart\");\u003C\/script\u003E ",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1324
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003Ecapture_others=", ["escape", ["macro", 545], 8, 16], ";container_id=", ["escape", ["macro", 458], 8, 16], ";send_to_et={subject:\"page_update\"};if(Array.isArray(capture_others)\u0026\u00260\u003Ccapture_others.length){for(var i=0;i\u003Ccapture_others.length;i++)send_to_et[capture_others[i]]=google_tag_manager[container_id].dataLayer.get(capture_others[i]);nyt_et(send_to_et)}dataLayer.push({capture:{others:void 0}});\u003C\/script\u003E "],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1328
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\n\u003Cscript type=\"text\/gtmscript\"\u003Evar google_conversion_id=1008590664,google_conversion_label=\"8HYJCL-Mht0CEMi-9-AD\",google_remarketing_only=!1,google_allow_ad_personalization_signals=!1;\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\" data-gtmsrc=\"\/\/www.googleadservices.com\/pagead\/conversion.js\"\u003E\u003C\/script\u003E\n",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1349
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript data-gtmsrc=\"\/\/static.ads-twitter.com\/oct.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Etwttr.conversion.trackPid(\"o70re\",{tw_sale_amount:0,tw_order_quantity:0});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=o70re\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=o70re\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 1350
      }, {
        "function": "__html",
        "metadata": ["map"],
        "once_per_event": true,
        "vtp_html": "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){dataLayer.push({module:void 0,card:void 0,block:void 0,eventData:void 0,ad:void 0,pageview:{ad:void 0}})})();\u003C\/script\u003E",
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 119
      }, {
        "function": "__html",
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var g=function(a){return\"string\"===typeof a?a.toLowerCase():a},n=function(a){if(!a)return{};a=decodeURI(a);try{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(c){return{}}},m=function(){var a=window.navigator.userAgent,c=", ["escape", ["macro", 31], 8, 16], "||document.referrer,e=document.location.href,b=n(document.location.search);-1\u003Cc.indexOf(\"?\")\u0026\u0026n(c.substr(c.indexOf(\"?\")));var d=\nc,f=\"src smid nl nrx partner campaignid mcid meid\".split(\" \"),h=\/^[^:]*:\\\/\\\/([^\\\/]*)\/,m=f.length,k;for(k=0;k\u003Cm;k++)if(b[f[k]]){var l=f[k];break}e=l?b[l]:\"\"!==d\u0026\u0026d.match(h)?d.match(h)[1]||\"\":\"\"===d\u0026\u0026\/\\.app\/.test(e)?\"NYT Mobile Apps\":\/FBIOS\/.test(a)?\"FBIOS\":\/FBAN\/.test(a)?\"FBAN\":\"\";l=r(e,b);d=e;a=b;f=c;h=\"NYT Mobile Apps\"===d||\"cur\"===a.smtyp||!!a.nl||\"sms\"===a.src||a.smprod\u0026\u0026a.smprod.indexOf\u0026\u0026(-1\u003Ca.smprod.indexOf(\"nytnow\")||-1\u003Ca.smprod.indexOf(\"tools\"))||a.partner\u0026\u0026a.partner.indexOf\u0026\u0026(-1\u003Ca.partner.indexOf(\"rss\")||\n-1\u003Ca.partner.indexOf(\"socialFlow\"))||!!a.nrx||d\u0026\u0026d.indexOf\u0026\u0026-1\u003Cd.indexOf(\"nytimes.com\")||g(d)===g(\"SafariPush\");a.mcid||a.meid||\"pay\"===a.smtyp||\/aud_dev\/.test(a[\"WT.mc_id\"])||\/paid.outbrain.com\/.test(f)?d=\"paid\":h?d=\"owned\":(p.test(d)\u0026\u0026d.indexOf(\"nytimes.com\"),d=\"earned\");a=e;f=\/naver|aol|lycos|search.netscape|cnn|mamma|terra|search.virgilio|alice|eniro|yahoo|aol|about|voila|baidu|yandex|wp|online.onetcenter|yam|rambler|daum|msn|bing|ask|altavista|alltheweb|bing|najdi|aol|seznam|search|duckduckgo|mynet|ekolay|pchome|kvasir|sesam|ozu|szukacz|google\/;\nh=\/\\.(facebook|twitter|reddit|pinterest|getpocket|stumbleupon|myspace|fark|digg|linkedin|plus.url.google|disqus|quora|yelp|meetup|goodreads|weibo|tumblr|instagram|urbanspoon|weebly|youtube|ycombinator|vk|meneame)\\.\/;c=f.test(a)?\"search\":q(a)||h.test(a)||\"t.co\"===a?\"social\":\/nytimes.com|nytnow.com\/.test(a)||\"NYT Mobile Apps\"===a?\"internal\":!b.moc\u0026\u0026!b.meid||null!==c\u0026\u0026\"\"!==c?(b.mcid||b.mc)\u0026\u0026null!==a?\"marketing_campaign\":b.nl||b.emc?\"newsletter\":null===a?null:g(a)===g(\"SafariPush\")||\"sms\"===a?\"notifications\":\n\"referring_links\":\"marketing_email\";b=e;b=\"string\"===typeof b\u0026\u0026\"SafariPush\"===b?b.toLowerCase():b;return{source:b,subchannel:l,type:d,channel:c}},p=\/.*\\..*\/,q=function(a){if(a){var c=\/^(fb\\-|tw\\-|pin\\-|pi\\-|pinterest\\-|re\\-|go\\-|li\\-|in\\-|kk\\-|ln\\-|wc\\-)\/;a=a\u0026\u0026a.match\u0026\u0026a.match(c);if(Array.isArray(a))return a[1]}},r=function(a,c){if(c.meid)return\"marketing email\";if(c.nl||c.emc)return\"Newsletter\";if(\"FBAN\"===a||\"FBIOS\"===a)return\"facebook\";if(\"NYT Mobile Apps\"==a)return a;if(\"sms\"===a)return\"sms notifications\";\nif(g(a)===g(\"SafariPush\"))return\"safari notifications\";if(p.test(a)){var e=\"stumbleupon typepad blogspot digg disqus facebook fark getpocket google linkedin Social pinterest quora reddit scoop slashdot twitter techmeme tinyurl vk\".split(\" \");var b={stumbleupon:\/corp.stumbleupon.com|stumbleupon.com\/,typepad:\/delong.typepad.com|economistsview.typepad.com\/,blogspot:\/digbysblog.blogspot.com\/,digg:\/digg.com\/,disqus:\/disqus.com\/,facebook:\/facebook.com|fb-nytdining|fb-nytimes|fb-nytmetro\u0026smtyp=cur|fb-nytopinion|fb-nytpolitics|fb-nytvideo|fb-share|fb-share?utm_hp_ref=parents|l.facebook.com|lm.facebook.com|m.facebook.com|www.facebook.com\/,\nfark:\/fark.com\/,getpocket:\/getpocket.com\/,google:\/go-share|gp-nytimes|plus.url.google.com\/,linkedin:\/li-nytimes|li-share|linkedin.com|lnkd.in\/,Social:\/netvibes.com|news.ycombinator.com|nythealth|nytimesarts|nytimesphoto|nytpolitics|nytscience|paper.li|pl-share\/,pinterest:\/pi-nytimes|pin-share|pinterest.com\/,quora:\/quora.com\/,reddit:\/re-share|re-share\/,scoop:\/scoop.it\/,slashdot:\/slashdot.org\/,twitter:\/t.co$|tw-bna|tw-dealbook|tw-nytdavidbrooks|tw-nytfashion|tw-nytfood|tw-nythealth|tw-nytimes|tw-nytimesbits|tw-nytimesbusiness|tw-nytimeskrugman|tw-nytimesmap|tw-nytimesmusic|tw-nytimesscience|tw-nytimestech|tw-nytimestheater|tw-nytimestravel|tw-nytimeswell|tw-nytimesworld|tw-nytmag|tw-nytmedia|tw-nytmetro|tw-nytmovies|tw-nytnational|tw-nytopinion|tw-nytstyles|tw-nytvideo|tw-share|tw-tmagazine|tw-upshotnyt\/,\ntechmeme:\/techmeme.com\/,tinyurl:\/tinyurl.com\/,vk:\/vk.com\/};ln=e.length;for(i=i=0;i\u003Cln;i++)if(b[e[i]].test(a))return rollup=e[i];return a}e={\"fb-\":\"facebook\",\"tw-\":\"twitter\",\"pin-\":\"pinterest\",\"pi-\":\"pinterest\",\"pinterest-\":\"pinterest\",\"re-\":\"reddit\",\"go-\":\"googleplus\",\"li-\":\"linkedin\",\"in-\":\"instagram\",\"kk-\":\"kakao\",\"ln-\":\"line\",\"wc-\":\"wechat\"};return e[q(a)]};window.nytAnalytics=window.nytAnalytics||{};nytAnalytics.derivedReferrer=m()})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 70
      }, {
        "function": "__html",
        "setup_tags": ["list", ["tag", 105, 0]],
        "once_per_event": true,
        "vtp_html": ["template", "\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var h=\"src|smprod|emc|smid|nl|partner|nrx|WT.mc_id|oc|CMP|mc|meid\",l=new RegExp(\"\\\\|(\"+h+\")\\x3d\",\"g\"),m=function(a){return function(c,b){var f=a.indexOf(c),e=a.indexOf(b);return f\u003Ee?1:f\u003Ce?-1:0}}(h.split(\"|\")),n=function(a,f){var b={campaignSource:a,campaignMedium:\"notifications\",campaignContent:c(f,\"msgid\")};\"sms\"===a.toLowerCase()\u0026\u0026(b.campaignName=f.subid);return b},c=function(a,c,b){return\"object\"===typeof a\u0026\u0026a.hasOwnProperty(c)?a[c]:b?b:\"\"},k=function(a){if(!a)return{};a=decodeURI(a);\ntry{return a='{\"'+a.replace(\/[\u0026]+\/g,\"\\x26\").replace(\/([\\?\u0026][^=]+)([\u0026]|$)\/g,\"$1\\x3d$2\").replace(\/(^\\?|\u0026$)\/g,\"\").replace(\/\u0026\/g,'\",\"').replace(\/=\/g,'\":\"')+'\"}',JSON.parse(a)}catch(f){return{}}};h=function(){var a,f=", ["escape", ["macro", 21], 8, 16], ",b={},g=", ["escape", ["macro", 31], 8, 16], ";var e=document.location.search||\"\";if(g\u0026\u0026\/.*\\.nytimes\\.com\/.test(g)||!e)return b;var d=k(e);if(a=e.replace(\/\\?|\u0026\/g,\"|\").match(l)){a=a.map(function(a){return a.replace(\/[\\|=]\/g,\"\")}).sort(m);d=k(e);b.campaignName=c(d,\"subid\");b.campaignContent=\nc(d,\"subid1\");b.campaignKeyword=c(d,\"subid2\")||c(d,\"ad-keywords\");e=a.shift();\"src\"===e\u0026\u0026\"safaripush\"!==c(d,e)\u0026\u0026\"sms\"!==c(d,e)\u0026\u0026(e=a.shift());if(\"smprod\"===e\u0026\u0026\"eta1\"===c(d,\"emc\")||\"emc\"===e\u0026\u0026\"eta1\"!==c(d,e)\u0026\u0026\"edit_na\"!==c(d,e)||\"smid\"===e\u0026\u0026\"\"!==c(d,\"nrx\"))e=a.shift();\"mc\"===e\u0026\u0026\"\"===c(d,\"mcid\")\u0026\u0026(e=a.shift());if(e)switch(a=c(d,e),e){case \"src\":b=n(a,d);break;case \"nl\":b={campaignSource:a,campaignMedium:\"email\",campaignName:c(d,\"emc\"),campaignContent:c(d,\"em_pos\")};break;case \"smid\":b={campaignSource:a,\ncampaignMedium:\"social\",campaignName:c(d,\"smtyp\"),campaignContent:c(d,\"smvar\")};break;case \"smprod\":b={campaignSource:function(){if(g){var a=g.match(\/https?:\\\/\\\/([^\/]*)\/);return a?a[1]:g}return\"nyt-fb-native-external-iframe\"===f?\"m.facebook.com\":\"null\"}(),campaignMedium:\"social\",campaignName:c(d,\"smid\"),campaignContent:a};break;case \"partner\":b.campaignSource=a;b.campaignMedium=\"rss\"===a.toLowerCase()?\"RSS\":\"partner\";break;case \"emc\":b=\"edit_na\"===a?{campaignName:c(d,\"emc\"),campaignContent:c(d,\"empos\"),\ncampaignSource:\"Breaking News\",campaignMedium:\"email\"}:{campaignSource:\"nytnow\",campaignMedium:\"email share\",campaignName:\"share tool\"};break;case \"nrx\":b.campaignSource=a;b.campaignMedium=\"Vanity URL\";break;case \"WT.mc_id\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"oc\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"CMP\":b.campaignSource=a;b.campaignMedium=\"Marketing Campaigns\";break;case \"mc\":b.campaignSource=c(d,\"mcid\");b.campaignMedium=a;break;\ncase \"meid\":b.campaignSource=a,b.campaignMedium=\"marketing email\",b.campaignName=c(d,\"moc\"),b.campaignContent=c(d,\"rid\"),b.campaignKeyword=c(d,\"dt\")}}return b};nytAnalytics=window.nytAnalytics||{};nytAnalytics.campaignMap=h()})();\u003C\/script\u003E"],
        "vtp_supportDocumentWrite": false,
        "vtp_enableIframeMode": false,
        "vtp_enableEditJsMacroBehavior": false,
        "tag_id": 66
      }],
      "predicates": [{"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.historyChange"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "gtm.js"
      }, {"function": "_eq", "arg0": ["macro", 5], "arg1": "track"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "scrollComplete"
      }, {"function": "_sw", "arg0": ["macro", 6], "arg1": "out"}, {
        "function": "_re",
        "arg0": ["macro", 7],
        "arg1": "^.{5}s"
      }, {"function": "_eq", "arg0": ["macro", 8], "arg1": "\/section\/learning"}, {
        "function": "_re",
        "arg0": ["macro", 7],
        "arg1": "^.{4}e"
      }, {"function": "_re", "arg0": ["macro", 7], "arg1": "^.{4}p"}, {
        "function": "_re",
        "arg0": ["macro", 0],
        "arg1": ".*"
      }, {
        "function": "_re",
        "arg0": ["macro", 9],
        "arg1": "\\w+\\%40\\w+\\.\\w+|\\w+\\@\\w+\\.\\w+"
      }, {"function": "_eq", "arg0": ["macro", 14], "arg1": "true"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "moduleInteraction"
      }, {"function": "_sw", "arg0": ["macro", 8], "arg1": "\/real-estate\/"}, {
        "function": "_re",
        "arg0": ["macro", 8],
        "arg1": "^\\\/(games|crosswords|puzzles)\\\/.*wordle"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "videoEvent"}, {
        "function": "_re",
        "arg0": ["macro", 8],
        "arg1": "^\\\/(real-estate|paidpost)\\\/"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "mediaEvent"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "pageDataReady"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gaScrollEvent"}, {
        "function": "_eq",
        "arg0": ["macro", 418],
        "arg1": "1"
      }, {"function": "_eq", "arg0": ["macro", 419], "arg1": "1"}, {
        "function": "_eq",
        "arg0": ["macro", 421],
        "arg1": "event"
      }, {"function": "_re", "arg0": ["macro", 0], "arg1": "gaEvent"}, {
        "function": "_eq",
        "arg0": ["macro", 11],
        "arg1": "newsletters"
      }, {"function": "_eq", "arg0": ["macro", 391], "arg1": "subscribe"}, {
        "function": "_eq",
        "arg0": ["macro", 435],
        "arg1": "undefined"
      }, {"function": "_eq", "arg0": ["macro", 11], "arg1": "gateway"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "impression"
      }, {"function": "_eq", "arg0": ["macro", 438], "arg1": "true"}, {
        "function": "_eq",
        "arg0": ["macro", 8],
        "arg1": "\/share"
      }, {"function": "_cn", "arg0": ["macro", 395], "arg1": "referral-advocate-landing-page"}, {
        "function": "_eq",
        "arg0": ["macro", 8],
        "arg1": "\/newsletters\/morning-briefing"
      }, {
        "function": "_ew",
        "arg0": ["macro", 8],
        "arg1": "\/podcasts\/daily-newsletter-quarantine-virus.html"
      }, {"function": "_eq", "arg0": ["macro", 8], "arg1": "\/news-event\/coronavirus"}, {
        "function": "_cn",
        "arg0": ["macro", 90],
        "arg1": "The Daily"
      }, {"function": "_cn", "arg0": ["macro", 420], "arg1": "\/the-daily"}, {
        "function": "_cn",
        "arg0": ["macro", 420],
        "arg1": "universal\/introducing-father-soldier-son-a-film-from-the-times-and-netflix.html"
      }, {"function": "_cn", "arg0": ["macro", 403], "arg1": "user-play"}, {
        "function": "_cn",
        "arg0": ["macro", 8],
        "arg1": "podcasts\/nice-white-parents-serial"
      }, {"function": "_cn", "arg0": ["macro", 439], "arg1": "playing"}, {
        "function": "_re",
        "arg0": ["macro", 440],
        "arg1": "Via.*(Apple Podcasts|Spotify|Google)"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.linkClick"}, {
        "function": "_re",
        "arg0": ["macro", 441],
        "arg1": "(^$|((^|,)2703797_1249($|,)))"
      }, {"function": "_re", "arg0": ["macro", 441], "arg1": "(^$|((^|,)2703797_1251($|,)))"}, {
        "function": "_re",
        "arg0": ["macro", 441],
        "arg1": "(^$|((^|,)2703797_1252($|,)))"
      }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "opinion\/sway-kara"}, {
        "function": "_re",
        "arg0": ["macro", 440],
        "arg1": "Apple Podcasts|Spotify|Google|Stitcher"
      }, {"function": "_re", "arg0": ["macro", 441], "arg1": "(^$|((^|,)2703797_1259($|,)))"}, {
        "function": "_cn",
        "arg0": ["macro", 8],
        "arg1": "\/newsletters\/coronavirus-schools-briefing"
      }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "\/spotlight\/podcasts"}, {
        "function": "_cn",
        "arg0": ["macro", 8],
        "arg1": "books\/review\/podcast"
      }, {"function": "_cn", "arg0": ["macro", 8], "arg1": "modern-love-podcast"}, {
        "function": "_cn",
        "arg0": ["macro", 8],
        "arg1": "podcasts\/still-processing"
      }, {
        "function": "_re",
        "arg0": ["macro", 8],
        "arg1": "((podcasts|column)\/.*rabbit-hole)|rabbit-hole-podcast"
      }, {"function": "_cn", "arg0": ["macro", 11], "arg1": "live_events_modal"}, {
        "function": "_cn",
        "arg0": ["macro", 396],
        "arg1": "rsvp-success"
      }, {"function": "_eq", "arg0": ["macro", 442], "arg1": "true"}, {
        "function": "_eq",
        "arg0": ["macro", 455],
        "arg1": "commentsContainer"
      }, {"function": "_eq", "arg0": ["macro", 456], "arg1": "commentsContainer"}, {
        "function": "_re",
        "arg0": ["macro", 462],
        "arg1": "module|card|block|ad|package|item",
        "ignore_case": true
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "heartbeat"}, {
        "function": "_eq",
        "arg0": ["macro", 478],
        "arg1": "1"
      }, {"function": "_gt", "arg0": ["macro", 479], "arg1": "0"}, {
        "function": "_sw",
        "arg0": ["macro", 480],
        "arg1": "myaccount"
      }, {"function": "_eq", "arg0": ["macro", 501], "arg1": "1"}, {
        "function": "_eq",
        "arg0": ["macro", 462],
        "arg1": "slideshow"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "allocation"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "trackVirtualPage"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "ab-expose"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "ab-alloc"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "beforeunload"}, {
        "function": "_re",
        "arg0": ["macro", 530],
        "arg1": "http.+"
      }, {"function": "_eq", "arg0": ["macro", 531], "arg1": "1"}, {
        "function": "_re",
        "arg0": ["macro", 441],
        "arg1": "(^$|((^|,)2703797_1331($|,)))"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "gtm.load"}, {
        "function": "_eq",
        "arg0": ["macro", 8],
        "arg1": "\/interactive\/2020\/08\/27\/arts\/design\/jackson-heights-queens-virtual-walk-tour.html"
      }, {
        "function": "_eq",
        "arg0": ["macro", 8],
        "arg1": "\/interactive\/2020\/10\/12\/style\/faze-3d-house-tour.html"
      }, {"function": "_eq", "arg0": ["macro", 0], "arg1": "send-direct"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "performance"
      }, {"function": "_cn", "arg0": ["macro", 480], "arg1": "myaccount.nytimes.com"}, {
        "function": "_sw",
        "arg0": ["macro", 8],
        "arg1": "\/crosswords\/game\/mini"
      }, {"function": "_re", "arg0": ["macro", 0], "arg1": "moduleInteraction"}, {
        "function": "_cn",
        "arg0": ["macro", 420],
        "arg1": "\/crosswords\/game\/mini"
      }, {"function": "_re", "arg0": ["macro", 0], "arg1": "ora.load"}, {
        "function": "_re",
        "arg0": ["macro", 0],
        "arg1": "pageDataReady"
      }, {"function": "_sw", "arg0": ["macro", 8], "arg1": "\/games"}, {
        "function": "_sw",
        "arg0": ["macro", 8],
        "arg1": "\/crosswords"
      }, {
        "function": "_re",
        "arg0": ["macro", 530],
        "arg1": "https:\\\/\\\/(?:\\w+\\.)?nytimes.com\\\/",
        "ignore_case": true
      }, {"function": "_re", "arg0": ["macro", 441], "arg1": "(^$|((^|,)2703797_1316($|,)))"}, {
        "function": "_eq",
        "arg0": ["macro", 0],
        "arg1": "sendPageUpdate"
      }],
      "rules": [[["if", 0], ["add", 4, 58, 63]], [["if", 1], ["add", 4, 42, 0, 1, 3, 82, 85, 89, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56]], [["if", 2, 3], ["add", 4, 8]], [["if", 11, 12], ["add", 5]], [["if", 12, 13], ["add", 5]], [["if", 15], ["add", 6, 71]], [["if", 16, 17], ["add", 6]], [["if", 18], ["add", 7, 10, 11, 39, 62, 65, 66, 67, 70, 72, 73, 80]], [["if", 19], ["add", 9]], [["if", 22, 23], ["add", 12]], [["if", 12, 24, 25], ["add", 13, 15, 18, 19, 76, 100]], [["if", 18], ["unless", 26], ["add", 14, 16, 22, 40, 57, 90, 98, 102, 103]], [["if", 27, 28], ["add", 17, 20, 21, 86]], [["if", 28, 29], ["add", 23]], [["if", 13, 28], ["add", 23]], [["if", 12, 30, 31], ["add", 24]], [["if", 12, 25, 32], ["add", 25]], [["if", 18, 33], ["add", 26]], [["if", 18, 34], ["add", 27]], [["if", 18, 35, 36], ["add", 28, 37]], [["if", 18, 37], ["add", 29]], [["if", 17, 38, 39, 40], ["add", 30]], [["if", 18, 39], ["add", 31, 37]], [["if", 39, 41, 42, 43], ["add", 32, 96]], [["if", 18, 46], ["add", 33, 37]], [["if", 42, 46, 47, 48], ["add", 34]], [["if", 17, 38, 40, 46], ["add", 35]], [["if", 12, 24, 25, 49], ["add", 36]], [["if", 18, 50], ["add", 37]], [["if", 18, 51], ["add", 37]], [["if", 18, 52], ["add", 37]], [["if", 18, 53], ["add", 37]], [["if", 18, 54], ["add", 37]], [["if", 12, 55, 56], ["add", 38]], [["if", 1], ["unless", 57], ["add", 41]], [["if", 12], ["add", 59]], [["if", 3], ["add", 60, 62]], [["if", 61], ["add", 61]], [["if", 12, 63], ["add", 64]], [["if", 28, 65], ["unless", 66], ["add", 68]], [["if", 12, 60], ["add", 69], ["block", 59]], [["if", 67], ["add", 74]], [["if", 68], ["add", 75, 3, 2]], [["if", 17], ["add", 77, 91]], [["if", 28, 66], ["add", 78]], [["if", 69], ["add", 79]], [["if", 70], ["add", 81]], [["if", 71], ["add", 83]], [["if", 42, 72, 73, 74], ["add", 83]], [["if", 75], ["add", 84]], [["if", 78], ["add", 87]], [["if", 79], ["add", 88]], [["if", 81, 82], ["add", 92]], [["if", 83, 84], ["add", 93]], [["if", 81, 85], ["add", 94]], [["if", 18, 86], ["unless", 26], ["add", 95]], [["if", 18, 87], ["unless", 26], ["add", 95]], [["if", 42, 88, 89], ["add", 97]], [["if", 84], ["unless", 26], ["add", 99]], [["if", 90], ["add", 101]], [["if", 1, 4], ["block", 4]], [["if", 0, 4], ["block", 4]], [["if", 1, 5], ["block", 4]], [["if", 0, 5], ["block", 4]], [["if", 1, 6], ["block", 4]], [["if", 0, 6], ["block", 4]], [["if", 0, 7], ["block", 4]], [["if", 0, 8], ["block", 4]], [["if", 1, 7], ["block", 4]], [["if", 1, 8], ["block", 4]], [["if", 4, 9], ["block", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 33, 35, 36, 37, 38, 39, 40, 57, 65, 66, 67, 71, 72, 76, 86, 90, 92, 93, 94, 95, 98, 99, 100, 102, 103]], [["if", 6, 9], ["block", 4, 8, 10, 15, 16, 18, 20, 21, 38, 57, 66, 67, 71, 72, 76, 86, 90, 100, 103]], [["if", 7, 9], ["block", 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 28, 29, 30, 31, 33, 35, 36, 37, 38, 39, 40, 57, 65, 66, 67, 71, 72, 76, 86, 90, 92, 93, 94, 95, 98, 99, 100, 102, 103]], [["if", 8, 9], ["block", 4, 8, 10, 15, 16, 18, 20, 21, 38, 57, 66, 67, 71, 72, 76, 86, 90, 95, 100, 102, 103]], [["if", 5, 9], ["block", 4, 8, 71, 72]], [["if", 9, 10], ["block", 5, 6, 7, 9, 11, 12, 13, 14, 17, 18, 23, 36, 39, 40]], [["if", 9, 14], ["block", 5, 6, 7, 9, 12, 22, 23]], [["if", 9, 20, 21], ["block", 10, 66, 67]], [["if", 4, 42, 44], ["block", 32, 34]], [["if", 7, 42, 45], ["block", 32, 34]], [["if", 0, 58], ["block", 58]], [["if", 0, 59], ["block", 58]], [["if", 9, 62], ["block", 62]], [["if", 9, 64], ["block", 65]], [["if", 75, 76], ["block", 84]], [["if", 75, 77], ["block", 84]], [["if", 7, 75], ["block", 84]], [["if", 64, 75], ["block", 84]], [["if", 1, 80], ["block", 89]], [["if", 1, 14], ["block", 89]]]
    },
    "runtime": [[50, "__twitter_website_tag", [46, "a"], [50, "h", [46], [41, "k"], [3, "k", ["c", "twq"]], [22, [15, "k"], [46, [36, [15, "k"]]]], ["g", "twq", [51, "", [7], [52, "m", ["c", "twq.exe.apply"]], [22, [15, "m"], [46, ["b", "twq.exe.apply", [45], [15, "arguments"]]], [46, ["b", "twq.queue.push", [15, "arguments"]]]]], true], ["g", "twq.version", "1", true], ["g", "twq.queue", [7], true], [52, "l", [51, "", [7]]], ["d", "https://static.ads-twitter.com/uwt.js", [15, "l"], [15, "l"], "twitter_website_tag"], [36, ["c", "twq"]]], [52, "b", ["require", "callInWindow"]], [52, "c", ["require", "copyFromWindow"]], [52, "d", ["require", "injectScript"]], [52, "e", ["require", "makeString"]], [52, "f", ["require", "makeTableMap"]], [52, "g", ["require", "setInWindow"]], [41, "i"], [3, "i", ["h"]], ["i", "init", ["e", [17, [15, "a"], "twitter_pixel_id"]]], [52, "j", ["f", [30, [17, [15, "a"], "event_parameters"], [7]], "param_table_key_column", "param_table_value_column"]], [22, [1, [15, "j"], [2, [15, "j"], "hasOwnProperty", [7, "content_ids"]]], [46, [53, [41, "k"], [3, "k", [16, [15, "j"], "content_ids"]], [3, "k", [2, [2, [15, "k"], "split", [7, "\""]], "join", [7, "'"]]], [41, "l"], [3, "l", [2, [2, [15, "k"], "slice", [7, [2, [15, "k"], "indexOf", [7, "["]], [2, [15, "k"], "indexOf", [7, "]"]]]], "split", [7, ","]]], [3, "l", [2, [15, "l"], "map", [7, [51, "", [7, "m"], [36, [30, [16, [2, [15, "m"], "split", [7, "'"]], 1], ""]]]]]], [43, [15, "j"], "content_ids", [15, "l"]]]]], ["i", "track", ["e", [17, [15, "a"], "event_type"]], [15, "j"]], [2, [15, "a"], "gtmOnSuccess", [7]]], [50, "__csm", [46, "a"], [41, "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "o"], [50, "l", [46, "p", "q"], [41, "r", "s", "t", "u"], [3, "r", ["f"]], [3, "s", [2, [30, [15, "q"], ""], "split", [7, "&"]]], [3, "q", ""], [3, "t", 0], [42, [23, [15, "t"], [17, [15, "s"], "length"]], [33, [15, "t"], [3, "t", [0, [15, "t"], 1]]], false, [46, [22, [16, [15, "s"], [15, "t"]], [46, [3, "u", [2, [16, [15, "s"], [15, "t"]], "split", [7, "="]]], [22, [16, [15, "u"], 0], [46, [3, "q", [0, [15, "q"], [0, [0, [0, "&", ["c", [16, [15, "u"], 0]]], "="], [39, [16, [15, "u"], 1], ["c", [16, [15, "u"], 1]], ""]]]]]]]]]], [36, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, [0, "https://sb.scorecardresearch.com/b?c1=2&c2=", ["c", [15, "p"]]], "&ns__t="], [15, "r"]], "&ns_c="], [30, ["i"], ""]], "&c8="], ["c", [30, ["j"], ""]]], [15, "q"]], "&c7="], ["c", ["g"]]], "&c9="], ["c", ["e"]]]]], [50, "m", [46, "p"], [41, "q"], [22, [18, [17, [15, "p"], "length"], 2048], [46, [3, "q", [2, [2, [15, "p"], "substring", [7, 0, 2040]], "lastIndexOf", [7, "&"]]], [3, "p", [0, [0, [2, [15, "p"], "substring", [7, 0, [15, "q"]]], "&ns_cut="], ["c", [2, [15, "p"], "substring", [7, [0, [15, "q"], 1]]]]]], [3, "p", [2, [15, "p"], "substring", [7, 0, 2048]]]]], [36, [15, "p"]]], [50, "n", [46], [41, "p"], [3, "p", [0, [0, "https://sb.scorecardresearch.com/c2/", ["c", [17, [15, "a"], "clientId"]]], "/cs.js"]], ["h", [15, "p"], [17, [15, "a"], "gtmOnSuccess"], [17, [15, "a"], "gtmOnFailure"]]], [3, "b", ["require", "callOnWindowLoad"]], [3, "c", ["require", "encodeUriComponent"]], [3, "d", ["require", "getCookieValues"]], [3, "e", ["require", "getReferrerUrl"]], [3, "f", ["require", "getTimestampMillis"]], [3, "g", ["require", "getUrl"]], [3, "h", ["require", "injectScript"]], [3, "i", ["require", "readCharacterSet"]], [3, "j", ["require", "readTitle"]], [3, "k", ["require", "sendPixel"]], [3, "o", [2, ["d", "comScore", true], "join", [7, "&"]]], ["k", ["m", ["l", [17, [15, "a"], "clientId"], [15, "o"]]]], ["b", [15, "n"]]]]
    ,
    "permissions": {
      "__twitter_website_tag": {
        "access_globals": {
          "keys": [{
            "key": "twq",
            "read": true,
            "write": true,
            "execute": true
          }, {"key": "twq.exe", "read": true, "write": true, "execute": true}, {
            "key": "twq.queue",
            "read": true,
            "write": true,
            "execute": true
          }, {"key": "twq.queue.push", "read": true, "write": true, "execute": true}, {
            "key": "twq.version",
            "read": true,
            "write": true,
            "execute": false
          }, {"key": "twq.exe.apply", "read": true, "write": true, "execute": true}]
        }, "inject_script": {"urls": ["https:\/\/static.ads-twitter.com\/uwt.js"]}
      },
      "__csm": {
        "send_pixel": {"urls": ["https:\/\/sb.scorecardresearch.com\/b?*"]},
        "inject_script": {"urls": ["https:\/\/sb.scorecardresearch.com\/c2\/*"]},
        "get_cookies": {"cookieAccess": "any"},
        "get_url": {"urlParts": "any"},
        "get_referrer": {"urlParts": "any"},
        "read_character_set": {},
        "read_title": {},
        "process_dom_events": {"targets": [{"targetType": "window", "eventName": "load"}]}
      }
    }

    ,
    "security_groups": {
      "nonGoogleScripts": ["__twitter_website_tag", "__csm"]
    }

  };

  var productSettings = {
    "AW-1008590664": {"preAutoPii": true},
    "AW-1055525830": {"preAutoPii": true}
  };


  /*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
  var l, aa = function (a) {
    var b = 0;
    return function () {
      return b < a.length ? {done: !1, value: a[b++]} : {done: !0}
    }
  }, ca = function (a) {
    return a.raw = a
  }, da = function (a) {
    var b = "undefined" != typeof Symbol && Symbol.iterator && a[Symbol.iterator];
    return b ? b.call(a) : {next: aa(a)}
  }, ea = "function" == typeof Object.create ? Object.create : function (a) {
    var b = function () {
    };
    b.prototype = a;
    return new b
  }, fa;
  if ("function" == typeof Object.setPrototypeOf) fa = Object.setPrototypeOf; else {
    var ha;
    a:{
      var ia = {a: !0}, ja = {};
      try {
        ja.__proto__ = ia;
        ha = ja.a;
        break a
      } catch (a) {
      }
      ha = !1
    }
    fa = ha ? function (a, b) {
      a.__proto__ = b;
      if (a.__proto__ !== b) throw new TypeError(a + " is not extensible");
      return a
    } : null
  }
  var ka = fa, la = function (a, b) {
    a.prototype = ea(b.prototype);
    a.prototype.constructor = a;
    if (ka) ka(a, b); else for (var c in b) if ("prototype" != c) if (Object.defineProperties) {
      var d = Object.getOwnPropertyDescriptor(b, c);
      d && Object.defineProperty(a, c, d)
    } else a[c] = b[c];
    a.Zk = b.prototype
  }, ma = this || self, na = function (a) {
    return a
  };
  var oa = function (a, b) {
    this.g = a;
    this.o = b
  };
  var pa = function (a) {
    return "number" === typeof a && 0 <= a && isFinite(a) && 0 === a % 1 || "string" === typeof a && "-" !== a[0] && a === "" + parseInt(a, 10)
  }, qa = function () {
    this.C = {};
    this.s = !1;
    this.I = {}
  }, ra = function (a, b) {
    var c = [], d;
    for (d in a.C) if (a.C.hasOwnProperty(d)) switch (d = d.substr(5), b) {
      case 1:
        c.push(d);
        break;
      case 2:
        c.push(a.get(d));
        break;
      case 3:
        c.push([d, a.get(d)])
    }
    return c
  };
  qa.prototype.get = function (a) {
    return this.C["dust." + a]
  };
  qa.prototype.set = function (a, b) {
    this.s || (a = "dust." + a, this.I.hasOwnProperty(a) || (this.C[a] = b))
  };
  qa.prototype.has = function (a) {
    return this.C.hasOwnProperty("dust." + a)
  };
  var sa = function (a, b) {
    b = "dust." + b;
    a.s || a.I.hasOwnProperty(b) || delete a.C[b]
  };
  qa.prototype.Jb = function () {
    this.s = !0
  };
  var ta = function (a) {
    this.o = new qa;
    this.g = [];
    this.s = !1;
    a = a || [];
    for (var b in a) a.hasOwnProperty(b) && (pa(b) ? this.g[Number(b)] = a[Number(b)] : this.o.set(b, a[b]))
  };
  l = ta.prototype;
  l.toString = function (a) {
    if (a && 0 <= a.indexOf(this)) return "";
    for (var b = [], c = 0; c < this.g.length; c++) {
      var d = this.g[c];
      null === d || void 0 === d ? b.push("") : d instanceof ta ? (a = a || [], a.push(this), b.push(d.toString(a)), a.pop()) : b.push(d.toString())
    }
    return b.join(",")
  };
  l.set = function (a, b) {
    if (!this.s) if ("length" === a) {
      if (!pa(b)) throw Error("RangeError: Length property must be a valid integer.");
      this.g.length = Number(b)
    } else pa(a) ? this.g[Number(a)] = b : this.o.set(a, b)
  };
  l.get = function (a) {
    return "length" === a ? this.length() : pa(a) ? this.g[Number(a)] : this.o.get(a)
  };
  l.length = function () {
    return this.g.length
  };
  l.Ib = function () {
    for (var a = ra(this.o, 1), b = 0; b < this.g.length; b++) a.push(b + "");
    return new ta(a)
  };
  var va = function (a, b) {
    pa(b) ? delete a.g[Number(b)] : sa(a.o, b)
  };
  l = ta.prototype;
  l.pop = function () {
    return this.g.pop()
  };
  l.push = function (a) {
    return this.g.push.apply(this.g, Array.prototype.slice.call(arguments))
  };
  l.shift = function () {
    return this.g.shift()
  };
  l.splice = function (a, b, c) {
    return new ta(this.g.splice.apply(this.g, arguments))
  };
  l.unshift = function (a) {
    return this.g.unshift.apply(this.g, Array.prototype.slice.call(arguments))
  };
  l.has = function (a) {
    return pa(a) && this.g.hasOwnProperty(a) || this.o.has(a)
  };
  l.Jb = function () {
    this.s = !0;
    Object.freeze(this.g);
    this.o.Jb()
  };
  var wa = function () {
    function a(f, g) {
      if (b[f]) {
        if (b[f].ee + g > b[f].max) throw Error("Quota exceeded");
        b[f].ee += g
      }
    }

    var b = {}, c = void 0, d = void 0, e = {
      Zj: function (f) {
        c = f
      }, hh: function () {
        c && a(c, 1)
      }, bk: function (f) {
        d = f
      }, Kb: function (f) {
        d && a(d, f)
      }, Bk: function (f, g) {
        b[f] = b[f] || {ee: 0};
        b[f].max = g
      }, zj: function (f) {
        return b[f] && b[f].ee || 0
      }, reset: function () {
        b = {}
      }, kj: a
    };
    e.onFnConsume = e.Zj;
    e.consumeFn = e.hh;
    e.onStorageConsume = e.bk;
    e.consumeStorage = e.Kb;
    e.setMax = e.Bk;
    e.getConsumed = e.zj;
    e.reset = e.reset;
    e.consume = e.kj;
    return e
  };
  var za = function (a, b) {
    this.s = a;
    this.R = function (c, d, e) {
      return c.apply(d, e)
    };
    this.C = b;
    this.o = new qa;
    this.g = this.I = void 0
  };
  za.prototype.add = function (a, b) {
    Aa(this, a, b, !1)
  };
  var Aa = function (a, b, c, d) {
    if (!a.o.s) if (a.s.Kb(("string" === typeof b ? b.length : 1) + ("string" === typeof c ? c.length : 1)), d) {
      var e = a.o;
      e.set(b, c);
      e.I["dust." + b] = !0
    } else a.o.set(b, c)
  };
  za.prototype.set = function (a, b) {
    this.o.s || (!this.o.has(a) && this.C && this.C.has(a) ? this.C.set(a, b) : (this.s.Kb(("string" === typeof a ? a.length : 1) + ("string" === typeof b ? b.length : 1)), this.o.set(a, b)))
  };
  za.prototype.get = function (a) {
    return this.o.has(a) ? this.o.get(a) : this.C ? this.C.get(a) : void 0
  };
  za.prototype.has = function (a) {
    return !!this.o.has(a) || !(!this.C || !this.C.has(a))
  };
  var Ba = function (a) {
    var b = new za(a.s, a);
    a.I && (b.I = a.I);
    b.R = a.R;
    b.g = a.g;
    return b
  };
  var Ca = function () {
    }, Da = function (a) {
      return "function" === typeof a
    }, m = function (a) {
      return "string" === typeof a
    }, Ea = function (a) {
      return "number" === typeof a && !isNaN(a)
    }, Fa = Array.isArray, Ga = function (a, b) {
      if (a && Fa(a)) for (var c = 0; c < a.length; c++) if (a[c] && b(a[c])) return a[c]
    }, Ha = function (a, b) {
      if (!Ea(a) || !Ea(b) || a > b) a = 0, b = 2147483647;
      return Math.floor(Math.random() * (b - a + 1) + a)
    }, Ka = function (a, b) {
      for (var c = new Ia, d = 0; d < a.length; d++) c.set(a[d], !0);
      for (var e = 0; e < b.length; e++) if (c.get(b[e])) return !0;
      return !1
    }, La = function (a,
                      b) {
      for (var c in a) Object.prototype.hasOwnProperty.call(a, c) && b(c, a[c])
    }, Ma = function (a) {
      return !!a && ("[object Arguments]" === Object.prototype.toString.call(a) || Object.prototype.hasOwnProperty.call(a, "callee"))
    }, Na = function (a) {
      return Math.round(Number(a)) || 0
    }, Oa = function (a) {
      return "false" === String(a).toLowerCase() ? !1 : !!a
    }, Pa = function (a) {
      var b = [];
      if (Fa(a)) for (var c = 0; c < a.length; c++) b.push(String(a[c]));
      return b
    }, Qa = function (a) {
      return a ? a.replace(/^\s+|\s+$/g, "") : ""
    }, Ra = function () {
      return new Date(Date.now())
    },
    Sa = function () {
      return Ra().getTime()
    }, Ia = function () {
      this.prefix = "gtm.";
      this.values = {}
    };
  Ia.prototype.set = function (a, b) {
    this.values[this.prefix + a] = b
  };
  Ia.prototype.get = function (a) {
    return this.values[this.prefix + a]
  };
  var Ta = function (a, b, c) {
    return a && a.hasOwnProperty(b) ? a[b] : c
  }, Ua = function (a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = void 0;
        try {
          c()
        } catch (d) {
        }
      }
    }
  }, Wa = function (a, b) {
    for (var c in b) b.hasOwnProperty(c) && (a[c] = b[c])
  }, Xa = function (a) {
    for (var b in a) if (a.hasOwnProperty(b)) return !0;
    return !1
  }, Ya = function (a, b) {
    for (var c = [], d = 0; d < a.length; d++) c.push(a[d]), c.push.apply(c, b[a[d]] || []);
    return c
  }, Za = function (a, b) {
    var c = z;
    b = b || [];
    for (var d = c, e = 0; e < a.length - 1; e++) {
      if (!d.hasOwnProperty(a[e])) return;
      d = d[a[e]];
      if (0 <=
        b.indexOf(d)) return
    }
    return d
  }, $a = function (a, b) {
    for (var c = {}, d = c, e = a.split("."), f = 0; f < e.length - 1; f++) d = d[e[f]] = {};
    d[e[e.length - 1]] = b;
    return c
  }, ab = /^\w{1,9}$/, bb = function (a, b) {
    a = a || {};
    b = b || ",";
    var c = [];
    La(a, function (d, e) {
      ab.test(d) && e && c.push(d)
    });
    return c.join(b)
  }, cb = function (a, b) {
    function c() {
      ++d === b && (e(), e = null, c.done = !0)
    }

    var d = 0, e = a;
    c.done = !1;
    return c
  };
  var db = function (a, b) {
    qa.call(this);
    this.R = a;
    this.Za = b
  };
  la(db, qa);
  db.prototype.toString = function () {
    return this.R
  };
  db.prototype.Ib = function () {
    return new ta(ra(this, 1))
  };
  db.prototype.g = function (a, b) {
    a.s.hh();
    return this.Za.apply(new eb(this, a), Array.prototype.slice.call(arguments, 1))
  };
  db.prototype.o = function (a, b) {
    try {
      return this.g.apply(this, Array.prototype.slice.call(arguments, 0))
    } catch (c) {
    }
  };
  var gb = function (a, b) {
    for (var c, d = 0; d < b.length && !(c = fb(a, b[d]), c instanceof oa); d++) ;
    return c
  }, fb = function (a, b) {
    try {
      var c = a.get(String(b[0]));
      if (!(c && c instanceof db)) throw Error("Attempting to execute non-function " + b[0] + ".");
      return c.g.apply(c, [a].concat(b.slice(1)))
    } catch (e) {
      var d = a.I;
      d && d(e, b.context ? {id: b[0], line: b.context.line} : null);
      throw e;
    }
  }, eb = function (a, b) {
    this.o = a;
    this.g = b
  }, H = function (a, b) {
    return Fa(b) ? fb(a.g, b) : b
  }, I = function (a) {
    return a.o.R
  };
  var hb = function () {
    qa.call(this)
  };
  la(hb, qa);
  hb.prototype.Ib = function () {
    return new ta(ra(this, 1))
  };
  var ib = {
    control: function (a, b) {
      return new oa(a, H(this, b))
    }, fn: function (a, b, c) {
      var d = this.g, e = H(this, b);
      if (!(e instanceof ta)) throw Error("Error: non-List value given for Fn argument names.");
      var f = Array.prototype.slice.call(arguments, 2);
      this.g.s.Kb(a.length + f.length);
      return new db(a, function () {
        return function (g) {
          var h = Ba(d);
          void 0 === h.g && (h.g = this.g.g);
          for (var k = Array.prototype.slice.call(arguments, 0), n = 0; n < k.length; n++) if (k[n] = H(this, k[n]), k[n] instanceof oa) return k[n];
          for (var p = e.get("length"), q =
            0; q < p; q++) q < k.length ? h.add(e.get(q), k[q]) : h.add(e.get(q), void 0);
          h.add("arguments", new ta(k));
          var r = gb(h, f);
          if (r instanceof oa) return "return" === r.g ? r.o : r
        }
      }())
    }, list: function (a) {
      var b = this.g.s;
      b.Kb(arguments.length);
      for (var c = new ta, d = 0; d < arguments.length; d++) {
        var e = H(this, arguments[d]);
        "string" === typeof e && b.Kb(e.length ? e.length - 1 : 0);
        c.push(e)
      }
      return c
    }, map: function (a) {
      for (var b = this.g.s, c = new hb, d = 0; d < arguments.length - 1; d += 2) {
        var e = H(this, arguments[d]) + "", f = H(this, arguments[d + 1]), g = e.length;
        g += "string" ===
        typeof f ? f.length : 1;
        b.Kb(g);
        c.set(e, f)
      }
      return c
    }, undefined: function () {
    }
  };
  var jb = function () {
    this.s = wa();
    this.g = new za(this.s)
  }, kb = function (a, b, c) {
    var d = new db(b, c);
    d.Jb();
    a.g.set(b, d)
  }, lb = function (a, b, c) {
    ib.hasOwnProperty(b) && kb(a, c || b, ib[b])
  };
  jb.prototype.execute = function (a, b) {
    var c = Array.prototype.slice.call(arguments, 0);
    return this.o(c)
  };
  jb.prototype.o = function (a) {
    for (var b, c = 0; c < arguments.length; c++) b = fb(this.g, arguments[c]);
    return b
  };
  jb.prototype.C = function (a, b) {
    var c = Ba(this.g);
    c.g = a;
    for (var d, e = 1; e < arguments.length; e++) d = d = fb(c, arguments[e]);
    return d
  };
  var mb, nb = function () {
    if (void 0 === mb) {
      var a = null, b = ma.trustedTypes;
      if (b && b.createPolicy) {
        try {
          a = b.createPolicy("goog#html", {createHTML: na, createScript: na, createScriptURL: na})
        } catch (c) {
          ma.console && ma.console.error(c.message)
        }
        mb = a
      } else mb = a
    }
    return mb
  };
  var pb = function (a, b) {
    this.g = b === ob ? a : ""
  };
  pb.prototype.toString = function () {
    return this.g + ""
  };
  var qb = function (a) {
    return a instanceof pb && a.constructor === pb ? a.g : "type_error:TrustedResourceUrl"
  }, ob = {}, rb = function (a) {
    var b = nb(), c = b ? b.createScriptURL(a) : a;
    return new pb(c, ob)
  };
  var sb = /^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;

  function tb() {
    var a = ma.navigator;
    if (a) {
      var b = a.userAgent;
      if (b) return b
    }
    return ""
  }

  function ub(a) {
    return -1 != tb().indexOf(a)
  };var vb = {}, wb = function (a, b, c) {
    this.g = c === vb ? a : ""
  };
  wb.prototype.toString = function () {
    return this.g.toString()
  };
  var xb = function (a) {
    return a instanceof wb && a.constructor === wb ? a.g : "type_error:SafeHtml"
  }, yb = function (a) {
    var b = nb(), c = b ? b.createHTML(a) : a;
    return new wb(c, null, vb)
  };/*

 SPDX-License-Identifier: Apache-2.0
*/
  var zb = {};
  var Ab = function () {
  }, Bb = function (a) {
    this.g = a
  };
  la(Bb, Ab);
  Bb.prototype.toString = function () {
    return this.g
  };

  function Cb(a, b) {
    var c = [new Bb(Db[0].toLowerCase(), zb)];
    if (0 === c.length) throw Error("No prefixes are provided");
    var d = c.map(function (f) {
      var g;
      if (f instanceof Bb) g = f.g; else throw Error("");
      return g
    }), e = b.toLowerCase();
    if (d.every(function (f) {
      return 0 !== e.indexOf(f)
    })) throw Error('Attribute "' + b + '" does not match any of the allowed prefixes.');
    a.setAttribute(b, "true")
  }

  function Eb(a) {
    if ("script" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeScript.");
    if ("style" === a.tagName.toLowerCase()) throw Error("Use setTextContent with a SafeStyleSheet.");
  };var z = window, J = document, Fb = navigator, Gb = J.currentScript && J.currentScript.src, Hb = function (a, b) {
      var c = z[a];
      z[a] = void 0 === c ? b : c;
      return z[a]
    }, Ib = function (a, b) {
      b && (a.addEventListener ? a.onload = b : a.onreadystatechange = function () {
        a.readyState in {loaded: 1, complete: 1} && (a.onreadystatechange = null, b())
      })
    }, Jb = {async: 1, nonce: 1, onerror: 1, onload: 1, src: 1, type: 1},
    Kb = {onload: 1, src: 1, width: 1, height: 1, style: 1};

  function Lb(a, b, c) {
    b && La(b, function (d, e) {
      d = d.toLowerCase();
      c.hasOwnProperty(d) || a.setAttribute(d, e)
    })
  }

  var Mb = function (a, b, c, d) {
    var e = J.createElement("script");
    Lb(e, d, Jb);
    e.type = "text/javascript";
    e.async = !0;
    var f = rb(a);
    e.src = qb(f);
    var g, h, k,
      n = null == (k = (h = (e.ownerDocument && e.ownerDocument.defaultView || window).document).querySelector) ? void 0 : k.call(h, "script[nonce]");
    (g = n ? n.nonce || n.getAttribute("nonce") || "" : "") && e.setAttribute("nonce", g);
    Ib(e, b);
    c && (e.onerror = c);
    var p = J.getElementsByTagName("script")[0] || J.body || J.head;
    p.parentNode.insertBefore(e, p);
    return e
  }, Nb = function () {
    if (Gb) {
      var a = Gb.toLowerCase();
      if (0 === a.indexOf("https://")) return 2;
      if (0 === a.indexOf("http://")) return 3
    }
    return 1
  }, Ob = function (a, b, c, d, e) {
    var f = e, g = !1;
    f || (f = J.createElement("iframe"), g = !0);
    Lb(f, c, Kb);
    d && La(d, function (k, n) {
      f.dataset[k] = n
    });
    f.height = "0";
    f.width = "0";
    f.style.display = "none";
    f.style.visibility = "hidden";
    if (g) {
      var h = J.body && J.body.lastChild || J.body || J.head;
      h.parentNode.insertBefore(f, h)
    }
    Ib(f, b);
    void 0 !== a && (f.src = a);
    return f
  }, Pb = function (a, b, c) {
    var d = new Image(1, 1);
    d.onload = function () {
      d.onload = null;
      b && b()
    };
    d.onerror =
      function () {
        d.onerror = null;
        c && c()
      };
    d.src = a;
    return d
  }, Qb = function (a, b, c, d) {
    a.addEventListener ? a.addEventListener(b, c, !!d) : a.attachEvent && a.attachEvent("on" + b, c)
  }, Rb = function (a, b, c) {
    a.removeEventListener ? a.removeEventListener(b, c, !1) : a.detachEvent && a.detachEvent("on" + b, c)
  }, K = function (a) {
    z.setTimeout(a, 0)
  }, Sb = function (a, b) {
    return a && b && a.attributes && a.attributes[b] ? a.attributes[b].value : null
  }, Tb = function (a) {
    var b = a.innerText || a.textContent || "";
    b && " " != b && (b = b.replace(/^[\s\xa0]+|[\s\xa0]+$/g, ""));
    b &&
    (b = b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g, " "));
    return b
  }, Ub = function (a) {
    var b = J.createElement("div"), c = b, d = yb("A<div>" + a + "</div>");
    void 0 !== c.tagName && Eb(c);
    c.innerHTML = d instanceof wb ? xb(d) : xb(d);
    b = b.lastChild;
    for (var e = []; b.firstChild;) e.push(b.removeChild(b.firstChild));
    return e
  }, Vb = function (a, b, c) {
    c = c || 100;
    for (var d = {}, e = 0; e < b.length; e++) d[b[e]] = !0;
    for (var f = a, g = 0; f && g <= c; g++) {
      if (d[String(f.tagName).toLowerCase()]) return f;
      f = f.parentElement
    }
    return null
  }, Wb = function (a) {
    var b;
    try {
      b = Fb.sendBeacon &&
        Fb.sendBeacon(a)
    } catch (c) {
    }
    b || Pb(a)
  }, Zb = function (a, b) {
    var c = a[b];
    c && "string" === typeof c.animVal && (c = c.animVal);
    return c
  }, $b = function (a) {
    var b = J.featurePolicy;
    return b && Da(b.allowsFeature) ? b.allowsFeature(a) : !1
  };
  var ac = function (a, b) {
    return H(this, a) && H(this, b)
  }, bc = function (a, b) {
    return H(this, a) === H(this, b)
  }, cc = function (a, b) {
    return H(this, a) || H(this, b)
  }, dc = function (a, b) {
    a = H(this, a);
    b = H(this, b);
    return -1 < String(a).indexOf(String(b))
  }, ec = function (a, b) {
    a = String(H(this, a));
    b = String(H(this, b));
    return a.substring(0, b.length) === b
  }, fc = function (a, b) {
    a = H(this, a);
    b = H(this, b);
    switch (a) {
      case "pageLocation":
        var c = z.location.href;
        b instanceof hb && b.get("stripProtocol") && (c = c.replace(/^https?:\/\//, ""));
        return c
    }
  };
  var hc = function () {
    this.g = new jb;
    gc(this)
  };
  hc.prototype.execute = function (a) {
    return this.g.o(a)
  };
  var gc = function (a) {
    lb(a.g, "map");
    var b = function (c, d) {
      kb(a.g, c, d)
    };
    b("and", ac);
    b("contains", dc);
    b("equals", bc);
    b("or", cc);
    b("startsWith", ec);
    b("variable", fc)
  };
  var ic = function (a) {
    if (a instanceof ic) return a;
    this.cb = a
  };
  ic.prototype.toString = function () {
    return String(this.cb)
  };
  var kc = function (a) {
    qa.call(this);
    this.g = a;
    this.set("then", jc(this));
    this.set("catch", jc(this, !0));
    this.set("finally", jc(this, !1, !0))
  };
  la(kc, hb);
  var jc = function (a, b, c) {
    b = void 0 === b ? !1 : b;
    c = void 0 === c ? !1 : c;
    return new db("", function (d, e) {
      b && (e = d, d = void 0);
      c && (e = d);
      d instanceof db || (d = void 0);
      e instanceof db || (e = void 0);
      var f = Ba(this.g), g = function (k) {
        return function (n) {
          return c ? (k.g(f), a.g) : k.g(f, n)
        }
      }, h = a.g.then(d && g(d), e && g(e));
      return new kc(h)
    })
  };/*
 jQuery (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
  var lc = /\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/, mc = function (a) {
    if (null == a) return String(a);
    var b = lc.exec(Object.prototype.toString.call(Object(a)));
    return b ? b[1].toLowerCase() : "object"
  }, nc = function (a, b) {
    return Object.prototype.hasOwnProperty.call(Object(a), b)
  }, oc = function (a) {
    if (!a || "object" != mc(a) || a.nodeType || a == a.window) return !1;
    try {
      if (a.constructor && !nc(a, "constructor") && !nc(a.constructor.prototype, "isPrototypeOf")) return !1
    } catch (c) {
      return !1
    }
    for (var b in a) ;
    return void 0 ===
      b || nc(a, b)
  }, pc = function (a, b) {
    var c = b || ("array" == mc(a) ? [] : {}), d;
    for (d in a) if (nc(a, d)) {
      var e = a[d];
      "array" == mc(e) ? ("array" != mc(c[d]) && (c[d] = []), c[d] = pc(e, c[d])) : oc(e) ? (oc(c[d]) || (c[d] = {}), c[d] = pc(e, c[d])) : c[d] = e
    }
    return c
  };
  var rc = function (a, b, c) {
    var d = [], e = [], f = function (h, k) {
      for (var n = ra(h, 1), p = 0; p < n.length; p++) k[n[p]] = g(h.get(n[p]))
    }, g = function (h) {
      var k = d.indexOf(h);
      if (-1 < k) return e[k];
      if (h instanceof ta) {
        var n = [];
        d.push(h);
        e.push(n);
        for (var p = h.Ib(), q = 0; q < p.length(); q++) n[p.get(q)] = g(h.get(p.get(q)));
        return n
      }
      if (h instanceof kc) return h.g;
      if (h instanceof hb) {
        var r = {};
        d.push(h);
        e.push(r);
        f(h, r);
        return r
      }
      if (h instanceof db) {
        var u = function () {
          for (var v = Array.prototype.slice.call(arguments, 0), x = 0; x < v.length; x++) v[x] = qc(v[x],
            b, c);
          var y = b ? b.s : wa(), w = new za(y);
          b && (w.g = b.g);
          return g(h.g.apply(h, [w].concat(v)))
        };
        d.push(h);
        e.push(u);
        f(h, u);
        return u
      }
      var t = !1;
      switch (c) {
        case 1:
          t = !0;
          break;
        case 2:
          t = !1;
          break;
        case 3:
          t = !1;
          break;
        default:
      }
      if (h instanceof ic && t) return h.cb;
      switch (typeof h) {
        case "boolean":
        case "number":
        case "string":
        case "undefined":
          return h;
        case "object":
          if (null === h) return null
      }
    };
    return g(a)
  }, qc = function (a,
                    b, c) {
    var d = [], e = [], f = function (h, k) {
      for (var n in h) h.hasOwnProperty(n) && k.set(n, g(h[n]))
    }, g = function (h) {
      var k = d.indexOf(h);
      if (-1 < k) return e[k];
      if (Fa(h) || Ma(h)) {
        var n = new ta([]);
        d.push(h);
        e.push(n);
        for (var p in h) h.hasOwnProperty(p) && n.set(p, g(h[p]));
        return n
      }
      if (oc(h)) {
        var q = new hb;
        d.push(h);
        e.push(q);
        f(h, q);
        return q
      }
      if ("function" === typeof h) {
        var r = new db("", function (w) {
          for (var A = Array.prototype.slice.call(arguments, 0), B = 0; B < A.length; B++) A[B] = rc(H(this, A[B]), b, c);
          return g((0, this.g.R)(h, h, A))
        });
        d.push(h);
        e.push(r);
        f(h, r);
        return r
      }
      var x = typeof h;
      if (null === h || "string" === x || "number" === x || "boolean" === x) return h;
      var y = !1;
      switch (c) {
        case 1:
          y =
            !0;
          break;
        case 2:
          y = !1;
          break;
        default:
      }
      if (void 0 !== h && y) return new ic(h)
    };
    return g(a)
  };
  var sc = function (a) {
    for (var b = [], c = 0; c < a.length(); c++) a.has(c) && (b[c] = a.get(c));
    return b
  }, tc = function (a) {
    if (void 0 === a || Fa(a) || oc(a)) return !0;
    switch (typeof a) {
      case "boolean":
      case "number":
      case "string":
      case "function":
        return !0
    }
    return !1
  };
  var uc = {
    supportedMethods: "concat every filter forEach hasOwnProperty indexOf join lastIndexOf map pop push reduce reduceRight reverse shift slice some sort splice unshift toString".split(" "),
    concat: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      for (var e = 1; e < arguments.length; e++) if (arguments[e] instanceof ta) for (var f = arguments[e], g = 0; g < f.length(); g++) c.push(f.get(g)); else c.push(arguments[e]);
      return new ta(c)
    },
    every: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() &&
      d < c; d++) if (this.has(d) && !b.g(a, this.get(d), d, this)) return !1;
      return !0
    },
    filter: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && b.g(a, this.get(e), e, this) && d.push(this.get(e));
      return new ta(d)
    },
    forEach: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) this.has(d) && b.g(a, this.get(d), d, this)
    },
    hasOwnProperty: function (a, b) {
      return this.has(b)
    },
    indexOf: function (a, b, c) {
      var d = this.length(), e = void 0 === c ? 0 : Number(c);
      0 > e && (e = Math.max(d + e, 0));
      for (var f = e; f < d; f++) if (this.has(f) &&
        this.get(f) === b) return f;
      return -1
    },
    join: function (a, b) {
      for (var c = [], d = 0; d < this.length(); d++) c.push(this.get(d));
      return c.join(b)
    },
    lastIndexOf: function (a, b, c) {
      var d = this.length(), e = d - 1;
      void 0 !== c && (e = 0 > c ? d + c : Math.min(c, e));
      for (var f = e; 0 <= f; f--) if (this.has(f) && this.get(f) === b) return f;
      return -1
    },
    map: function (a, b) {
      for (var c = this.length(), d = [], e = 0; e < this.length() && e < c; e++) this.has(e) && (d[e] = b.g(a, this.get(e), e, this));
      return new ta(d)
    },
    pop: function () {
      return this.pop()
    },
    push: function (a, b) {
      return this.push.apply(this,
        Array.prototype.slice.call(arguments, 1))
    },
    reduce: function (a, b, c) {
      var d = this.length(), e, f = 0;
      if (void 0 !== c) e = c; else {
        if (0 === d) throw Error("TypeError: Reduce on List with no elements.");
        for (var g = 0; g < d; g++) if (this.has(g)) {
          e = this.get(g);
          f = g + 1;
          break
        }
        if (g === d) throw Error("TypeError: Reduce on List with no elements.");
      }
      for (var h = f; h < d; h++) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e
    },
    reduceRight: function (a, b, c) {
      var d = this.length(), e, f = d - 1;
      if (void 0 !== c) e = c; else {
        if (0 === d) throw Error("TypeError: ReduceRight on List with no elements.");
        for (var g = 1; g <= d; g++) if (this.has(d - g)) {
          e = this.get(d - g);
          f = d - (g + 1);
          break
        }
        if (g > d) throw Error("TypeError: ReduceRight on List with no elements.");
      }
      for (var h = f; 0 <= h; h--) this.has(h) && (e = b.g(a, e, this.get(h), h, this));
      return e
    },
    reverse: function () {
      for (var a = sc(this), b = a.length - 1, c = 0; 0 <= b; b--, c++) a.hasOwnProperty(b) ? this.set(c, a[b]) : va(this, c);
      return this
    },
    shift: function () {
      return this.shift()
    },
    slice: function (a, b, c) {
      var d = this.length();
      void 0 === b && (b = 0);
      b = 0 > b ? Math.max(d + b, 0) : Math.min(b, d);
      c = void 0 === c ? d : 0 > c ?
        Math.max(d + c, 0) : Math.min(c, d);
      c = Math.max(b, c);
      for (var e = [], f = b; f < c; f++) e.push(this.get(f));
      return new ta(e)
    },
    some: function (a, b) {
      for (var c = this.length(), d = 0; d < this.length() && d < c; d++) if (this.has(d) && b.g(a, this.get(d), d, this)) return !0;
      return !1
    },
    sort: function (a, b) {
      var c = sc(this);
      void 0 === b ? c.sort() : c.sort(function (e, f) {
        return Number(b.g(a, e, f))
      });
      for (var d = 0; d < c.length; d++) c.hasOwnProperty(d) ? this.set(d, c[d]) : va(this, d);
      return this
    },
    splice: function (a, b, c, d) {
      return this.splice.apply(this, Array.prototype.splice.call(arguments,
        1, arguments.length - 1))
    },
    toString: function () {
      return this.toString()
    },
    unshift: function (a, b) {
      return this.unshift.apply(this, Array.prototype.slice.call(arguments, 1))
    }
  };
  var vc = "charAt concat indexOf lastIndexOf match replace search slice split substring toLowerCase toLocaleLowerCase toString toUpperCase toLocaleUpperCase trim".split(" "),
    wc = new oa("break"), xc = new oa("continue"), yc = function (a, b) {
      return H(this, a) + H(this, b)
    }, zc = function (a, b) {
      return H(this, a) && H(this, b)
    }, Ac = function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      if (!(c instanceof ta)) throw Error("Error: Non-List argument given to Apply instruction.");
      if (null === a || void 0 === a) throw Error("TypeError: Can't read property " +
        b + " of " + a + ".");
      var d = "number" === typeof a;
      if ("boolean" === typeof a || d) {
        if ("toString" === b) {
          if (d && c.length()) {
            var e = rc(c.get(0));
            try {
              return a.toString(e)
            } catch (q) {
            }
          }
          return a.toString()
        }
        throw Error("TypeError: " + a + "." + b + " is not a function.");
      }
      if ("string" === typeof a) {
        if (0 <= vc.indexOf(b)) {
          var f = rc(c);
          return qc(a[b].apply(a, f), this.g)
        }
        throw Error("TypeError: " + b + " is not a function");
      }
      if (a instanceof ta) {
        if (a.has(b)) {
          var g = a.get(b);
          if (g instanceof db) {
            var h = sc(c);
            h.unshift(this.g);
            return g.g.apply(g, h)
          }
          throw Error("TypeError: " +
            b + " is not a function");
        }
        if (0 <= uc.supportedMethods.indexOf(b)) {
          var k = sc(c);
          k.unshift(this.g);
          return uc[b].apply(a, k)
        }
      }
      if (a instanceof db || a instanceof hb) {
        if (a.has(b)) {
          var n = a.get(b);
          if (n instanceof db) {
            var p = sc(c);
            p.unshift(this.g);
            return n.g.apply(n, p)
          }
          throw Error("TypeError: " + b + " is not a function");
        }
        if ("toString" === b) return a instanceof db ? a.R : a.toString();
        if ("hasOwnProperty" === b) return a.has.apply(a, sc(c))
      }
      if (a instanceof ic && "toString" === b) return a.toString();
      throw Error("TypeError: Object has no '" +
        b + "' property.");
    }, Bc = function (a, b) {
      a = H(this, a);
      if ("string" !== typeof a) throw Error("Invalid key name given for assignment.");
      var c = this.g;
      if (!c.has(a)) throw Error("Attempting to assign to undefined value " + b);
      var d = H(this, b);
      c.set(a, d);
      return d
    }, Dc = function (a) {
      var b = Ba(this.g), c = gb(b, Array.prototype.slice.apply(arguments));
      if (c instanceof oa) return c
    }, Ec = function () {
      return wc
    }, Fc = function (a) {
      for (var b = H(this, a), c = 0; c < b.length; c++) {
        var d = H(this, b[c]);
        if (d instanceof oa) return d
      }
    }, Gc = function (a) {
      for (var b =
        this.g, c = 0; c < arguments.length - 1; c += 2) {
        var d = arguments[c];
        if ("string" === typeof d) {
          var e = H(this, arguments[c + 1]);
          Aa(b, d, e, !0)
        }
      }
    }, Hc = function () {
      return xc
    }, Ic = function (a, b, c) {
      var d = new ta;
      b = H(this, b);
      for (var e = 0; e < b.length; e++) d.push(b[e]);
      var f = [51, a, d].concat(Array.prototype.splice.call(arguments, 2, arguments.length - 2));
      this.g.add(a, H(this, f))
    }, Jc = function (a, b) {
      return H(this, a) / H(this, b)
    }, Kc = function (a, b) {
      a = H(this, a);
      b = H(this, b);
      var c = a instanceof ic, d = b instanceof ic;
      return c || d ? c && d ? a.cb == b.cb : !1 : a ==
        b
    }, Lc = function (a) {
      for (var b, c = 0; c < arguments.length; c++) b = H(this, arguments[c]);
      return b
    };

  function Mc(a, b, c, d) {
    for (var e = 0; e < b(); e++) {
      var f = a(c(e)), g = gb(f, d);
      if (g instanceof oa) {
        if ("break" === g.g) break;
        if ("return" === g.g) return g
      }
    }
  }

  function Nc(a, b, c) {
    if ("string" === typeof b) return Mc(a, function () {
      return b.length
    }, function (f) {
      return f
    }, c);
    if (b instanceof hb || b instanceof ta || b instanceof db) {
      var d = b.Ib(), e = d.length();
      return Mc(a, function () {
        return e
      }, function (f) {
        return d.get(f)
      }, c)
    }
  }

  var Oc = function (a, b, c) {
    a = H(this, a);
    b = H(this, b);
    c = H(this, c);
    var d = this.g;
    return Nc(function (e) {
      d.set(a, e);
      return d
    }, b, c)
  }, Pc = function (a, b, c) {
    a = H(this, a);
    b = H(this, b);
    c = H(this, c);
    var d = this.g;
    return Nc(function (e) {
      var f = Ba(d);
      Aa(f, a, e, !0);
      return f
    }, b, c)
  }, Qc = function (a, b, c) {
    a = H(this, a);
    b = H(this, b);
    c = H(this, c);
    var d = this.g;
    return Nc(function (e) {
      var f = Ba(d);
      f.add(a, e);
      return f
    }, b, c)
  }, Sc = function (a, b, c) {
    a = H(this, a);
    b = H(this, b);
    c = H(this, c);
    var d = this.g;
    return Rc(function (e) {
      d.set(a, e);
      return d
    }, b, c)
  }, Tc =
    function (a, b, c) {
      a = H(this, a);
      b = H(this, b);
      c = H(this, c);
      var d = this.g;
      return Rc(function (e) {
        var f = Ba(d);
        Aa(f, a, e, !0);
        return f
      }, b, c)
    }, Uc = function (a, b, c) {
    a = H(this, a);
    b = H(this, b);
    c = H(this, c);
    var d = this.g;
    return Rc(function (e) {
      var f = Ba(d);
      f.add(a, e);
      return f
    }, b, c)
  };

  function Rc(a, b, c) {
    if ("string" === typeof b) return Mc(a, function () {
      return b.length
    }, function (d) {
      return b[d]
    }, c);
    if (b instanceof ta) return Mc(a, function () {
      return b.length()
    }, function (d) {
      return b.get(d)
    }, c);
    throw new TypeError("The value is not iterable.");
  }

  var Vc = function (a, b, c, d) {
    function e(p, q) {
      for (var r = 0; r < f.length(); r++) {
        var u = f.get(r);
        q.add(u, p.get(u))
      }
    }

    var f = H(this, a);
    if (!(f instanceof ta)) throw Error("TypeError: Non-List argument given to ForLet instruction.");
    var g = this.g;
    d = H(this, d);
    var h = Ba(g);
    for (e(g, h); fb(h, b);) {
      var k = gb(h, d);
      if (k instanceof oa) {
        if ("break" === k.g) break;
        if ("return" === k.g) return k
      }
      var n = Ba(g);
      e(h, n);
      fb(n, c);
      h = n
    }
  }, Wc = function (a) {
    a = H(this, a);
    var b = this.g, c = !1;
    if (c && !b.has(a)) throw new ReferenceError(a + " is not defined.");
    return b.get(a)
  }, Xc = function (a, b) {
    var c;
    a = H(this, a);
    b = H(this, b);
    if (void 0 === a || null === a) throw Error("TypeError: cannot access property of " + a + ".");
    if (a instanceof hb || a instanceof ta || a instanceof db) c = a.get(b); else if ("string" === typeof a) "length" === b ? c = a.length : pa(b) && (c = a[b]); else if (a instanceof ic) return;
    return c
  }, Yc = function (a, b) {
    return H(this, a) > H(this,
      b)
  }, Zc = function (a, b) {
    return H(this, a) >= H(this, b)
  }, $c = function (a, b) {
    a = H(this, a);
    b = H(this, b);
    a instanceof ic && (a = a.cb);
    b instanceof ic && (b = b.cb);
    return a === b
  }, ad = function (a, b) {
    return !$c.call(this, a, b)
  }, bd = function (a, b, c) {
    var d = [];
    H(this, a) ? d = H(this, b) : c && (d = H(this, c));
    var e = gb(this.g, d);
    if (e instanceof oa) return e
  }, ed = function (a, b) {
    return H(this, a) < H(this, b)
  }, fd = function (a, b) {
    return H(this, a) <= H(this, b)
  }, gd = function (a, b) {
    return H(this, a) % H(this, b)
  }, hd = function (a, b) {
    return H(this, a) * H(this, b)
  }, id = function (a) {
    return -H(this,
      a)
  }, jd = function (a) {
    return !H(this, a)
  }, kd = function (a, b) {
    return !Kc.call(this, a, b)
  }, ld = function () {
    return null
  }, md = function (a, b) {
    return H(this, a) || H(this, b)
  }, nd = function (a, b) {
    var c = H(this, a);
    H(this, b);
    return c
  }, od = function (a) {
    return H(this, a)
  }, pd = function (a) {
    return Array.prototype.slice.apply(arguments)
  }, qd = function (a) {
    return new oa("return", H(this, a))
  }, rd = function (a, b, c) {
    a = H(this, a);
    b = H(this, b);
    c = H(this, c);
    if (null === a || void 0 === a) throw Error("TypeError: Can't set property " + b + " of " + a + ".");
    (a instanceof
      db || a instanceof ta || a instanceof hb) && a.set(b, c);
    return c
  }, sd = function (a, b) {
    return H(this, a) - H(this, b)
  }, td = function (a, b, c) {
    a = H(this, a);
    var d = H(this, b), e = H(this, c);
    if (!Fa(d) || !Fa(e)) throw Error("Error: Malformed switch instruction.");
    for (var f, g = !1, h = 0; h < d.length; h++) if (g || a === H(this, d[h])) if (f = H(this, e[h]), f instanceof oa) {
      var k = f.g;
      if ("break" === k) return;
      if ("return" === k || "continue" === k) return f
    } else g = !0;
    if (e.length === d.length + 1 && (f = H(this, e[e.length - 1]), f instanceof oa && ("return" === f.g || "continue" ===
      f.g))) return f
  }, ud = function (a, b, c) {
    return H(this, a) ? H(this, b) : H(this, c)
  }, vd = function (a) {
    a = H(this, a);
    return a instanceof db ? "function" : typeof a
  }, wd = function (a) {
    for (var b = this.g, c = 0; c < arguments.length; c++) {
      var d = arguments[c];
      "string" !== typeof d || b.add(d, void 0)
    }
  }, xd = function (a, b, c, d) {
    var e = H(this, d);
    if (H(this, c)) {
      var f = gb(this.g, e);
      if (f instanceof oa) {
        if ("break" === f.g) return;
        if ("return" === f.g) return f
      }
    }
    for (; H(this, a);) {
      var g = gb(this.g, e);
      if (g instanceof oa) {
        if ("break" === g.g) break;
        if ("return" === g.g) return g
      }
      H(this,
        b)
    }
  }, yd = function (a) {
    return ~Number(H(this, a))
  }, zd = function (a, b) {
    return Number(H(this, a)) << Number(H(this, b))
  }, Cd = function (a, b) {
    return Number(H(this, a)) >> Number(H(this, b))
  }, Dd = function (a, b) {
    return Number(H(this, a)) >>> Number(H(this, b))
  }, Ed = function (a, b) {
    return Number(H(this, a)) & Number(H(this, b))
  }, Fd = function (a, b) {
    return Number(H(this, a)) ^ Number(H(this, b))
  }, Gd = function (a, b) {
    return Number(H(this, a)) | Number(H(this, b))
  };
  var Id = function () {
    this.g = new jb;
    Hd(this)
  };
  Id.prototype.execute = function (a) {
    return Jd(this.g.o(a))
  };
  var Kd = function (a, b, c) {
    return Jd(a.g.C(b, c))
  }, Hd = function (a) {
    var b = function (d, e) {
      lb(a.g, d, String(e))
    };
    b("control", 49);
    b("fn", 51);
    b("list", 7);
    b("map", 8);
    b("undefined", 44);
    var c = function (d, e) {
      kb(a.g, String(d), e)
    };
    c(0, yc);
    c(1, zc);
    c(2, Ac);
    c(3, Bc);
    c(53, Dc);
    c(4, Ec);
    c(5, Fc);
    c(52, Gc);
    c(6, Hc);
    c(9, Fc);
    c(50, Ic);
    c(10, Jc);
    c(12, Kc);
    c(13, Lc);
    c(47, Oc);
    c(54, Pc);
    c(55, Qc);
    c(63, Vc);
    c(64, Sc);
    c(65, Tc);
    c(66, Uc);
    c(15, Wc);
    c(16, Xc);
    c(17, Xc);
    c(18, Yc);
    c(19, Zc);
    c(20, $c);
    c(21, ad);
    c(22, bd);
    c(23, ed);
    c(24, fd);
    c(25, gd);
    c(26, hd);
    c(27,
      id);
    c(28, jd);
    c(29, kd);
    c(45, ld);
    c(30, md);
    c(32, nd);
    c(33, nd);
    c(34, od);
    c(35, od);
    c(46, pd);
    c(36, qd);
    c(43, rd);
    c(37, sd);
    c(38, td);
    c(39, ud);
    c(40, vd);
    c(41, wd);
    c(42, xd);
    c(58, yd);
    c(57, zd);
    c(60, Cd);
    c(61, Dd);
    c(56, Ed);
    c(62, Fd);
    c(59, Gd)
  };

  function Jd(a) {
    if (a instanceof oa || a instanceof db || a instanceof ta || a instanceof hb || a instanceof ic || null === a || void 0 === a || "string" === typeof a || "number" === typeof a || "boolean" === typeof a) return a
  };var Ld = function () {
    var a = function (b) {
      return {
        toString: function () {
          return b
        }
      }
    };
    return {
      ai: a("consent"),
      Ae: a("consent_always_fire"),
      bg: a("convert_case_to"),
      cg: a("convert_false_to"),
      dg: a("convert_null_to"),
      eg: a("convert_true_to"),
      fg: a("convert_undefined_to"),
      Lk: a("debug_mode_metadata"),
      Hb: a("function"),
      hf: a("instance_name"),
      Pi: a("live_only"),
      Qi: a("malware_disabled"),
      Ri: a("metadata"),
      Wi: a("original_activity_id"),
      Qk: a("original_vendor_template_id"),
      Pk: a("once_on_load"),
      Vi: a("once_per_event"),
      Ng: a("once_per_load"),
      Rk: a("priority_override"),
      Sk: a("respected_consent_types"),
      Tg: a("setup_tags"),
      Vg: a("tag_id"),
      Wg: a("teardown_tags")
    }
  }();
  var Md = [], Nd = {
    "\x00": "&#0;",
    '"': "&quot;",
    "&": "&amp;",
    "'": "&#39;",
    "<": "&lt;",
    ">": "&gt;",
    "\t": "&#9;",
    "\n": "&#10;",
    "\v": "&#11;",
    "\f": "&#12;",
    "\r": "&#13;",
    " ": "&#32;",
    "-": "&#45;",
    "/": "&#47;",
    "=": "&#61;",
    "`": "&#96;",
    "\u0085": "&#133;",
    "\u00a0": "&#160;",
    "\u2028": "&#8232;",
    "\u2029": "&#8233;"
  }, Od = function (a) {
    return Nd[a]
  }, Pd = /[\x00\x22\x26\x27\x3c\x3e]/g;
  var Td = /[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g, Ud = {
    "\x00": "\\x00",
    "\b": "\\x08",
    "\t": "\\t",
    "\n": "\\n",
    "\v": "\\x0b",
    "\f": "\\f",
    "\r": "\\r",
    '"': "\\x22",
    "&": "\\x26",
    "'": "\\x27",
    "/": "\\/",
    "<": "\\x3c",
    "=": "\\x3d",
    ">": "\\x3e",
    "\\": "\\\\",
    "\u0085": "\\x85",
    "\u2028": "\\u2028",
    "\u2029": "\\u2029",
    $: "\\x24",
    "(": "\\x28",
    ")": "\\x29",
    "*": "\\x2a",
    "+": "\\x2b",
    ",": "\\x2c",
    "-": "\\x2d",
    ".": "\\x2e",
    ":": "\\x3a",
    "?": "\\x3f",
    "[": "\\x5b",
    "]": "\\x5d",
    "^": "\\x5e",
    "{": "\\x7b",
    "|": "\\x7c",
    "}": "\\x7d"
  }, Vd = function (a) {
    return Ud[a]
  };
  Md[7] = function (a) {
    return String(a).replace(Td, Vd)
  };
  Md[8] = function (a) {
    if (null == a) return " null ";
    switch (typeof a) {
      case "boolean":
      case "number":
        return " " + a + " ";
      default:
        return "'" + String(String(a)).replace(Td, Vd) + "'"
    }
  };
  var ae = /['()]/g, be = function (a) {
    return "%" + a.charCodeAt(0).toString(16)
  };
  Md[12] = function (a) {
    var b =
      encodeURIComponent(String(a));
    ae.lastIndex = 0;
    return ae.test(b) ? b.replace(ae, be) : b
  };
  var ce = /[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,
    de = {
      "\x00": "%00",
      "\u0001": "%01",
      "\u0002": "%02",
      "\u0003": "%03",
      "\u0004": "%04",
      "\u0005": "%05",
      "\u0006": "%06",
      "\u0007": "%07",
      "\b": "%08",
      "\t": "%09",
      "\n": "%0A",
      "\v": "%0B",
      "\f": "%0C",
      "\r": "%0D",
      "\u000e": "%0E",
      "\u000f": "%0F",
      "\u0010": "%10",
      "\u0011": "%11",
      "\u0012": "%12",
      "\u0013": "%13",
      "\u0014": "%14",
      "\u0015": "%15",
      "\u0016": "%16",
      "\u0017": "%17",
      "\u0018": "%18",
      "\u0019": "%19",
      "\u001a": "%1A",
      "\u001b": "%1B",
      "\u001c": "%1C",
      "\u001d": "%1D",
      "\u001e": "%1E",
      "\u001f": "%1F",
      " ": "%20",
      '"': "%22",
      "'": "%27",
      "(": "%28",
      ")": "%29",
      "<": "%3C",
      ">": "%3E",
      "\\": "%5C",
      "{": "%7B",
      "}": "%7D",
      "\u007f": "%7F",
      "\u0085": "%C2%85",
      "\u00a0": "%C2%A0",
      "\u2028": "%E2%80%A8",
      "\u2029": "%E2%80%A9",
      "\uff01": "%EF%BC%81",
      "\uff03": "%EF%BC%83",
      "\uff04": "%EF%BC%84",
      "\uff06": "%EF%BC%86",
      "\uff07": "%EF%BC%87",
      "\uff08": "%EF%BC%88",
      "\uff09": "%EF%BC%89",
      "\uff0a": "%EF%BC%8A",
      "\uff0b": "%EF%BC%8B",
      "\uff0c": "%EF%BC%8C",
      "\uff0f": "%EF%BC%8F",
      "\uff1a": "%EF%BC%9A",
      "\uff1b": "%EF%BC%9B",
      "\uff1d": "%EF%BC%9D",
      "\uff1f": "%EF%BC%9F",
      "\uff20": "%EF%BC%A0",
      "\uff3b": "%EF%BC%BB",
      "\uff3d": "%EF%BC%BD"
    }, ee = function (a) {
      return de[a]
    };
  Md[16] = function (a) {
    return a
  };
  var ge;
  var he = [], ie = [], je = [], ke = [], le = [], me = {}, ne, oe, pe, re = function (a, b) {
    var c = {};
    c["function"] = "__" + a;
    for (var d in b) b.hasOwnProperty(d) && (c["vtp_" + d] = b[d]);
    return c
  }, se = function (a, b) {
    var c = a["function"], d = b && b.event;
    if (!c) throw Error("Error: No function name given for function call.");
    var e = me[c], f = {}, g;
    for (g in a) if (a.hasOwnProperty(g)) if (0 === g.indexOf("vtp_")) e && d && d.gh && d.gh(a[g]), f[void 0 !== e ? g : g.substr(4)] = a[g]; else if (g === Ld.Ae.toString() && a[g]) {
    }
    e && d && d.fh && (f.vtp_gtmCachedValues = d.fh);
    if (b) {
      if (null == b.name) {
        var h;
        a:{
          var k = b.index;
          if (null == k) h = ""; else {
            var n;
            switch (b.type) {
              case 2:
                n = he[k];
                break;
              case 1:
                n = ke[k];
                break;
              default:
                h = "";
                break a
            }
            var p = n && n[Ld.hf];
            h = p ? String(p) : ""
          }
        }
        b.name = h
      }
      e && (f.vtp_gtmEntityIndex = b.index, f.vtp_gtmEntityName = b.name)
    }
    return void 0 !== e ? e(f) : ge(c, f, b)
  }, ue = function (a, b, c) {
    c = c || [];
    var d = {}, e;
    for (e in a) a.hasOwnProperty(e) && (d[e] = te(a[e], b, c));
    return d
  }, te = function (a,
                    b, c) {
    if (Fa(a)) {
      var d;
      switch (a[0]) {
        case "function_id":
          return a[1];
        case "list":
          d = [];
          for (var e = 1; e < a.length; e++) d.push(te(a[e], b, c));
          return d;
        case "macro":
          var f = a[1];
          if (c[f]) return;
          var g = he[f];
          if (!g || b.Hf(g)) return;
          c[f] = !0;
          var h = String(g[Ld.hf]);
          try {
            var k = ue(g, b, c);
            k.vtp_gtmEventId = b.id;
            b.priorityId && (k.vtp_gtmPriorityId = b.priorityId);
            d = se(k, {event: b, index: f, type: 2, name: h});
            pe && (d = pe.lj(d, k))
          } catch (w) {
            b.zh && b.zh(w, Number(f), h), d = !1
          }
          c[f] = !1;
          return d;
        case "map":
          d = {};
          for (var n = 1; n < a.length; n += 2) d[te(a[n],
            b, c)] = te(a[n + 1], b, c);
          return d;
        case "template":
          d = [];
          for (var p = !1, q = 1; q < a.length; q++) {
            var r = te(a[q], b, c);
            oe && (p = p || r === oe.Td);
            d.push(r)
          }
          return oe && p ? oe.pj(d) : d.join("");
        case "escape":
          d = te(a[1], b, c);
          if (oe && Fa(a[1]) && "macro" === a[1][0] && oe.Lj(a)) return oe.hk(d);
          d = String(d);
          for (var u = 2; u < a.length; u++) Md[a[u]] && (d = Md[a[u]](d));
          return d;
        case "tag":
          var t = a[1];
          if (!ke[t]) throw Error("Unable to resolve tag reference " + t + ".");
          return d = {oh: a[2], index: t};
        case "zb":
          var v = {arg0: a[2], arg1: a[3], ignore_case: a[5]};
          v["function"] =
            a[1];
          var x = ve(v, b, c), y = !!a[4];
          return y || 2 !== x ? y !== (1 === x) : null;
        default:
          throw Error("Attempting to expand unknown Value type: " + a[0] + ".");
      }
    }
    return a
  }, ve = function (a, b, c) {
    try {
      return ne(ue(a, b, c))
    } catch (d) {
      JSON.stringify(a)
    }
    return 2
  };
  var we = function (a, b, c) {
    var d;
    d = Error.call(this);
    this.message = d.message;
    "stack" in d && (this.stack = d.stack);
    this.o = a;
    this.g = c
  };
  la(we, Error);

  function xe(a, b) {
    if (Fa(a)) {
      Object.defineProperty(a, "context", {value: {line: b[0]}});
      for (var c = 1; c < a.length; c++) xe(a[c], b[c])
    }
  };var ye = function (a, b) {
    var c;
    c = Error.call(this);
    this.message = c.message;
    "stack" in c && (this.stack = c.stack);
    this.ck = a;
    this.o = b;
    this.g = []
  };
  la(ye, Error);
  var Ae = function () {
    return function (a, b) {
      a instanceof ye || (a = new ye(a, ze));
      b && a.g.push(b);
      throw a;
    }
  };

  function ze(a) {
    if (!a.length) return a;
    a.push({id: "main", line: 0});
    for (var b = a.length - 1; 0 < b; b--) Ea(a[b].id) && a.splice(b++, 1);
    for (var c = a.length - 1; 0 < c; c--) a[c].line = a[c - 1].line;
    a.splice(0, 1);
    return a
  };var De = function (a) {
    function b(r) {
      for (var u = 0; u < r.length; u++) d[r[u]] = !0
    }

    for (var c = [], d = [], e = Be(a), f = 0; f < ie.length; f++) {
      var g = ie[f], h = Ce(g, e);
      if (h) {
        for (var k = g.add || [], n = 0; n < k.length; n++) c[k[n]] = !0;
        b(g.block || [])
      } else null === h && b(g.block || []);
    }
    for (var p = [], q = 0; q < ke.length; q++) c[q] && !d[q] && (p[q] = !0);
    return p
  }, Ce = function (a, b) {
    for (var c = a["if"] || [], d = 0; d < c.length; d++) {
      var e = b(c[d]);
      if (0 === e) return !1;
      if (2 === e) return null
    }
    for (var f =
      a.unless || [], g = 0; g < f.length; g++) {
      var h = b(f[g]);
      if (2 === h) return null;
      if (1 === h) return !1
    }
    return !0
  }, Be = function (a) {
    var b = [];
    return function (c) {
      void 0 === b[c] && (b[c] = ve(je[c], a));
      return b[c]
    }
  };
  var Ee = {
    lj: function (a, b) {
      b[Ld.bg] && "string" === typeof a && (a = 1 == b[Ld.bg] ? a.toLowerCase() : a.toUpperCase());
      b.hasOwnProperty(Ld.dg) && null === a && (a = b[Ld.dg]);
      b.hasOwnProperty(Ld.fg) && void 0 === a && (a = b[Ld.fg]);
      b.hasOwnProperty(Ld.eg) && !0 === a && (a = b[Ld.eg]);
      b.hasOwnProperty(Ld.cg) && !1 === a && (a = b[Ld.cg]);
      return a
    }
  };
  var Fe = function () {
    this.g = {}
  };

  function Ge(a, b, c, d) {
    if (a) for (var e = 0; e < a.length; e++) {
      var f = void 0, g = "A policy function denied the permission request";
      try {
        f = a[e].call(void 0, b, c, d), g += "."
      } catch (h) {
        g = "string" === typeof h ? g + (": " + h) : h instanceof Error ? g + (": " + h.message) : g + "."
      }
      if (!f) throw new we(c, d, g);
    }
  }

  function He(a, b, c) {
    return function () {
      var d = arguments[0];
      if (d) {
        var e = a.g[d], f = a.g.all;
        if (e || f) {
          var g = c.apply(void 0, Array.prototype.slice.call(arguments, 0));
          Ge(e, b, d, g);
          Ge(f, b, d, g)
        }
      }
    }
  };var Le = function () {
    var a = data.permissions || {}, b = Ie.J, c = this;
    this.o = new Fe;
    this.g = {};
    var d = {}, e = He(this.o, b, function () {
      var f = arguments[0];
      return f && d[f] ? d[f].apply(void 0, Array.prototype.slice.call(arguments, 0)) : {}
    });
    La(a, function (f, g) {
      var h = {};
      La(g, function (k, n) {
        var p = Je(k, n);
        h[k] = p.assert;
        d[k] || (d[k] = p.X)
      });
      c.g[f] = function (k, n) {
        var p = h[k];
        if (!p) throw Ke(k, {}, "The requested permission " + k + " is not configured.");
        var q = Array.prototype.slice.call(arguments, 0);
        p.apply(void 0, q);
        e.apply(void 0, q)
      }
    })
  }, Ne =
    function (a) {
      return Me.g[a] || function () {
      }
    };

  function Je(a, b) {
    var c = re(a, b);
    c.vtp_permissionName = a;
    c.vtp_createPermissionError = Ke;
    try {
      return se(c)
    } catch (d) {
      return {
        assert: function (e) {
          throw new we(e, {}, "Permission " + e + " is unknown.");
        }, X: function () {
          for (var e = {}, f = 0; f < arguments.length; ++f) e["arg" + (f + 1)] = arguments[f];
          return e
        }
      }
    }
  }

  function Ke(a, b, c) {
    return new we(a, b, c)
  };var Oe = !1;
  var Pe = {};
  Pe.Kk = Oa('false');
  Pe.sj = Oa('true');
  var Qe = Oe, Re = Pe.sj, Se = Pe.Kk;
  var hf = function (a, b) {
      return a.length && b.length && a.lastIndexOf(b) === a.length - b.length
    }, jf = function (a, b) {
      var c = "*" === b.charAt(b.length - 1) || "/" === b || "/*" === b;
      hf(b, "/*") && (b = b.slice(0, -2));
      hf(b, "?") && (b = b.slice(0, -1));
      var d = b.split("*");
      if (!c && 1 === d.length) return a === d[0];
      for (var e = -1, f = 0; f < d.length; f++) {
        var g = d[f];
        if (g) {
          e = a.indexOf(g, e);
          if (-1 === e || 0 === f && 0 !== e) return !1;
          e += g.length
        }
      }
      if (c || e === a.length) return !0;
      var h = d[d.length - 1];
      return a.lastIndexOf(h) === a.length - h.length
    }, kf = /^[a-z0-9-]+$/i, lf = /^https:\/\/(\*\.|)((?:[a-z0-9-]+\.)+[a-z0-9-]+)\/(.*)$/i,
    nf = function (a, b) {
      var c;
      if (!(c = !mf(a))) {
        var d;
        a:{
          var e = a.hostname.split(".");
          if (2 > e.length) d = !1; else {
            for (var f = 0; f < e.length; f++) if (!kf.exec(e[f])) {
              d = !1;
              break a
            }
            d = !0
          }
        }
        c = !d
      }
      if (c) return !1;
      for (var g = 0; g < b.length; g++) {
        var h;
        var k = a, n = b[g];
        if (!lf.exec(n)) throw Error("Invalid Wildcard");
        var p = n.slice(8), q = p.slice(0, p.indexOf("/")), r;
        var u = k.hostname, t = q;
        if (0 !== t.indexOf("*.")) r = u.toLowerCase() === t.toLowerCase(); else {
          t = t.slice(2);
          var v = u.toLowerCase().indexOf(t.toLowerCase());
          r = -1 === v ? !1 : u.length === t.length ?
            !0 : u.length !== t.length + v ? !1 : "." === u[v - 1]
        }
        if (r) {
          var x = p.slice(p.indexOf("/"));
          h = jf(k.pathname + k.search, x) ? !0 : !1
        } else h = !1;
        if (h) return !0
      }
      return !1
    }, mf = function (a) {
      return "https:" === a.protocol && (!a.port || "443" === a.port)
    };
  var of = /^([a-z][a-z0-9]*):(!|\?)(\*|string|boolean|number|Fn|DustMap|List|OpaqueValue)$/i,
    pf = {Fn: "function", DustMap: "Object", List: "Array"}, O = function (a, b, c) {
      for (var d = 0; d < b.length; d++) {
        var e = of.exec(b[d]);
        if (!e) throw Error("Internal Error in " + a);
        var f = e[1], g = "!" === e[2], h = e[3], k = c[d];
        if (null == k) {
          if (g) throw Error("Error in " + a + ". Required argument " + f + " not supplied.");
        } else if ("*" !== h) {
          var n = typeof k;
          k instanceof db ? n = "Fn" : k instanceof ta ? n = "List" : k instanceof hb ? n = "DustMap" : k instanceof ic && (n = "OpaqueValue");
          if (n != h) throw Error("Error in " + a + ". Argument " + f + " has type " + (pf[n] || n) + ", which does not match required type " + (pf[h] || h) + ".");
        }
      }
    };

  function qf(a) {
    if (a instanceof hb) return a.toString();
    if (a instanceof ta) return "[" + a.toString() + "]";
    if (a instanceof db) return a.toString() + "()";
    if (m(a)) return '"' + a + '"';
    return "" + a
  }

  function rf(a, b) {
    var c = [];
    var d = [], e = [], f = function () {
      return 0 === e.length ? "" : "Property " + e.join(".") + ": "
    }, g = function (h, k) {
      if (0 <= d.indexOf(k)) c.push(f() + "Expected value contained a cycle."); else if (h !== k) if (k instanceof ta) if (h instanceof ta) if (h.length() !== k.length()) c.push(f() + "Expected array to contain " + k.length() + " item(s), actually " + h.length() + "."); else for (var n = 0; n < k.length(); n++) e.push(n), d.push(k), g(h.get(n), k.get(n)), d.pop(), e.pop(); else c.push(f() + "Expected to be an array, actually " +
        qf(h) + "."); else if (k instanceof hb) if (h instanceof hb) {
        for (var p = ra(h, 1), q = {}, r = 0; r < p.length; r++) q[p[r]] = !0;
        for (var u = ra(k, 1), t = [], v = 0; v < u.length; v++) {
          var x = u[v];
          q[x] ? (t.push(x), q[x] = !1) : c.push(f() + 'Expected property "' + x + '" was not found in actual.')
        }
        for (var y = 0; y < p.length; y++) q[p[y]] && c.push(f() + 'Unexpected property "' + p[y] + '" found in actual.');
        for (var w = 0; w < t.length; w++) {
          var A = t[w];
          e.push(A);
          d.push(k);
          g(h.get(A), k.get(A));
          d.pop();
          e.pop()
        }
      } else c.push(f() + "Expected to be an object, actually " +
        qf(h) + "."); else c.push(f() + "Expected " + qf(k) + ", actually " + qf(h) + ".")
    };
    g(a, b);
    return c
  };var sf = function (a, b) {
    var c = new db(a, function () {
      for (var d = Array.prototype.slice.call(arguments, 0), e = 0; e < d.length; e++) d[e] = H(this, d[e]);
      var f = this.g.g;
      f && f.Ra && (f.Ra.bd[a] = f.Ra.bd[a] || [], f.Ra.bd[a].push(d));
      return b.apply(this, d)
    });
    c.Jb();
    return c
  }, tf = function (a, b) {
    var c = new hb, d;
    for (d in b) if (b.hasOwnProperty(d)) {
      var e = b[d];
      Da(e) ? c.set(d, sf(a + "_" + d, e)) : (Ea(e) || m(e) || "boolean" === typeof e) && c.set(d, e)
    }
    c.Jb();
    return c
  };
  var uf = function (a, b) {
    O(I(this), ["apiName:!string", "message:?string"], arguments);
    var c = {}, d = new hb;
    return d = tf("AssertApiSubject", c)
  };
  var vf = function (a, b) {
    O(I(this), ["actual:?*", "message:?string"], arguments);
    if (a instanceof kc) throw Error("Argument actual cannot have type Promise. Assertions on asynchronous code aren't supported.");
    var c = {}, d = new hb;
    return d = tf("AssertThatSubject", c)
  };

  function wf(a) {
    return function () {
      for (var b = [], c = this.g, d = 0; d < arguments.length; ++d) b.push(rc(arguments[d], c));
      return qc(a.apply(null, b))
    }
  }

  var Cf = function () {
    for (var a = Math, b = xf, c = {}, d = 0; d < b.length; d++) {
      var e = b[d];
      a.hasOwnProperty(e) && (c[e] = wf(a[e].bind(a)))
    }
    return c
  };
  var Df = function (a) {
    var b;
    return b
  };
  var Ef = function (a) {
    var b;
    return b
  };
  var Ff = function (a) {
    return encodeURI(a)
  };
  var Gf = function (a) {
    return encodeURIComponent(a)
  };
  var Hf = function (a) {
    O(I(this), ["message:?string"], arguments);
  };
  var If = function (a, b) {
    O(I(this), ["min:!number", "max:!number"], arguments);
    return Ha(a, b)
  };
  var P = function (a, b, c) {
    var d = a.g.g;
    if (!d) throw Error("Missing program state.");
    d.fj.apply(null, Array.prototype.slice.call(arguments, 1))
  };
  var Jf = function () {
    P(this, "read_container_data");
    var a = new hb;
    a.set("containerId", 'GTM-P528B3');
    a.set("version", '439');
    a.set("environmentName", 'Production');
    a.set("debugMode", Qe);
    a.set("previewMode", Se);
    a.set("environmentMode", Re);
    a.Jb();
    return a
  };
  var Kf = {};
  Kf.sstECEnableData = !0;
  Kf.enableAdsEc = !0;
  Kf.sstFFConversionEnabled = !0;
  Kf.sstEnableAuid = !0;
  Kf.enableGbraidUpdate = !0;
  Kf.enable1pScripts = !0;
  Kf.enableGlobalEventDeveloperIds = !1;
  Kf.enableGa4OnoRemarketing = !1;
  Kf.omitAuidIfWbraidPresent = !1;
  Kf.sstEnableDclid = !0;
  Kf.reconcileCampaignFields = !1;
  Kf.reconcileCampaignFields = !0;
  Kf.enableEmFormCcd = !1;
  Kf.enableEmFormCcd = !0;
  Kf.enableEmFormCcdPart2 = !1;
  Kf.enableUrlPassthrough = !0;
  Kf.enableLandingPageDeduplication = !0;
  Kf.enableGtagDestinationFps = !0;
  Kf.enableFloodlightPrerenderingBypass = !1;
  Kf.enableHashTempClientId = !0;
  Kf.enableTranslateUAParamsToClassic = !0;
  Kf.analyticsPrivateParamsExcluded = !1;
  Kf.ipOverrideExperiment = !1;
  Kf.ipOverrideExperiment = !0;
  Kf.enableEmptyDestLists = !1;
  Kf.enableAdsHistoryChangeEvents = !1;
  Kf.enableAdsHistoryChangeEvents = !0;
  Kf.requireGtagUserDataTos = !0;
  Kf.sendBeaconEnableExperimentPercentage = Number('0') || 0;

  function Lf() {
    return qc(Kf)
  };var Mf = function () {
    return (new Date).getTime()
  };
  var Nf = function (a) {
    if (null === a) return "null";
    if (a instanceof ta) return "array";
    if (a instanceof db) return "function";
    if (a instanceof ic) {
      a = a.cb;
      if (void 0 === a.constructor || void 0 === a.constructor.name) {
        var b = String(a);
        return b.substring(8, b.length - 1)
      }
      return String(a.constructor.name)
    }
    return typeof a
  };
  var Of = function (a) {
    function b(c) {
      return function (d) {
        try {
          return c(d)
        } catch (e) {
          (Qe || Se) && a.call(this, e.message)
        }
      }
    }

    return {
      parse: b(function (c) {
        return qc(JSON.parse(c))
      }), stringify: b(function (c) {
        return JSON.stringify(rc(c))
      })
    }
  };
  var Pf = function (a) {
    return Na(rc(a, this.g))
  };
  var Qf = function (a) {
    return Number(rc(a, this.g))
  };
  var Rf = function (a) {
    return null === a ? "null" : void 0 === a ? "undefined" : a.toString()
  };
  var Sf = function (a, b, c) {
    var d = null, e = !1;
    O(I(this), ["tableObj:!List", "keyColumnName:!string", "valueColumnName:!string"], arguments);
    d = new hb;
    for (var f = 0; f < a.length(); f++) {
      var g = a.get(f);
      g instanceof hb && g.has(b) && g.has(c) && (d.set(g.get(b), g.get(c)), e = !0)
    }
    return e ? d : null
  };
  var xf = "floor ceil round max min abs pow sqrt".split(" ");
  var Tf = function () {
    var a = {};
    return {
      Bj: function (b) {
        return a.hasOwnProperty(b) ? a[b] : void 0
      }, Ck: function (b, c) {
        a[b] = c
      }, reset: function () {
        a = {}
      }
    }
  }, Uf = function (a, b) {
    return function () {
      var c = Array.prototype.slice.call(arguments, 0);
      c.unshift(b);
      return db.prototype.g.apply(a, c)
    }
  }, Vf = function (a, b) {
    O(I(this), ["apiName:!string", "mock:?*"], arguments);
  };
  var Wf = {};
  Wf.keys = function (a) {
    return new ta
  };
  Wf.values = function (a) {
    return new ta
  };
  Wf.entries = function (a) {
    return new ta
  };
  Wf.freeze = function (a) {
    return a
  };
  Wf.delete = function (a, b) {
    return !1
  };
  var Yf = function () {
    this.g = {};
    this.o = {};
  };
  Yf.prototype.get = function (a, b) {
    var c = this.g.hasOwnProperty(a) ? this.g[a] : void 0;
    c = Zf(a, b) || c;
    return c
  };
  Yf.prototype.add = function (a, b, c) {
    if (this.g.hasOwnProperty(a)) throw"Attempting to add a function which already exists: " + a + ".";
    if (this.o.hasOwnProperty(a)) throw"Attempting to add an API with an existing private API name: " + a + ".";
    this.g[a] = c ? void 0 : Da(b) ? sf(a, b) : tf(a, b)
  };
  var $f = function (a, b, c) {
    if (a.o.hasOwnProperty(b)) throw"Attempting to add a private function which already exists: " + b + ".";
    if (a.g.hasOwnProperty(b)) throw"Attempting to add a private function with an existing API name: " + b + ".";
    a.o[b] = Da(c) ? sf(b, c) : tf(b, c)
  };

  function Zf(a, b) {
    var c = void 0;
    var d = b.g.g;
    d && d.Ra && (c = d.Ra.Mf.Bj(a));
    return c
  };

  function ag() {
    var a = {};
    return a
  };var Q = {
    Gb: "_ee",
    nc: "_syn_or_mod",
    yb: "_def",
    Tk: "_uei",
    Uk: "_upi",
    jc: "_eu",
    Jg: "_is_passthrough_cid",
    Ig: "_is_linker_valid",
    lf: "_ntg",
    Ud: "_nge",
    Hg: "_ipe",
    cc: "event_callback",
    Jd: "event_timeout",
    La: "gtag.config",
    Sa: "gtag.get",
    Aa: "purchase",
    $b: "refund",
    zb: "begin_checkout",
    Xb: "add_to_cart",
    Yb: "remove_from_cart",
    ji: "view_cart",
    hg: "add_to_wishlist",
    Ba: "view_item",
    Zb: "view_promotion",
    Fe: "select_promotion",
    Ee: "select_item",
    Ab: "view_item_list",
    gg: "add_payment_info",
    ii: "add_shipping_info",
    ab: "value_key",
    nb: "value_callback",
    da: "allow_ad_personalization_signals",
    Wc: "restricted_data_processing",
    Jc: "allow_google_signals",
    Ea: "cookie_expires",
    bc: "cookie_update",
    Xc: "session_duration",
    Pd: "session_engaged_time",
    Hd: "engagement_time_msec",
    Oa: "user_properties",
    ba: "transport_url",
    ka: "ads_data_redaction",
    Ga: "user_data",
    Sc: "first_party_collection",
    H: "ad_storage",
    T: "analytics_storage",
    Be: "region",
    ag: "wait_for_update",
    Da: "conversion_linker",
    Ta: "conversion_cookie_prefix",
    oa: "value",
    ma: "currency",
    Cg: "trip_type",
    fa: "items",
    sg: "passengers",
    Ie: "allow_custom_scripts",
    Fb: "session_id",
    yg: "quantity",
    rb: "transaction_id",
    Db: "language",
    Gd: "country",
    Fd: "allow_enhanced_conversions",
    Ne: "aw_merchant_id",
    Le: "aw_feed_country",
    Me: "aw_feed_language",
    Ke: "discount",
    aa: "developer_id",
    pg: "global_developer_id_string",
    ng: "event_developer_id_string",
    Qd: "delivery_postal_code",
    Te: "estimated_delivery_date",
    Re: "shipping",
    Xe: "new_customer",
    Oe: "customer_lifetime_value",
    Se: "enhanced_conversions",
    Ic: "page_view",
    va: "linker",
    U: "domains",
    hc: "decorate_forms",
    mg: "enhanced_conversions_automatic_settings",
    si: "auto_detection_enabled",
    Ve: "ga_temp_client_id",
    Ge: "user_engagement",
    di: "app_remove",
    ei: "app_store_refund",
    fi: "app_store_subscription_cancel",
    gi: "app_store_subscription_convert",
    hi: "app_store_subscription_renew",
    ki: "first_open",
    li: "first_visit",
    mi: "in_app_purchase",
    ni: "session_start",
    oi: "allow_display_features",
    $a: "campaign",
    Kc: "campaign_content",
    Lc: "campaign_id",
    Mc: "campaign_medium",
    Nc: "campaign_name",
    Oc: "campaign_source",
    Pc: "campaign_term",
    ra: "client_id",
    sa: "cookie_domain",
    ac: "cookie_name",
    kb: "cookie_path",
    Ua: "cookie_flags",
    Qc: "custom_map",
    Md: "groups",
    rg: "non_interaction",
    pb: "page_location",
    Ye: "page_path",
    qb: "page_referrer",
    Nd: "page_title",
    Fa: "send_page_view",
    Eb: "send_to",
    Yc: "session_engaged",
    Rc: "euid_logged_in_state",
    Zc: "session_number",
    Ji: "tracking_id",
    sb: "url_passthrough",
    fc: "accept_incoming",
    Vc: "url_position",
    wg: "phone_conversion_number",
    ug: "phone_conversion_callback",
    vg: "phone_conversion_css_class",
    xg: "phone_conversion_options",
    Ei: "phone_conversion_ids",
    Di: "phone_conversion_country_code",
    Bb: "aw_remarketing",
    Je: "aw_remarketing_only",
    He: "gclid",
    ri: "auid",
    yi: "affiliation",
    lg: "tax",
    Qe: "list_name",
    kg: "checkout_step",
    jg: "checkout_option",
    zi: "coupon",
    Ai: "promotions",
    Na: "user_id",
    Hi: "retoken",
    Ma: "cookie_prefix",
    ig: "disable_merchant_reported_purchases",
    xi: "dc_natural_search",
    wi: "dc_custom_params",
    qg: "method",
    Ii: "search_term",
    vi: "content_type",
    Ci: "optimize_id",
    Bi: "experiments",
    ob: "google_signals"
  };
  Q.Ld = "google_tld";
  Q.Sd = "update";
  Q.Ue = "firebase_id";
  Q.Tc = "ga_restrict_domain";
  Q.Id = "event_settings";
  Q.Pe = "dynamic_event_settings";
  Q.ic = "user_data_settings";
  Q.Ag = "screen_name";
  Q.$e = "screen_resolution";
  Q.Cb = "_x_19";
  Q.lb = "enhanced_client_id";
  Q.Kd = "_x_20";
  Q.We = "internal_traffic_results";
  Q.Rd = "traffic_type";
  Q.Od = "referral_exclusion_definition";
  Q.Uc = "ignore_referrer";
  Q.ui = "content_group";
  Q.Ca = "allow_interest_groups";
  Q.Ze = "redact_device_info", Q.og = "geo_granularity";
  var dg = {};
  Q.Fg = Object.freeze((dg[Q.gg] = 1, dg[Q.ii] = 1, dg[Q.Xb] = 1, dg[Q.Yb] = 1, dg[Q.ji] = 1, dg[Q.zb] = 1, dg[Q.Ee] = 1, dg[Q.Ab] = 1, dg[Q.Fe] = 1, dg[Q.Zb] = 1, dg[Q.Aa] = 1, dg[Q.$b] = 1, dg[Q.Ba] = 1, dg[Q.hg] = 1, dg));
  Q.bf = Object.freeze([Q.da, Q.Jc, Q.bc]);
  Q.Ti = Object.freeze([].concat(Q.bf));
  Q.cf = Object.freeze([Q.Ea, Q.Jd, Q.Xc, Q.Pd, Q.Hd]);
  Q.Ui = Object.freeze([].concat(Q.cf));
  var eg = {};
  Q.Ce = (eg[Q.H] = "1", eg[Q.T] = "2", eg);
  var fg = {};
  Q.$f = Object.freeze((fg[Q.da] = 1, fg[Q.Fd] = 1, fg[Q.Ca] = 1, fg[Q.Bb] = 1, fg[Q.Je] = 1, fg[Q.Ke] = 1, fg[Q.Le] = 1, fg[Q.Me] = 1, fg[Q.fa] = 1, fg[Q.Ne] = 1, fg[Q.Ta] = 1, fg[Q.Da] = 1, fg[Q.sa] = 1, fg[Q.Ea] = 1, fg[Q.Ua] = 1, fg[Q.Ma] = 1, fg[Q.ma] = 1, fg[Q.Oe] = 1, fg[Q.aa] = 1, fg[Q.ig] = 1, fg[Q.Se] = 1, fg[Q.Te] = 1, fg[Q.Ue] = 1, fg[Q.Sc] = 1, fg[Q.Db] = 1, fg[Q.Xe] = 1, fg[Q.pb] = 1, fg[Q.qb] = 1, fg[Q.ug] = 1, fg[Q.vg] = 1, fg[Q.wg] = 1, fg[Q.xg] = 1, fg[Q.Wc] = 1, fg[Q.Fa] = 1, fg[Q.Eb] = 1, fg[Q.Qd] = 1, fg[Q.rb] = 1, fg[Q.ba] = 1, fg[Q.Sd] = 1, fg[Q.sb] = 1, fg[Q.Ga] = 1, fg[Q.Na] = 1, fg[Q.oa] =
    1, fg));
  var gg = {jh: "US", Ih: "US-WI"};
  var hg = {}, ig = function (a, b) {
    hg[a] = hg[a] || [];
    hg[a][b] = !0
  }, jg = function (a) {
    for (var b = [], c = hg[a] || [], d = 0; d < c.length; d++) c[d] && (b[Math.floor(d / 6)] ^= 1 << d % 6);
    for (var e = 0; e < b.length; e++) b[e] = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e] || 0);
    return b.join("")
  }, kg = function () {
    for (var a = [], b = hg.GA4_EVENT || [], c = 0; c < b.length; c++) b[c] && a.push(c);
    return 0 < a.length ? a : void 0
  };
  var lg = function (a) {
    ig("GTM", a)
  };
  var mg = new function (a, b) {
    this.g = a;
    this.defaultValue = void 0 === b ? !1 : b
  }(1933);
  var og = function () {
    var a = ng, b = "Ff";
    if (a.Ff && a.hasOwnProperty(b)) return a.Ff;
    var c = new a;
    a.Ff = c;
    a.hasOwnProperty(b);
    return c
  };
  var ng = function () {
    var a = {};
    this.g = function () {
      var b = mg.g, c = mg.defaultValue;
      return null != a[b] ? a[b] : c
    };
    this.o = function () {
      a[mg.g] = !0
    }
  };
  var pg = [];

  function qg() {
    var a = Hb("google_tag_data", {});
    a.ics || (a.ics = {
      entries: {},
      set: rg,
      update: sg,
      addListener: tg,
      notifyListeners: ug,
      active: !1,
      usedDefault: !1,
      usedUpdate: !1,
      accessedDefault: !1,
      accessedAny: !1,
      wasSetLate: !1
    });
    return a.ics
  }

  function rg(a, b, c, d, e, f) {
    var g = qg();
    g.usedDefault || !g.accessedDefault && !g.accessedAny || (g.wasSetLate = !0);
    g.active = !0;
    g.usedDefault = !0;
    if (void 0 != b) {
      var h = g.entries, k = h[a] || {}, n = k.region, p = c && m(c) ? c.toUpperCase() : void 0;
      d = d.toUpperCase();
      e = e.toUpperCase();
      if ("" === d || p === e || (p === d ? n !== e : !p && !n)) {
        var q = !!(f && 0 < f && void 0 === k.update),
          r = {region: p, initial: "granted" === b, update: k.update, quiet: q};
        if ("" !== d || !1 !== k.initial) h[a] = r;
        q && z.setTimeout(function () {
          h[a] === r && r.quiet && (r.quiet = !1, vg(a), ug(), ig("TAGGING",
            2))
        }, f)
      }
    }
  }

  function sg(a, b) {
    var c = qg();
    c.usedDefault || c.usedUpdate || !c.accessedAny || (c.wasSetLate = !0);
    c.active = !0;
    c.usedUpdate = !0;
    if (void 0 != b) {
      var d = wg(c, a), e = c.entries, f = e[a] = e[a] || {};
      f.update = "granted" === b;
      var g = wg(c, a);
      f.quiet ? (f.quiet = !1, vg(a)) : g !== d && vg(a)
    }
  }

  function tg(a, b) {
    pg.push({wf: a, wj: b})
  }

  function vg(a) {
    for (var b = 0; b < pg.length; ++b) {
      var c = pg[b];
      Fa(c.wf) && -1 !== c.wf.indexOf(a) && (c.Eh = !0)
    }
  }

  function ug(a, b) {
    for (var c = 0; c < pg.length; ++c) {
      var d = pg[c];
      if (d.Eh) {
        d.Eh = !1;
        try {
          d.wj({consentEventId: a, consentPriorityId: b})
        } catch (e) {
        }
      }
    }
  }

  function wg(a, b) {
    var c = a.entries[b] || {};
    return void 0 !== c.update ? c.update : c.initial
  }

  var xg = function (a) {
    var b = qg();
    b.accessedAny = !0;
    return wg(b, a)
  }, yg = function (a) {
    var b = qg();
    b.accessedDefault = !0;
    return (b.entries[a] || {}).initial
  }, zg = function (a) {
    var b = qg();
    b.accessedAny = !0;
    return !(b.entries[a] || {}).quiet
  }, Ag = function () {
    if (!og().g()) return !1;
    var a = qg();
    a.accessedAny = !0;
    return a.active
  }, Bg = function () {
    var a = qg();
    a.accessedDefault = !0;
    return a.usedDefault
  }, Cg = function (a, b) {
    qg().addListener(a, b)
  }, Dg = function (a, b) {
    qg().notifyListeners(a, b)
  }, Eg = function (a, b) {
    function c() {
      for (var e = 0; e < b.length; e++) if (!zg(b[e])) return !0;
      return !1
    }

    if (c()) {
      var d = !1;
      Cg(b, function (e) {
        d || c() || (d = !0, a(e))
      })
    } else a({})
  }, Fg = function (a, b) {
    function c() {
      for (var f = [], g = 0; g < d.length; g++) {
        var h = d[g];
        !1 === xg(h) || e[h] || (f.push(h), e[h] = !0)
      }
      return f
    }

    var d = m(b) ? [b] : b, e = {};
    c().length !== d.length && Cg(d, function (f) {
      var g = c();
      0 < g.length && (f.wf = g, a(f))
    })
  };

  function Gg() {
  }

  function Hg() {
  };

  function Ig(a) {
    for (var b = [], c = 0; c < Jg.length; c++) {
      var d = a(Jg[c]);
      b[c] = !0 === d ? "1" : !1 === d ? "0" : "-"
    }
    return b.join("")
  }

  var Jg = [Q.H, Q.T], Kg = function (a) {
    var b = a[Q.Be];
    b && lg(40);
    var c = a[Q.ag];
    c && lg(41);
    for (var d = Fa(b) ? b : [b], e = {Cc: 0}; e.Cc < d.length; e = {Cc: e.Cc}, ++e.Cc) La(a, function (f) {
      return function (g, h) {
        if (g !== Q.Be && g !== Q.ag) {
          var k = d[f.Cc], n = gg.jh, p = gg.Ih;
          qg().set(g, h, k, n, p, c)
        }
      }
    }(e))
  }, Lg = 0, Mg = function (a, b) {
    La(a, function (e, f) {
      qg().update(e, f)
    });
    Dg(b.eventId, b.priorityId);
    var c = Sa(), d = c - Lg;
    Lg && 0 <= d && 1E3 > d && lg(66);
    Lg = c
  }, Ng = function (a) {
    var b = xg(a);
    return void 0 != b ? b : !0
  }, Og = function () {
    return "G1" + Ig(xg)
  }, Pg = function (a, b) {
    Cg(a,
      b)
  }, Qg = function (a, b) {
    Fg(a, b)
  }, Rg = function (a, b) {
    Eg(a, b)
  };
  var Tg = function (a) {
    return Sg ? J.querySelectorAll(a) : null
  }, Ug = function (a, b) {
    if (!Sg) return null;
    if (Element.prototype.closest) try {
      return a.closest(b)
    } catch (e) {
      return null
    }
    var c = Element.prototype.matches || Element.prototype.webkitMatchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector,
      d = a;
    if (!J.documentElement.contains(d)) return null;
    do {
      try {
        if (c.call(d, b)) return d
      } catch (e) {
        break
      }
      d = d.parentElement || d.parentNode
    } while (null !== d && 1 === d.nodeType);
    return null
  }, Vg = !1;
  if (J.querySelectorAll) try {
    var Wg = J.querySelectorAll(":root");
    Wg && 1 == Wg.length && Wg[0] == J.documentElement && (Vg = !0)
  } catch (a) {
  }
  var Sg = Vg;
  var Xg = function (a) {
      return null == a ? "" : m(a) ? Qa(String(a)) : "e0"
    }, Zg = function (a) {
      return a.replace(Yg, "")
    }, ah = function (a) {
      return $g(a.replace(/\s/g, ""))
    }, $g = function (a) {
      return Qa(a.replace(bh, "").toLowerCase())
    }, dh = function (a) {
      a = a.replace(/[\s-()/.]/g, "");
      "+" !== a.charAt(0) && (a = "+" + a);
      return ch.test(a) ? a : "e0"
    }, fh = function (a) {
      var b = a.toLowerCase().split("@");
      if (2 == b.length) {
        var c = b[0];
        /^(gmail|googlemail)\./.test(b[1]) && (c = c.replace(/\./g, ""));
        c = c + "@" + b[1];
        if (eh.test(c)) return c
      }
      return "e0"
    }, ih = function (a,
                      b) {
      window.Promise || b([]);
      Promise.all(a.map(function (c) {
        return c.value && -1 !== gh.indexOf(c.name) ? hh(c.value).then(function (d) {
          c.value = d
        }) : Promise.resolve()
      })).then(function () {
        b(a)
      }).catch(function () {
        b([])
      })
    }, hh = function (a) {
      if ("" === a || "e0" === a) return Promise.resolve(a);
      if (z.crypto && z.crypto.subtle) try {
        var b = jh(a);
        return z.crypto.subtle.digest("SHA-256", b).then(function (c) {
          var d = Array.from(new Uint8Array(c)).map(function (e) {
            return String.fromCharCode(e)
          }).join("");
          return z.btoa(d).replace(/\+/g, "-").replace(/\//g,
            "_").replace(/=+$/, "")
        }).catch(function () {
          return "e2"
        })
      } catch (c) {
        return Promise.resolve("e2")
      } else return Promise.resolve("e1")
    }, jh = function (a) {
      var b;
      if (z.TextEncoder) b = (new z.TextEncoder("utf-8")).encode(a); else {
        for (var c = [], d = 0; d < a.length; d++) {
          var e = a.charCodeAt(d);
          128 > e ? c.push(e) : 2048 > e ? c.push(192 | e >> 6, 128 | e & 63) : 55296 > e || 57344 <= e ? c.push(224 | e >> 12, 128 | e >> 6 & 63, 128 | e & 63) : (e = 65536 + ((e & 1023) << 10 | a.charCodeAt(++d) & 1023), c.push(240 | e >> 18, 128 | e >> 12 & 63, 128 | e >> 6 & 63, 128 | e & 63))
        }
        b = new Uint8Array(c)
      }
      return b
    },
    bh = /[0-9`~!@#$%^&*()_\-+=:;<>,.?|/\\[\]]/g, eh = /^\S+@\S+\.\S+$/, ch = /^\+\d{10,15}$/, Yg = /[.~]/g, kh = {},
    lh = (kh.email = "em", kh.phone_number = "pn", kh.first_name = "fn", kh.last_name = "ln", kh.street = "sa", kh.city = "ct", kh.region = "rg", kh.country = "co", kh.postal_code = "pc", kh.error_code = "ec", kh),
    mh = function (a, b) {
      function c(n, p, q) {
        var r = n[p];
        Fa(r) || (r = [r]);
        for (var u = 0; u < r.length; ++u) {
          var t = Xg(r[u]);
          "" !== t && f.push({name: p, value: q(t), index: void 0})
        }
      }

      function d(n, p, q, r) {
        var u = Xg(n[p]);
        "" !== u && f.push({name: p, value: q(u), index: r})
      }

      function e(n) {
        return function (p) {
          lg(64);
          return n(p)
        }
      }

      var f = [];
      if ("https:" === z.location.protocol) {
        c(a, "email", fh);
        c(a, "phone_number", dh);
        c(a, "first_name", e(ah));
        c(a, "last_name", e(ah));
        var g = a.home_address || {};
        c(g, "street", e($g));
        c(g, "city", e($g));
        c(g, "postal_code", e(Zg));
        c(g, "region", e($g));
        c(g, "country", e(Zg));
        var h = a.address || {};
        Fa(h) || (h = [h]);
        for (var k = 0; k < h.length; k++) d(h[k], "first_name", ah, k), d(h[k], "last_name", ah, k), d(h[k], "street", $g, k), d(h[k], "city", $g, k), d(h[k], "postal_code", Zg, k), d(h[k],
          "region", $g, k), d(h[k], "country", Zg, k);
        ih(f, b)
      } else f.push({name: "error_code", value: "e3", index: void 0}), b(f)
    }, nh = function (a, b) {
      mh(a, function (c) {
        for (var d = ["tv.1"], e = 0, f = 0; f < c.length; ++f) {
          var g = c[f].name, h = c[f].value, k = c[f].index, n = lh[g];
          n && h && (-1 === gh.indexOf(g) || /^e\d+$/.test(h) || /^[0-9A-Za-z_-]{43}$/.test(h)) && (void 0 !== k && (n += k), d.push(n + "." + h), e++)
        }
        1 === c.length && "error_code" === c[0].name && (e = 0);
        b(encodeURIComponent(d.join("~")), e)
      })
    }, oh = function (a) {
      if (z.Promise) try {
        return new Promise(function (b) {
          nh(a,
            function (c, d) {
              b({se: c, Yk: d})
            })
        })
      } catch (b) {
      }
    }, gh = Object.freeze(["email", "phone_number", "first_name", "last_name", "street"]);
  var ph = {}, S = z.google_tag_manager = z.google_tag_manager || {}, qh = Math.random();
  ph.Yd = "590";
  ph.ca = "dataLayer";
  ph.ci = "ChAI8ODykwYQkpOE7o6WhNR7EiMAT3QebbuQAMPKnpSxuBRARHT96uNY02/JwjvRYYAS9OHUSxoCU1I\x3d";
  var rh = {
    __cl: !0,
    __ecl: !0,
    __ehl: !0,
    __evl: !0,
    __fal: !0,
    __fil: !0,
    __fsl: !0,
    __hl: !0,
    __jel: !0,
    __lcl: !0,
    __sdl: !0,
    __tl: !0,
    __ytl: !0
  }, sh = {__paused: !0, __tg: !0}, th;
  for (th in rh) rh.hasOwnProperty(th) && (sh[th] = !0);
  ph.Hc = "www.googletagmanager.com";
  var uh, vh = ph.Hc + "/gtm.js";
  uh = vh;
  var wh = Oa(""), xh = null, yh = null, Ih = {}, Jh = {}, Kh = function () {
    var a = S.sequence || 1;
    S.sequence = a + 1;
    return a
  };
  ph.bi = "";
  var Lh = "";
  ph.Zd = Lh;
  var Mh = new Ia, Nh = {}, Oh = {}, Rh = {
    name: ph.ca, set: function (a, b) {
      pc($a(a, b), Nh);
      Ph()
    }, get: function (a) {
      return Qh(a, 2)
    }, reset: function () {
      Mh = new Ia;
      Nh = {};
      Ph()
    }
  }, Qh = function (a, b) {
    return 2 != b ? Mh.get(a) : Sh(a)
  }, Sh = function (a, b) {
    var c = a.split(".");
    b = b || [];
    for (var d = Nh, e = 0; e < c.length; e++) {
      if (null === d) return !1;
      if (void 0 === d) break;
      d = d[c[e]];
      if (-1 !== b.indexOf(d)) return
    }
    return d
  }, Th = function (a, b) {
    Oh.hasOwnProperty(a) || (Mh.set(a, b), pc($a(a, b), Nh), Ph())
  }, Uh = function () {
    for (var a = ["gtm.allowlist", "gtm.blocklist", "gtm.whitelist",
      "gtm.blacklist", "tagTypeBlacklist"], b = 0; b < a.length; b++) {
      var c = a[b], d = Qh(c, 1);
      if (Fa(d) || oc(d)) d = pc(d);
      Oh[c] = d
    }
  }, Ph = function (a) {
    La(Oh, function (b, c) {
      Mh.set(b, c);
      pc($a(b), Nh);
      pc($a(b, c), Nh);
      a && delete Oh[b]
    })
  }, Vh = function (a, b) {
    var c, d = 1 !== (void 0 === b ? 2 : b) ? Sh(a) : Mh.get(a);
    "array" === mc(d) || "object" === mc(d) ? c = pc(d) : c = d;
    return c
  };
  var Wh, Xh = !1;

  function Yh() {
    Xh = !0;
    Wh = productSettings, productSettings = void 0;
    Wh = Wh || {}
  }

  var Zh = function (a) {
    Xh || Yh();
    return Wh[a]
  };
  var $h = function (a) {
    if (J.hidden) return !0;
    var b = a.getBoundingClientRect();
    if (b.top == b.bottom || b.left == b.right || !z.getComputedStyle) return !0;
    var c = z.getComputedStyle(a, null);
    if ("hidden" === c.visibility) return !0;
    for (var d = a, e = c; d;) {
      if ("none" === e.display) return !0;
      var f = e.opacity, g = e.filter;
      if (g) {
        var h = g.indexOf("opacity(");
        0 <= h && (g = g.substring(h + 8, g.indexOf(")", h)), "%" == g.charAt(g.length - 1) && (g = g.substring(0, g.length - 1)), f = Math.min(g, f))
      }
      if (void 0 !== f && 0 >= f) return !0;
      (d = d.parentElement) && (e = z.getComputedStyle(d,
        null))
    }
    return !1
  };
  var ii = /:[0-9]+$/, ji = function (a, b, c, d) {
    for (var e = [], f = a.split("&"), g = 0; g < f.length; g++) {
      var h = f[g].split("=");
      if (decodeURIComponent(h[0]).replace(/\+/g, " ") === b) {
        var k = h.slice(1).join("=");
        if (!c) return d ? k : decodeURIComponent(k).replace(/\+/g, " ");
        e.push(d ? k : decodeURIComponent(k).replace(/\+/g, " "))
      }
    }
    return c ? e : void 0
  }, mi = function (a, b, c, d, e) {
    b && (b = String(b).toLowerCase());
    if ("protocol" === b || "port" === b) a.protocol = ki(a.protocol) || ki(z.location.protocol);
    "port" === b ? a.port = String(Number(a.hostname ? a.port :
      z.location.port) || ("http" === a.protocol ? 80 : "https" === a.protocol ? 443 : "")) : "host" === b && (a.hostname = (a.hostname || z.location.hostname).replace(ii, "").toLowerCase());
    return li(a, b, c, d, e)
  }, li = function (a, b, c, d, e) {
    var f, g = ki(a.protocol);
    b && (b = String(b).toLowerCase());
    switch (b) {
      case "url_no_fragment":
        f = ni(a);
        break;
      case "protocol":
        f = g;
        break;
      case "host":
        f = a.hostname.replace(ii, "").toLowerCase();
        if (c) {
          var h = /^www\d*\./.exec(f);
          h && h[0] && (f = f.substr(h[0].length))
        }
        break;
      case "port":
        f = String(Number(a.port) || ("http" ===
        g ? 80 : "https" === g ? 443 : ""));
        break;
      case "path":
        a.pathname || a.hostname || ig("TAGGING", 1);
        f = "/" === a.pathname.substr(0, 1) ? a.pathname : "/" + a.pathname;
        var k = f.split("/");
        0 <= (d || []).indexOf(k[k.length - 1]) && (k[k.length - 1] = "");
        f = k.join("/");
        break;
      case "query":
        f = a.search.replace("?", "");
        e && (f = ji(f, e, !1));
        break;
      case "extension":
        var n = a.pathname.split(".");
        f = 1 < n.length ? n[n.length - 1] : "";
        f = f.split("/")[0];
        break;
      case "fragment":
        f = a.hash.replace("#", "");
        break;
      default:
        f = a && a.href
    }
    return f
  }, ki = function (a) {
    return a ? a.replace(":",
      "").toLowerCase() : ""
  }, ni = function (a) {
    var b = "";
    if (a && a.href) {
      var c = a.href.indexOf("#");
      b = 0 > c ? a.href : a.href.substr(0, c)
    }
    return b
  }, oi = function (a) {
    var b = J.createElement("a");
    a && (b.href = a);
    var c = b.pathname;
    "/" !== c[0] && (a || ig("TAGGING", 1), c = "/" + c);
    var d = b.hostname.replace(ii, "");
    return {
      href: b.href,
      protocol: b.protocol,
      host: b.host,
      hostname: d,
      pathname: c,
      search: b.search,
      hash: b.hash,
      port: b.port
    }
  }, pi = function (a) {
    function b(n) {
      var p = n.split("=")[0];
      return 0 > d.indexOf(p) ? n : p + "=0"
    }

    function c(n) {
      return n.split("&").map(b).filter(function (p) {
        return void 0 !==
          p
      }).join("&")
    }

    var d = "gclid dclid gbraid wbraid gclaw gcldc gclha gclgf gclgb _gl".split(" "), e = oi(a), f = a.split(/[?#]/)[0],
      g = e.search, h = e.hash;
    "?" === g[0] && (g = g.substring(1));
    "#" === h[0] && (h = h.substring(1));
    g = c(g);
    h = c(h);
    "" !== g && (g = "?" + g);
    "" !== h && (h = "#" + h);
    var k = "" + f + g + h;
    "/" === k[k.length - 1] && (k = k.substring(0, k.length - 1));
    return k
  };
  var qi = {};
  var si = function (a, b, c) {
    if (a) {
      var d = a.element, e = {Xa: a.Xa, tagName: d.tagName, type: 1};
      b && (e.querySelector = ri(d));
      c && (e.isVisible = !$h(d));
      return e
    }
  }, vi = function (a) {
    if (0 != a.length) {
      var b;
      b = ti(a, function (c) {
        return !ui.test(c.Xa)
      });
      b = ti(b, function (c) {
        return "INPUT" === c.element.tagName.toUpperCase()
      });
      b = ti(b, function (c) {
        return !$h(c.element)
      });
      return b[0]
    }
  }, ti = function (a, b) {
    if (1 >= a.length) return a;
    var c = a.filter(b);
    return 0 == c.length ? a : c
  }, ri = function (a) {
    var b;
    if (a === J.body) b = "body"; else {
      var c;
      if (a.id) c = "#" + a.id;
      else {
        var d;
        if (a.parentElement) {
          var e;
          a:{
            var f = a.parentElement;
            if (f) {
              for (var g = 0; g < f.childElementCount; g++) if (f.children[g] === a) {
                e = g + 1;
                break a
              }
              e = -1
            } else e = 1
          }
          d = ri(a.parentElement) + ">:nth-child(" + e + ")"
        } else d = "";
        c = d
      }
      b = c
    }
    return b
  }, wi = !0, xi = !1;
  qi.Zh = "true";
  var yi = new RegExp(/[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}/i), zi = new RegExp(/@(gmail|googlemail)\./i),
    ui = new RegExp(/support|noreply/i), Ai = "SCRIPT STYLE IMG SVG PATH BR NOSCRIPT".split(" "), Bi = ["BR"], Ci = {},
    Di = function (a) {
      a = a || {yc: !0, zc: !0};
      a.vb = a.vb || {email: !0, phone: !0, bh: !0};
      var b, c = a, d = !!c.yc + "." + !!c.zc;
      c && c.ed && c.ed.length && (d += "." + c.ed.join("."));
      c && c.vb && (d += "." + c.vb.email + "." + c.vb.phone + "." + c.vb.bh);
      b = d;
      var e = Ci[b];
      if (e && 200 > Sa() - e.timestamp) return e.result;
      var f;
      var g = [], h = J.body;
      if (h) {
        for (var k =
          h.querySelectorAll("*"), n = 0; n < k.length && 1E4 > n; n++) {
          var p = k[n];
          if (!(0 <= Ai.indexOf(p.tagName.toUpperCase())) && p.children instanceof HTMLCollection) {
            for (var q = !1, r = 0; r < p.childElementCount && 1E4 > r; r++) if (!(0 <= Bi.indexOf(p.children[r].tagName.toUpperCase()))) {
              q = !0;
              break
            }
            q || g.push(p)
          }
        }
        f = {elements: g, status: 1E4 < k.length ? "2" : "1"}
      } else f = {elements: g, status: "4"};
      var u = f, t = u.status, v = [], x;
      if (a.vb && a.vb.email) {
        for (var y = u.elements, w = [], A = 0; A < y.length; A++) {
          var B = y[A], D = B.textContent;
          "INPUT" === B.tagName.toUpperCase() &&
          B.value && (D = B.value);
          if (D) {
            var C = D.match(yi);
            if (C) {
              var E = C[0], F;
              if (z.location) {
                var M = li(z.location, "host", !0);
                F = 0 <= E.toLowerCase().indexOf(M)
              } else F = !1;
              F || w.push({element: B, Xa: E})
            }
          }
        }
        var G = a && a.ed;
        if (G && 0 !== G.length) {
          for (var L = [], U = 0; U < w.length; U++) {
            for (var R = !0, N = 0; N < G.length; N++) {
              var Z = G[N];
              if (Z && Ug(w[U].element, Z)) {
                R = !1;
                break
              }
            }
            R && L.push(w[U])
          }
          v = L
        } else v = w;
        x = vi(v);
        10 < w.length && (t = "3")
      }
      var ba = [];
      !a.vk && x && (v = [x]);
      for (var V = 0; V < v.length; V++) ba.push(si(v[V], a.yc, a.zc));
      var xa = {
        elements: ba.slice(0, 10),
        gk: si(x, a.yc, a.zc), status: t
      };
      Ci[b] = {timestamp: Sa(), result: xa};
      return xa
    }, Ei = function (a) {
      return a.tagName + ":" + a.isVisible + ":" + a.Xa.length + ":" + zi.test(a.Xa)
    };
  var Fi = function (a, b, c) {
    if (c) {
      var d = c.selector_type, e = String(c.value), f;
      if ("js_variable" === d) {
        e = e.replace(/\["?'?/g, ".").replace(/"?'?\]/g, "");
        for (var g = e.split(","), h = 0; h < g.length; h++) {
          var k = g[h].trim();
          if (k) {
            if (0 === k.indexOf("dataLayer.")) f = Qh(k.substring(10)); else {
              var n = k.split(".");
              f = z[n.shift()];
              for (var p = 0; p < n.length; p++) f = f && f[n[p]]
            }
            if (void 0 !== f) break
          }
        }
      } else if ("css_selector" === d && Sg) {
        var q = Tg(e);
        if (q && 0 < q.length) {
          f = [];
          for (var r = 0; r < q.length && r < ("email" === b || "phone_number" === b ? 5 : 1); r++) f.push(Tb(q[r]) ||
            Qa(q[r].value));
          f = 1 === f.length ? f[0] : f
        }
      }
      f && (a[b] = f)
    }
  }, Gi = function (a) {
    if (a) {
      var b = {};
      Fi(b, "email", a.email);
      Fi(b, "phone_number", a.phone);
      b.address = [];
      for (var c = a.name_and_address || [], d = 0; d < c.length; d++) {
        var e = {};
        Fi(e, "first_name", c[d].first_name);
        Fi(e, "last_name", c[d].last_name);
        Fi(e, "street", c[d].street);
        Fi(e, "city", c[d].city);
        Fi(e, "region", c[d].region);
        Fi(e, "country", c[d].country);
        Fi(e, "postal_code", c[d].postal_code);
        b.address.push(e)
      }
      return b
    }
  }, Hi = function (a) {
    if (a) switch (a.mode) {
      case "selectors":
        return Gi(a.selectors);
      case "auto_detect":
        var b;
        var c = a.auto_detect;
        if (c) {
          var d = Di({
            yc: !1,
            zc: !1,
            ed: c.exclude_element_selectors,
            vb: {email: !!c.email, phone: !!c.phone, bh: !!c.address}
          }).elements, e = {};
          if (0 < d.length) for (var f = 0; f < d.length; f++) {
            var g = d[f];
            if (1 === g.type) {
              e.email = g.Xa;
              break
            }
          }
          b = e
        } else b = void 0;
        return b
    }
  }, Ii = function (a) {
    switch (a.enhanced_conversions_mode) {
      case "manual":
        var b = a.enhanced_conversions_manual_var;
        return void 0 !== b ? b : z.enhanced_conversion_data;
      case "automatic":
        return Gi(a[Q.mg])
    }
  };
  var Ji = {}, Ki = function (a, b) {
    if (z._gtmexpgrp && z._gtmexpgrp.hasOwnProperty(a)) return z._gtmexpgrp[a];
    void 0 === Ji[a] && (Ji[a] = Math.floor(Math.random() * b));
    return Ji[a]
  };
  var Li = function (a) {
    var b = 1, c, d, e;
    if (a) for (b = 0, d = a.length - 1; 0 <= d; d--) e = a.charCodeAt(d), b = (b << 6 & 268435455) + e + (e << 14), c = b & 266338304, b = 0 !== c ? b ^ c >> 21 : b;
    return b
  };
  var Mi = function (a, b, c) {
    for (var d = [], e = b.split(";"), f = 0; f < e.length; f++) {
      var g = e[f].split("="), h = g[0].replace(/^\s*|\s*$/g, "");
      if (h && h == a) {
        var k = g.slice(1).join("=").replace(/^\s*|\s*$/g, "");
        k && c && (k = decodeURIComponent(k));
        d.push(k)
      }
    }
    return d
  };
  var Ni = function (a, b) {
    var c = function () {
    };
    c.prototype = a.prototype;
    var d = new c;
    a.apply(d, Array.prototype.slice.call(arguments, 1));
    return d
  }, Oi = function (a) {
    var b = a;
    return function () {
      if (b) {
        var c = b;
        b = null;
        c()
      }
    }
  };

  function Pi(a) {
    return "null" !== a.origin
  };var Si = function (a, b, c, d) {
    return Qi(d) ? Mi(a, String(b || Ri()), c) : []
  }, Vi = function (a, b, c, d, e) {
    if (Qi(e)) {
      var f = Ti(a, d, e);
      if (1 === f.length) return f[0].id;
      if (0 !== f.length) {
        f = Ui(f, function (g) {
          return g.ie
        }, b);
        if (1 === f.length) return f[0].id;
        f = Ui(f, function (g) {
          return g.od
        }, c);
        return f[0] ? f[0].id : void 0
      }
    }
  };

  function Wi(a, b, c, d) {
    var e = Ri(), f = window;
    Pi(f) && (f.document.cookie = a);
    var g = Ri();
    return e != g || void 0 != c && 0 <= Si(b, g, !1, d).indexOf(c)
  }

  var $i = function (a, b, c, d) {
    function e(x, y, w) {
      if (null == w) return delete h[y], x;
      h[y] = w;
      return x + "; " + y + "=" + w
    }

    function f(x, y) {
      if (null == y) return delete h[y], x;
      h[y] = !0;
      return x + "; " + y
    }

    if (!Qi(c.hb)) return 2;
    var g;
    void 0 == b ? g = a + "=deleted; expires=" + (new Date(0)).toUTCString() : (c.encode && (b = encodeURIComponent(b)), b = Xi(b), g = a + "=" + b);
    var h = {};
    g = e(g, "path", c.path);
    var k;
    c.expires instanceof Date ? k = c.expires.toUTCString() : null != c.expires && (k = "" + c.expires);
    g = e(g, "expires", k);
    g = e(g, "max-age", c.Wj);
    g = e(g, "samesite",
      c.sk);
    c.uk && (g = f(g, "secure"));
    var n = c.domain;
    if (n && "auto" === n.toLowerCase()) {
      for (var p = Yi(), q = void 0, r = !1, u = 0; u < p.length; ++u) {
        var t = "none" !== p[u] ? p[u] : void 0, v = e(g, "domain", t);
        v = f(v, c.flags);
        try {
          d && d(a, h)
        } catch (x) {
          q = x;
          continue
        }
        r = !0;
        if (!Zi(t, c.path) && Wi(v, a, b, c.hb)) return 0
      }
      if (q && !r) throw q;
      return 1
    }
    n && "none" !== n.toLowerCase() && (g = e(g, "domain", n));
    g = f(g, c.flags);
    d && d(a, h);
    return Zi(n, c.path) ? 1 : Wi(g, a, b, c.hb) ? 0 : 1
  }, aj = function (a, b, c) {
    null == c.path && (c.path = "/");
    c.domain || (c.domain = "auto");
    return $i(a,
      b, c)
  };

  function Ui(a, b, c) {
    for (var d = [], e = [], f, g = 0; g < a.length; g++) {
      var h = a[g], k = b(h);
      k === c ? d.push(h) : void 0 === f || k < f ? (e = [h], f = k) : k === f && e.push(h)
    }
    return 0 < d.length ? d : e
  }

  function Ti(a, b, c) {
    for (var d = [], e = Si(a, void 0, void 0, c), f = 0; f < e.length; f++) {
      var g = e[f].split("."), h = g.shift();
      if (!b || -1 !== b.indexOf(h)) {
        var k = g.shift();
        k && (k = k.split("-"), d.push({id: g.join("."), ie: 1 * k[0] || 1, od: 1 * k[1] || 1}))
      }
    }
    return d
  }

  var Xi = function (a) {
    a && 1200 < a.length && (a = a.substring(0, 1200));
    return a
  }, bj = /^(www\.)?google(\.com?)?(\.[a-z]{2})?$/, cj = /(^|\.)doubleclick\.net$/i, Zi = function (a, b) {
    return cj.test(window.document.location.hostname) || "/" === b && bj.test(a)
  }, Ri = function () {
    return Pi(window) ? window.document.cookie : ""
  }, Yi = function () {
    var a = [], b = window.document.location.hostname.split(".");
    if (4 === b.length) {
      var c = b[b.length - 1];
      if (parseInt(c, 10).toString() === c) return ["none"]
    }
    for (var d = b.length - 2; 0 <= d; d--) a.push(b.slice(d).join("."));
    var e = window.document.location.hostname;
    cj.test(e) || bj.test(e) || a.push("none");
    return a
  }, Qi = function (a) {
    if (!og().g() || !a || !Ag()) return !0;
    if (!zg(a)) return !1;
    var b = xg(a);
    return null == b ? !0 : !!b
  };
  var dj = function (a) {
    var b = Math.round(2147483647 * Math.random());
    return a ? String(b ^ Li(a) & 2147483647) : String(b)
  }, ej = function (a) {
    return [dj(a), Math.round(Sa() / 1E3)].join(".")
  }, hj = function (a, b, c, d, e) {
    var f = fj(b);
    return Vi(a, f, gj(c), d, e)
  }, ij = function (a, b, c, d) {
    var e = "" + fj(c), f = gj(d);
    1 < f && (e += "-" + f);
    return [b, e, a].join(".")
  }, fj = function (a) {
    if (!a) return 1;
    a = 0 === a.indexOf(".") ? a.substr(1) : a;
    return a.split(".").length
  }, gj = function (a) {
    if (!a || "/" === a) return 1;
    "/" !== a[0] && (a = "/" + a);
    "/" !== a[a.length - 1] && (a += "/");
    return a.split("/").length -
      1
  };

  function jj(a, b, c) {
    var d, e = Number(null != a.Rb ? a.Rb : void 0);
    0 !== e && (d = new Date((b || Sa()) + 1E3 * (e || 7776E3)));
    return {path: a.path, domain: a.domain, flags: a.flags, encode: !!c, expires: d}
  };var kj = ["1"], lj = {}, mj = {}, qj = function (a, b) {
    b = void 0 === b ? !0 : b;
    var c = nj(a.prefix);
    if (!lj[c] && !oj(c, a.path, a.domain) && b) {
      var d = nj(a.prefix), e = ej();
      if (0 === pj(d, e, a)) {
        var f = Hb("google_tag_data", {});
        f._gcl_au ? ig("GTM", 57) : f._gcl_au = e
      }
      oj(c, a.path, a.domain)
    }
  };

  function pj(a, b, c, d) {
    var e = ij(b, "1", c.domain, c.path), f = jj(c, d);
    f.hb = "ad_storage";
    return aj(a, e, f)
  }

  function oj(a, b, c) {
    var d = hj(a, b, c, kj, "ad_storage");
    if (!d) return !1;
    var e = d.split(".");
    5 === e.length ? (lj[a] = e.slice(0, 2).join("."), mj[a] = {
      id: e.slice(2, 4).join("."),
      xh: Number(e[4]) || 0
    }) : 3 === e.length ? mj[a] = {id: e.slice(0, 2).join("."), xh: Number(e[2]) || 0} : lj[a] = d;
    return !0
  }

  function nj(a) {
    return (a || "_gcl") + "_au"
  };var rj = function (a) {
    for (var b = [], c = J.cookie.split(";"), d = new RegExp("^\\s*" + (a || "_gac") + "_(UA-\\d+-\\d+)=\\s*(.+?)\\s*$"), e = 0; e < c.length; e++) {
      var f = c[e].match(d);
      f && b.push({Zf: f[1], value: f[2], timestamp: Number(f[2].split(".")[1]) || 0})
    }
    b.sort(function (g, h) {
      return h.timestamp - g.timestamp
    });
    return b
  };

  function sj(a, b) {
    var c = rj(a), d = {};
    if (!c || !c.length) return d;
    for (var e = 0; e < c.length; e++) {
      var f = c[e].value.split(".");
      if (!("1" !== f[0] || b && 3 > f.length || !b && 3 !== f.length) && Number(f[1])) {
        d[c[e].Zf] || (d[c[e].Zf] = []);
        var g = {version: f[0], timestamp: 1E3 * Number(f[1]), Ha: f[2]};
        b && 3 < f.length && (g.labels = f.slice(3));
        d[c[e].Zf].push(g)
      }
    }
    return d
  };

  function tj() {
    for (var a = uj, b = {}, c = 0; c < a.length; ++c) b[a[c]] = c;
    return b
  }

  function vj() {
    var a = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    a += a.toLowerCase() + "0123456789-_";
    return a + "."
  }

  var uj, wj;

  function xj(a) {
    function b(k) {
      for (; d < a.length;) {
        var n = a.charAt(d++), p = wj[n];
        if (null != p) return p;
        if (!/^[\s\xa0]*$/.test(n)) throw Error("Unknown base64 encoding at char: " + n);
      }
      return k
    }

    uj = uj || vj();
    wj = wj || tj();
    for (var c = "", d = 0; ;) {
      var e = b(-1), f = b(0), g = b(64), h = b(64);
      if (64 === h && -1 === e) return c;
      c += String.fromCharCode(e << 2 | f >> 4);
      64 != g && (c += String.fromCharCode(f << 4 & 240 | g >> 2), 64 != h && (c += String.fromCharCode(g << 6 & 192 | h)))
    }
  };var yj;
  var Cj = function () {
    var a = zj, b = Aj, c = Bj(), d = function (g) {
      a(g.target || g.srcElement || {})
    }, e = function (g) {
      b(g.target || g.srcElement || {})
    };
    if (!c.init) {
      Qb(J, "mousedown", d);
      Qb(J, "keyup", d);
      Qb(J, "submit", e);
      var f = HTMLFormElement.prototype.submit;
      HTMLFormElement.prototype.submit = function () {
        b(this);
        f.call(this)
      };
      c.init = !0
    }
  }, Dj = function (a, b, c, d, e) {
    var f = {callback: a, domains: b, fragment: 2 === c, placement: c, forms: d, sameHost: e};
    Bj().decorators.push(f)
  }, Ej = function (a, b, c) {
    for (var d = Bj().decorators, e = {}, f = 0; f < d.length; ++f) {
      var g =
        d[f], h;
      if (h = !c || g.forms) a:{
        var k = g.domains, n = a, p = !!g.sameHost;
        if (k && (p || n !== J.location.hostname)) for (var q = 0; q < k.length; q++) if (k[q] instanceof RegExp) {
          if (k[q].test(n)) {
            h = !0;
            break a
          }
        } else if (0 <= n.indexOf(k[q]) || p && 0 <= k[q].indexOf(n)) {
          h = !0;
          break a
        }
        h = !1
      }
      if (h) {
        var r = g.placement;
        void 0 == r && (r = g.fragment ? 2 : 1);
        r === b && Wa(e, g.callback())
      }
    }
    return e
  };

  function Bj() {
    var a = Hb("google_tag_data", {}), b = a.gl;
    b && b.decorators || (b = {decorators: []}, a.gl = b);
    return b
  };var Fj = /(.*?)\*(.*?)\*(.*)/, Gj = /^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,
    Hj = /^(?:www\.|m\.|amp\.)+/, Ij = /([^?#]+)(\?[^#]*)?(#.*)?/;

  function Jj(a) {
    return new RegExp("(.*?)(^|&)" + a + "=([^&]*)&?(.*)")
  }

  var Lj = function (a) {
    var b = [], c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      if (void 0 !== d && d === d && null !== d && "[object Object]" !== d.toString()) {
        b.push(c);
        var e = b, f = e.push, g, h = String(d);
        uj = uj || vj();
        wj = wj || tj();
        for (var k = [], n = 0; n < h.length; n += 3) {
          var p = n + 1 < h.length, q = n + 2 < h.length, r = h.charCodeAt(n), u = p ? h.charCodeAt(n + 1) : 0,
            t = q ? h.charCodeAt(n + 2) : 0, v = r >> 2, x = (r & 3) << 4 | u >> 4, y = (u & 15) << 2 | t >> 6,
            w = t & 63;
          q || (w = 64, p || (y = 64));
          k.push(uj[v], uj[x], uj[y], uj[w])
        }
        g = k.join("");
        f.call(e, g)
      }
    }
    var A = b.join("*");
    return ["1", Kj(A),
      A].join("*")
  };

  function Kj(a, b) {
    var c = [z.navigator.userAgent, (new Date).getTimezoneOffset(), Fb.userLanguage || Fb.language, Math.floor(Sa() / 60 / 1E3) - (void 0 === b ? 0 : b), a].join("*"),
      d;
    if (!(d = yj)) {
      for (var e = Array(256), f = 0; 256 > f; f++) {
        for (var g = f, h = 0; 8 > h; h++) g = g & 1 ? g >>> 1 ^ 3988292384 : g >>> 1;
        e[f] = g
      }
      d = e
    }
    yj = d;
    for (var k = 4294967295, n = 0; n < c.length; n++) k = k >>> 8 ^ yj[(k ^ c.charCodeAt(n)) & 255];
    return ((k ^ -1) >>> 0).toString(36)
  }

  function Mj() {
    return function (a) {
      var b = oi(z.location.href), c = b.search.replace("?", ""), d = ji(c, "_gl", !1, !0) || "";
      a.query = Nj(d) || {};
      var e = mi(b, "fragment").match(Jj("_gl"));
      a.fragment = Nj(e && e[3] || "") || {}
    }
  }

  function Oj(a, b) {
    var c = Jj(a).exec(b), d = b;
    if (c) {
      var e = c[2], f = c[4];
      d = c[1];
      f && (d = d + e + f)
    }
    return d
  }

  var Pj = function (a, b) {
    b || (b = "_gl");
    var c = Ij.exec(a);
    if (!c) return "";
    var d = c[1], e = Oj(b, (c[2] || "").slice(1)), f = Oj(b, (c[3] || "").slice(1));
    e.length && (e = "?" + e);
    f.length && (f = "#" + f);
    return "" + d + e + f
  }, Qj = function (a) {
    var b = Mj(), c = Bj();
    c.data || (c.data = {query: {}, fragment: {}}, b(c.data));
    var d = {}, e = c.data;
    e && (Wa(d, e.query), a && Wa(d, e.fragment));
    return d
  }, Nj = function (a) {
    try {
      var b = Rj(a, 3);
      if (void 0 !== b) {
        for (var c = {}, d = b ? b.split("*") : [], e = 0; e + 1 < d.length; e += 2) {
          var f = d[e], g = xj(d[e + 1]);
          c[f] = g
        }
        ig("TAGGING", 6);
        return c
      }
    } catch (h) {
      ig("TAGGING",
        8)
    }
  };

  function Rj(a, b) {
    if (a) {
      var c;
      a:{
        for (var d = a, e = 0; 3 > e; ++e) {
          var f = Fj.exec(d);
          if (f) {
            c = f;
            break a
          }
          d = decodeURIComponent(d)
        }
        c = void 0
      }
      var g = c;
      if (g && "1" === g[1]) {
        var h = g[3], k;
        a:{
          for (var n = g[2], p = 0; p < b; ++p) if (n === Kj(h, p)) {
            k = !0;
            break a
          }
          k = !1
        }
        if (k) return h;
        ig("TAGGING", 7)
      }
    }
  }

  function Sj(a, b, c, d) {
    function e(p) {
      p = Oj(a, p);
      var q = p.charAt(p.length - 1);
      p && "&" !== q && (p += "&");
      return p + n
    }

    d = void 0 === d ? !1 : d;
    var f = Ij.exec(c);
    if (!f) return "";
    var g = f[1], h = f[2] || "", k = f[3] || "", n = a + "=" + b;
    d ? k = "#" + e(k.substring(1)) : h = "?" + e(h.substring(1));
    return "" + g + h + k
  }

  function Tj(a, b) {
    var c = "FORM" === (a.tagName || "").toUpperCase(), d = Ej(b, 1, c), e = Ej(b, 2, c), f = Ej(b, 3, c);
    if (Xa(d)) {
      var g = Lj(d);
      c ? Uj("_gl", g, a) : Vj("_gl", g, a, !1)
    }
    if (!c && Xa(e)) {
      var h = Lj(e);
      Vj("_gl", h, a, !0)
    }
    for (var k in f) if (f.hasOwnProperty(k)) a:{
      var n = k, p = f[k], q = a;
      if (q.tagName) {
        if ("a" === q.tagName.toLowerCase()) {
          Vj(n, p, q);
          break a
        }
        if ("form" === q.tagName.toLowerCase()) {
          Uj(n, p, q);
          break a
        }
      }
      "string" == typeof q && Sj(n, p, q)
    }
  }

  function Vj(a, b, c, d) {
    if (c.href) {
      var e = Sj(a, b, c.href, void 0 === d ? !1 : d);
      sb.test(e) && (c.href = e)
    }
  }

  function Uj(a, b, c) {
    if (c && c.action) {
      var d = (c.method || "").toLowerCase();
      if ("get" === d) {
        for (var e = c.childNodes || [], f = !1, g = 0; g < e.length; g++) {
          var h = e[g];
          if (h.name === a) {
            h.setAttribute("value", b);
            f = !0;
            break
          }
        }
        if (!f) {
          var k = J.createElement("input");
          k.setAttribute("type", "hidden");
          k.setAttribute("name", a);
          k.setAttribute("value", b);
          c.appendChild(k)
        }
      } else if ("post" === d) {
        var n = Sj(a, b, c.action);
        sb.test(n) && (c.action = n)
      }
    }
  }

  function zj(a) {
    try {
      var b;
      a:{
        for (var c = a, d = 100; c && 0 < d;) {
          if (c.href && c.nodeName.match(/^a(?:rea)?$/i)) {
            b = c;
            break a
          }
          c = c.parentNode;
          d--
        }
        b = null
      }
      var e = b;
      if (e) {
        var f = e.protocol;
        "http:" !== f && "https:" !== f || Tj(e, e.hostname)
      }
    } catch (g) {
    }
  }

  function Aj(a) {
    try {
      if (a.action) {
        var b = mi(oi(a.action), "host");
        Tj(a, b)
      }
    } catch (c) {
    }
  }

  var Wj = function (a, b, c, d) {
    Cj();
    Dj(a, b, "fragment" === c ? 2 : 1, !!d, !1)
  }, Xj = function (a, b) {
    Cj();
    Dj(a, [li(z.location, "host", !0)], b, !0, !0)
  }, Yj = function () {
    var a = J.location.hostname, b = Gj.exec(J.referrer);
    if (!b) return !1;
    var c = b[2], d = b[1], e = "";
    if (c) {
      var f = c.split("/"), g = f[1];
      e = "s" === g ? decodeURIComponent(f[2]) : decodeURIComponent(g)
    } else if (d) {
      if (0 === d.indexOf("xn--")) return !1;
      e = d.replace(/-/g, ".").replace(/\.\./g, "-")
    }
    var h = a.replace(Hj, ""), k = e.replace(Hj, ""), n;
    if (!(n = h === k)) {
      var p = "." + k;
      n = h.substring(h.length - p.length,
        h.length) === p
    }
    return n
  }, Zj = function (a, b) {
    return !1 === a ? !1 : a || b || Yj()
  };
  var ak = {};
  var bk = /^\w+$/, ck = /^[\w-]+$/, dk = {aw: "_aw", dc: "_dc", gf: "_gf", ha: "_ha", gp: "_gp", gb: "_gb"},
    ek = function () {
      if (!og().g() || !Ag()) return !0;
      var a = xg("ad_storage");
      return null == a ? !0 : !!a
    }, fk = function (a, b) {
      zg("ad_storage") ? ek() ? a() : Fg(a, "ad_storage") : b ? ig("TAGGING", 3) : Eg(function () {
        fk(a, !0)
      }, ["ad_storage"])
    }, hk = function (a) {
      return gk(a).map(function (b) {
        return b.Ha
      })
    }, gk = function (a) {
      var b = [];
      if (!Pi(z) || !J.cookie) return b;
      var c = Si(a, J.cookie, void 0, "ad_storage");
      if (!c || 0 == c.length) return b;
      for (var d = {}, e = 0; e < c.length; d =
        {Bd: d.Bd}, e++) {
        var f = ik(c[e]);
        if (null != f) {
          var g = f, h = g.version;
          d.Bd = g.Ha;
          var k = g.timestamp, n = g.labels, p = Ga(b, function (q) {
            return function (r) {
              return r.Ha === q.Bd
            }
          }(d));
          p ? (p.timestamp = Math.max(p.timestamp, k), p.labels = jk(p.labels, n || [])) : b.push({
            version: h,
            Ha: d.Bd,
            timestamp: k,
            labels: n
          })
        }
      }
      b.sort(function (q, r) {
        return r.timestamp - q.timestamp
      });
      return kk(b)
    };

  function jk(a, b) {
    for (var c = {}, d = [], e = 0; e < a.length; e++) c[a[e]] = !0, d.push(a[e]);
    for (var f = 0; f < b.length; f++) c[b[f]] || d.push(b[f]);
    return d
  }

  function lk(a) {
    return a && "string" == typeof a && a.match(bk) ? a : "_gcl"
  }

  var nk = function () {
    var a = oi(z.location.href), b = mi(a, "query", !1, void 0, "gclid"), c = mi(a, "query", !1, void 0, "gclsrc"),
      d = mi(a, "query", !1, void 0, "wbraid"), e = mi(a, "query", !1, void 0, "dclid");
    if (!b || !c || !d) {
      var f = a.hash.replace("#", "");
      b = b || ji(f, "gclid", !1);
      c = c || ji(f, "gclsrc", !1);
      d = d || ji(f, "wbraid", !1)
    }
    return mk(b, c, e, d)
  }, mk = function (a, b, c, d) {
    var e = {}, f = function (g, h) {
      e[h] || (e[h] = []);
      e[h].push(g)
    };
    e.gclid = a;
    e.gclsrc = b;
    e.dclid = c;
    void 0 !== d && ck.test(d) && (e.gbraid = d, f(d, "gb"));
    if (void 0 !== a && a.match(ck)) switch (b) {
      case void 0:
        f(a,
          "aw");
        break;
      case "aw.ds":
        f(a, "aw");
        f(a, "dc");
        break;
      case "ds":
        f(a, "dc");
        break;
      case "3p.ds":
        f(a, "dc");
        break;
      case "gf":
        f(a, "gf");
        break;
      case "ha":
        f(a, "ha")
    }
    c && f(c, "dc");
    return e
  }, pk = function (a) {
    var b = nk();
    fk(function () {
      ok(b, !1, a)
    })
  };

  function ok(a, b, c, d, e) {
    function f(x, y) {
      var w = qk(x, g);
      w && (aj(w, y, h), k = !0)
    }

    c = c || {};
    e = e || [];
    var g = lk(c.prefix);
    d = d || Sa();
    var h = jj(c, d, !0);
    h.hb = "ad_storage";
    var k = !1, n = Math.round(d / 1E3), p = function (x) {
      var y = ["GCL", n, x];
      0 < e.length && y.push(e.join("."));
      return y.join(".")
    };
    a.aw && f("aw", p(a.aw[0]));
    a.dc && f("dc", p(a.dc[0]));
    a.gf && f("gf", p(a.gf[0]));
    a.ha && f("ha", p(a.ha[0]));
    a.gp && f("gp", p(a.gp[0]));
    if ((void 0 == ak.enable_gbraid_cookie_write ? 0 : ak.enable_gbraid_cookie_write) && !k && a.gb) {
      var q = a.gb[0], r = qk("gb",
        g), u = !1;
      if (!b) for (var t = gk(r), v = 0; v < t.length; v++) t[v].Ha === q && t[v].labels && 0 < t[v].labels.length && (u = !0);
      u || f("gb", p(q))
    }
  }

  var sk = function (a, b) {
    var c = Qj(!0);
    fk(function () {
      for (var d = lk(b.prefix), e = 0; e < a.length; ++e) {
        var f = a[e];
        if (void 0 !== dk[f]) {
          var g = qk(f, d), h = c[g];
          if (h) {
            var k = Math.min(rk(h), Sa()), n;
            b:{
              var p = k;
              if (Pi(z)) for (var q = Si(g, J.cookie, void 0, "ad_storage"), r = 0; r < q.length; ++r) if (rk(q[r]) > p) {
                n = !0;
                break b
              }
              n = !1
            }
            if (!n) {
              var u = jj(b, k, !0);
              u.hb = "ad_storage";
              aj(g, h, u)
            }
          }
        }
      }
      ok(mk(c.gclid, c.gclsrc), !1, b)
    })
  }, qk = function (a, b) {
    var c = dk[a];
    if (void 0 !== c) return b + c
  }, rk = function (a) {
    return 0 !== tk(a.split(".")).length ? 1E3 * (Number(a.split(".")[1]) ||
      0) : 0
  };

  function ik(a) {
    var b = tk(a.split("."));
    return 0 === b.length ? null : {version: b[0], Ha: b[2], timestamp: 1E3 * (Number(b[1]) || 0), labels: b.slice(3)}
  }

  function tk(a) {
    return 3 > a.length || "GCL" !== a[0] && "1" !== a[0] || !/^\d+$/.test(a[1]) || !ck.test(a[2]) ? [] : a
  }

  var uk = function (a, b, c, d, e) {
    if (Fa(b) && Pi(z)) {
      var f = lk(e), g = function () {
        for (var h = {}, k = 0; k < a.length; ++k) {
          var n = qk(a[k], f);
          if (n) {
            var p = Si(n, J.cookie, void 0, "ad_storage");
            p.length && (h[n] = p.sort()[p.length - 1])
          }
        }
        return h
      };
      fk(function () {
        Wj(g, b, c, d)
      })
    }
  }, kk = function (a) {
    return a.filter(function (b) {
      return ck.test(b.Ha)
    })
  }, vk = function (a, b) {
    if (Pi(z)) {
      for (var c = lk(b.prefix), d = {}, e = 0; e < a.length; e++) dk[a[e]] && (d[a[e]] = dk[a[e]]);
      fk(function () {
        La(d, function (f, g) {
          var h = Si(c + g, J.cookie, void 0, "ad_storage");
          h.sort(function (u,
                           t) {
            return rk(t) - rk(u)
          });
          if (h.length) {
            var k = h[0], n = rk(k), p = 0 !== tk(k.split(".")).length ? k.split(".").slice(3) : [], q = {}, r;
            r = 0 !== tk(k.split(".")).length ? k.split(".")[2] : void 0;
            q[f] = [r];
            ok(q, !0, b, n, p)
          }
        })
      })
    }
  };

  function wk(a, b) {
    for (var c = 0; c < b.length; ++c) if (a[b[c]]) return !0;
    return !1
  }

  var xk = function (a) {
    function b(e, f, g) {
      g && (e[f] = g)
    }

    if (Ag()) {
      var c = nk();
      if (wk(c, a)) {
        var d = {};
        b(d, "gclid", c.gclid);
        b(d, "dclid", c.dclid);
        b(d, "gclsrc", c.gclsrc);
        b(d, "wbraid", c.gbraid);
        Xj(function () {
          return d
        }, 3);
        Xj(function () {
          var e = {};
          return e._up = "1", e
        }, 1)
      }
    }
  };

  function yk(a, b) {
    var c = lk(b), d = qk(a, c);
    if (!d) return 0;
    for (var e = gk(d), f = 0, g = 0; g < e.length; g++) f = Math.max(f, e[g].timestamp);
    return f
  }

  function zk(a) {
    var b = 0, c;
    for (c in a) for (var d = a[c], e = 0; e < d.length; e++) b = Math.max(b, Number(d[e].timestamp));
    return b
  };
  var Ak = function (a) {
    var b = [];
    La(a, function (c, d) {
      d = kk(d);
      for (var e = [], f = 0; f < d.length; f++) e.push(d[f].Ha);
      e.length && b.push(c + ":" + e.join(","))
    });
    return b.join(";")
  }, Ck = function (a, b, c) {
    if ("aw" === a || "dc" === a || "gb" === a) {
      var d = Bk("gcl" + a);
      if (d) return d.split(".")
    }
    var e = lk(b);
    if ("_gcl" == e) {
      c = void 0 === c ? !0 : c;
      var f = !Ng(Q.H) && c, g;
      g = nk()[a] || [];
      if (0 < g.length) return f ? ["0"] : g
    }
    var h = qk(a, e);
    return h ? hk(h) : []
  }, Bk = function (a) {
    var b = oi(z.location.href), c = mi(b, "host", !1);
    if (c && c.match(Dk)) {
      var d = mi(b, "path").split(a +
        "=");
      if (1 < d.length) return d[1].split(";")[0].split("?")[0]
    }
  }, Ek = function (a, b) {
    zg(Q.H) ? Ng(Q.H) ? a() : Fg(a, Q.H) : b ? lg(42) : Rg(function () {
      Ek(a, !0)
    }, [Q.H])
  }, Dk = /^\d+\.fls\.doubleclick\.net$/, Fk = !1;
  var Gk = function (a, b) {
    return Ck("aw", a, b)
  }, Hk = function (a, b) {
    return Ck("dc", a, b)
  }, Ik = function (a) {
    var b = Bk("gac");
    return b ? !Ng(Q.H) && a ? "0" : decodeURIComponent(b) : Ak(ek() ? sj() : {})
  }, Jk = function (a) {
    var b = Bk("gacgb");
    return b ?
      !Ng(Q.H) && a ? "0" : decodeURIComponent(b) : Ak(ek() ? sj("_gac_gb", !0) : {})
  }, Kk = function (a) {
    var b = nk(), c = [], d = b.gclid, e = b.dclid, f = b.gclsrc || "aw";
    !d || "aw.ds" !== f && "aw" !== f && "ds" !== f || c.push({Ha: d, Cf: f});
    e && c.push({Ha: e, Cf: "ds"});
    if (!Fk) {
    }
    Ek(function () {
      qj(a);
      var g = lj[nj(a.prefix)];
      if (g && 0 < c.length) for (var h = S.joined_auid = S.joined_auid || {}, k = 0; k < c.length; k++) {
        var n =
          c[k], p = n.Ha, q = n.Cf, r = (a.prefix || "_gcl") + "." + q + "." + p;
        if (!h[r]) {
          var u = "https://adservice.google.com/pagead/regclk";
          u = "gb" === q ? u + "?gbraid=" + p + "&auid=" + g : u + "?gclid=" + p + "&auid=" + g + "&gclsrc=" + q;
          Wb(u);
          h[r] = !0
        }
      }
    })
  }, Lk = function (a) {
    var b;
    if (Bk("gclaw") || Bk("gac") || 0 < (nk().aw || []).length) b = !1; else {
      var c;
      if (0 < (nk().gb || []).length) c = !0; else {
        var d = Math.max(yk("aw", a), zk(ek() ? sj() : {}));
        c = Math.max(yk("gb", a), zk(ek() ? sj("_gac_gb", !0) : {})) > d
      }
      b = c
    }
    return b
  };
  var Mk = function (a) {
    var b = Fb && Fb.userAgent || "";
    if (0 > b.indexOf("Safari") || /Chrome|Coast|Opera|Edg|Silk|Android/.test(b)) return !1;
    var c = (/Version\/([\d\.]+)/.exec(b) || [])[1] || "";
    if ("" === c) return !1;
    for (var d = a.split("."), e = c.split("."), f = 0; f < e.length; f++) {
      if (void 0 === d[f]) return !0;
      if (e[f] != d[f]) return Number(e[f]) > Number(d[f])
    }
    return e.length >= d.length
  };
  var Ok = function (a) {
    var b = a ? Ii(a) : z.enhanced_conversion_data, c = (a || {}).enhanced_conversions_mode, d = void 0;
    if ("manual" === c && b) switch (b._tag_mode) {
      case "CODE":
        d = "c";
        break;
      case "AUTO":
        d = "a";
        break;
      case "MANUAL":
        d = "m";
        break;
      default:
        d = "c"
    } else d = "automatic" === c ? Nk(a) ? "a" : "m" : "c";
    if (z.Promise) try {
      return b ? oh(b).then(function (e) {
        e.nh = d;
        return e
      }) : Promise.resolve({se: "", nh: void 0})
    } catch (e) {
    }
  }, Nk = function (a) {
    var b = a && a[Q.mg];
    return b && b[Q.si]
  }, Pk = function (a) {
    if (Ng(Q.H)) return a;
    a = a.replace(/&url=([^&#]+)/,
      function (b, c) {
        var d = pi(decodeURIComponent(c));
        return "&url=" + encodeURIComponent(d)
      });
    return a = a.replace(/&ref=([^&#]+)/, function (b, c) {
      var d = pi(decodeURIComponent(c));
      return "&ref=" + encodeURIComponent(d)
    })
  }, Qk = function () {
    if (wh || !0 !== z._gtmdgs && !Mk("11")) return -1;
    var a = Na('1');
    return Ki(1, 100) < a ? Ki(2, 2) : -1
  }, Rk = function () {
    return -1 !== Fb.userAgent.toLowerCase().indexOf("firefox")
  }, Sk = function (a) {
    if (a && a.length) {
      for (var b = [], c = 0; c < a.length; ++c) {
        var d = a[c];
        d && d.estimated_delivery_date ? b.push("" + d.estimated_delivery_date) : b.push("")
      }
      return b.join(",")
    }
  };
  var Tk = new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/), Uk = {
    cl: ["ecl"],
    customPixels: ["nonGooglePixels"],
    ecl: ["cl"],
    ehl: ["hl"],
    hl: ["ehl"],
    html: ["customScripts", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
    customScripts: ["html", "customPixels", "nonGooglePixels", "nonGoogleScripts", "nonGoogleIframes"],
    nonGooglePixels: [],
    nonGoogleScripts: ["nonGooglePixels"],
    nonGoogleIframes: ["nonGooglePixels"]
  }, Vk = {
    cl: ["ecl"],
    customPixels: ["customScripts", "html"],
    ecl: ["cl"],
    ehl: ["hl"],
    hl: ["ehl"],
    html: ["customScripts"],
    customScripts: ["html"],
    nonGooglePixels: ["customPixels", "customScripts", "html", "nonGoogleScripts", "nonGoogleIframes"],
    nonGoogleScripts: ["customScripts", "html"],
    nonGoogleIframes: ["customScripts", "html", "nonGoogleScripts"]
  }, Wk = "google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
  var Xk = function () {
    var a = !1;
    return a
  }, Zk = function (a) {
    var b = Qh("gtm.allowlist") || Qh("gtm.whitelist");
    b && lg(9);
    Xk() && (b = ["google", "gtagfl", "lcl", "zone"]);
    var c = b && Ya(Pa(b), Uk), d = Qh("gtm.blocklist") ||
      Qh("gtm.blacklist");
    d || (d = Qh("tagTypeBlacklist")) && lg(3);
    d ? lg(8) : d = [];
    Yk() && (d = Pa(d), d.push("nonGooglePixels", "nonGoogleScripts", "sandboxedScripts"));
    0 <= Pa(d).indexOf("google") && lg(2);
    var e = d && Ya(Pa(d), Vk), f = {};
    return function (g) {
      var h = g && g[Ld.Hb];
      if (!h || "string" != typeof h) return !0;
      h = h.replace(/^_*/, "");
      if (void 0 !== f[h]) return f[h];
      var k = Jh[h] || [], n = a(h, k);
      if (b) {
        var p;
        if (p = n) a:{
          if (0 > c.indexOf(h)) if (k && 0 < k.length) for (var q = 0; q < k.length; q++) {
            if (0 > c.indexOf(k[q])) {
              lg(11);
              p = !1;
              break a
            }
          } else {
            p = !1;
            break a
          }
          p = !0
        }
        n = p
      }
      var r = !1;
      if (d) {
        var u = 0 <= e.indexOf(h);
        if (u) r = u; else {
          var t = Ka(e, k || []);
          t && lg(10);
          r = t
        }
      }
      var v = !n || r;
      v || !(0 <= k.indexOf("sandboxedScripts")) || c && -1 !== c.indexOf("sandboxedScripts") || (v = Ka(e, Wk));
      return f[h] = v
    }
  }, Yk = function () {
    return Tk.test(z.location && z.location.hostname)
  };
  var Ie = {J: "GTM-P528B3", Gc: "2703797"}, $k = {Ch: "GTM-P528B3", Dh: "GTM-P528B3"}, al = function () {
    var a = [Ie.J];
    return a
  }, bl = function () {
    var a = [Ie.J];
    return a
  }, cl = function () {
    this.container = {};
    this.destination = {};
    this.canonical = {}
  }, el = function (a) {
    return dl().container.hasOwnProperty(a)
  };

  function dl() {
    var a = S.tidr;
    a || (a = new cl, S.tidr = a);
    return a
  }

  var hl = function (a) {
    }, ll = function (a) {
    }, ml =
      function () {
        return "&tc=" + ke.filter(function (a) {
          return a
        }).length
      }, Gl = function () {
      2022 <= El().length && Fl()
    }, Hl = function (a) {
      return 0 === a.indexOf("gtm.") ? encodeURIComponent(a) : "*"
    }, Jl = function () {
      Il || (Il = z.setTimeout(Fl, 500))
    }, Fl = function () {
      Il && (z.clearTimeout(Il), Il = void 0);
      if (void 0 !== Kl && (!Ll[Kl] || Ml || Nl)) if (Ol[Kl] || Pl.Nj() || 0 >= Ql--) lg(1), Ol[Kl] = !0; else {
        Pl.mk();
        var a = El(!0);
        Pb(a);
        Ll[Kl] = !0;
        Sl = Rl = Ul = Vl = Wl = Nl = Ml = "";
        Tl = []
      }
    }, El = function (a) {
      var b = Kl;
      if (void 0 === b) return "";
      var c = jg("GTM"), d = jg("TAGGING");
      return [Xl, Ll[b] ? "" : "&es=1", Yl[b], hl(b), c ? "&u=" + c : "", d ? "&ut=" + d : "", ml(), Ml, Nl, Wl, Vl, ll(a), Ul, Rl, Sl ? "&dl=" + encodeURIComponent(Sl) : "", 0 < Tl.length ? "&tdp=" + Tl.join(".") : "", "&z=0"].join("")
    }, $l = function () {
      Xl = Zl()
    }, Zl = function () {
      return [am,
        "&v=3&t=t", "&pid=" + Ha(), "&rv=" + ph.Yd].join("")
    }, kl = ["L", "S", "Y"], gl = ["S", "E"], bm = {sampleRate: "0.005000", Wh: "", Vh: Number("5")},
    cm = 0 <= J.location.search.indexOf("?gtm_latency=") || 0 <= J.location.search.indexOf("&gtm_latency="), dm;
  if (!(dm = cm)) {
    var em = Math.random(), fm = bm.sampleRate;
    dm = em < fm
  }
  var gm = dm, am = "https://www.googletagmanager.com/a?id=" + Ie.J + "&cv=439",
    hm = {label: Ie.J + " Container", children: [{label: "Initialization", children: []}]}, Xl = Zl(), Ll = {}, Ml = "",
    Nl = "", Ul = "", Vl = "", Rl = "", Tl = [], Sl = "", jl = {}, il = !1, fl = {}, im = {}, Wl = "", Kl = void 0,
    Yl = {}, Ol = {}, Il = void 0, jm = 5;
  0 < bm.Vh && (jm = bm.Vh);
  var Pl = function (a, b) {
    for (var c = 0, d = [], e = 0; e < a; ++e) d.push(0);
    return {
      Nj: function () {
        return c < a ? !1 : Sa() - d[c % a] < b
      }, mk: function () {
        var f = c++ % a;
        d[f] = Sa()
      }
    }
  }(jm, 1E3), Ql = 1E3, lm = function (a, b) {
    if (gm && !Ol[a] &&
      Kl !== a) {
      Fl();
      Kl = a;
      Ul = Ml = "";
      Yl[a] = "&e=" + Hl(b) + "&eid=" + a;
      Jl();
    }
  }, mm = function (a, b, c, d) {
    if (gm && b) {
      var e, f = String(b[Ld.Hb] || "").replace(/_/g, "");
      0 === f.indexOf("cvt") && (f = "cvt");
      e = f;
      var g = c + e;
      if (!Ol[a]) {
        a !== Kl && (Fl(), Kl = a);
        Ml = Ml ? Ml + "." + g : "&tr=" + g;
        var h = b["function"];
        if (!h) throw Error("Error: No function name given for function call.");
        var k = (me[h] ? "1" : "2") + e;
        Ul = Ul ? Ul + "." + k : "&ti=" + k;
        Jl();
        Gl()
      }
    }
  };
  var tm = function (a, b, c) {
    if (gm && !Ol[a]) {
      a !== Kl && (Fl(), Kl = a);
      var d = c + b;
      Nl = Nl ? Nl + "." + d : "&epr=" + d;
      Jl();
      Gl()
    }
  }, um = function (a, b, c) {
  };
  var vm = {initialized: 11, complete: 12, interactive: 13}, wm = {},
    xm = Object.freeze((wm[Q.Gb] = !0, wm[Q.nc] = !0, wm)), ym = {}, zm = Object.freeze((ym[Q.Fa] = !0, ym)),
    Am = 0 <= J.location.search.indexOf("?gtm_diagnostics=") || 0 <= J.location.search.indexOf("&gtm_diagnostics="),
    Cm = function (a, b, c) {
    };

  function Dm(a, b) {
    var c = {}, d;
    for (d in b) b.hasOwnProperty(d) && (c[d] = !0);
    for (var e in a) a.hasOwnProperty(e) && (c[e] = !0);
    return c
  }

  function Bm(a, b, c, d) {
    c = void 0 === c ? {} : c;
    d = void 0 === d ? "" : d;
    if (a === b) return [];
    var e = function (q, r) {
      var u = r[q];
      return void 0 === u ? zm[q] : u
    }, f;
    for (f in Dm(a, b)) if (!xm[f]) {
      var g = (d ? d + "." : "") + f, h = e(f, a), k = e(f, b), n = "object" === mc(h) || "array" === mc(h),
        p = "object" === mc(k) || "array" === mc(k);
      if (n && p) Bm(h, k, c, g); else if (n || p || h !== k) c[g] = !0
    }
    return Object.keys(c)
  };var Em = !1, Fm = 0, Gm = [];

  function Hm(a) {
    if (!Em) {
      var b = J.createEventObject, c = "complete" == J.readyState, d = "interactive" == J.readyState;
      if (!a || "readystatechange" != a.type || c || !b && d) {
        Em = !0;
        for (var e = 0; e < Gm.length; e++) K(Gm[e])
      }
      Gm.push = function () {
        for (var f = 0; f < arguments.length; f++) K(arguments[f]);
        return 0
      }
    }
  }

  function Im() {
    if (!Em && 140 > Fm) {
      Fm++;
      try {
        J.documentElement.doScroll("left"), Hm()
      } catch (a) {
        z.setTimeout(Im, 50)
      }
    }
  }

  var Jm = function (a) {
    Em ? a() : Gm.push(a)
  };
  var Lm = function (a, b, c) {
    return {entityType: a, indexInOriginContainer: b, nameInOriginContainer: c, originContainerId: Ie.J}
  };
  var Nm = function (a, b) {
    this.g = !1;
    this.C = [];
    this.I = {tags: []};
    this.R = !1;
    this.o = this.s = 0;
    Mm(this, a, b)
  }, Om = function (a, b, c, d) {
    if (sh.hasOwnProperty(b) || "__zone" === b) return -1;
    var e = {};
    oc(d) && (e = pc(d, e));
    e.id = c;
    e.status = "timeout";
    return a.I.tags.push(e) - 1
  }, Pm = function (a, b, c, d) {
    var e = a.I.tags[b];
    e && (e.status = c, e.executionTime = d)
  }, Qm = function (a) {
    if (!a.g) {
      for (var b = a.C, c = 0; c < b.length; c++) b[c]();
      a.g = !0;
      a.C.length = 0
    }
  }, Mm = function (a, b, c) {
    void 0 !== b && a.be(b);
    c && z.setTimeout(function () {
      return Qm(a)
    }, Number(c))
  };
  Nm.prototype.be = function (a) {
    var b = this, c = Ua(function () {
      return K(function () {
        a(Ie.J, b.I)
      })
    });
    this.g ? c() : this.C.push(c)
  };
  var Rm = function (a) {
    a.s++;
    return Ua(function () {
      a.o++;
      a.R && a.o >= a.s && Qm(a)
    })
  }, Sm = function (a) {
    a.R = !0;
    a.o >= a.s && Qm(a)
  };
  var Tm = function () {
    function a(d) {
      return !Ea(d) || 0 > d ? 0 : d
    }

    if (!S._li && z.performance && z.performance.timing) {
      var b = z.performance.timing.navigationStart, c = Ea(Rh.get("gtm.start")) ? Rh.get("gtm.start") : 0;
      S._li = {cst: a(c - b), cbt: a(yh - b)}
    }
  }, Um = function (a) {
    z.performance && z.performance.mark(Ie.J + "_" + a + "_start")
  }, Vm = function (a) {
    if (z.performance) {
      var b = Ie.J + "_" + a + "_start", c = Ie.J + "_" + a + "_duration";
      z.performance.measure(c, b);
      var d = z.performance.getEntriesByName(c)[0];
      z.performance.clearMarks(b);
      z.performance.clearMeasures(c);
      var e = S._p || {};
      void 0 === e[a] && (e[a] = d.duration, S._p = e);
      return d.duration
    }
  }, Wm = function () {
    if (z.performance && z.performance.now) {
      var a = S._p || {};
      a.PAGEVIEW = z.performance.now();
      S._p = a
    }
  };
  var Xm = {}, Ym = function () {
    return z.GoogleAnalyticsObject && z[z.GoogleAnalyticsObject]
  }, Zm = !1;
  var $m = function (a) {
    z.GoogleAnalyticsObject || (z.GoogleAnalyticsObject = a || "ga");
    var b = z.GoogleAnalyticsObject;
    if (z[b]) z.hasOwnProperty(b) || lg(12); else {
      var c = function () {
        c.q = c.q || [];
        c.q.push(arguments)
      };
      c.l = Number(Ra());
      z[b] = c
    }
    Tm();
    return z[b]
  }, an = function (a) {
    if (Ag()) {
      var b = Ym();
      b(a + "require", "linker");
      b(a + "linker:passthrough", !0)
    }
  };

  function bn() {
    return z.GoogleAnalyticsObject || "ga"
  }

  var cn = function (a) {
  }, dn = function (a, b) {
    return function () {
      var c = Ym(), d = c && c.getByName && c.getByName(a);
      if (d) {
        var e = d.get("sendHitTask");
        d.set("sendHitTask", function (f) {
          var g = f.get("hitPayload"), h = f.get("hitCallback"), k = 0 > g.indexOf("&tid=" + b);
          k && (f.set("hitPayload", g.replace(/&tid=UA-[0-9]+-[0-9]+/, "&tid=" + b), !0), f.set("hitCallback", void 0, !0));
          e(f);
          k && (f.set("hitPayload",
            g, !0), f.set("hitCallback", h, !0), f.set("_x_19", void 0, !0), e(f))
        })
      }
    }
  };

  function jn(a, b, c, d) {
    var e = ke[a], f = kn(a, b, c, d);
    if (!f) return null;
    var g = te(e[Ld.Tg], c, []);
    if (g && g.length) {
      var h = g[0];
      f = jn(h.index, {onSuccess: f, onFailure: 1 === h.oh ? b.terminate : f, terminate: b.terminate}, c, d)
    }
    return f
  }

  function kn(a, b, c, d) {
    function e() {
      if (f[Ld.Qi]) h(); else {
        var x = ue(f, c, []);
        var y = x[Ld.ai];
        if (null != y) for (var w = 0; w < y.length; w++) if (!Ng(y[w])) {
          h();
          return
        }
        var A = Om(c.ub, String(f[Ld.Hb]), Number(f[Ld.Vg]), x[Ld.Ri]), B = !1;
        x.vtp_gtmOnSuccess = function () {
          if (!B) {
            B = !0;
            var E = Sa() - C;
            mm(c.id, ke[a], "5", E);
            Pm(c.ub, A, "success",
              E);
            g()
          }
        };
        x.vtp_gtmOnFailure = function () {
          if (!B) {
            B = !0;
            var E = Sa() - C;
            mm(c.id, ke[a], "6", E);
            Pm(c.ub, A, "failure", E);
            h()
          }
        };
        x.vtp_gtmTagId = f.tag_id;
        x.vtp_gtmEventId = c.id;
        c.priorityId && (x.vtp_gtmPriorityId = c.priorityId);
        mm(c.id, f, "1");
        var D = function () {
          var E = Sa() - C;
          mm(c.id, f, "7", E);
          Pm(c.ub, A, "exception",
            E);
          B || (B = !0, h())
        };
        var C = Sa();
        try {
          se(x, {event: c, index: a, type: 1})
        } catch (E) {
          D(E)
        }
      }
    }

    var f = ke[a], g = b.onSuccess, h = b.onFailure, k = b.terminate;
    if (c.Hf(f)) return null;
    var n = te(f[Ld.Wg], c, []);
    if (n && n.length) {
      var p = n[0], q = jn(p.index, {
        onSuccess: g, onFailure: h,
        terminate: k
      }, c, d);
      if (!q) return null;
      g = q;
      h = 2 === p.oh ? k : q
    }
    if (f[Ld.Ng] || f[Ld.Vi]) {
      var r = f[Ld.Ng] ? le : c.Dk, u = g, t = h;
      if (!r[a]) {
        e = Ua(e);
        var v = ln(a, r, e);
        g = v.onSuccess;
        h = v.onFailure
      }
      return function () {
        r[a](u, t)
      }
    }
    return e
  }

  function ln(a, b, c) {
    var d = [], e = [];
    b[a] = mn(d, e, c);
    return {
      onSuccess: function () {
        b[a] = nn;
        for (var f = 0; f < d.length; f++) d[f]()
      }, onFailure: function () {
        b[a] = on;
        for (var f = 0; f < e.length; f++) e[f]()
      }
    }
  }

  function mn(a, b, c) {
    return function (d, e) {
      a.push(d);
      b.push(e);
      c()
    }
  }

  function nn(a) {
    a()
  }

  function on(a, b) {
    b()
  };

  function pn(a, b) {
    if (a) {
      var c = "" + a;
      0 !== c.indexOf("http://") && 0 !== c.indexOf("https://") && (c = "https://" + c);
      "/" === c[c.length - 1] && (c = c.substring(0, c.length - 1));
      return oi("" + c + b).href
    }
  }

  function qn(a, b) {
    return rn() ? pn(a, b) : void 0
  }

  function rn() {
    var a = !1;
    return a
  }

  function sn() {
    return !!ph.Zd && "SGTM_TOKEN" !== ph.Zd.split("@@").join("")
  };var tn = function () {
    var a = !1;
    return a
  };
  var vn = function (a, b, c, d) {
    return (2 === un() || d || "http:" != z.location.protocol ? a : b) + c
  }, un = function () {
    var a = Nb(), b;
    if (1 === a) a:{
      var c = uh;
      c = c.toLowerCase();
      for (var d = "https://" + c, e = "http://" + c, f = 1, g = J.getElementsByTagName("script"), h = 0; h < g.length && 100 > h; h++) {
        var k = g[h].src;
        if (k) {
          k = k.toLowerCase();
          if (0 === k.indexOf(e)) {
            b = 3;
            break a
          }
          1 === f && 0 === k.indexOf(d) && (f = 2)
        }
      }
      b = f
    } else b = a;
    return b
  };
  var wn = !1;
  var yn = function (a, b, c) {
    if (!xn() && !el(a)) {
      var d = c ? "/gtag/js" : "/gtm.js", e = "?id=" + encodeURIComponent(a) + "&l=" + ph.ca,
        f = 0 === a.indexOf("GTM-");
      f || (e += "&cx=c");
      var g = sn();
      g && (e += "&sign=" + ph.Zd);
      var h = qn(b, d + e);
      if (!h) {
        var k = ph.Hc + d;
        g && Gb && f && (k = Gb.replace(/^(?:https?:\/\/)?/i, "").split(/[?#]/)[0]);
        h = vn("https://", "http://", k + e)
      }
      dl().container[a] = !0;
      Mb(h)
    }
  }, zn = function (a, b) {
    if (wn) {
      var c;
      if (c = !xn()) c = !dl().destination.hasOwnProperty(a);
      if (c) {
        var d = "/gtag/destination?id=" + encodeURIComponent(a) + "&l=" + ph.ca + "&cx=c";
        sn() && (d += "&sign=" + ph.Zd);
        var e = qn(b, d);
        e || (e = vn("https://", "http://", ph.Hc + d));
        dl().destination[a] = !0;
        Mb(e)
      }
    } else yn(a, b, !0)
  };

  function xn() {
    if (tn()) {
      return !0
    }
    return !1
  }

  var An = [];
  An[1] = !0;
  var Bn = function () {
      this.eventModel = {};
      this.targetConfig = {};
      this.containerConfig = {};
      this.globalConfig = {};
      this.dataLayerConfig = {};
      this.remoteConfig = {};
      this.internalModel = {};
      this.onSuccess = function () {
      };
      this.onFailure = function () {
      };
      this.setContainerTypeLoaded = function () {
      };
      this.getContainerTypeLoaded = function () {
      };
      this.priorityId = this.eventId = void 0;
      this.isGtmEvent = !1
    }, Cn = function (a) {
      var b = new Bn;
      b.eventModel = a;
      return b
    }, Dn = function (a, b) {
      a.targetConfig = b;
      return a
    }, En = function (a, b) {
      a.containerConfig = b;
      return a
    },
    Fn = function (a, b) {
      a.globalConfig = b;
      return a
    }, Gn = function (a, b) {
      a.dataLayerConfig = b;
      return a
    }, Hn = function (a, b) {
      a.remoteConfig = b;
      return a
    }, In = function (a, b) {
      a.onSuccess = b;
      return a
    }, Jn = function (a, b) {
      a.setContainerTypeLoaded = b;
      return a
    }, Kn = function (a, b) {
      a.getContainerTypeLoaded = b;
      return a
    }, Ln = function (a, b) {
      a.onFailure = b;
      return a
    };
  l = Bn.prototype;
  l.getWithConfig = function (a) {
    if (void 0 !== this.eventModel[a]) return this.eventModel[a];
    if (void 0 !== this.targetConfig[a]) return this.targetConfig[a];
    if (void 0 !== this.containerConfig[a]) return this.containerConfig[a];
    Mn(this, this.globalConfig[a], this.dataLayerConfig[a]) && lg(71);
    if (void 0 !== this.globalConfig[a]) return this.globalConfig[a];
    if (void 0 !== this.remoteConfig[a]) return this.remoteConfig[a]
  };
  l.getTopLevelKeys = function () {
    function a(f) {
      for (var g = Object.keys(f), h = 0; h < g.length; ++h) b[g[h]] = 1
    }

    var b = {};
    a(this.eventModel);
    a(this.targetConfig);
    a(this.containerConfig);
    a(this.globalConfig);
    for (var c = Object.keys(this.dataLayerConfig), d = 0; d < c.length; d++) {
      var e = c[d];
      if ("event" !== e && "gtm" !== e && "tagTypeBlacklist" !== e && !b.hasOwnProperty(e)) {
        lg(71);
        break
      }
    }
    return Object.keys(b)
  };
  l.getMergedValues = function (a, b) {
    function c(h) {
      oc(h) && La(h, function (k, n) {
        e = !0;
        d[k] = n
      })
    }

    var d = {}, e = !1;
    b && 1 !== b || (c(this.remoteConfig[a]), c(this.globalConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
    b && 2 !== b || c(this.eventModel[a]);
    var f = e, g = d;
    d = {};
    e = !1;
    b && 1 !== b || (c(this.remoteConfig[a]), c(this.dataLayerConfig[a]), c(this.containerConfig[a]), c(this.targetConfig[a]));
    b && 2 !== b || c(this.eventModel[a]);
    (e !== f || Mn(this, d, g)) && lg(71);
    e = f;
    d = g;
    return e ? d : void 0
  };
  l.getKeysFromFirstOfAnyScope = function (a) {
    var b = {}, c = !1, d = function (g) {
      for (var h = 0; h < a.length; h++) void 0 !== g[a[h]] && (b[a[h]] = g[a[h]], c = !0);
      return c
    };
    if (d(this.eventModel) || d(this.targetConfig) || d(this.containerConfig)) return b;
    d(this.globalConfig);
    var e = b, f = c;
    b = {};
    c = !1;
    d(this.dataLayerConfig);
    Mn(this, b, e) && lg(71);
    b = e;
    c = f;
    if (c) return b;
    d(this.remoteConfig);
    return b
  };
  l.getEventModelKeys = function () {
    var a = [], b;
    for (b in this.eventModel) b !== Q.Gb && this.eventModel.hasOwnProperty(b) && void 0 !== this.eventModel[b] && a.push(b);
    return a
  };
  var Mn = function (a, b, c) {
    try {
      if (b === c) return !1;
      var d = mc(b);
      if (d !== mc(c) || !(oc(b) && oc(c) || "array" === d)) return !0;
      if ("array" === d) {
        if (b.length !== c.length) return !0;
        for (var e = 0; e < b.length; e++) if (Mn(a, b[e], c[e])) return !0
      } else {
        for (var f in c) if (!b.hasOwnProperty(f)) return !0;
        for (var g in b) if (!c.hasOwnProperty(g) || Mn(a, b[g], c[g])) return !0
      }
    } catch (h) {
      lg(72)
    }
    return !1
  };
  var Nn = function () {
    S.dedupe_gclid || (S.dedupe_gclid = "" + ej());
    return S.dedupe_gclid
  };
  var On;
  if (3 === ph.Yd.length) On = "g"; else {
    var Pn = "G";
    On = Pn
  }
  var Qn = {"": "n", UA: "u", AW: "a", DC: "d", G: "e", GF: "f", HA: "h", GTM: On, OPT: "o"}, Rn = function (a) {
    var b = Ie.J.split("-"), c = b[0].toUpperCase(), d = Qn[c] || "i",
      e = a && "GTM" === c ? b[1] : "OPT" === c ? b[1] : "", f;
    if (3 === ph.Yd.length) {
      var g = "w";
      f = "2" + g
    } else f = "";
    return f + d + ph.Yd + e
  };

  function Sn(a, b) {
    if ("" === a) return b;
    var c = Number(a);
    return isNaN(c) ? b : c
  };var Tn = function (a, b) {
    a.addEventListener && a.addEventListener.call(a, "message", b, !1)
  };

  function Un() {
    return ub("iPhone") && !ub("iPod") && !ub("iPad")
  };ub("Opera");
  ub("Trident") || ub("MSIE");
  ub("Edge");
  !ub("Gecko") || -1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") || ub("Trident") || ub("MSIE") || ub("Edge");
  -1 != tb().toLowerCase().indexOf("webkit") && !ub("Edge") && ub("Mobile");
  ub("Macintosh");
  ub("Windows");
  ub("Linux") || ub("CrOS");
  var Vn = ma.navigator || null;
  Vn && (Vn.appVersion || "").indexOf("X11");
  ub("Android");
  Un();
  ub("iPad");
  ub("iPod");
  Un() || ub("iPad") || ub("iPod");
  tb().toLowerCase().indexOf("kaios");
  var Wn = function (a) {
    if (!a || !J.head) return null;
    var b, c;
    c = void 0 === c ? document : c;
    b = c.createElement("meta");
    J.head.appendChild(b);
    b.httpEquiv = "origin-trial";
    b.content = a;
    return b
  };
  var Xn = function () {
  };
  var Yn = function (a) {
    void 0 !== a.addtlConsent && "string" !== typeof a.addtlConsent && (a.addtlConsent = void 0);
    void 0 !== a.gdprApplies && "boolean" !== typeof a.gdprApplies && (a.gdprApplies = void 0);
    return void 0 !== a.tcString && "string" !== typeof a.tcString || void 0 !== a.listenerId && "number" !== typeof a.listenerId ? 2 : a.cmpStatus && "error" !== a.cmpStatus ? 0 : 3
  }, Zn = function (a, b) {
    this.o = a;
    this.g = null;
    this.C = {};
    this.R = 0;
    this.I = void 0 === b ? 500 : b;
    this.s = null
  };
  la(Zn, Xn);
  Zn.prototype.addEventListener = function (a) {
    var b = {}, c = Oi(function () {
      return a(b)
    }), d = 0;
    -1 !== this.I && (d = setTimeout(function () {
      b.tcString = "tcunavailable";
      b.internalErrorState = 1;
      c()
    }, this.I));
    var e = function (f, g) {
      clearTimeout(d);
      f ? (b = f, b.internalErrorState = Yn(b), g && 0 === b.internalErrorState || (b.tcString = "tcunavailable", g || (b.internalErrorState = 3))) : (b.tcString = "tcunavailable", b.internalErrorState = 3);
      a(b)
    };
    try {
      $n(this, "addEventListener", e)
    } catch (f) {
      b.tcString = "tcunavailable", b.internalErrorState = 3, d && (clearTimeout(d),
        d = 0), c()
    }
  };
  Zn.prototype.removeEventListener = function (a) {
    a && a.listenerId && $n(this, "removeEventListener", null, a.listenerId)
  };
  var bo = function (a, b, c) {
    var d;
    d = void 0 === d ? "755" : d;
    var e;
    a:{
      if (a.publisher && a.publisher.restrictions) {
        var f = a.publisher.restrictions[b];
        if (void 0 !== f) {
          e = f[void 0 === d ? "755" : d];
          break a
        }
      }
      e = void 0
    }
    var g = e;
    if (0 === g) return !1;
    var h = c;
    2 === c ? (h = 0, 2 === g && (h = 1)) : 3 === c && (h = 1, 1 === g && (h = 0));
    var k;
    if (0 === h) if (a.purpose && a.vendor) {
      var n = ao(a.vendor.consents, void 0 === d ? "755" : d);
      k = n && "1" === b && a.purposeOneTreatment && "CH" === a.publisherCC ? !0 : n && ao(a.purpose.consents, b)
    } else k = !0; else k = 1 === h ? a.purpose && a.vendor ? ao(a.purpose.legitimateInterests,
      b) && ao(a.vendor.legitimateInterests, void 0 === d ? "755" : d) : !0 : !0;
    return k
  }, ao = function (a, b) {
    return !(!a || !a[b])
  }, $n = function (a, b, c, d) {
    c || (c = function () {
    });
    if ("function" === typeof a.o.__tcfapi) {
      var e = a.o.__tcfapi;
      e(b, 2, c, d)
    } else if (co(a)) {
      eo(a);
      var f = ++a.R;
      a.C[f] = c;
      if (a.g) {
        var g = {};
        a.g.postMessage((g.__tcfapiCall = {command: b, version: 2, callId: f, parameter: d}, g), "*")
      }
    } else c({}, !1)
  }, co = function (a) {
    if (a.g) return a.g;
    var b;
    a:{
      for (var c = a.o, d = 0; 50 > d; ++d) {
        var e;
        try {
          e = !(!c.frames || !c.frames.__tcfapiLocator)
        } catch (h) {
          e =
            !1
        }
        if (e) {
          b = c;
          break a
        }
        var f;
        b:{
          try {
            var g = c.parent;
            if (g && g != c) {
              f = g;
              break b
            }
          } catch (h) {
          }
          f = null
        }
        if (!(c = f)) break
      }
      b = null
    }
    a.g = b;
    return a.g
  }, eo = function (a) {
    a.s || (a.s = function (b) {
      try {
        var c;
        c = ("string" === typeof b.data ? JSON.parse(b.data) : b.data).__tcfapiReturn;
        a.C[c.callId](c.returnValue, c.success)
      } catch (d) {
      }
    }, Tn(a.o, a.s))
  };
  var fo = !0;
  fo = !1;
  var go = {1: 0, 3: 0, 4: 0, 7: 3, 9: 3, 10: 3}, ho = Sn("", 550), io = Sn("", 500);

  function jo() {
    var a = S.tcf || {};
    return S.tcf = a
  }

  var oo = function () {
    var a = jo(), b = new Zn(z, fo ? 3E3 : -1);
    if (!0 === z.gtag_enable_tcf_support && !a.active && ("function" === typeof z.__tcfapi || "function" === typeof b.o.__tcfapi || null != co(b))) {
      a.active = !0;
      a.sd = {};
      ko();
      var c = null;
      fo ? c = z.setTimeout(function () {
        lo(a);
        mo(a);
        c = null
      }, io) : a.tcString = "tcunavailable";
      try {
        b.addEventListener(function (d) {
          c && (clearTimeout(c), c = null);
          if (0 !== d.internalErrorState) lo(a), mo(a); else {
            var e;
            a.gdprApplies = d.gdprApplies;
            if (!1 === d.gdprApplies) e = no(), b.removeEventListener(d); else if ("tcloaded" ===
              d.eventStatus || "useractioncomplete" === d.eventStatus || "cmpuishown" === d.eventStatus) {
              var f = {}, g;
              for (g in go) if (go.hasOwnProperty(g)) if ("1" === g) {
                var h = d, k = !0;
                k = void 0 === k ? !1 : k;
                var n;
                var p = h;
                !1 === p.gdprApplies ? n = !0 : (void 0 === p.internalErrorState && (p.internalErrorState = Yn(p)), n = "error" === p.cmpStatus || 0 !== p.internalErrorState || "loaded" === p.cmpStatus && ("tcloaded" === p.eventStatus || "useractioncomplete" === p.eventStatus) ? !0 : !1);
                f["1"] = n ? !1 === h.gdprApplies || "tcunavailable" === h.tcString || void 0 === h.gdprApplies &&
                !k || "string" !== typeof h.tcString || !h.tcString.length ? !0 : bo(h, "1", 0) : !1
              } else f[g] = bo(d, g, go[g]);
              e = f
            }
            e && (a.tcString = d.tcString || "tcempty", a.sd = e, mo(a))
          }
        })
      } catch (d) {
        c && (clearTimeout(c), c = null), lo(a), mo(a)
      }
    }
  };

  function lo(a) {
    a.type = "e";
    a.tcString = "tcunavailable";
    fo && (a.sd = no())
  }

  function ko() {
    var a = {}, b = (a.ad_storage = "denied", a.wait_for_update = ho, a);
    Kg(b)
  }

  function no() {
    var a = {}, b;
    for (b in go) go.hasOwnProperty(b) && (a[b] = !0);
    return a
  }

  function mo(a) {
    var b = {}, c = (b.ad_storage = a.sd["1"] ? "granted" : "denied", b);
    Mg(c, {eventId: 0}, {gdprApplies: a ? a.gdprApplies : void 0, tcString: po()})
  }

  var po = function () {
    var a = jo();
    return a.active ? a.tcString || "" : ""
  }, qo = function () {
    var a = jo();
    return a.active && void 0 !== a.gdprApplies ? a.gdprApplies ? "1" : "0" : ""
  }, ro = function (a) {
    if (!go.hasOwnProperty(String(a))) return !0;
    var b = jo();
    return b.active && b.sd ? !!b.sd[String(a)] : !0
  };
  var so = function (a, b) {
    var c = a && !Ng(Q.H);
    return b && c ? "0" : b
  }, wo = function (a) {
    function b(t) {
      var v;
      S.reported_gclid || (S.reported_gclid = {});
      v = S.reported_gclid;
      var x, y = g;
      x = !g || Ag() && !Ng(Q.H) ? k + (t ? "gcu" : "gcs") : k + "." + (f.prefix || "_gcl") + (t ? "gcu" : "gcs");
      if (!v[x]) {
        v[x] = !0;
        var w = [], A = {}, B = function (L, U) {
          U && (w.push(L + "=" + encodeURIComponent(U)), A[L] = !0)
        }, D = "https://www.google.com";
        if (Ag()) {
          var C = Ng(Q.H);
          B("gcs", Og());
          t && B("gcu", "1");
          Bg() && B("gcd", "G1" + Ig(yg));
          B("rnd", Nn());
          if ((!k || n && "aw.ds" !== n) && Ng(Q.H)) {
            var E = hk("_gcl_aw");
            B("gclaw", E.join("."))
          }
          B("url", String(z.location).split(/[?#]/)[0]);
          B("dclid", so(d, p));
          var F = !1;
          F = !0;
          C || !d && !F || (D = "https://pagead2.googlesyndication.com")
        }
        B("gdpr_consent", po());
        B("gdpr", qo());
        "1" === Qj(!1)._up && B("gtm_up", "1");
        B("gclid", so(d, k));
        B("gclsrc", n);
        if (!(A.gclid || A.dclid || A.gclaw) && (B("gbraid", so(d, q)), A.gbraid && uo && (y = !1), !A.gbraid && Ag() && Ng(Q.H))) {
          var M = hk("_gcl_gb");
          0 < M.length && (B("gclgb", M.join(".")), uo && (y = !1))
        }
        B("gtm", Rn(!e));
        g && Ng(Q.H) && (qj(f || {}), y && B("auid", lj[nj(f.prefix)] || ""));
        vo || a.he && B("did", a.he), a.wc && B("gdid", a.wc), a.vc && B("edid", a.vc);
        var G = D + "/pagead/landing?" + w.join("&");
        Wb(G)
      }
    }

    var c = !!a.vf, d = !!a.fb, e = a.Z, f = void 0 ===
      a.Lb ? {} : a.Lb, g = void 0 === a.qe ? !0 : a.qe, h = nk(), k = h.gclid || "", n = h.gclsrc, p = h.dclid || "",
      q = h.gbraid || "", r = !c && ((!k || n && "aw.ds" !== n ? !1 : !0) || q), u = Ag();
    if (r || u) u ? Rg(function () {
      b();
      Ng(Q.H) || Qg(function (t) {
        return b(!0, t.consentEventId, t.consentPriorityId)
      }, Q.H)
    }, [Q.H]) : b()
  }, to = function (a) {
    var b = String(z.location).split(/[?#]/)[0], c = ph.ci || z._CONSENT_MODE_SALT;
    return a ? c ? String(Li(b + a + c)) : "0" : ""
  }, vo = !1;
  var uo =
    !1;
  var xo = function (a) {
    if (!Ag() || xg(Q.H)) {
      a = a || {};
      qj(a, !1);
      var b = mj[nj(lk(a.prefix))];
      if (b && !(18E5 < Sa() - 1E3 * b.xh)) {
        var c = b.id, d = c.split(".");
        if (2 === d.length && !(864E5 < Sa() - 1E3 * (Number(d[1]) || 0))) return c
      }
    }
  };
  var yo = !1;
  var zo = function () {
    this.g = {}
  }, Ao = function (a, b, c) {
    null != c && (a.g[b] = c)
  }, Bo = function (a) {
    return Object.keys(a.g).map(function (b) {
      return encodeURIComponent(b) + "=" + encodeURIComponent(a.g[b])
    }).join("&")
  }, Do = function (a, b, c, d, e) {
    if (!Ag()) {
      Co(a, b, c, d, e);
      return
    }
    Rg(function () {
      Ng(Q.H) ? Co(a, b, c, d, e) : d && d()
    }, [Q.H]);
  };

  var Eo = function (a, b, c) {
    c = void 0 === c ? !0 : c;
    var d = {
      gclgb: function () {
        return Ck("gb", b, c).join(".")
      }, gacgb: function () {
        return Jk(c)
      }, gclaw: function () {
        return Gk(b, c).join(".")
      }, gac: function () {
        return Ik(c)
      }
    }, e = Lk(b);
    yo && (e = !1);
    var f = e ? "gclgb" : "gclaw", g = e ? "gacgb" : "gac", h = d[g], k = (0, d[f])(), n = "_gcl" !== b ? "" : h();
    k && Ao(a, f, k);
    n && Ao(a, g, n)
  }, Co = function (a, b, c, d, e) {
    c = c || {};
    var f = c.Lb || {}, g = new zo;
    nh(b, function (h, k) {
      Ao(g, "em", h);
      Ao(g, "gtm", Rn());
      Ag() && (Ao(g, "gcs", Og()), Ao(g, "gcd", "G1" + Ig(yg)));
      Eo(g, lk(f.prefix), c.fb);
      Ao(g, "auid", lj[nj(f.prefix)]);
      e && e.ne && Ao(g, "gdid", e.ne);
      e && e.je && Ao(g, "edid", e.je);
      var A = Bo(g);
      Wb("https://google.com/pagead/form-data/" + a + "?" + A);
      d && d()
    })
  };
  var Fo = /[A-Z]+/, Go = /\s/, Ho = function (a) {
    if (m(a)) {
      a = Qa(a);
      var b = a.indexOf("-");
      if (!(0 > b)) {
        var c = a.substring(0, b);
        if (Fo.test(c)) {
          for (var d = a.substring(b + 1).split("/"), e = 0; e < d.length; e++) if (!d[e] || Go.test(d[e]) && ("AW" !== c || 1 !== e)) return;
          return {id: a, prefix: c, containerId: c + "-" + d[0], P: d}
        }
      }
    }
  }, Jo = function (a) {
    for (var b = {}, c = 0; c < a.length; ++c) {
      var d = Ho(a[c]);
      d && (b[d.id] = d)
    }
    Io(b);
    var e = [];
    La(b, function (f, g) {
      e.push(g)
    });
    return e
  };

  function Io(a) {
    var b = [], c;
    for (c in a) if (a.hasOwnProperty(c)) {
      var d = a[c];
      "AW" === d.prefix && d.P[1] && b.push(d.containerId)
    }
    for (var e = 0; e < b.length; ++e) delete a[b[e]]
  };
  var Lo = function (a, b, c) {
      if (z[a.functionName]) return b.Of && K(b.Of), z[a.functionName];
      var d = Ko();
      z[a.functionName] = d;
      if (a.ce) for (var e = 0; e < a.ce.length; e++) z[a.ce[e]] = z[a.ce[e]] || Ko();
      a.pe && void 0 === z[a.pe] && (z[a.pe] = c);
      Mb(vn("https://", "http://", a.Xf), b.Of, b.$j);
      return d
    }, Ko = function () {
      var a = function () {
        a.q = a.q || [];
        a.q.push(arguments)
      };
      return a
    }, Mo = {functionName: "_googWcmImpl", pe: "_googWcmAk", Xf: "www.gstatic.com/wcm/loader.js"},
    No = {functionName: "_gaPhoneImpl", pe: "ga_wpid", Xf: "www.gstatic.com/gaphone/loader.js"},
    Oo = {$h: "", Xi: "5"}, Po = {
      functionName: "_googCallTrackingImpl",
      ce: [No.functionName, Mo.functionName],
      Xf: "www.gstatic.com/call-tracking/call-tracking_" + (Oo.$h || Oo.Xi) + ".js"
    }, Qo = {}, Ro = function (a, b, c, d) {
      lg(22);
      if (c) {
        d = d || {};
        var e = Lo(Mo, d, a), f = {ak: a, cl: b};
        void 0 === d.eb && (f.autoreplace = c);
        e(2, d.eb, f, c, 0, Ra(), d.options)
      }
    }, So = function (a, b, c, d) {
      lg(21);
      if (b && c) {
        d = d || {};
        for (var e = {countryNameCode: c, destinationNumber: b, retrievalTime: Ra()}, f = 0; f < a.length; f++) {
          var g = a[f];
          Qo[g.id] ||
          (g && "AW" === g.prefix && !e.adData && 2 <= g.P.length ? (e.adData = {
            ak: g.P[0],
            cl: g.P[1]
          }, Qo[g.id] = !0) : g && "UA" === g.prefix && !e.gaData && (e.gaData = {gaWpid: g.containerId}, Qo[g.id] = !0))
        }
        (e.gaData || e.adData) && Lo(Po, d)(d.eb, e, d.options)
      }
    }, To = function () {
      var a = !1;
      return a
    }, Uo = function (a, b) {
      if (a) if (tn()) {
      } else {
        if (m(a)) {
          var c =
            Ho(a);
          if (!c) return;
          a = c
        }
        var d = void 0, e = !1, f = b.getWithConfig(Q.Ei);
        if (f && Fa(f)) {
          d = [];
          for (var g = 0; g < f.length; g++) {
            var h = Ho(f[g]);
            h && (d.push(h), (a.id === h.id || a.id === a.containerId && a.containerId === h.containerId) && (e = !0))
          }
        }
        if (!d || e) {
          var k = b.getWithConfig(Q.wg), n;
          if (k) {
            Fa(k) ? n = k : n = [k];
            var p = b.getWithConfig(Q.ug), q = b.getWithConfig(Q.vg), r = b.getWithConfig(Q.xg),
              u = b.getWithConfig(Q.Di), t = p || q, v = 1;
            "UA" !== a.prefix || d || (v = 5);
            for (var x = 0; x < n.length; x++) if (x < v) if (d) So(d, n[x], u, {
              eb: t,
              options: r
            }); else if ("AW" === a.prefix &&
              a.P[1]) To() ? So([a], n[x], u || "US", {eb: t, options: r}) : Ro(a.P[0], a.P[1], n[x], {
              eb: t,
              options: r
            }); else if ("UA" === a.prefix) if (To()) So([a], n[x], u || "US", {eb: t}); else {
              var y = a.containerId, w = n[x], A = {eb: t};
              lg(23);
              if (w) {
                A = A || {};
                var B = Lo(No, A, y), D = {};
                void 0 !== A.eb ? D.receiver = A.eb : D.replace = w;
                D.ga_wpid = y;
                D.destination = w;
                B(2, Ra(), D)
              }
            }
          }
        }
      }
    };
  var Wo = function () {
    var a = S.floc;
    if (a) {
      var b = a.ts, c = a.floc;
      if (b && c && 1E3 > Sa() - b) return Promise.resolve(c)
    }
    try {
      return Promise.race([J.interestCohort().then(function (d) {
        S.floc = {ts: Sa(), floc: d};
        return d
      }), new Promise(function (d) {
        z.setTimeout(function () {
          return d()
        }, Vo)
      })]).catch(function () {
      })
    } catch (d) {
    }
  }, Yo = function () {
    if (!z.Promise) return !1;
    Da(J.interestCohort) || Xo || (Xo = !0, Wn("A489+ZNTpP/HCOD+k3I13nobRVH7eyh5fz5LGhYvQlNf9WauHk/0awCtXOEoWTIK9JN8bgzgn2SfPdaFXe5O9QkAAACKeyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiSW50ZXJlc3RDb2hvcnRBUEkiLCJleHBpcnkiOjE2MjYyMjA3OTksImlzU3ViZG9tYWluIjp0cnVlLCJpc1RoaXJkUGFydHkiOnRydWV9"));
    return Da(J.interestCohort)
  }, Vo = Number("200"), Xo = !1;
  var $o = function (a, b) {
    var c = a.yh, d = a.Sh;
    a.fe && (Zj(c[Q.fc], !!c[Q.U]) && sk(Zo, b), pk(b), vk(Zo, b), Kk(b));
    c[Q.U] && uk(Zo, c[Q.U], c[Q.Vc], !!c[Q.hc], b.prefix);
    d && xk(["aw", "dc", "gb"])
  }, ap = function (a, b, c, d) {
    var e = a.Uh, f = a.callback, g = a.Ah;
    if ("function" === typeof f) if (e === Q.He && void 0 === g) {
      var h = d(b.prefix, c);
      0 === h.length ? f(void 0) : 1 === h.length ? f(h[0]) : f(h)
    } else e === Q.ri ? (lg(65), qj(b, !1), f(lj[nj(b.prefix)])) : f(g)
  }, Zo = ["aw", "dc", "gb"];
  var bp = !1;

  function cp() {
    if (Da(Fb.joinAdInterestGroup)) return !0;
    bp || (Wn('A9wkrvp9y21k30U9lU7MJMjBj4USjLrGwV+Z8zO3J3ZBH139DOnCv3XLK2Ii40S94HG1SZ/Zeg2GSHOD3wlWngYAAAB7eyJvcmlnaW4iOiJodHRwczovL3d3dy5nb29nbGV0YWdtYW5hZ2VyLmNvbTo0NDMiLCJmZWF0dXJlIjoiUHJpdmFjeVNhbmRib3hBZHNBUElzIiwiZXhwaXJ5IjoxNjYxMjk5MTk5LCJpc1RoaXJkUGFydHkiOnRydWV9'), bp = !0);
    return Da(Fb.joinAdInterestGroup)
  }

  function dp(a, b) {
    var c = void 0;
    try {
      c = J.querySelector('iframe[data-tagging-id="' + b + '"]')
    } catch (e) {
    }
    if (c) {
      var d = Number(c.dataset.loadTime);
      if (d && 6E4 > Sa() - d) {
        ig("TAGGING", 9);
        return
      }
    } else try {
      if (50 <= J.querySelectorAll('iframe[allow="join-ad-interest-group"][data-tagging-id*="-"]').length) {
        ig("TAGGING", 10);
        return
      }
    } catch (e) {
    }
    Ob(a, void 0, {allow: "join-ad-interest-group"}, {taggingId: b, loadTime: Sa()}, c)
  };
  var ep = function (a, b, c, d, e) {
      var f;
      if (f = !b && !a.g) {
        var g;
        if (g = !a.isGtmEvent) {
          var h = a.s.remoteConfig[Q.ic];
          g = h ? "auto_detect" === h.mode || "selectors" === h.mode || "code" === h.mode : !1
        }
        f = g
      }
      if (f) {
        var k = a.K(Q.Ga);
        if (null !== k) {
          var n;
          k && oc(k) ? n = k : n = Hi(a.getRemoteConfig(Q.ic));
          n && Do(a.I, n, {Lb: e, fb: c}, void 0, d)
        }
      }
    }, fp = function (a, b) {
    },
    gp = function (a, b) {
      a.wa("google_gtm_url_processor", function (c) {
        b && (c = Pk(c));
        var d = c;
        return c = d
      })
    }, hp = function (a, b) {
      a.sc("gdpr_consent",
        po());
      a.sc("gdpr", qo());
      Ag() && a.g && (a.W("gcs", Og()), Bg() && a.W("gcd", "G1" + Ig(yg)), b && a.W("gcu", "1"))
    }, jp = function (a, b) {
      var c;
      if (!(c = b)) if ("false" !== qi.Zh && wi) if (xi) c = !0; else {
        var d = Zh("AW-" + a.I);
        c = !!d && !!d.preAutoPii
      } else c = !1;
      if (c) {
        var e = Sa(), f = Di({yc: !0, zc: !0, vk: ip});
        if (0 !== f.elements.length) {
          var g = [];
          var n = f.gk;
          n && (a.W("ec_sel", n.querySelector), a.W("ec_meta", Ei(n)));
          a.W("ec_lat", String(Sa() - e));
          a.W("ec_s", f.status)
        }
      }
    }, kp = function (a) {
      if (!a.g) a.K(Q.fa) && a.wa("google_gtag_event_data", {items: a.K(Q.fa)}); else if (a.eventName == Q.Aa) {
        a.ad({
          google_conversion_merchant_id: a.K(Q.Ne),
          google_basket_feed_country: a.K(Q.Le),
          google_basket_feed_language: a.K(Q.Me),
          google_basket_discount: a.K(Q.Ke),
          google_basket_transaction_type: a.eventName,
          google_disable_merchant_reported_conversions: !0 === a.K(Q.ig)
        });
        tn() && a.wa("google_disable_merchant_reported_conversions",
          !0);
        var b;
        var c = a.K(Q.fa);
        if (c) {
          for (var d = [], e = 0; e < c.length; ++e) {
            var f = c[e];
            f && d.push({
              item_id: f.id,
              quantity: f.quantity,
              value: f.price,
              start_date: f.start_date,
              end_date: f.end_date
            })
          }
          b = d
        } else b = void 0;
        var g = b;
        g && a.wa("google_conversion_items", g)
      }
    }, lp = function (a) {
      var b;
      var c = {};
      a.isGtmEvent ? !a.g && a.eventName && (c.event = a.eventName) : c.event = a.eventName;
      var d = a.s.eventModel;
      if (d) {
        pc(d, c);
        for (var e in c) c.hasOwnProperty(e) && Q.$f[e.split(".")[0]] && delete c[e];
        b = c
      } else b = null;
      var f = b;
      f && a.wa("google_custom_params",
        f)
    }, mp = function (a) {
      tn() && (a.wa("opt_image_generator", function () {
        return new Image
      }), a.wa("google_enable_display_cookie_match", !1))
    }, np = function (a) {
      var b, c = !1;
      c = !0 === z._gtmpcm ? !0 : Mk("14.1.1");
      (b = c) && a.uc("apcm");
      if (!a.isGtmEvent) {
        var d = Qk();
        0 === d ? a.sc("dg", "c") : 1 === d && a.sc("dg", "e")
      }
    }, op = function (a, b) {
      var c = qn(a, "/pagead/conversion_async.js");
      if (c) return c;
      var d = vn("https://", "http://", "www.googleadservices.com"), e = !b.isGtmEvent && 1 === Qk();
      if (Rk() || e) d = "https://www.google.com";
      return d + "/pagead/conversion_async.js"
    }, pp = !1, qp = !1;
  var rp = !1;
  var sp = !1;
  var ip = !1;
  var tp = [], up = function (a) {
    var b = z.google_trackConversion, c = a.o.gtm_onFailure;
    "function" == typeof b ? b(a.o) || c() : c()
  }, vp = function () {
    for (; 0 < tp.length;) up(tp.shift())
  }, wp = function (a, b) {
    var c = pp;
    qp && (c = b.getContainerTypeLoaded("AW"));
    if (!c) {
      pp = !0;
      Tm();
      var d = function () {
        qp && b.setContainerTypeLoaded("AW", !0);
        vp();
        tp = {push: up}
      };
      tn() ? d() : Mb(a, d, function () {
        vp();
        pp = !1;
        qp && b.setContainerTypeLoaded("AW", !1)
      })
    }
  }, xp = function (a, b, c) {
    var d = Ho(a);
    !d && c.isGtmEvent && (d = this.fk(a));
    this.Z = a;
    this.I = d.P[0] || "";
    this.R = d.containerId === d.id;
    this.C = d.P[1];
    this.g = void 0 !== this.C;
    this.eventName = b;
    this.isGtmEvent =
      c.isGtmEvent;
    this.s = c;
    this.o = {
      google_conversion_id: this.I,
      google_conversion_label: this.C,
      google_conversion_format: "3",
      google_conversion_color: "ffffff",
      google_conversion_domain: "",
      google_gtm: Rn()
    }
  };
  l = xp.prototype;
  l.fk = function (a) {
    var b = a.indexOf("/"), c = 3 <= b, d = a.substring(3, c ? b : a.length);
    return {id: a, prefix: "AW", containerId: "AW-" + d, P: [d, c ? a.substring(b + 1) : void 0]}
  };
  l.wa = function (a, b) {
    this.o[a] = b
  };
  l.qk = function () {
    delete this.o.google_transport_url
  };
  l.ad = function (a) {
    for (var b in a) a.hasOwnProperty(b) &&
    (this.o[b] = a[b])
  };
  l.W = function (a, b) {
    void 0 != b && "" !== b && (this.o.google_additional_conversion_params = this.o.google_additional_conversion_params || {}, this.o.google_additional_conversion_params[a] = b)
  };
  l.sc = function (a, b) {
    void 0 != b && "" !== b && (this.o.google_additional_params = this.o.google_additional_params || {}, this.o.google_additional_params[a] = b)
  };
  l.uc = function (a) {
    this.o.google_gtm_experiments = this.o.google_gtm_experiments || {};
    this.o.google_gtm_experiments[a] = !0
  };
  l.K = function (a) {
    return this.s.getWithConfig(a)
  };
  l.getRemoteConfig = function (a) {
    return this.s.remoteConfig[a]
  };
  var Ap = function (a, b, c, d) {
    function e(F, M) {
      function G() {
        tp.push(F);
        qp && d.getContainerTypeLoaded("AW") && vp()
      }

      var L = [];
      if (M) {
        F.g && k && (qj(A), F.W("auid", lj[nj(n)]));
        var N = (g(Q.Se) || {})[F.C];
        jp(F, Nk(N));
        var Z = !0 === g(Q.Fd) || N;
        if (F.g && Z && (!sp || !Lk())) {
          var ba = Ok(N);
          ba && L.push(ba.then(function (V) {
            F.W("em", V.se);
            F.W("ec_mode", V.nh)
          }))
        }
      }
      if (L.length) try {
        Promise.all(L).then(function () {
          G()
        });
        return
      } catch (V) {
      }
      G()
    }

    var f = new xp(a, b, d), g = function (F) {
      return d.getWithConfig(F)
    }, h = void 0 != g(Q.ka) &&
      !1 !== g(Q.ka), k = !1 !== g(Q.Da), n = g(Q.Ta) || g(Q.Ma), p = g(Q.sa), q = g(Q.Ea), r = g(Q.Ua), u = {};
    if (!rp) {
      var t = d.getMergedValues(Q.aa);
      u.mh = bb(oc(t) ? t : {})
    }
    var v = d.getMergedValues(Q.aa, 1), x = d.getMergedValues(Q.aa, 2);
    u.ne = bb(oc(v) ? v : {}, ".");
    u.je = bb(oc(x) ? x : {}, ".");
    var y = g(Q.ba), w = op(y, f);
    wp(w, d);
    var A = {prefix: n, domain: p, Rb: q, flags: r}, B = b == Q.La;
    var E = !1 === g(Q.Bb) || !1 === g(Q.Fa);
    if (!B || !f.g && !E) if (!0 === g(Q.Je) && (f.g = !1), !1 !== g(Q.da) || f.g) {
      f.ad({
        google_remarketing_only: !f.g,
        google_conversion_language: f.K(Q.Db),
        google_conversion_value: f.K(Q.oa),
        google_conversion_currency: f.K(Q.ma),
        google_conversion_order_id: f.K(Q.rb),
        google_user_id: f.K(Q.Na),
        google_conversion_page_url: f.K(Q.pb),
        google_conversion_referrer_url: f.K(Q.qb)
      });
      f.ad({
        onload_callback: f.s.onSuccess,
        gtm_onFailure: f.s.onFailure
      });
      An[2] && f.g && f.s.eventModel[Q.Hg] && f.W("gtm_ee", "1");
      delete f.s.eventModel[Q.Hg];
      np(f);
      f.g && f.wa("google_transport_url", pn(f.K(Q.ba), "/"));
      f.wa("google_restricted_data_processing", f.K(Q.Wc));
      mp(f);
      !1 === f.K(Q.da) && f.wa("google_allow_ad_personalization_signals", !1);
      k ? f.ad({
        google_gcl_cookie_prefix: A.prefix,
        google_gcl_cookie_domain: A.domain,
        google_gcl_cookie_max_age_seconds: A.Rb,
        google_gcl_cookie_flags: A.flags
      }) : f.wa("google_read_gcl_cookie_opt_out", !0);
      lp(f);
      kp(f);
      "1" ===
      Qj(!1)._up && f.W("gtm_up", "1");
      f.g && (f.W("vdnc", f.K(Q.Xe)), f.W("vdltv", f.K(Q.Oe)));
      hp(f);
      f.g && (f.W("delopc", f.K(Q.Qd)), f.W("oedeld", f.K(Q.Te)), f.W("delc", f.K(Q.Gd)), f.W("shf", f.K(Q.Re)), f.W("iedeld", Sk(f.K(Q.fa))));
      rp || f.W("did", u.mh), f.W("gdid", u.ne), f.W("edid", u.je);
      gp(f, h);
      fp(f, A);
      ep(f, B, h, u, A);
      Ag() ? Rg(function () {
        hp(f);
        var F = Ng(Q.H);
        if (f.g) {
          var M = !1;
          M = !0;
          F || y || !h && !M || f.wa("google_transport_url", "https://pagead2.googlesyndication.com/");
          e(f, F)
        } else if (F) {
          e(f, F);
          return
        }
        F || Qg(function () {
          var G = new xp(a, f.eventName, d);
          G.g = f.g;
          G.ad(pc(f.o));
          gp(G, h);
          !y && G.o.google_transport_url && G.qk();
          hp(G, !0);
          e(G, !0)
        }, Q.H)
      }, [Q.H]) : e(f, !0)
    }
  };
  var Cp = function (a) {
    return !1
  }, Ep = function (a, b) {
    switch (b.Nb) {
      case 2:
        a("ord", Ha(1E11, 1E13));
        return;
      case 3:
        a("ord",
          "1");
        a("num", Ha(1E11, 1E13));
        return;
      case 4:
        Dp(b.sessionId) && a("ord", b.sessionId);
        return
    }
    var c = 5 === b.Nb ? "1" : b.lk;
    Dp(c) && a("qty", c);
    Dp(b.ih) && a("cost", b.ih);
    Dp(b.transactionId) && a("ord", b.transactionId)
  }, Gp = function (a, b) {
    function c(G, L, U) {
      r.hasOwnProperty(G) || (L = String(L), q.push(";" + G + "=" + (U ? L : encodeURIComponent(L))))
    }

    function d(G, L) {
      L && c(G, L)
    }

    function e() {
      if (Dp(a.Bh)) {
        var G = a.Bh || "";
        !n && a.fb && (G = pi(G));
        c("~oref", G)
      }
      var L = h + q.join("") + "?";
      g ? Ob(L, a.onSuccess) : Pb(L, a.onSuccess, a.onFailure);
      C && Pb("https://" + f + ".fls.doubleclick.net/activityi;register_conversion=1" + q.join("") + "?");
    }

    var f = a.qh, g = a.wk, h = a.protocol, k = [], n = Ng(Q.H);
    h += g ? "//" + f + ".fls.doubleclick.net/activityi" : "//ad.doubleclick.net/activity";
    var p = ";";
    n || (h = "https://ade.googlesyndication.com/ddm/activity", p = "/", g = !1);
    var q = [p, "src=" + encodeURIComponent(f), ";type=" + encodeURIComponent(a.th), ";cat=" + encodeURIComponent(a.ae)],
      r = a.qj || {};
    La(r, function (G, L) {
      q.push(";" + encodeURIComponent(G) + "=" + encodeURIComponent(L + ""))
    });
    Ep(c, a);
    Dp(a.Rh) && c("u", a.Rh);
    Dp(a.Qh) && c("tran", a.Qh);
    c("gtm", Rn());
    Ag() && (c("gcs", Og()), b && c("gcu", "1"));
    d("gdpr_consent", po());
    d("gdpr", qo());
    "1" === Qj(!1)._up && c("gtm_up", "1");
    !1 === a.dh && c("npa", "1");
    if (a.fe) {
      var u = void 0 ===
      a.fb ? !0 : !!a.fb, t = Hk(a.Mb, u), v = !1;
      t && t.length && (c("gcldc", t.join(".")), v = !0);
      if (g) {
        var x = "_gcl" !== lk(a.Mb);
        if (v || !Lk(a.Mb)) {
          var y = Gk(a.Mb, u);
          y && y.length && (c("gclaw", y.join(".")), lg(59));
          var w = Ik(u);
          w && (x ? (lg(60), Fp || c("gac", w)) : c("gac", w))
        } else {
          var A = Ck("gb", a.Mb, u);
          A.length && c("gclgb", A.join("."));
          if (!x || !Fp) {
            var B = Jk(u);
            B && c("gacgb", B)
          }
        }
      }
      qj({prefix: a.Mb, Rb: a.nj, domain: a.mj, flags: a.Vk});
      var D = lj[nj(a.Mb)];
      D && c("auiddc", D)
    }
    Dp(a.Gh) && c("prd", a.Gh, !0);
    La(a.Jk, function (G, L) {
      c(G, L)
    });
    Dp(a.wc) && c("gdid",
      a.wc);
    Dp(a.vc) && c("edid", a.vc);
    var C = Cp(n);
    C && q.push(";ps=1");
    var E = !1;
    E = !0;
    if (E && a.Xa) {
      var F = oh(a.Xa);
      F && (F = F.then(function (G) {
        Dp(G.se) && c("em", G.se, !0)
      }), k.push(F))
    }
    if (k.length) try {
      Promise.all(k).then(function () {
        e()
      });
      return
    } catch (G) {
    }
    e()
  }, Hp = function (a) {
    Ag() ? Rg(function () {
      Gp(a);
      Ng(Q.H) || Qg(function () {
        Gp(a, !0)
      }, Q.H)
    }, [Q.H]) : Gp(a)
  }, Ip = function (a, b, c, d) {
    function e() {
      var f = {config: a, gtm: Rn()};
      c && (qj(d), f.auiddc = lj[nj(d.prefix)]);
      b && (f.loadInsecure = b);
      void 0 === z.__dc_ns_processor && (z.__dc_ns_processor = []);
      z.__dc_ns_processor.push(f);
      Mb((b ? "http" : "https") + "://www.googletagmanager.com/dclk/ns/v1.js")
    }

    Ng(Q.H) ?
      e() : Fg(e, Q.H)
  }, Dp = function (a) {
    return !(void 0 === a || 0 === (a + "").length)
  }, Jp = function (a) {
    var b = /^u([1-9]\d?|100)$/, c = a.getWithConfig(Q.Qc) || {}, d = a.getTopLevelKeys(), e = {}, f = {};
    if (oc(c)) for (var g in c) if (c.hasOwnProperty(g) && b.test(g)) {
      var h = c[g];
      m(h) && (e[g] = h)
    }
    for (var k = 0; k < d.length; k++) {
      var n = d[k];
      b.test(n) && (e[n] = n)
    }
    for (var p in e) e.hasOwnProperty(p) && (f[p] = a.getWithConfig(e[p]));
    return f
  }, Kp = function (a, b) {
    function c(k, n, p) {
      Dp(p) && d.push(k + n + ":" + encodeURIComponent(p + ""))
    }

    var d = [], e = a(Q.fa) || [];
    if (Fa(e)) for (var f =
      0; f < e.length; f++) {
      var g = e[f], h = f + 1;
      c("i", h, g.id);
      c("p", h, g.price);
      c("q", h, g.quantity);
      c("c", h, b ? g[Q.Gd] : a(Q.Gd));
      c("l", h, b ? g[Q.Db] : a(Q.Db));
      b && c("a", h, g.accountId)
    }
    return d.join("|")
  }, Lp = function (a) {
    var b = /^DC-(\d+)(\/([\w-]+)\/([\w-]+)\+(\w+))?$/.exec(a);
    if (b) {
      var c = {
        standard: 2,
        unique: 3,
        per_session: 4,
        transactions: 5,
        items_sold: 6,
        "": 1
      }[(b[5] || "").toLowerCase()];
      if (c) return {containerId: "DC-" + b[1], Z: b[3] ? a : "", aj: b[1], $i: b[3] || "", ae: b[4] || "", Nb: c}
    }
  }, Mp = function (a, b, c, d) {
    var e = Lp(a);
    if (e) {
      var f = function (R) {
          return d.getWithConfig(R)
        },
        g = !1 !== f(Q.Da), h = f(Q.Ta) || f(Q.Ma), k = f(Q.sa), n = f(Q.Ea), p = f(Q.Ua),
        q = {prefix: h, domain: k, Rb: n, flags: p}, r = f(Q.xi),
        u = void 0 != f(Q.ka) && !1 !== f(Q.ka) && (!d.isGtmEvent || !Ng(Q.H)), t = 3 === un();
      var B = {}, D = f(Q.wi);
      if (oc(D)) for (var C in D) if (D.hasOwnProperty(C)) {
        var E = D[C];
        null != E && (B[C] = E)
      }
      var F = "";
      if (5 === e.Nb || 6 === e.Nb) F =
        Kp(f, d.isGtmEvent);
      var M = Jp(d), G = !0 === f(Q.Ie);
      if (tn() && G) {
        G = !1
      }
      var L = d.isGtmEvent ? "" : t ? "http:" : "https:", U = {
        ae: e.ae,
        fe: g,
        mj: k,
        nj: n,
        Mb: h,
        ih: f(Q.oa),
        Nb: e.Nb,
        qj: B,
        vc: bb(d.getMergedValues(Q.aa, 2), "."),
        qh: e.aj,
        wc: bb(d.getMergedValues(Q.aa, 1), "."),
        th: e.$i,
        onFailure: d.onFailure,
        onSuccess: d.onSuccess,
        Bh: d.isGtmEvent ? f("oref") : ni(oi(z.location.href)),
        Gh: F,
        protocol: L,
        lk: f(Q.yg),
        wk: G,
        sessionId: f(Q.Fb),
        Qh: d.isGtmEvent ? f("tran") :
          void 0,
        transactionId: f(Q.rb),
        Rh: d.isGtmEvent ? f("u") : void 0,
        Xa: d.isGtmEvent ? f(Q.Ga) : void 0,
        Jk: M,
        dh: !1 !== f(Q.da),
        eventId: d.eventId,
        priorityId: d.priorityId,
        fb: u
      };
      Hp(U)
    } else K(d.onFailure)
  }, Fp = !1;
  Fp = !0;
  var Bp = !1;
  var Np = function (a, b, c) {
    this.xa = a;
    this.eventName = b;
    this.D = c;
    this.F = {};
    this.metadata = {};
    this.Ia = !1
  }, Op = function (a, b, c) {
    var d = a.D.getWithConfig(b);
    void 0 !== d ? a.F[b] = d : void 0 !== c && (a.F[b] = c)
  }, Pp = function (a, b, c) {
    var d = Zh(a.xa);
    return d && d.hasOwnProperty(b) ? d[b] : c
  };

  function Qp(a) {
    return {
      getDestinationId: function () {
        return a.xa
      }, getEventName: function () {
        return a.eventName
      }, setEventName: function (b) {
        return void (a.eventName = b)
      }, getHitData: function (b) {
        return a.F[b]
      }, setHitData: function (b, c) {
        return void (a.F[b] = c)
      }, setHitDataIfNotDefined: function (b, c) {
        void 0 === a.F[b] && (a.F[b] = c)
      }, copyToHitData: function (b, c) {
        Op(a, b, c)
      }, getMetadata: function (b) {
        return a.metadata[b]
      }, setMetadata: function (b, c) {
        return void (a.metadata[b] = c)
      }, abort: function () {
        return void (a.Ia = !0)
      }, getProcessedEvent: function () {
        return a
      }
    }
  }
  ;var gq = function () {
    var a = !0;
    ro(7) && ro(9) && ro(10) || (a = !1);
    return a
  }, hq = function () {
    var a = !0;
    ro(3) && ro(4) || (a = !1);
    return a
  };
  var lq = function (a, b) {
  }, mq = function (a, b) {
    var c = a[Q.Vc], d = b + ".", e = a[Q.U] || "", f = void 0 === c ? !!a.use_anchor : "fragment" ===
      c, g = !!a[Q.hc];
    e = String(e).replace(/\s+/g, "").split(",");
    var h = Ym();
    h(d + "require", "linker");
    h(d + "linker:autoLink", e, f, g)
  }, qq = function (a, b, c) {
    if (Ag() && (!c.isGtmEvent || !nq[a])) {
      var d = !Ng(Q.T), e = function (f) {
        var g, h, k = Ym(), n = oq(b, "", c), p, q = n.createOnlyFields._useUp;
        if (c.isGtmEvent || pq(b, n.createOnlyFields)) {
          c.isGtmEvent && (g = "gtm" + Kh(), h = n.createOnlyFields, n.gtmTrackerName && (h.name = g));
          k(function () {
            var u = k.getByName(b);
            u && (p = u.get("clientId"));
            c.isGtmEvent || k.remove(b)
          });
          k("create", a, c.isGtmEvent ? h : n.createOnlyFields);
          d && Ng(Q.T) && (d = !1, k(function () {
            var u = Ym().getByName(c.isGtmEvent ? g : b);
            !u || u.get("clientId") == p && q || (c.isGtmEvent ? (n.fieldsToSet["&gcu"] = "1", n.fieldsToSet["&gcut"] = Q.Ce[f]) : (n.fieldsToSend["&gcu"] = "1", n.fieldsToSend["&gcut"] = Q.Ce[f]), u.set(n.fieldsToSet), c.isGtmEvent ? u.send("pageview") : u.send("pageview", n.fieldsToSend))
          }));
          c.isGtmEvent && k(function () {
            k.remove(g)
          })
        }
      };
      Qg(function () {
        return e(Q.T)
      }, Q.T);
      Qg(function () {
        return e(Q.H)
      }, Q.H);
      c.isGtmEvent && (nq[a] = !0)
    }
  }, rq = function (a, b) {
    sn() && b && (a[Q.Cb] = b)
  }, Aq = function (a, b, c) {
    function d() {
      var G = c.getWithConfig(Q.Qc);
      h(function () {
        if (!c.isGtmEvent && oc(G)) {
          var L = t.fieldsToSend, U = k().getByName(n), R;
          for (R in G) if (G.hasOwnProperty(R) && /^(dimension|metric)\d+$/.test(R) && void 0 != G[R]) {
            var N = U.get(kq(G[R]));
            sq(L, R, N)
          }
        }
      })
    }

    function e() {
      if (t.displayfeatures) {
        var G = "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g,
          "");
        p("require", "displayfeatures", void 0, {cookieName: G})
      }
    }

    var f = a, g = "https://www.google-analytics.com/analytics.js",
      h = c.isGtmEvent ? $m(c.getWithConfig("gaFunctionName")) : $m();
    if (Da(h)) {
      var k = Ym, n;
      c.isGtmEvent ? n = c.getWithConfig("name") || c.getWithConfig("gtmTrackerName") : n = "gtag_" + f.split("-").join("_");
      var p = function (G) {
        var L = [].slice.call(arguments, 0);
        L[0] = n ? n + "." + L[0] : "" + L[0];
        h.apply(window, L)
      }, q = function (G) {
        var L = function (V, xa) {
          for (var ya = 0; xa && ya < xa.length; ya++) p(V, xa[ya])
        }, U = c.isGtmEvent, R = U ? tq(t) :
          uq(b, c);
        if (R) {
          var N = {};
          rq(N, G);
          p("require", "ec", "ec.js", N);
          U && R.xf && p("set", "&cu", R.xf);
          var Z = R.action;
          if (U || "impressions" === Z) if (L("ec:addImpression", R.wh), !U) return;
          if ("promo_click" === Z || "promo_view" === Z || U && R.rd) {
            var ba = R.rd;
            L("ec:addPromo", ba);
            if (ba && 0 < ba.length && "promo_click" === Z) {
              U ? p("ec:setAction", Z, R.tb) : p("ec:setAction", Z);
              return
            }
            if (!U) return
          }
          "promo_view" !== Z && "impressions" !== Z && (L("ec:addProduct", R.Sb), p("ec:setAction", Z, R.tb))
        }
      }, r = function (G) {
        if (G) {
          var L = {};
          if (oc(G)) for (var U in vq) vq.hasOwnProperty(U) &&
          wq(vq[U], U, G[U], L);
          rq(L, y);
          p("require", "linkid", L)
        }
      }, u = function () {
        if (tn()) {
        } else {
          var G = c.getWithConfig(Q.Ci);
          G && (p("require", G, {dataLayer: ph.ca}), p("require", "render"))
        }
      }, t = oq(n, b, c), v = function (G, L, U) {
        U && (L = "" + L);
        t.fieldsToSend[G] = L
      };
      !c.isGtmEvent && pq(n, t.createOnlyFields) && (h(function () {
        k() && k().remove(n)
      }), xq[n] = !1);
      h("create", f, t.createOnlyFields);
      if (t.createOnlyFields[Q.Cb] && !c.isGtmEvent) {
        var x = qn(t.createOnlyFields[Q.Cb],
          "/analytics.js");
        x && (g = x)
      }
      var y = c.isGtmEvent ? t.fieldsToSet[Q.Cb] : t.createOnlyFields[Q.Cb];
      if (y) {
        var w = c.isGtmEvent ? t.fieldsToSet[Q.Kd] : t.createOnlyFields[Q.Kd];
        w && !xq[n] && (xq[n] = !0, h(dn(n, w)))
      }
      c.isGtmEvent ? t.enableRecaptcha && p("require", "recaptcha", "recaptcha.js") : (d(), r(t.linkAttribution));
      var A = t[Q.va];
      A && A[Q.U] && mq(A, n);
      p("set", t.fieldsToSet);
      if (c.isGtmEvent) {
        if (t.enableLinkId) {
          var B = {};
          rq(B, y);
          p("require", "linkid", "linkid.js", B)
        }
        Ag() && qq(f, n, c)
      }
      if (b === Q.Ic) if (c.isGtmEvent) {
        e();
        if (t.remarketingLists) {
          var D =
            "_dc_gtm_" + f.replace(/[^A-Za-z0-9-]/g, "");
          p("require", "adfeatures", {cookieName: D})
        }
        q(y);
        p("send", "pageview");
        t.createOnlyFields._useUp && an(n + ".")
      } else u(), p("send", "pageview", t.fieldsToSend); else b === Q.La ? (u(), Uo(f, c), c.getWithConfig(Q.sb) && (xk(["aw", "dc"]), an(n + ".")), 0 != t.sendPageView && p("send", "pageview", t.fieldsToSend), qq(f, n, c), !c.isGtmEvent && 0 < c.getEventModelKeys().length && (lg(68), 1 < S.configCount && lg(69))) : b === Q.Sa ? lq(n, c) : "screen_view" === b ? p("send", "screenview", t.fieldsToSend) : "timing_complete" ===
      b ? (t.fieldsToSend.hitType = "timing", v("timingCategory", t.eventCategory, !0), c.isGtmEvent ? v("timingVar", t.timingVar, !0) : v("timingVar", t.name, !0), v("timingValue", Na(t.value)), void 0 !== t.eventLabel && v("timingLabel", t.eventLabel, !0), p("send", t.fieldsToSend)) : "exception" === b ? p("send", "exception", t.fieldsToSend) : "" === b && c.isGtmEvent || ("track_social" === b && c.isGtmEvent ? (t.fieldsToSend.hitType = "social", v("socialNetwork", t.socialNetwork, !0), v("socialAction", t.socialAction, !0), v("socialTarget", t.socialTarget,
        !0)) : ((c.isGtmEvent || yq[b]) && q(y), c.isGtmEvent && e(), t.fieldsToSend.hitType = "event", v("eventCategory", t.eventCategory, !0), v("eventAction", t.eventAction || b, !0), void 0 !== t.eventLabel && v("eventLabel", t.eventLabel, !0), void 0 !== t.value && v("eventValue", Na(t.value))), p("send", t.fieldsToSend));
      var C = !1;
      var E = zq;
      C && (E = c.getContainerTypeLoaded("UA"));
      if (!E &&
        !c.isGtmEvent) {
        zq = !0;
        C && c.setContainerTypeLoaded("UA", !0);
        Tm();
        var F = function () {
          C && c.setContainerTypeLoaded("UA", !1);
          c.onFailure()
        }, M = function () {
          k().loaded || F()
        };
        tn() ? K(M) : Mb(g, M, F)
      }
    } else K(c.onFailure)
  }, Bq = function (a, b, c, d) {
    Rg(function () {
      Aq(a, b, d)
    }, [Q.T, Q.H])
  }, Dq = function (a, b) {
    function c(f) {
      function g(p, q) {
        for (var r = 0; r < q.length; r++) {
          var u = q[r];
          if (f[u]) {
            k[p] = f[u];
            break
          }
        }
      }

      function h() {
        if (f.category) k.category = f.category; else {
          for (var p = "", q = 0; q < Cq.length; q++) void 0 !== f[Cq[q]] && (p && (p += "/"), p += f[Cq[q]]);
          p && (k.category = p)
        }
      }

      var k = pc(f), n = !1;
      if (n || b) g("id", ["id", "item_id", "promotion_id"]), g("name", ["name", "item_name", "promotion_name"]), g("brand", ["brand", "item_brand"]), g("variant", ["variant", "item_variant"]), g("list", ["list_name", "item_list_name"]), g("position", ["list_position", "creative_slot", "index"]), h();
      g("listPosition", ["list_position"]);
      g("creative", ["creative_name"]);
      g("list", ["list_name"]);
      g("position", ["list_position", "creative_slot"]);
      return k
    }

    b = void 0 === b ? !1 : b;
    for (var d = [], e = 0; a && e < a.length; e++) a[e] && oc(a[e]) && d.push(c(a[e]));
    return d.length ? d : void 0
  }, Eq = function (a) {
    return Ng(a)
  }, Fq = !1;
  var zq, xq = {}, nq = {}, Gq = {},
    iq = Object.freeze((Gq.client_storage = "storage", Gq.sample_rate = 1, Gq.site_speed_sample_rate = 1, Gq.store_gac = 1, Gq.use_amp_client_id = 1, Gq[Q.ra] = 1, Gq[Q.Da] =
      "storeGac", Gq[Q.sa] = 1, Gq[Q.Ea] = 1, Gq[Q.Ua] = 1, Gq[Q.ac] = 1, Gq[Q.kb] = 1, Gq[Q.bc] = 1, Gq)), Hq = {},
    Iq = Object.freeze((Hq._cs = 1, Hq._useUp = 1, Hq.allowAnchor = 1, Hq.allowLinker = 1, Hq.alwaysSendReferrer = 1, Hq.clientId = 1, Hq.cookieDomain = 1, Hq.cookieExpires = 1, Hq.cookieFlags = 1, Hq.cookieName = 1, Hq.cookiePath = 1, Hq.cookieUpdate = 1, Hq.legacyCookieDomain = 1, Hq.legacyHistoryImport = 1, Hq.name = 1, Hq.sampleRate = 1, Hq.siteSpeedSampleRate = 1, Hq.storage = 1, Hq.storeGac = 1, Hq.useAmpClientId = 1, Hq._cd2l = 1, Hq)),
    Jq = Object.freeze({anonymize_ip: 1}),
    Kq = {}, jq = Object.freeze((Kq.campaign = {
      content: "campaignContent",
      id: "campaignId",
      medium: "campaignMedium",
      name: "campaignName",
      source: "campaignSource",
      term: "campaignKeyword"
    }, Kq.app_id = 1, Kq.app_installer_id = 1, Kq.app_name = 1, Kq.app_version = 1, Kq.description = "exDescription", Kq.fatal = "exFatal", Kq.language = 1, Kq.page_hostname = "hostname", Kq.transport_type = "transport", Kq[Q.ma] = "currencyCode", Kq[Q.rg] = 1, Kq[Q.pb] = "location", Kq[Q.Ye] = "page", Kq[Q.qb] = "referrer", Kq[Q.Nd] = "title", Kq[Q.Ag] = 1, Kq[Q.Na] = 1, Kq)),
    Lq = {}, Mq =
      Object.freeze((Lq.content_id = 1, Lq.event_action = 1, Lq.event_category = 1, Lq.event_label = 1, Lq.link_attribution = 1, Lq.name = 1, Lq[Q.va] = 1, Lq[Q.qg] = 1, Lq[Q.Fa] = 1, Lq[Q.oa] = 1, Lq)),
    Nq = Object.freeze({
      displayfeatures: 1,
      enableLinkId: 1,
      enableRecaptcha: 1,
      eventAction: 1,
      eventCategory: 1,
      eventLabel: 1,
      gaFunctionName: 1,
      gtmEcommerceData: 1,
      gtmTrackerName: 1,
      linker: 1,
      remarketingLists: 1,
      socialAction: 1,
      socialNetwork: 1,
      socialTarget: 1,
      timingVar: 1,
      value: 1
    }), Cq = Object.freeze(["item_category", "item_category2", "item_category3", "item_category4",
      "item_category5"]), Oq = {}, vq = Object.freeze((Oq.levels = 1, Oq[Q.Ea] = "duration", Oq[Q.ac] = 1, Oq)), Pq = {},
    Qq = Object.freeze((Pq.anonymize_ip = 1, Pq.fatal = 1, Pq.send_page_view = 1, Pq.store_gac = 1, Pq.use_amp_client_id = 1, Pq[Q.Da] = 1, Pq[Q.rg] = 1, Pq)),
    wq = function (a, b, c, d) {
      if (void 0 !== c) if (Qq[b] && (c = Oa(c)), "anonymize_ip" !== b || c || (c = void 0), 1 === a) d[kq(b)] = c; else if (m(a)) d[a] = c; else for (var e in a) a.hasOwnProperty(e) && void 0 !== c[e] && (d[a[e]] = c[e])
    }, kq = function (a) {
      return a && m(a) ? a.replace(/(_[a-z])/g, function (b) {
          return b[1].toUpperCase()
        }) :
        a
    }, Rq = {},
    yq = Object.freeze((Rq.checkout_progress = 1, Rq.select_content = 1, Rq.set_checkout_option = 1, Rq[Q.Xb] = 1, Rq[Q.Yb] = 1, Rq[Q.zb] = 1, Rq[Q.Ab] = 1, Rq[Q.Zb] = 1, Rq[Q.Aa] = 1, Rq[Q.$b] = 1, Rq[Q.Ba] = 1, Rq)),
    Sq = {},
    Tq = Object.freeze((Sq.checkout_progress = 1, Sq.set_checkout_option = 1, Sq[Q.gg] = 1, Sq[Q.Xb] = 1, Sq[Q.Yb] = 1, Sq[Q.zb] = 1, Sq[Q.Aa] = 1, Sq[Q.$b] = 1, Sq[Q.hg] = 1, Sq)),
    Uq = {},
    Vq = Object.freeze((Uq.generate_lead = 1, Uq.login = 1, Uq.search = 1, Uq.select_content = 1, Uq.share = 1, Uq.sign_up = 1, Uq.view_search_results = 1, Uq[Q.Ab] = 1, Uq[Q.Zb] = 1, Uq[Q.Ba] =
      1, Uq)), Wq = function (a) {
      var b = "general";
      Tq[a] ? b = "ecommerce" : Vq[a] ? b = "engagement" : "exception" === a && (b = "error");
      return b
    }, Xq = {}, Yq = Object.freeze((Xq.view_search_results = 1, Xq[Q.Ab] = 1, Xq[Q.Zb] = 1, Xq[Q.Ba] = 1, Xq)),
    sq = function (a, b, c) {
      a.hasOwnProperty(b) || (a[b] = c)
    }, Zq = function (a) {
      if (Fa(a)) {
        for (var b = [], c = 0; c < a.length; c++) {
          var d = a[c];
          if (void 0 != d) {
            var e = d.id, f = d.variant;
            void 0 != e && void 0 != f && b.push(String(e) + "." + String(f))
          }
        }
        return 0 < b.length ? b.join("!") : void 0
      }
    }, oq = function (a, b, c) {
      var d = function (M) {
          return c.getWithConfig(M)
        },
        e = {}, f = {}, g = {}, h = {}, k = Zq(d(Q.Bi));
      !c.isGtmEvent && k && sq(f, "exp", k);
      g["&gtm"] = Rn(!0);
      Ag() && (h._cs = Eq);
      var n = d(Q.Qc);
      if (!c.isGtmEvent && oc(n)) for (var p in n) if (n.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != n[p]) {
        var q = d(String(n[p]));
        void 0 !== q && sq(f, p, q)
      }
      for (var r = c.getTopLevelKeys(), u = 0; u < r.length; ++u) {
        var t = r[u];
        if (c.isGtmEvent) {
          var v = d(t);
          Nq.hasOwnProperty(t) ? e[t] = v : Iq.hasOwnProperty(t) ? h[t] = v : g[t] = v
        } else {
          var x = void 0;
          x = t !== Q.aa ? d(t) : c.getMergedValues(t);
          if (Mq.hasOwnProperty(t)) wq(Mq[t],
            t, x, e); else if (Jq.hasOwnProperty(t)) wq(Jq[t], t, x, g); else if (jq.hasOwnProperty(t)) wq(jq[t], t, x, f); else if (iq.hasOwnProperty(t)) wq(iq[t], t, x, h); else if (/^(dimension|metric|content_group)\d+$/.test(t)) wq(1, t, x, f); else if (t === Q.aa) {
            if (!Fq) {
              var y = bb(x);
              y && (f["&did"] = y)
            }
            var w = void 0, A = void 0;
            b === Q.La ? w = bb(c.getMergedValues(t), ".") : (w = bb(c.getMergedValues(t, 1), "."), A = bb(c.getMergedValues(t, 2), "."));
            w && (f["&gdid"] = w);
            A && (f["&edid"] = A)
          } else t === Q.Ma && 0 > r.indexOf(Q.ac) && (h.cookieName = x + "_ga")
        }
      }
      !1 !== d(Q.oi) &&
      !1 !== d(Q.Jc) && gq() || (g.allowAdFeatures = !1);
      !1 !== d(Q.da) && hq() || (g.allowAdPersonalizationSignals = !1);
      !c.isGtmEvent && d(Q.sb) && (h._useUp = !0);
      if (c.isGtmEvent) {
        h.name = h.name || e.gtmTrackerName;
        var B = g.hitCallback;
        g.hitCallback = function () {
          Da(B) && B();
          c.onSuccess()
        }
      } else {
        sq(h, "cookieDomain", "auto");
        sq(g, "forceSSL", !0);
        sq(e, "eventCategory", Wq(b));
        Yq[b] && sq(f, "nonInteraction", !0);
        "login" === b || "sign_up" === b || "share" === b ? sq(e, "eventLabel", d(Q.qg)) : "search" === b || "view_search_results" === b ? sq(e, "eventLabel", d(Q.Ii)) :
          "select_content" === b && sq(e, "eventLabel", d(Q.vi));
        var D = e[Q.va] || {}, C = D[Q.fc];
        C || 0 != C && D[Q.U] ? h.allowLinker = !0 : !1 === C && sq(h, "useAmpClientId", !1);
        f.hitCallback = c.onSuccess;
        h.name = a
      }
      Ag() && (g["&gcs"] = Og(), Ng(Q.T) || (h.storage = "none"), Ng(Q.H) || (g.allowAdFeatures = !1, h.storeGac = !1));
      var E = d(Q.ba) || d(Q.Cb), F = d(Q.Kd);
      E && (c.isGtmEvent || (h[Q.Cb] = E), h._cd2l = !0);
      F && !c.isGtmEvent && (h[Q.Kd] = F);
      e.fieldsToSend = f;
      e.fieldsToSet = g;
      e.createOnlyFields = h;
      return e
    }, tq = function (a) {
      var b = a.gtmEcommerceData;
      if (!b) return null;
      var c = {};
      b.currencyCode && (c.xf = b.currencyCode);
      if (b.impressions) {
        c.action = "impressions";
        var d = b.impressions;
        c.wh = "impressions" === b.translateIfKeyEquals ? Dq(d, !0) : d
      }
      if (b.promoView) {
        c.action = "promo_view";
        var e = b.promoView.promotions;
        c.rd = "promoView" === b.translateIfKeyEquals ? Dq(e, !0) : e
      }
      if (b.promoClick) {
        c.action = "promo_click";
        var f = b.promoClick.promotions;
        c.rd = "promoClick" === b.translateIfKeyEquals ? Dq(f, !0) : f;
        c.tb = b.promoClick.actionField;
        return c
      }
      for (var g in b) if (b.hasOwnProperty(g) && "translateIfKeyEquals" !==
        g && "impressions" !== g && "promoView" !== g && "promoClick" !== g && "currencyCode" !== g) {
        c.action = g;
        var h = b[g].products;
        c.Sb = "products" === b.translateIfKeyEquals ? Dq(h, !0) : h;
        c.tb = b[g].actionField;
        break
      }
      return Object.keys(c).length ? c : null
    }, uq = function (a, b) {
      function c(u) {
        return {
          id: d(Q.rb),
          affiliation: d(Q.yi),
          revenue: d(Q.oa),
          tax: d(Q.lg),
          shipping: d(Q.Re),
          coupon: d(Q.zi),
          list: d(Q.Qe) || u
        }
      }

      for (var d = function (u) {
        return b.getWithConfig(u)
      }, e = d(Q.fa), f, g = 0; e && g < e.length && !(f = e[g][Q.Qe]); g++) ;
      var h = d(Q.Qc);
      if (oc(h)) for (var k =
        0; e && k < e.length; ++k) {
        var n = e[k], p;
        for (p in h) h.hasOwnProperty(p) && /^(dimension|metric)\d+$/.test(p) && void 0 != h[p] && sq(n, p, n[h[p]])
      }
      var q = null, r = d(Q.Ai);
      a === Q.Aa || a === Q.$b ? q = {action: a, tb: c(), Sb: Dq(e)} : a === Q.Xb ? q = {
        action: "add",
        Sb: Dq(e)
      } : a === Q.Yb ? q = {action: "remove", Sb: Dq(e)} : a === Q.Ba ? q = {
        action: "detail",
        tb: c(f),
        Sb: Dq(e)
      } : a === Q.Ab ? q = {action: "impressions", wh: Dq(e)} : "view_promotion" === a ? q = {
        action: "promo_view",
        rd: Dq(r)
      } : "select_content" === a && r && 0 < r.length ? q = {action: "promo_click", rd: Dq(r)} : "select_content" ===
      a ? q = {
        action: "click",
        tb: {list: d(Q.Qe) || f},
        Sb: Dq(e)
      } : a === Q.zb || "checkout_progress" === a ? q = {
        action: "checkout",
        Sb: Dq(e),
        tb: {step: a === Q.zb ? 1 : d(Q.kg), option: d(Q.jg)}
      } : "set_checkout_option" === a && (q = {action: "checkout_option", tb: {step: d(Q.kg), option: d(Q.jg)}});
      q && (q.xf = d(Q.ma));
      return q
    }, $q = {}, pq = function (a, b) {
      var c = $q[a];
      $q[a] = pc(b);
      if (!c) return !1;
      for (var d in b) if (b.hasOwnProperty(d) && b[d] !== c[d]) return !0;
      for (var e in c) if (c.hasOwnProperty(e) && c[e] !== b[e]) return !0;
      return !1
    };
  var ar = null, br = !1;

  function cr(a) {
    return br && !a ? ar = ar || new dr : S.gcq = S.gcq || new dr
  }

  var er = function (a, b, c) {
    cr().register(a, b, c)
  }, fr = function (a, b, c, d) {
    cr().push("event", [b, a], c, d)
  }, gr = function (a, b, c) {
    cr().insert("event", [b, a], c)
  }, hr = function (a, b) {
    cr().push("config", [a], b)
  }, ir = function (a, b, c, d) {
    cr().push("get", [a, b], c, d)
  }, jr = function (a) {
    return cr().getRemoteConfig(a)
  }, kr = function () {
    var a = Q.ba;
    return cr().getGlobalConfigValue && cr().getGlobalConfigValue(a)
  }, lr = {}, mr = function () {
    this.status = 1;
    this.containerConfig = {};
    this.targetConfig = {};
    this.remoteConfig = {};
    this.o = {};
    this.s = null;
    this.claimed =
      this.g = !1
  }, nr = function (a, b, c, d, e) {
    this.type = a;
    this.s = b;
    this.Z = c || "";
    this.g = d;
    this.o = e
  }, dr = function () {
    this.o = {};
    this.s = {};
    this.g = [];
    this.C = {AW: !1, UA: !1}
  }, or = function (a, b) {
    var c = Ho(b);
    return a.o[c.containerId] = a.o[c.containerId] || new mr
  }, pr = function (a, b, c, d) {
    if (b) {
      var e = Ho(b);
      if (e && 1 === or(a, b).status) {
        or(a, b).status = 2;
        var f = {};
        gm && (f.timeoutId = z.setTimeout(function () {
          lg(38);
          Jl()
        }, 3E3));
        a.push("require", [f], e.containerId);
        lr[e.containerId] = Sa();
        if (tn()) {
        } else 2 === d ? zn(e.containerId, c) : yn(e.containerId, c, !0)
      }
    }
  }, qr = function (a, b, c, d) {
    if (d.Z) {
      var e = or(a, d.Z), f = e.s;
      if (f) {
        var g = pc(c), h = pc(e.targetConfig[d.Z]), k = pc(e.containerConfig), n = pc(e.remoteConfig), p = pc(a.s),
          q = {};
        try {
          q = pc(Nh)
        } catch (x) {
          lg(72)
        }
        var r = Qh("gtm.uniqueEventId"), u = Ho(d.Z).prefix, t = function (x) {
          tm(r, u, x);
          var y = g[Q.cc];
          y && K(y)
        }, v = Kn(Jn(Ln(In(Gn(Fn(Hn(En(Dn(Cn(g), h), k), n), p), q), function () {
          if (t) {
            var x = t;
            t = void 0;
            x("2")
          }
        }), function () {
          if (t) {
            var x = t;
            t = void 0;
            x("3")
          }
        }), function (x, y) {
          a.C[x] = y
        }), function (x) {
          return a.C[x]
        });
        try {
          tm(r, u, "1"), Cm(d.type, d.Z, v);
          f(d.Z, b, d.s, v)
        } catch (x) {
          tm(r, u, "4");
        }
      }
    }
  };
  l = dr.prototype;
  l.register = function (a, b, c) {
    var d = or(this, a);
    if (3 !== d.status) {
      d.s = b;
      d.status = 3;
      c && (pc(d.remoteConfig, c), d.remoteConfig = c);
      var e = Ho(a), f = lr[e.containerId];
      if (void 0 !== f) {
        var g = S[e.containerId].bootstrap, h = e.prefix.toUpperCase();
        S[e.containerId]._spx && (h = h.toLowerCase());
        var k = Qh("gtm.uniqueEventId"), n = h, p = Sa() - g;
        if (gm && !Ol[k]) {
          k !== Kl && (Fl(), Kl = k);
          var q = n + "." + Math.floor(g - f) + "." + Math.floor(p);
          Vl = Vl ? Vl + "," + q : "&cl=" + q
        }
        delete lr[e.containerId]
      }
      this.flush()
    }
  };
  l.notifyContainerLoaded = function (a, b) {
    var c = this, d = function (f) {
      if (Ho(f)) {
        var g = or(c, f);
        g.status = 3;
        g.claimed = !0
      }
    };
    d(a);
    for (var e = 0; e < b.length; e++) d(b[e]);
    this.flush()
  };
  l.push = function (a, b, c, d) {
    if (void 0 !== c) {
      if (!Ho(c)) return;
      pr(this, c, b[0][Q.ba] || this.s[Q.ba], "event" === a ? 2 : 1);
      or(this, c).g && (d = !1)
    }
    this.g.push(new nr(a, Math.floor(Sa() / 1E3), c, b, d));
    d || this.flush()
  };
  l.insert = function (a, b, c) {
    var d = Math.floor(Sa() / 1E3);
    0 < this.g.length ? this.g.splice(1, 0, new nr(a, d, c, b, !1)) : this.g.push(new nr(a, d, c, b, !1))
  };
  l.flush = function (a) {
    for (var b = this, c = [], d = !1, e = {}; this.g.length;) {
      var f = this.g[0];
      if (f.o) !f.Z || or(this, f.Z).g ? (f.o = !1, this.g.push(f)) : c.push(f), this.g.shift(); else {
        var g = void 0;
        switch (f.type) {
          case "require":
            g = or(this, f.Z);
            if (3 !== g.status && !a) {
              this.g.push.apply(this.g, c);
              return
            }
            gm && z.clearTimeout(f.g[0].timeoutId);
            break;
          case "set":
            La(f.g[0], function (r, u) {
              pc($a(r, u), b.s)
            });
            break;
          case "config":
            g = or(this, f.Z);
            if (g.claimed) break;
            e.Ya = {};
            La(f.g[0], function (r) {
              return function (u, t) {
                pc($a(u, t), r.Ya)
              }
            }(e));
            var h = !!e.Ya[Q.Sd];
            delete e.Ya[Q.Sd];
            var k = Ho(f.Z), n = k.containerId === k.id;
            h || (n ? g.containerConfig = {} : g.targetConfig[f.Z] = {});
            g.g && h || qr(this, Q.La, e.Ya, f);
            g.g = !0;
            delete e.Ya[Q.Gb];
            n ? pc(e.Ya, g.containerConfig) : (pc(e.Ya, g.targetConfig[f.Z]), lg(70));
            d = !0;
            break;
          case "event":
            g = or(this, f.Z);
            if (g.claimed) break;
            e.Ad = {};
            La(f.g[0], function (r) {
              return function (u, t) {
                pc($a(u, t), r.Ad)
              }
            }(e));
            qr(this, f.g[1], e.Ad, f);
            break;
          case "get":
            if (g = or(this, f.Z), !g.claimed) {
              var p = {}, q = (p[Q.ab] = f.g[0], p[Q.nb] = f.g[1], p);
              qr(this,
                Q.Sa, q, f)
            }
        }
        this.g.shift();
        rr(this, f)
      }
      e = {Ya: e.Ya, Ad: e.Ad}
    }
    this.g.push.apply(this.g, c);
    d && this.flush()
  };
  var rr = function (a, b) {
    if ("require" !== b.type) if (b.Z) for (var c = a.getCommandListeners(b.Z)[b.type] || [], d = 0; d < c.length; d++) c[d](); else for (var e in a.o) if (a.o.hasOwnProperty(e)) {
      var f = a.o[e];
      if (f && f.o) for (var g = f.o[b.type] || [], h = 0; h < g.length; h++) g[h]()
    }
  };
  dr.prototype.getRemoteConfig = function (a) {
    return or(this, a).remoteConfig
  };
  dr.prototype.getCommandListeners = function (a) {
    return or(this, a).o
  };
  dr.prototype.getGlobalConfigValue = function (a) {
    return this.s[a]
  };
  var sr = [Q.yb, Q.jc, Q.Ud], ur = function (a, b) {
    return 1 === arguments.length ? tr("set", a) : tr("set", a, b)
  }, vr = function (a, b) {
    return 1 === arguments.length ? tr("config", a) : tr("config", a, b)
  }, wr = function (a, b, c) {
    c = c || {};
    c[Q.Eb] = a;
    if ("G" === a.split("-")[0]) for (var d in c) "_" === d[0] && -1 === sr.indexOf(d) && delete c[d];
    return tr("event", b, c)
  };

  function tr(a) {
    return arguments
  }

  var yr = function (a) {
    if (xr(a)) return a;
    this.g = a
  };
  yr.prototype.getUntrustedMessageValue = function () {
    return this.g
  };
  var xr = function (a) {
    return !a || "object" !== mc(a) || oc(a) ? !1 : "getUntrustedMessageValue" in a
  }, zr = function (a) {
    if (xr(a)) return a.getUntrustedMessageValue()
  };
  yr.prototype.getUntrustedMessageValue = yr.prototype.getUntrustedMessageValue;
  var Ar = function () {
    this.g = [];
    this.o = []
  };
  Ar.prototype.push = function (a, b, c) {
    var d = this.g.length + 1;
    xr(a) && (a = zr(a) || a);
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    a = new yr(a);
    var e = {debugContext: c, message: a, notBeforeEventId: b, priorityId: d};
    this.g.push(e);
    for (var f = 0; f < this.o.length; f++) try {
      this.o[f](e)
    } catch (g) {
    }
  };
  Ar.prototype.enqueue = function (a, b, c) {
    var d = this.g.length + 1;
    xr(a) && (a = zr(a) || a);
    a["gtm.uniqueEventId"] = b;
    a["gtm.priorityId"] = d;
    a = new yr(a);
    c.eventId = b;
    c.fromContainerExecution = !0;
    c.priorityId = d;
    var e = {
      debugContext: c.originatingEntity || {},
      message: a,
      notBeforeEventId: b,
      priorityId: d,
      messageContext: c
    };
    this.g.push(e);
    for (var f = 0; f < this.o.length; f++) try {
      this.o[f](e)
    } catch (g) {
    }
  };
  Ar.prototype.listen = function (a) {
    this.o.push(a)
  };
  Ar.prototype.get = function () {
    for (var a = {}, b = 0; b < this.g.length; b++) {
      var c = this.g[b], d = a[c.notBeforeEventId];
      d || (d = [], a[c.notBeforeEventId] = d);
      d.push(c)
    }
    return a
  };
  var Cr = function (a, b, c) {
    Br().push(a, b, c)
  }, Er = function () {
    var a = Dr;
    Br().listen(a)
  }, Fr = function (a, b) {
    return a.notBeforeEventId - b.notBeforeEventId || a.priorityId - b.priorityId
  };

  function Br() {
    var a = S.mb;
    a || (a = new Ar, S.mb = a);
    return a
  }

  var Gr = !1;
  var Hr = !1;
  var Ir = function (a, b) {
    S.addDestinationToContainer ? S.addDestinationToContainer(a, b) : (S.pendingDestinationIds = S.pendingDestinationIds || [], S.pendingDestinationIds.push([a, b]))
  };
  var Jr = {}, Kr = {}, Lr = {}, Mr = function (a, b) {
    var c = Kr[b] || [];
    c.push(a);
    Kr[b] = c
  }, Or = function () {
    S.addTargetToGroup = function (e) {
      Nr(e, "default")
    };
    S.addDestinationToContainer = function (e, f) {
      Mr(e, f)
    };
    var a = S.pendingDefaultTargets;
    delete S.pendingDefaultTargets;
    if (Array.isArray(a)) for (var b = 0; b < a.length; ++b) Nr(a[b], "default");
    var c = S.pendingDestinationIds;
    delete S.pendingDestinationIds;
    if (Array.isArray(c)) for (var d = 0; d < c.length; ++d) Mr(c[d][0], c[d][1])
  }, Nr = function (a, b) {
    b = b.toString().split(",");
    for (var c = 0; c < b.length; c++) {
      var d =
        Jr[b[c]] || [];
      Jr[b[c]] = d;
      0 > d.indexOf(a) && d.push(a)
    }
  }, Pr = function (a, b) {
    b = String(b).split(",");
    for (var c = 0; c < b.length; c++) {
      var d = Lr[b[c]] || [];
      Lr[b[c]] = d;
      0 > d.indexOf(a) && d.push(a)
    }
  }, Qr = function (a) {
    for (var b = [], c = [], d = {}, e = 0; e < a.length; d = {Fc: d.Fc, Cd: d.Cd}, e++) {
      var f = a[e];
      if (0 <= f.indexOf("-")) if (Hr) {
        if (d.Fc = Ho(f), d.Fc) if (Gr) {
          var g = bl();
          Ga(g, function (t) {
            return function (v) {
              return t.Fc.containerId === v
            }
          }(d)) ? b.push(f) : c.push(f)
        } else d.Fc.containerId === Ie.J || tn() ? b.push(f) : c.push(f)
      } else b.push(f); else {
        var h =
          Jr[f] || [];
        if (Hr) if (Gr) {
          d.Cd = {};
          h.forEach(function (t) {
            return function (v) {
              return t.Cd[v] = !0
            }
          }(d));
          for (var k = al(), n = 0; n < k.length; n++) if (d.Cd[k[n]]) {
            var p = bl();
            p && p.length && (b = b.concat(p));
            break
          }
          var q = Lr[f] || [];
          q.length && (b = b.concat(q))
        } else for (var r = 0; r < h.length; r++) {
          var u = Ho(h[r]);
          (u && u.containerId === Ie.J || tn()) && b.push(u.id)
        } else h && h.length && (b = b.concat(h))
      }
    }
    return {Vj: b, Yj: c}
  }, Rr = function (a) {
    La(Jr, function (b, c) {
      var d = c.indexOf(a);
      0 <= d && c.splice(d, 1)
    })
  }, Sr = function (a) {
    La(Lr, function (b, c) {
      var d = c.indexOf(a);
      0 <= d && c.splice(d, 1)
    })
  };
  var Ur = function () {
      var a = S.zones;
      a || (a = S.zones = new Tr);
      return a
    }, Vr = {zone: !0, cn: !0, css: !0, ew: !0, eq: !0, ge: !0, gt: !0, lc: !0, le: !0, lt: !0, re: !0, sw: !0, um: !0},
    Wr = {cl: ["ecl"], ecl: ["cl"], ehl: ["hl"], hl: ["ehl"]}, Tr = function () {
      this.g = {};
      this.o = {};
      this.s = 0
    };
  l = Tr.prototype;
  l.isActive = function (a, b) {
    for (var c, d = 0; d < a.length && !(c = this.g[a[d]]); d++) ;
    if (!c) return !0;
    if (!this.isActive([c.Rf], b)) return !1;
    for (var e = 0; e < c.yd.length; e++) if (this.o[c.yd[e]].xc(b)) return !0;
    return !1
  };
  l.getIsAllowedFn = function (a, b) {
    if (!this.isActive(a,
      b)) return function () {
      return !1
    };
    for (var c, d = 0; d < a.length && !(c = this.g[a[d]]); d++) ;
    if (!c) return function () {
      return !0
    };
    for (var e = [], f = 0; f < c.yd.length; f++) {
      var g = this.o[c.yd[f]];
      g.xc(b) && e.push(g)
    }
    if (!e.length) return function () {
      return !1
    };
    var h = this.getIsAllowedFn([c.Rf], b);
    return function (k, n) {
      n = n || [];
      if (!h(k, n)) return !1;
      for (var p = 0; p < e.length; ++p) if (e[p].s(k, n)) return !0;
      return !1
    }
  };
  l.unregisterChild = function (a) {
    for (var b = 0; b < a.length; b++) delete this.g[a[b]]
  };
  l.createZone = function (a, b) {
    var c = String(++this.s);
    this.o[c] = new Xr(a, b);
    return c
  };
  l.updateZone = function (a, b, c) {
    var d = this.o[a];
    d && d.C(b, c)
  };
  l.registerChild = function (a, b, c) {
    var d = this.g[a];
    if (!d && S[a] || !d && el(a) || d && d.Rf !== b) return !1;
    if (d) return d.yd.push(c), !1;
    this.g[a] = {Rf: b, yd: [c]};
    return !0
  };
  var Xr = function (a, b) {
    this.g = [{eventId: a, xc: !0}];
    this.o = null;
    if (b) {
      this.o = {};
      for (var c = 0; c < b.length; c++) this.o[b[c]] = !0
    }
  };
  Xr.prototype.C = function (a, b) {
    var c = this.g[this.g.length - 1];
    a <= c.eventId || c.xc !== b && this.g.push({eventId: a, xc: b})
  };
  Xr.prototype.xc = function (a) {
    for (var b =
      this.g.length - 1; 0 <= b; b--) if (this.g[b].eventId <= a) return this.g[b].xc;
    return !1
  };
  Xr.prototype.s = function (a, b) {
    b = b || [];
    if (!this.o || Vr[a] || this.o[a]) return !0;
    for (var c = 0; c < b.length; ++c) if (this.o[b[c]]) return !0;
    return !1
  };
  var Yr = function (a, b, c, d, e) {
    var f = Ur();
    c = c && Ya(c, Wr);
    for (var g = f.createZone(a, c), h = 0; h < b.length; h++) {
      var k = String(b[h]);
      if (f.registerChild(k, Ie.J, g)) {
        var n = a, p = d, q = e;
        if (0 === k.indexOf("GTM-")) yn(k, void 0, !1); else {
          var r = tr("js", Ra());
          An[1] ? (yn(k, void 0, !0), Cr(r, n, q), Cr(vr(k, p), n, q)) : (z[ph.ca].push(r),
            S.addTargetToGroup ? S.addTargetToGroup(k) : (S.pendingDefaultTargets = S.pendingDefaultTargets || [], S.pendingDefaultTargets.push(k)), Ir(k, k), hr(p, k))
        }
      }
    }
    return g
  }, Zr = function (a, b, c) {
    Ur().updateZone(a, b, c)
  };
  var $r = function (a) {
    var b = S.zones;
    return b ? b.getIsAllowedFn(al(), a) : function () {
      return !0
    }
  }, as = function (a) {
    var b = S.zones;
    return b ? b.isActive(al(), a) : !0
  };
  var ds = function (a, b) {
    for (var c = [], d = 0; d < ke.length; d++) if (a[d]) {
      var e = ke[d];
      if (e[Ld.Pi]) continue;
      var f = Rm(b.ub);
      try {
        var g = jn(d, {onSuccess: f, onFailure: f, terminate: f}, b, d);
        if (g) {
          var h = c, k = h.push, n = d, p = e["function"];
          if (!p) throw"Error: No function name given for function call.";
          var q = me[p];
          k.call(h, {Oh: n, Fh: q ? q.priorityOverride || 0 : 0, execute: g})
        } else bs(d, b), f()
      } catch (u) {
        f()
      }
    }
    c.sort(cs);
    for (var r = 0; r < c.length; r++) c[r].execute();
    return 0 <
      c.length
  };

  function cs(a, b) {
    var c, d = b.Fh, e = a.Fh;
    c = d > e ? 1 : d < e ? -1 : 0;
    var f;
    if (0 !== c) f = c; else {
      var g = a.Oh, h = b.Oh;
      f = g > h ? 1 : g < h ? -1 : 0
    }
    return f
  }

  function bs(a, b) {
    if (!gm) return;
    var c = function (d) {
      var e = b.Hf(ke[d]) ? "3" : "4", f = te(ke[d][Ld.Tg], b, []);
      f && f.length && c(f[0].index);
      mm(b.id, ke[d], e);
      var g = te(ke[d][Ld.Wg], b, []);
      g && g.length && c(g[0].index)
    };
    c(a);
  }

  var gs = !1, es;
  var ms = function (a) {
    var b = Sa(), c = a["gtm.uniqueEventId"], d = a["gtm.priorityId"], e = a.event;
    if ("gtm.js" === e) {
      if (gs) return !1;
      gs = !0;
    }
    var h, k = !1;
    if (as(c)) h = $r(c); else {
      if ("gtm.js" !== e && "gtm.init" !== e && "gtm.init_consent" !== e) return !1;
      k = !0;
      h = $r(Number.MAX_SAFE_INTEGER)
    }
    lm(c, e);
    var n = a.eventCallback, p = a.eventTimeout, q = n;
    var r = {
      id: c, priorityId: d, name: e, Hf: Zk(h), Dk: [], zh: function () {
        lg(6)
      }, fh: is(), gh: js(c), ub: new Nm(q, p)
    }, u = De(r);
    k && (u = ks(u));
    var t = ds(u, r), v = !1;
    Sm(r.ub);
    "gtm.js" !== e && "gtm.sync" !== e || cn(Ie.J);
    return ls(u, t) || v
  };

  function js(a) {
    return function (b) {
      gm && (tc(b) || um(a, "input", b))
    }
  }

  function is() {
    var a = {};
    a.event = Vh("event", 1);
    a.ecommerce = Vh("ecommerce", 1);
    a.gtm = Vh("gtm");
    a.eventModel = Vh("eventModel");
    return a
  }

  function ks(a) {
    for (var b = [], c = 0; c < a.length; c++) a[c] && (rh[String(ke[c][Ld.Hb])] && (b[c] = !0), void 0 !== ke[c][Ld.Wi] && (b[c] = !0));
    return b
  }

  function ls(a, b) {
    if (!b) return b;
    for (var c = 0; c < a.length; c++) if (a[c] && ke[c] && !sh[String(ke[c][Ld.Hb])]) return !0;
    return !1
  }

  var Me;
  var ns = !1;
  var os = "HA GF G UA AW DC".split(" "), ps = !1, qs = !1, rs = 0;

  function ss(a) {
    a.hasOwnProperty("gtm.uniqueEventId") || Object.defineProperty(a, "gtm.uniqueEventId", {value: Kh()});
    return a["gtm.uniqueEventId"]
  }

  function ts(a) {
    delete a[Q.Ud];
    delete a[Q.yb]
  }

  function us() {
    return ps
  }

  var vs = {
    config: function (a) {
      ss(a);
    }, consent: function (a) {
      if (3 === a.length) {
        lg(39);
        var b = {eventId: ss(a), priorityId: a["gtm.priorityId"]},
          c = a[1];
        "default" === c ? Kg(a[2]) : "update" === c && Mg(a[2], b)
      }
    }, event: function (a, b, c) {
      c = void 0 === c ? !1 : c;
      var d = a[1];
      if (!(2 > a.length) && m(d)) {
        var e;
        if (2 < a.length) {
          if (!oc(a[2]) && void 0 != a[2] || 3 < a.length) return;
          e = a[2]
        }
        var f = e, g = {}, h = (g.event = d, g);
        f && (h.eventModel = pc(f), f[Q.cc] && (h.eventCallback = f[Q.cc]), f[Q.Jd] && (h.eventTimeout = f[Q.Jd]));
        var k = !1, n = !1;
        e && (e[Q.Ud] && 0 === Ie.J.indexOf("GTM") && (k = !0), e[Q.yb] && (n = !0), ts(h.eventModel));
        var p = ss(a), q = a["gtm.priorityId"];
        h["gtm.uniqueEventId"] = p;
        q && (h["gtm.priorityId"] =
          q);
        return k ? void 0 : h
      }
    }, get: function (a) {
    }, js: function (a) {
      if (2 == a.length && a[1].getTime) {
        qs = !0;
        us();
        var b = {};
        return b.event = "gtm.js", b["gtm.start"] = a[1].getTime(), b["gtm.uniqueEventId"] =
          ss(a), b
      }
    }, policy: function (a) {
      if (3 === a.length && m(a[1]) && Da(a[2])) {
        var b = a[1], c = a[2], d = Me.o;
        d.g[b] ? d.g[b].push(c) : d.g[b] = [c];
        if (lg(74), "all" === a[1]) {
          lg(75);
          var e = !1;
          try {
            e = a[2](Ie.J, "unknown", {})
          } catch (f) {
          }
          e || lg(76)
        }
      } else {
        lg(73);
      }
    }, set: function (a) {
      var b;
      2 == a.length &&
      oc(a[1]) ? b = pc(a[1]) : 3 == a.length && m(a[1]) && (b = {}, oc(a[2]) || Fa(a[2]) ? b[a[1]] = pc(a[2]) : b[a[1]] = a[2]);
      if (b) {
        var c = ss(a), d = a["gtm.priorityId"];
        b._clear = !0;
        return b
      }
    }
  }, ws = {policy: !0};
  var xs = function (a) {
    var b = z[ph.ca].hide;
    if (b && void 0 !== b[a] && b.end) {
      b[a] = !1;
      var c = !0, d;
      for (d in b) if (b.hasOwnProperty(d) && !0 === b[d]) {
        c = !1;
        break
      }
      c && (b.end(), b.end = null)
    }
  }, ys = function (a) {
    var b = z[ph.ca], c = b && b.hide;
    c && c.end && (c[a] = !0)
  };
  var zs = !1, As = [];

  function Bs() {
    if (!zs) {
      zs = !0;
      for (var a = 0; a < As.length; a++) K(As[a])
    }
  }

  var Cs = function (a) {
    zs ? K(a) : As.push(a)
  };
  var Ss = 0, Ts = {}, Us = [], Vs = [], Ws = !1, Xs = !1, Ys = function (a) {
    return z[ph.ca].push(a)
  }, Zs = function (a, b, c) {
    a.eventCallback = b;
    c && (a.eventTimeout = c);
    return Ys(a)
  }, $s = function (a, b) {
    var c = S[ph.ca], d = c ? c.subscribers : 1, e = 0, f = !1, g = void 0;
    b && (g = z.setTimeout(function () {
      f || (f = !0, a());
      g = void 0
    }, b));
    return function () {
      ++e === d && (g && (z.clearTimeout(g), g = void 0), f || (a(), f = !0))
    }
  };

  function at(a) {
    var b = a._clear;
    La(a, function (d, e) {
      "_clear" !== d && (b && Th(d), Th(d, e))
    });
    xh || (xh = a["gtm.start"]);
    var c = a["gtm.uniqueEventId"];
    if (!a.event) return !1;
    c || (c = Kh(), a["gtm.uniqueEventId"] = c, Th("gtm.uniqueEventId", c));
    return ms(a)
  }

  function bt(a) {
    if (null == a || "object" !== typeof a) return !1;
    if (a.event) return !0;
    if (Ma(a)) {
      var b = a[0];
      if ("config" === b || "event" === b || "js" === b) return !0
    }
    return !1
  }

  function ct() {
    for (var a = !1; !Xs && (0 < Us.length || 0 < Vs.length);) {
      if (!Ws && bt(Us[0])) {
        var b = {}, c = (b.event = "gtm.init_consent", b), d = {}, e = (d.event = "gtm.init", d),
          f = Us[0]["gtm.uniqueEventId"];
        f && (c["gtm.uniqueEventId"] = f - 2, e["gtm.uniqueEventId"] = f - 1);
        Us.unshift(c, e);
        Ws = !0;
      }
      Xs = !0;
      delete Nh.eventModel;
      Ph();
      var p = null, q = void 0, r = void 0;
      if (Vs.length) {
        var u = Vs.shift();
        p = u.message;
        q = u.debugContext;
        r = !0
      }
      null == p && (p = Us.shift());
      if (null != p) {
        var t = xr(p);
        t && (p = zr(p), Uh());
        try {
          if (Da(p)) try {
            p.call(Rh)
          } catch (C) {
          } else if (Fa(p)) {
            var v =
              p;
            if (m(v[0])) {
              var x = v[0].split("."), y = x.pop(), w = v.slice(1), A = Qh(x.join("."), 2);
              if (null != A) try {
                A[y].apply(A, w)
              } catch (C) {
              }
            }
          } else {
            if (Ma(p)) {
              a:{
                if (p.length && m(p[0])) {
                  var B = vs[p[0]];
                  if (B && (!t || !ws[p[0]])) {
                    p = B(p, q, r);
                    break a
                  }
                }
                p = void 0
              }
              if (!p) {
                Xs = !1;
                continue
              }
            }
            a = at(p) || a;
            if (bt(p)) {
              var D = p["gtm.uniqueEventId"];
              void 0 !== D && (dt(D), Ss = D)
            }
          }
        } finally {
          t && Ph(!0)
        }
      }
      Xs = !1
    }
    return !a
  }

  function et() {
    var b = ct();
    try {
      xs(Ie.J)
    } catch (c) {
    }
    return b
  }

  function Dr(a) {
    var b = a.notBeforeEventId;
    Ss < b ? (Ts[String(b)] = Ts[String(b)] || [], Ts[String(b)].push(a)) : (Vs.push(a), Vs.sort(Fr), K(function () {
      Xs || ct()
    }))
  }

  function dt(a) {
    for (var b = Ts[String(a)] || [], c = 0; c < b.length; c++) Vs.push(b[c]);
    b.length && Vs.sort(Fr);
    delete Ts[String(a)]
  }

  var gt = function () {
    var a = Hb(ph.ca, []), b = Hb("google_tag_manager", {});
    Ts = Br().get();
    dt(0);
    Er();
    b = b[ph.ca] = b[ph.ca] || {};
    Jm(function () {
      if (!b.gtmDom) {
        b.gtmDom = !0;
        var e = {};
        a.push((e.event = "gtm.dom", e))
      }
    });
    Cs(function () {
      if (!b.gtmLoad) {
        b.gtmLoad = !0;
        var e = {};
        a.push((e.event = "gtm.load", e))
      }
    });
    b.subscribers = (b.subscribers || 0) + 1;
    var c = a.push;
    a.push = function () {
      var e;
      if (0 < S.SANDBOXED_JS_SEMAPHORE) {
        e = [];
        for (var f = 0; f < arguments.length; f++) e[f] = new yr(arguments[f])
      } else e = [].slice.call(arguments, 0);
      Us.push.apply(Us,
        e);
      var g = c.apply(a, e);
      if (300 < this.length) for (lg(4); 300 < this.length;) this.shift();
      var h = "boolean" !== typeof g || g;
      return ct() && h
    };
    var d = a.slice(0);
    Us.push.apply(Us, d);
    if (ft()) {
      K(et)
    }
  }, ft = function () {
    var a = !0;
    return a
  };

  function ht(a) {
    if (null == a || 0 === a.length) return !1;
    var b = Number(a), c = Sa();
    return b < c + 3E5 && b > c - 9E5
  };var it = {};
  it.Td = new String("undefined");
  var jt = function (a) {
    this.g = function (b) {
      for (var c = [], d = 0; d < a.length; d++) c.push(a[d] === it.Td ? b : a[d]);
      return c.join("")
    }
  };
  jt.prototype.toString = function () {
    return this.g("undefined")
  };
  jt.prototype.valueOf = jt.prototype.toString;
  it.Yi = jt;
  it.nf = {};
  it.pj = function (a) {
    return new jt(a)
  };
  var kt = {};
  it.nk = function (a, b) {
    var c = Kh();
    kt[c] = [a, b];
    return c
  };
  it.kh = function (a) {
    var b = a ? 0 : 1;
    return function (c) {
      var d = kt[c];
      if (d && "function" === typeof d[b]) d[b]();
      kt[c] = void 0
    }
  };
  it.Lj = function (a) {
    for (var b = !1, c = !1, d = 2; d < a.length; d++) b =
      b || 8 === a[d], c = c || 16 === a[d];
    return b && c
  };
  it.hk = function (a) {
    if (a === it.Td) return a;
    var b = Kh();
    it.nf[b] = a;
    return 'google_tag_manager["' + Ie.J + '"].macro(' + b + ")"
  };
  it.Xj = function (a, b, c) {
    a instanceof it.Yi && (a = a.g(it.nk(b, c)), b = Ca);
    return {Ij: a, onSuccess: b}
  };
  var lt = function (a, b, c) {
    var d = {
      event: b,
      "gtm.element": a,
      "gtm.elementClasses": Zb(a, "className"),
      "gtm.elementId": a["for"] || Sb(a, "id") || "",
      "gtm.elementTarget": a.formTarget || Zb(a, "target") || ""
    };
    c && (d["gtm.triggers"] = c.join(","));
    d["gtm.elementUrl"] = (a.attributes && a.attributes.formaction ? a.formAction : "") || a.action || Zb(a, "href") || a.src || a.code || a.codebase || "";
    return d
  }, mt = function (a) {
    S.hasOwnProperty("autoEventsSettings") || (S.autoEventsSettings = {});
    var b = S.autoEventsSettings;
    b.hasOwnProperty(a) || (b[a] = {});
    return b[a]
  }, Lt = function (a, b, c) {
    mt(a)[b] = c
  }, Mt = function (a, b, c, d) {
    var e = mt(a), f = Ta(e, b, d);
    e[b] = c(f)
  }, Nt = function (a, b, c) {
    var d = mt(a);
    return Ta(d, b, c)
  }, Ot = function (a) {
    return "string" === typeof a ? a : String(Kh())
  };
  var hu = z.clearTimeout, iu = z.setTimeout, T = function (a, b, c, d) {
      if (tn()) {
        b && K(b)
      } else return Mb(a, b, c, d)
    }, ju = function () {
      return new Date
    }, ku = function () {
      return z.location.href
    }, lu = function (a) {
      return mi(oi(a), "fragment")
    }, mu = function (a) {
      return ni(oi(a))
    }, nu = function (a, b) {
      return Qh(a, b || 2)
    }, ou = function (a, b, c) {
      return b ? Zs(a, b, c) : Ys(a)
    }, pu = function (a, b) {
      z[a] = b
    }, W = function (a, b, c) {
      b && (void 0 === z[a] || c && !z[a]) && (z[a] = b);
      return z[a]
    },
    qu = function (a, b, c) {
      return Si(a, b, void 0 === c ? !0 : !!c)
    }, ru = function (a, b, c) {
      return 0 === aj(a, b, c)
    }, su = function (a, b) {
      if (tn()) {
        b && K(b)
      } else Ob(a, b)
    }, tu = function (a) {
      return !!Nt(a, "init", !1)
    }, uu = function (a) {
      Lt(a, "init", !0)
    }, vu = function (a, b, c) {
      gm && (tc(a) || um(c, b, a))
    };

  var wu = it.Xj;
  var Tu = ["matches", "webkitMatchesSelector", "mozMatchesSelector", "msMatchesSelector", "oMatchesSelector"];

  function Uu(a, b) {
    a = String(a);
    b = String(b);
    var c = a.length - b.length;
    return 0 <= c && a.indexOf(b, c) === c
  }

  var Vu = new Ia;

  function Wu(a, b, c) {
    var d = c ? "i" : void 0;
    try {
      var e = String(b) + d, f = Vu.get(e);
      f || (f = new RegExp(b, d), Vu.set(e, f));
      return f.test(a)
    } catch (g) {
      return !1
    }
  }

  function Xu(a, b) {
    function c(g) {
      var h = oi(g), k = mi(h, "protocol"), n = mi(h, "host", !0), p = mi(h, "port"),
        q = mi(h, "path").toLowerCase().replace(/\/$/, "");
      if (void 0 === k || "http" === k && "80" === p || "https" === k && "443" === p) k = "web", p = "default";
      return [k, n, p, q]
    }

    for (var d = c(String(a)), e = c(String(b)), f = 0; f < d.length; f++) if (d[f] !== e[f]) return !1;
    return !0
  }

  function Yu(a) {
    return Zu(a) ? 1 : 0
  }

  function Zu(a) {
    var b = a.arg0, c = a.arg1;
    if (a.any_of && Array.isArray(c)) {
      for (var d = 0; d < c.length; d++) {
        var e = pc(a, {});
        pc({arg1: c[d], any_of: void 0}, e);
        if (Yu(e)) return !0
      }
      return !1
    }
    switch (a["function"]) {
      case "_cn":
        return 0 <= String(b).indexOf(String(c));
      case "_css":
        var f;
        a:{
          if (b) try {
            for (var g = 0; g < Tu.length; g++) {
              var h = Tu[g];
              if (b[h]) {
                f = b[h](c);
                break a
              }
            }
          } catch (k) {
          }
          f = !1
        }
        return f;
      case "_ew":
        return Uu(b, c);
      case "_eq":
        return String(b) === String(c);
      case "_ge":
        return Number(b) >= Number(c);
      case "_gt":
        return Number(b) > Number(c);
      case "_lc":
        return 0 <= String(b).split(",").indexOf(String(c));
      case "_le":
        return Number(b) <= Number(c);
      case "_lt":
        return Number(b) < Number(c);
      case "_re":
        return Wu(b, c, a.ignore_case);
      case "_sw":
        return 0 === String(b).indexOf(String(c));
      case "_um":
        return Xu(b, c)
    }
    return !1
  };

  function $u(a, b) {
    var c = this;
  }

  $u.N = "addConsentListener";
  var av;
  var bv = function (a) {
    for (var b = 0; b < a.length; ++b) if (av) try {
      a[b]()
    } catch (c) {
      lg(77)
    } else a[b]()
  };

  function cv(a, b, c) {
    var d = this, e;
    return e
  }

  cv.M = "internal.addDataLayerEventListener";

  function dv(a, b, c) {
  }

  dv.N = "addDocumentEventListener";

  function ev(a, b, c, d) {
  }

  ev.N = "addElementEventListener";

  function fv(a) {
  }

  fv.N = "addEventCallback";

  function jv(a) {
  }

  jv.M = "internal.addFormAbandonmentListener";
  var kv = {}, lv = [], mv = {}, nv = 0, ov = 0;

  function vv(a, b) {
  }

  vv.M = "internal.addFormInteractionListener";

  function Cv(a, b) {
  }

  Cv.M = "internal.addFormSubmitListener";

  function Hv(a) {
  }

  Hv.M = "internal.addGaSendListener";
  var Iv = {}, Jv = [];
  var Qv = function (a, b) {
  };
  Qv.M = "internal.addHistoryChangeListener";

  function Rv(a, b, c) {
  }

  Rv.N = "addWindowEventListener";

  function Sv(a, b) {
    return !0
  }

  Sv.N = "aliasInWindow";

  function Tv(a, b, c) {
  }

  Tv.M = "internal.appendRemoteConfigParameter";

  function Uv() {
    var a = 2;
    return a
  };

  function Vv(a, b) {
    var c;
    O(I(this), ["path:!string"], [a]);
    P(this, "access_globals", "execute", a);
    for (var d = a.split("."), e = z, f = e[d[0]], g = 1; f && g < d.length; g++) if (e = f, f = f[d[g]], e === z || e === J) return;
    if ("function" !== mc(f)) return;
    for (var h = Uv(), k = [], n = 1; n < arguments.length; n++) k.push(rc(arguments[n], this.g, h));
    var p = (0, this.g.R)(f, e, k);
    c = qc(p, this.g, h);
    void 0 === c && void 0 !== p && lg(45);
    return c
  }

  Vv.N = "callInWindow";

  function Wv(a) {
  }

  Wv.N = "callLater";

  function Xv(a) {
  }

  Xv.M = "callOnDomReady";

  function Yv(a) {
    O(I(this), ["listener:!Fn"], arguments);
    P(this, "process_dom_events", "window", "load");
    Cs(rc(a))
  }

  Yv.M = "callOnWindowLoad";

  function Zv(a) {
    var b;
    return b
  }

  Zv.M = "internal.computeGtmParameter";

  function $v(a, b) {
    var c;
    var d = qc(c, this.g, Uv());
    void 0 === d && void 0 !== c && lg(45);
    return d
  }

  $v.N = "copyFromDataLayer";

  function aw(a) {
    var b;
    O(I(this), ["path:!string"], arguments);
    P(this, "access_globals", "read", a);
    var c = a.split("."), d = Za(c, [z, J]);
    if (!d) return;
    var e = d[c[c.length - 1]];
    b = qc(e, this.g, Uv());
    void 0 === b && void 0 !== e && lg(45);
    return b
  }

  aw.N = "copyFromWindow";

  function bw(a, b) {
    var c;
    return c
  }

  bw.M = "internal.copyPreHit";

  function cw(a, b) {
    var c = null, d = Uv();
    return qc(c, this.g, d)
  }

  cw.N = "createArgumentsQueue";

  function dw(a) {
    var b;
    return qc(b, this.g,
      Uv())
  }

  dw.N = "createQueue";
  var ew = {}, fw = [], gw = {}, hw = 0, iw = 0;

  function ow(a, b) {
    var c = this;
    return b
  }

  ow.M = "internal.enableAutoEventOnFormInteraction";

  function tw(a, b) {
    var c = this;
    return b
  }

  tw.M = "internal.enableAutoEventOnFormSubmit";

  function yw() {
    var a = this;
  }

  yw.M = "internal.enableAutoEventOnGaSend";
  var zw = {}, Aw = [];

  function Hw(a, b) {
    var c = this;
    return b
  }

  Hw.M = "internal.enableAutoEventOnHistoryChange";

  function Lw(a, b) {
    var c = this;
    return b
  }

  Lw.M = "internal.enableAutoEventOnLinkClick";
  var Mw, Nw;

  function Ww(a, b) {
    var c = this;
    return b
  }

  Ww.M = "internal.enableAutoEventOnScroll";
  var Db = ca(["data-gtm-yt-inspected-"]), Xw = ["www.youtube.com", "www.youtube-nocookie.com"], Yw, Zw = !1;

  function ix(a, b) {
    var c = this;
    return b
  }

  ix.M = "internal.enableAutoEventOnYouTubeActivity";

  function jx(a) {
    return !1
  }

  jx.M = "internal.evaluateFilteringRules";
  var kx;

  function lx(a) {
    var b = !1;
    return b
  }

  lx.M = "internal.evaluateMatchingRules";

  function rx(a, b) {
    var c = !1;
    return c
  }

  rx.M = "internal.evaluatePredicates";
  var sx = function (a) {
    var b;
    return b
  };

  function tx(a, b) {
    b = void 0 === b ? !0 : b;
    var c;
    O(I(this), ["name:!string", "decode:?boolean"], arguments), P(this, "get_cookies", a), c = qc(Si(a, void 0, !!b), this.g);
    return c
  }

  tx.N = "getCookieValues";

  function ux() {
    return gg.jh
  }

  ux.M = "internal.getCountryCode";

  function vx() {
    var a = [];
    return qc(a)
  }

  vx.M = "internal.getDestinationIds";

  function wx(a) {
    var b = null;
    return b
  }

  wx.N = "getElementById";

  function xx(a, b) {
    var c;
    return c
  }

  xx.M = "internal.getProductSettingsParameter";

  function yx(a, b) {
    var c;
    return c
  }

  yx.N = "getQueryParameters";

  function zx(a, b) {
    var c;
    return c
  }

  zx.N = "getReferrerQueryParameters";

  function Ax(a) {
    var b = "";
    O(I(this), ["component:?string"], arguments), P(this, "get_referrer", a), b = li(oi(J.referrer), a);
    return b
  }

  Ax.N = "getReferrerUrl";

  function Bx() {
    return gg.Ih
  }

  Bx.M = "internal.getRegionCode";

  function Cx(a, b) {
    var c;
    return c
  }

  Cx.M = "internal.getRemoteConfigParameter";

  function Dx(a) {
    var b = "";
    O(I(this), ["component:?string"], arguments), P(this, "get_url", a), b = mi(oi(z.location.href), a);
    return b
  }

  Dx.N = "getUrl";

  function Ex() {
    P(this, "get_user_agent");
    return z.navigator.userAgent
  }

  Ex.N = "getUserAgent";

  function Fx(a) {
    if (!a) return {};
    var b = a.vj;
    return Lm(b.type, b.index, b.name)
  };

  function Hx(a, b) {
  }

  Hx.N = "gtagSet";

  function Ix(a, b) {
  }

  Ix.N = "injectHiddenIframe";
  var Jx = {};

  function Kx(a, b, c, d, e, f) {
    f ? e[f] ? (e[f][0].push(c), e[f][1].push(d)) : (e[f] = [[c], [d]], Mb(a, function () {
      for (var g = e[f][0], h = 0; h < g.length; h++) K(g[h]);
      g.push = function (k) {
        K(k);
        return 0
      }
    }, function () {
      for (var g = e[f][1], h = 0; h < g.length; h++) K(g[h]);
      e[f] = null
    }, b)) : Mb(a, c, d, b)
  }

  function Lx(a, b, c, d) {
    if (!tn()) {
      O(I(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn", "cacheToken:?string"], arguments);
      P(this, "inject_script", a);
      var e = this.g;
      Kx(a, void 0, function () {
        b && b.o(e)
      }, function () {
        c && c.o(e)
      }, Jx, d)
    }
  }

  var Mx = Object.freeze({dl: 1, id: 1}), Nx = {};

  function Ox(a, b, c, d) {
  }

  Lx.N = "injectScript";
  Ox.M = "internal.injectScript";

  function Px(a) {
    var b = !0;
    return b
  }

  Px.N = "isConsentGranted";
  var Qx = function () {
    var a = Of(function (b) {
      this.g.g.log("error", b)
    });
    a.N = "JSON";
    return a
  };
  var Rx = function () {
    return !1
  }, Sx = {
    getItem: function (a) {
      var b = null;
      return b
    }, setItem: function (a,
                          b) {
      return !1
    }, removeItem: function (a) {
    }
  };
  var Tx = ["textContent", "value", "tagName", "children", "childElementCount"];

  function Ux(a) {
    var b;
    return b
  }

  Ux.M = "internal.locateUserData";

  function Vx() {
  }

  Vx.N = "logToConsole";

  function Wx(a, b) {
    var c;
    return c
  }

  Wx.M = "internal.newInWindow";

  function Xx(a) {
    var b = void 0;
    return b
  }

  Xx.N = "parseUrl";

  function Yx(a) {
  }

  Yx.M = "internal.processAsNewEvent";

  function Zx(a, b) {
    var c = !1;
    return c
  }

  Zx.N = "queryPermission";

  function $x() {
    var a = "";
    P(this, "read_character_set"), a = J.characterSet || "";
    return a
  }

  $x.N = "readCharacterSet";

  function ay() {
    var a = "";
    P(this, "read_title"), a = J.title || "";
    return a
  }

  ay.N = "readTitle";

  function by(a, b) {
    var c = this;
  }

  by.M = "internal.registerCcdCallback";
  var cy = Object.freeze(["config", "event", "get", "set"]);

  function dy(a, b, c) {
  }

  dy.M = "internal.registerGtagCommandListener";

  function ey(a, b) {
    var c = !1;
    return c
  }

  ey.M = "internal.removeDataLayerEventListener";

  function fy() {
  }

  fy.N = "resetDataLayer";
  var gy = function (a, b, c) {
    for (var d = 0; d < b.length; d++) a.hasOwnProperty(b[d]) && (a[b[d]] = c(a[b[d]]))
  };
  var hy = !1;
  hy = !0;

  function iy(a, b, c, d) {
    d = void 0 === d ? !1 : d;
  }

  iy.M = "internal.sendGtagEvent";

  function jy(a, b, c) {
    O(I(this), ["url:!string", "onSuccess:?Fn", "onFailure:?Fn"], arguments);
    P(this, "send_pixel", a);
    var d = this.g;
    Pb(a, function () {
      b instanceof db && b.o(d)
    }, function () {
      c instanceof db && c.o(d)
    });
  }

  jy.N = "sendPixel";

  function ky(a, b, c, d) {
    var e = this;
    d = void 0 === d ? !0 : d;
    var f = !1;
    return f
  }

  ky.N = "setCookie";
  var ly = !1;
  ly = !0;

  function my(a) {
    O(I(this), ["consentSettings:!DustMap"], arguments);
    for (var b = a.Ib(), c = b.length(), d = 0; d < c; d++) {
      var e = b.get(d);
      e !== Q.Be && P(this, "access_consent", e, "write")
    }
    var f = this.g.g, g = f.eventId, h = Fx(f);
    if (ly) {
      var k = tr("consent", "default", rc(a));
      Cr(k, g, h)
    } else Kg(rc(a))
  }

  my.N = "setDefaultConsentState";

  function ny(a, b, c) {
    O(I(this), ["path:!string", "value:?*", "overrideExisting:?boolean"], arguments);
    P(this, "access_globals", "readwrite", a);
    var d = a.split("."), e = Za(d, [z, J]), f = d.pop();
    if (e && (void 0 === e[f] || c)) return e[f] = rc(b, this.g, Uv()), !0;
    return !1
  }

  ny.N = "setInWindow";

  function oy(a, b, c) {
  }

  oy.M = "internal.setProductSettingsParameter";

  function py(a, b, c) {
  }

  py.M = "internal.setRemoteConfigParameter";
  var qy = function (a) {
    for (var b = [], c = 0, d = 0; d < a.length; d++) {
      var e = a.charCodeAt(d);
      128 > e ? b[c++] = e : (2048 > e ? b[c++] = e >> 6 | 192 : (55296 == (e & 64512) && d + 1 < a.length && 56320 == (a.charCodeAt(d + 1) & 64512) ? (e = 65536 + ((e & 1023) << 10) + (a.charCodeAt(++d) & 1023), b[c++] = e >> 18 | 240, b[c++] = e >> 12 & 63 | 128) : b[c++] = e >> 12 | 224, b[c++] = e >> 6 & 63 | 128), b[c++] = e & 63 | 128)
    }
    return b
  };

  function ry(a, b, c, d) {
    var e = this;
  }

  ry.N = "sha256";

  function sy(a, b, c) {
  }

  sy.M = "internal.sortRemoteConfigParameters";
  var ty = {}, uy = {};
  ty.N = "templateStorage";
  ty.getItem = function (a) {
    var b = null;
    return b
  };
  ty.setItem = function (a, b) {
  };
  ty.removeItem = function (a) {
  };
  ty.clear = function () {
  };
  var vy = function (a) {
    var b;
    return b
  };
  var wy = !1;
  wy = !0;

  function xy(a) {
    O(I(this), ["consentSettings:!DustMap"], arguments);
    var b = rc(a), c;
    for (c in b) b.hasOwnProperty(c) && P(this, "access_consent", c, "write");
    var d = this.g.g, e = d.eventId, f = Fx(d);
    wy ? Cr(tr("consent", "update", b), e, f) : Mg(b, {eventId: e})
  }

  xy.N = "updateConsentState";
  var yy = function () {
    var a = new Yf, b = function (d) {
      return $f(a, d.M, d)
    }, c = function (d) {
      return a.add(d.N, d)
    };
    c($u);
    c(fv);
    c(Sv);
    c(Vv);
    c(Wv);
    c($v);
    c(aw);
    c(cw);
    c(Qx());
    c(dw);
    c(tx);
    c(yx);
    c(zx);
    c(Ax);
    c(Dx);
    c(Ix);
    c(Lx);
    c(Px);
    c(Vx);
    c(Xx);
    c(Zx);
    c($x);
    c(ay);
    c(jy);
    c(ky);
    c(my);
    c(ny);
    c(ry);
    c(ty);
    c(xy);
    a.add("Math", Cf());
    a.add("Object", Wf);
    a.add("TestHelper", ag());
    a.add("assertApi", uf);
    a.add("assertThat", vf);
    a.add("decodeUri", Df);
    a.add("decodeUriComponent", Ef);
    a.add("encodeUri", Ff);
    a.add("encodeUriComponent", Gf);
    a.add("fail",
      Hf);
    a.add("generateRandom", If);
    a.add("getContainerVersion", Jf);
    a.add("getTimestamp", Mf);
    a.add("getTimestampMillis", Mf);
    a.add("getType", Nf);
    a.add("makeInteger", Pf);
    a.add("makeNumber", Qf);
    a.add("makeString", Rf);
    a.add("makeTableMap", Sf);
    a.add("mock", Vf);
    a.add("fromBase64", sx, !("atob" in z));
    a.add("localStorage", Sx, !Rx());
    a.add("toBase64", vy, !("btoa" in z));
    b(vv);
    b(Cv);
    b(Hv);
    b(Qv);
    b(Yv);
    b(jx);
    b(lx);
    b(vx);
    b(Ox);
    b(Ux);
    b(dy);
    b(iy);
    $f(a, "internal.getFlags", Lf);
    c(Hx);
    b(tw);
    b(ow);
    b(Hw);
    b(cv);
    b(ix);
    b(ey);
    b(yw);
    b(Lw);
    b(Ww);
    b(ux);
    b(Bx);
    return function (d) {
      var e;
      if (a.g.hasOwnProperty(d)) e = a.get(d, this); else {
        var f;
        if (f = a.o.hasOwnProperty(d)) {
          var g = !1, h = this.g.g;
          if (h) {
            var k = h.jd();
            if (k) {
              0 !== k.indexOf("__cvt_") && (g = !0);
            }
          }
          f = g
        }
        if (f) {
          var n = a.o.hasOwnProperty(d) ? a.o[d] : void 0;
          n = Zf(d, this) || n;
          e = n
        } else throw Error(d + " is not a valid API name.");
      }
      return e
    }
  };
  var zy = function () {
    var a = S.consumeTestResult;
    if (a && Da(a)) return !0;
    return !1
  }, Ay = function () {
    var a = {};
    return function (b, c, d) {
      if (!zy()) return;
      var e = a[b] || {testName: b, status: c, logMessages: [], elapsedTime: 0};
      a[b] = e;
      switch (c) {
        case 4:
          e.logMessages.push(d);
          break;
        case 3:
          d && (e.error = d);
          break;
        case 5:
          e.returnValue = d
      }
      if (2 === c || 3 === c) {
        e.status = c;
        var f = S.consumeTestResult;
        f && f(e)
      }
    }
  };
  var By;

  function Cy() {
    var a = By;
    return function (b, c, d) {
      var e = d && d.event;
      Dy(c);
      var f = new hb;
      La(c, function (q, r) {
        var u = qc(r);
        void 0 === u && void 0 !== r && lg(44);
        f.set(q, u)
      });
      a.g.g.I = Ae();
      var g = {
        fj: Ne(b),
        eventId: void 0 !== e ? e.id : void 0,
        priorityId: void 0 !== e ? e.priorityId : void 0,
        be: void 0 !== e ? function (q) {
          return e.ub.be(q)
        } : void 0,
        jd: function () {
          return b
        },
        log: function () {
        },
        vj: {index: d && d.index, type: d && d.type, name: d && d.name}
      };
      if (zy()) {
        var h = Ay(), k = void 0, n = void 0;
        g.Ra = {
          Yf: [], bd: {}, Va: function (q, r, u) {
            1 === r && (k = q);
            7 === r && (n = u);
            h(q, r, u)
          }, Mf: Tf()
        };
        g.log = function (q, r) {
          if (k) {
            var u = Array.prototype.slice.call(arguments, 1);
            h(k, 4, {level: q, source: n, message: u})
          }
        }
      }
      var p = Kd(a, g, [b, f]);
      a.g.g.I = void 0;
      p instanceof oa && "return" === p.g && (p = p.o);
      return rc(p)
    }
  }

  function Dy(a) {
    var b = a.gtmOnSuccess, c = a.gtmOnFailure;
    Da(b) && (a.gtmOnSuccess = function () {
      K(b)
    });
    Da(c) && (a.gtmOnFailure = function () {
      K(c)
    })
  }

  function Ey() {
    By.g.g.R = function (a, b, c) {
      S.SANDBOXED_JS_SEMAPHORE = S.SANDBOXED_JS_SEMAPHORE || 0;
      S.SANDBOXED_JS_SEMAPHORE++;
      try {
        return a.apply(b, c)
      } finally {
        S.SANDBOXED_JS_SEMAPHORE--
      }
    }
  }

  function Fy(a) {
    void 0 !== a && La(a, function (b, c) {
      for (var d = 0; d < c.length; d++) {
        var e = c[d].replace(/^_*/, "");
        Jh[e] = Jh[e] || [];
        Jh[e].push(b)
      }
    })
  };var Gy = encodeURI, X = encodeURIComponent, Hy = Pb;
  var Iy = function (a, b) {
    if (!a) return !1;
    var c = mi(oi(a), "host");
    if (!c) return !1;
    for (var d = 0; b && d < b.length; d++) {
      var e = b[d] && b[d].toLowerCase();
      if (e) {
        var f = c.length - e.length;
        0 < f && "." != e.charAt(0) && (f--, e = "." + e);
        if (0 <= f && c.indexOf(e, f) == f) return !0
      }
    }
    return !1
  }, Jy = function (a, b, c) {
    for (var d = {}, e = !1, f = 0; a && f < a.length; f++) a[f] && a[f].hasOwnProperty(b) && a[f].hasOwnProperty(c) && (d[a[f][b]] = a[f][c], e = !0);
    return e ? d : null
  };

  function jA() {
    return z.gaGlobal = z.gaGlobal || {}
  }

  var kA = function () {
    var a = jA();
    a.hid = a.hid || Ha();
    return a.hid
  }, lA = function (a, b) {
    var c = jA();
    if (void 0 == c.vid || b && !c.from_cookie) c.vid = a, c.from_cookie = b
  };
  var SA = function () {
    if (Da(z.__uspapi)) {
      var a = "";
      try {
        z.__uspapi("getUSPData", 1, function (b, c) {
          if (c && b) {
            var d = b.uspString;
            d && RegExp("^[\\da-zA-Z-]{1,20}$").test(d) && (a = d)
          }
        })
      } catch (b) {
      }
      return a
    }
  };
  var zB = window, AB = document, BB = function (a) {
    var b = zB._gaUserPrefs;
    if (b && b.ioo && b.ioo() || a && !0 === zB["ga-disable-" + a]) return !0;
    try {
      var c = zB.external;
      if (c && c._gaUserPrefs && "oo" == c._gaUserPrefs) return !0
    } catch (f) {
    }
    for (var d = Mi("AMP_TOKEN", String(AB.cookie), !0), e = 0; e < d.length; e++) if ("$OPT_OUT" == d[e]) return !0;
    return AB.getElementById("__gaOptOutExtension") ? !0 : !1
  };
  var CB = {};

  function KB(a) {
    delete a.eventModel[Q.Gb];
    RB(a.eventModel)
  }

  var RB = function (a) {
    La(a, function (c) {
      "_" === c.charAt(0) && delete a[c]
    });
    var b = a[Q.Oa] || {};
    La(b, function (c) {
      "_" === c.charAt(0) && delete b[c]
    })
  };
  var bC = function (a, b, c) {
    fr(b, c, a)
  }, cC = function (a, b, c) {
    fr(b, c, a, !0)
  }, eC = function (a, b) {
  };

  function dC(a, b) {
  }

  var Y = {h: {}};

  Y.h.ctv = ["google"], function () {
    (function (a) {
      Y.__ctv = a;
      Y.__ctv.m = "ctv";
      Y.__ctv.isVendorTemplate = !0;
      Y.__ctv.priorityOverride = 0
    })(function () {
      return "439"
    })
  }();
  Y.h.send_pixel = ["google"], function () {
    function a(b, c) {
      return {url: c}
    }

    (function (b) {
      Y.__send_pixel = b;
      Y.__send_pixel.m = "send_pixel";
      Y.__send_pixel.isVendorTemplate = !0;
      Y.__send_pixel.priorityOverride = 0
    })(function (b) {
      var c = b.vtp_allowedUrls || "specific", d = b.vtp_urls || [], e = b.vtp_createPermissionError;
      return {
        assert: function (f, g) {
          if (!m(g)) throw e(f, {}, "URL must be a string.");
          try {
            if ("any" === c && mf(oi(g)) || "specific" === c && nf(oi(g), d)) return
          } catch (h) {
            throw e(f, {}, "Invalid URL filter.");
          }
          throw e(f, {}, "Prohibited URL: " +
            g + ".");
        }, X: a
      }
    })
  }();


  Y.h.jsm = ["customScripts"], function () {
    (function (a) {
      Y.__jsm = a;
      Y.__jsm.m = "jsm";
      Y.__jsm.isVendorTemplate = !0;
      Y.__jsm.priorityOverride = 0
    })(function (a) {
      if (void 0 !== a.vtp_javascript) {
        var b = a.vtp_javascript;
        try {
          var c = W("google_tag_manager");
          var d = c && c.e && c.e(b);
          vu(d, "jsm", a.vtp_gtmEventId);
          return d
        } catch (e) {
        }
      }
    })
  }();

  Y.h.flc = [], function () {
    (function (a) {
      Y.__flc = a;
      Y.__flc.m = "flc";
      Y.__flc.isVendorTemplate = !0;
      Y.__flc.priorityOverride = 0
    })(function (a) {
      var b = !a.hasOwnProperty("vtp_enableConversionLinker") || !!a.vtp_enableConversionLinker,
        c = Jy(a.vtp_customVariable || [], "key", "value") || {}, d = {},
        e = (d[Q.ka] = nu(Q.ka), d[Q.Ie] = !0 === a.vtp_useImageTag ? !1 : !0, d[Q.Ta] = a.vtp_conversionCookiePrefix || void 0, d[Q.Da] = b, d[Q.Fb] = a.vtp_sessionId, d.oref = a.vtp_useImageTag ? void 0 : a.vtp_url, d.tran = a.vtp_transactionVariable, d.u = a.vtp_userVariable,
          d[Q.Ga] = a.vtp_userDataVariable, d);
      for (var f in c) c.hasOwnProperty(f) && (e[f] = c[f]);
      var g = "DC-" + a.vtp_advertiserId + "/" + a.vtp_groupTag + "/" + (a.vtp_activityTag + "+" + ({
        UNIQUE: "unique",
        SESSION: "per_session"
      }[a.vtp_ordinalType] || "standard")), h = Ln(In(Cn(e), a.vtp_gtmOnSuccess), a.vtp_gtmOnFailure);
      h.isGtmEvent = !0;
      Mp(g, "", Date.now(), h)
    })
  }();
  Y.h.c = ["google"], function () {
    (function (a) {
      Y.__c = a;
      Y.__c.m = "c";
      Y.__c.isVendorTemplate = !0;
      Y.__c.priorityOverride = 0
    })(function (a) {
      vu(a.vtp_value, "c", a.vtp_gtmEventId);
      return a.vtp_value
    })
  }();
  Y.h.d = ["google"], function () {
    (function (a) {
      Y.__d = a;
      Y.__d.m = "d";
      Y.__d.isVendorTemplate = !0;
      Y.__d.priorityOverride = 0
    })(function (a) {
      var b = null, c = null, d = a.vtp_attributeName;
      if ("CSS" == a.vtp_selectorType) try {
        var e = Tg(a.vtp_elementSelector);
        e && 0 < e.length && (b = e[0])
      } catch (f) {
        b = null
      } else b = J.getElementById(a.vtp_elementId);
      b && (d ? c = function () {
        if (b instanceof HTMLInputElement) {
          var f = b;
          if ("value" === d) return f.value;
          if ("checked" === d && ("radio" === f.type || "checkbox" === f.type)) return f.checked
        }
        return Sb(b, d)
      }() : c = Tb(b));
      return Qa(String(b && c))
    })
  }();
  Y.h.e = ["google"], function () {
    (function (a) {
      Y.__e = a;
      Y.__e.m = "e";
      Y.__e.isVendorTemplate = !0;
      Y.__e.priorityOverride = 0
    })(function (a) {
      return String(a.vtp_gtmCachedValues.event)
    })
  }();
  Y.h.f = ["google"], function () {
    (function (a) {
      Y.__f = a;
      Y.__f.m = "f";
      Y.__f.isVendorTemplate = !0;
      Y.__f.priorityOverride = 0
    })(function (a) {
      var b = nu("gtm.referrer", 1) || J.referrer;
      return b ? a.vtp_component && "URL" != a.vtp_component ? mi(oi(String(b)), a.vtp_component, a.vtp_stripWww, a.vtp_defaultPages, a.vtp_queryKey) : mu(String(b)) : String(b)
    })
  }();

  Y.h.j = ["google"], function () {
    (function (a) {
      Y.__j = a;
      Y.__j.m = "j";
      Y.__j.isVendorTemplate = !0;
      Y.__j.priorityOverride = 0
    })(function (a) {
      for (var b = String(a.vtp_name).split("."), c = W(b.shift()), d = 0; d < b.length; d++) c = c && c[b[d]];
      vu(c, "j", a.vtp_gtmEventId);
      return c
    })
  }();
  Y.h.k = ["google"], function () {
    (function (a) {
      Y.__k = a;
      Y.__k.m = "k";
      Y.__k.isVendorTemplate = !0;
      Y.__k.priorityOverride = 0
    })(function (a) {
      return qu(a.vtp_name, nu("gtm.cookie", 1), !!a.vtp_decodeCookie)[0]
    })
  }();

  Y.h.access_globals = ["google"], function () {
    function a(b, c, d) {
      var e = {key: d, read: !1, write: !1, execute: !1};
      switch (c) {
        case "read":
          e.read = !0;
          break;
        case "write":
          e.write = !0;
          break;
        case "readwrite":
          e.read = e.write = !0;
          break;
        case "execute":
          e.execute = !0;
          break;
        default:
          throw Error("Invalid " + b + " request " + c);
      }
      return e
    }

    (function (b) {
      Y.__access_globals = b;
      Y.__access_globals.m = "access_globals";
      Y.__access_globals.isVendorTemplate = !0;
      Y.__access_globals.priorityOverride = 0
    })(function (b) {
      for (var c = b.vtp_keys || [], d = b.vtp_createPermissionError,
             e = [], f = [], g = [], h = 0; h < c.length; h++) {
        var k = c[h], n = k.key;
        k.read && e.push(n);
        k.write && f.push(n);
        k.execute && g.push(n)
      }
      return {
        assert: function (p, q, r) {
          if (!m(r)) throw d(p, {}, "Key must be a string.");
          if ("read" === q) {
            if (-1 < e.indexOf(r)) return
          } else if ("write" === q) {
            if (-1 < f.indexOf(r)) return
          } else if ("readwrite" === q) {
            if (-1 < f.indexOf(r) && -1 < e.indexOf(r)) return
          } else if ("execute" === q) {
            if (-1 < g.indexOf(r)) return
          } else throw d(p, {}, "Operation must be either 'read', 'write', or 'execute', was " + q);
          throw d(p, {}, "Prohibited " +
            q + " on global variable: " + r + ".");
        }, X: a
      }
    })
  }();
  Y.h.r = ["google"], function () {
    (function (a) {
      Y.__r = a;
      Y.__r.m = "r";
      Y.__r.isVendorTemplate = !0;
      Y.__r.priorityOverride = 0
    })(function (a) {
      return Ha(a.vtp_min, a.vtp_max)
    })
  }();
  Y.h.t = ["google"], function () {
    (function (a) {
      Y.__t = a;
      Y.__t.m = "t";
      Y.__t.isVendorTemplate = !0;
      Y.__t.priorityOverride = 0
    })(function () {
      return ju().getTime()
    })
  }();
  Y.h.u = ["google"], function () {
    var a = function (b) {
      return {
        toString: function () {
          return b
        }
      }
    };
    (function (b) {
      Y.__u = b;
      Y.__u.m = "u";
      Y.__u.isVendorTemplate = !0;
      Y.__u.priorityOverride = 0
    })(function (b) {
      var c;
      c = (c = b.vtp_customUrlSource ? b.vtp_customUrlSource : nu("gtm.url", 1)) || ku();
      var d = b[a("vtp_component")];
      if (!d || "URL" == d) return mu(String(c));
      var e = oi(String(c)), f;
      if ("QUERY" === d) a:{
        var g = b[a("vtp_multiQueryKeys").toString()], h = b[a("vtp_queryKey").toString()] || "",
          k = b[a("vtp_ignoreEmptyQueryParam").toString()], n;
        g ? Fa(h) ?
          n = h : n = String(h).replace(/\s+/g, "").split(",") : n = [String(h)];
        for (var p = 0; p < n.length; p++) {
          var q = mi(e, "QUERY", void 0, void 0, n[p]);
          if (void 0 != q && (!k || "" !== q)) {
            f = q;
            break a
          }
        }
        f = void 0
      } else f = mi(e, d, "HOST" == d ? b[a("vtp_stripWww")] : void 0, "PATH" == d ? b[a("vtp_defaultPages")] : void 0);
      return f
    })
  }();
  Y.h.v = ["google"], function () {
    (function (a) {
      Y.__v = a;
      Y.__v.m = "v";
      Y.__v.isVendorTemplate = !0;
      Y.__v.priorityOverride = 0
    })(function (a) {
      var b = a.vtp_name;
      if (!b || !b.replace) return !1;
      var c = nu(b.replace(/\\\./g, "."), a.vtp_dataLayerVersion || 1), d = void 0 !== c ? c : a.vtp_defaultValue;
      vu(d, "v", a.vtp_gtmEventId);
      return d
    })
  }();
  Y.h.ua = ["google"], function () {
    function a(k, n) {
      for (var p in k) if (!h[p] && k.hasOwnProperty(p)) {
        var q = g[p] ? Oa(k[p]) : k[p];
        "anonymizeIp" != p || q || (q = void 0);
        n[p] = q
      }
    }

    function b(k) {
      var n = {};
      k.vtp_gaSettings && pc(Jy(k.vtp_gaSettings.vtp_fieldsToSet, "fieldName", "value"), n);
      pc(Jy(k.vtp_fieldsToSet, "fieldName", "value"), n);
      Oa(n.urlPassthrough) && (n._useUp = !0);
      k.vtp_transportUrl && (n._x_19 = k.vtp_transportUrl);
      return n
    }

    function c(k, n) {
      return void 0 === n ? n : k(n)
    }

    function d(k, n, p) {
    }

    function e(k, n) {
      if (!f) {
        var p = k.vtp_useDebugVersion ? "u/analytics_debug.js" : "analytics.js";
        k.vtp_useInternalVersion && !k.vtp_useDebugVersion && (p = "internal/" + p);
        f = !0;
        var q = k.vtp_gtmOnFailure, r = qn(n._x_19, "/analytics.js"),
          u = vn("https:", "http:", "//www.google-analytics.com/" + p, n && !!n.forceSSL);
        T("analytics.js" === p && r ? r :
          u, function () {
          var t = Ym();
          t && t.loaded || q();
        }, q)
      }
    }

    var f, g = {
      allowAnchor: !0,
      allowLinker: !0,
      alwaysSendReferrer: !0,
      anonymizeIp: !0,
      cookieUpdate: !0,
      exFatal: !0,
      forceSSL: !0,
      javaEnabled: !0,
      legacyHistoryImport: !0,
      nonInteraction: !0,
      useAmpClientId: !0,
      useBeacon: !0,
      storeGac: !0,
      allowAdFeatures: !0,
      allowAdPersonalizationSignals: !0,
      _cd2l: !0
    }, h = {urlPassthrough: !0};
    (function (k) {
      Y.__ua =
        k;
      Y.__ua.m = "ua";
      Y.__ua.isVendorTemplate = !0;
      Y.__ua.priorityOverride = 0
    })(function (k) {
      function n() {
        if (k.vtp_doubleClick || "DISPLAY_FEATURES" == k.vtp_advertisingFeaturesType) v.displayfeatures = !0
      }

      var p = {}, q = {}, r = {};
      if (k.vtp_gaSettings) {
        var u = k.vtp_gaSettings;
        pc(Jy(u.vtp_contentGroup, "index", "group"), p);
        pc(Jy(u.vtp_dimension, "index", "dimension"), q);
        pc(Jy(u.vtp_metric, "index", "metric"), r);
        var t = pc(u);
        t.vtp_fieldsToSet = void 0;
        t.vtp_contentGroup = void 0;
        t.vtp_dimension = void 0;
        t.vtp_metric = void 0;
        k = pc(k, t)
      }
      pc(Jy(k.vtp_contentGroup,
        "index", "group"), p);
      pc(Jy(k.vtp_dimension, "index", "dimension"), q);
      pc(Jy(k.vtp_metric, "index", "metric"), r);
      var v = b(k), x = String(k.vtp_trackingId || ""), y = "", w = "", A = "";
      k.vtp_setTrackerName && "string" == typeof k.vtp_trackerName ? "" !== k.vtp_trackerName && (A = k.vtp_trackerName, w = A + ".") : (A = "gtm" + Kh(), w = A + ".");
      var B = function (ba, V) {
        for (var xa in V) V.hasOwnProperty(xa) && (v[ba + xa] = V[xa])
      };
      B("contentGroup", p);
      B("dimension", q);
      B("metric", r);
      k.vtp_enableEcommerce && (y = k.vtp_gtmCachedValues.event, v.gtmEcommerceData = d(k,
        v, y));
      if ("TRACK_EVENT" === k.vtp_trackType) y = "track_event", n(), v.eventCategory = String(k.vtp_eventCategory), v.eventAction = String(k.vtp_eventAction), v.eventLabel = c(String, k.vtp_eventLabel), v.value = c(Na, k.vtp_eventValue); else if ("TRACK_PAGEVIEW" == k.vtp_trackType) {
        if (y = Q.Ic, n(), "DISPLAY_FEATURES_WITH_REMARKETING_LISTS" == k.vtp_advertisingFeaturesType && (v.remarketingLists = !0), k.vtp_autoLinkDomains) {
          var D = {};
          D[Q.U] = k.vtp_autoLinkDomains;
          D.use_anchor = k.vtp_useHashAutoLink;
          D[Q.hc] = k.vtp_decorateFormsAutoLink;
          v[Q.va] = D
        }
      } else "TRACK_SOCIAL" === k.vtp_trackType ? (y = "track_social", v.socialNetwork = String(k.vtp_socialNetwork), v.socialAction = String(k.vtp_socialAction), v.socialTarget = String(k.vtp_socialActionTarget)) : "TRACK_TIMING" == k.vtp_trackType && (y = "timing_complete", v.eventCategory = String(k.vtp_timingCategory), v.timingVar = String(k.vtp_timingVar), v.value = Na(k.vtp_timingValue), v.eventLabel = c(String, k.vtp_timingLabel));
      k.vtp_enableRecaptcha && (v.enableRecaptcha = !0);
      k.vtp_enableLinkId && (v.enableLinkId = !0);
      var C = {};
      a(v, C);
      v.name || (C.gtmTrackerName = A);
      C.gaFunctionName = k.vtp_functionName;
      void 0 !== k.vtp_nonInteraction && (C.nonInteraction = k.vtp_nonInteraction);
      var E = Ln(In(Cn(C), k.vtp_gtmOnSuccess), k.vtp_gtmOnFailure);
      E.isGtmEvent = !0;
      Bq(x, y, Date.now(), E);
      var F = $m(k.vtp_functionName);
      if (Da(F)) {
        var M = function (ba) {
          var V = [].slice.call(arguments, 0);
          V[0] = w + V[0];
          F.apply(window, V)
        };
        if ("TRACK_TRANSACTION" == k.vtp_trackType) {
        } else if ("DECORATE_LINK" == k.vtp_trackType) {
        } else if ("DECORATE_FORM" == k.vtp_trackType) {
        } else if ("TRACK_DATA" == k.vtp_trackType) {
        }
        e(k, v)
      } else K(k.vtp_gtmOnFailure)
    })
  }();
  Y.h.get_url = ["google"], function () {
    function a(b, c, d) {
      return {component: c, queryKey: d}
    }

    (function (b) {
      Y.__get_url = b;
      Y.__get_url.m = "get_url";
      Y.__get_url.isVendorTemplate = !0;
      Y.__get_url.priorityOverride = 0
    })(function (b) {
      var c = "any" === b.vtp_urlParts ? null : [];
      c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"), b.vtp_fragment && c.push("fragment"));
      var d = c && "any" !== b.vtp_queriesAllowed ?
        b.vtp_queryKeys || [] : null, e = b.vtp_createPermissionError;
      return {
        assert: function (f, g, h) {
          if (g) {
            if (!m(g)) throw e(f, {}, "URL component must be a string.");
            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
            if ("query" === g && d) {
              if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
              if (!m(h)) throw e(f, {}, "Query key must be a string.");
              if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
            }
          } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
        }, X: a
      }
    })
  }();
  Y.h.get_referrer = ["google"], function () {
    function a(b, c, d) {
      return {component: c, queryKey: d}
    }

    (function (b) {
      Y.__get_referrer = b;
      Y.__get_referrer.m = "get_referrer";
      Y.__get_referrer.isVendorTemplate = !0;
      Y.__get_referrer.priorityOverride = 0
    })(function (b) {
      var c = "any" === b.vtp_urlParts ? null : [];
      c && (b.vtp_protocol && c.push("protocol"), b.vtp_host && c.push("host"), b.vtp_port && c.push("port"), b.vtp_path && c.push("path"), b.vtp_extension && c.push("extension"), b.vtp_query && c.push("query"));
      var d = c && "any" !== b.vtp_queriesAllowed ?
        b.vtp_queryKeys || [] : null, e = b.vtp_createPermissionError;
      return {
        assert: function (f, g, h) {
          if (g) {
            if (!m(g)) throw e(f, {}, "URL component must be a string.");
            if (c && 0 > c.indexOf(g)) throw e(f, {}, "Prohibited URL component: " + g);
            if ("query" === g && d) {
              if (!h) throw e(f, {}, "Prohibited from getting entire URL query when query keys are specified.");
              if (!m(h)) throw e(f, {}, "Query key must be a string.");
              if (0 > d.indexOf(h)) throw e(f, {}, "Prohibited query key: " + h);
            }
          } else if (c) throw e(f, {}, "Prohibited from getting entire URL when components are specified.");
        }, X: a
      }
    })
  }();
  Y.h.inject_script = ["google"], function () {
    function a(b, c) {
      return {url: c}
    }

    (function (b) {
      Y.__inject_script = b;
      Y.__inject_script.m = "inject_script";
      Y.__inject_script.isVendorTemplate = !0;
      Y.__inject_script.priorityOverride = 0
    })(function (b) {
      var c = b.vtp_urls || [], d = b.vtp_createPermissionError;
      return {
        assert: function (e, f) {
          if (!m(f)) throw d(e, {}, "Script URL must be a string.");
          try {
            if (nf(oi(f), c)) return
          } catch (g) {
            throw d(e, {}, "Invalid script URL filter.");
          }
          throw d(e, {}, "Prohibited script URL: " + f);
        }, X: a
      }
    })
  }();

  Y.h.cid = ["google"], function () {
    (function (a) {
      Y.__cid = a;
      Y.__cid.m = "cid";
      Y.__cid.isVendorTemplate = !0;
      Y.__cid.priorityOverride = 0
    })(function () {
      return Ie.J
    })
  }();

  Y.h.gclidw = ["google"], function () {
    var a = ["aw", "dc", "gf", "ha", "gb"];
    (function (b) {
      Y.__gclidw = b;
      Y.__gclidw.m = "gclidw";
      Y.__gclidw.isVendorTemplate = !0;
      Y.__gclidw.priorityOverride = 100
    })(function (b) {
      K(b.vtp_gtmOnSuccess);
      var c, d, e, f;
      b.vtp_enableCookieOverrides && (e = b.vtp_cookiePrefix, c = b.vtp_path, d = b.vtp_domain, b.vtp_enableCookieFlagsFeature && (f = b.vtp_cookieFlags));
      var g = {prefix: e, path: c, domain: d, flags: f};
      b.vtp_enableCrossDomainFeature && (b.vtp_enableCrossDomain && !1 === b.vtp_acceptIncoming || (b.vtp_enableCrossDomain ||
        Yj()) && sk(a, g));
      pk(g);
      vk(["aw", "dc"], g);
      Kk(g);
      var h = e;
      if (b.vtp_enableCrossDomainFeature && b.vtp_enableCrossDomain && b.vtp_linkerDomains) {
        var k = b.vtp_linkerDomains.toString().replace(/\s+/g, "").split(",");
        uk(a, k, b.vtp_urlPosition, !!b.vtp_formDecoration, h)
      }
      var n = nu(Q.ka);
      wo({
        eventId: b.vtp_gtmEventId,
        priorityId: b.vtp_gtmPriorityId,
        vf: !1,
        fb: void 0 != n && !1 !== n,
        Lb: g,
        qe: !0
      });
      b.vtp_enableUrlPassthrough && xk(["aw", "dc", "gb"])
    })
  }();
  Y.h.read_title = ["google"], function () {
    (function (a) {
      Y.__read_title = a;
      Y.__read_title.m = "read_title";
      Y.__read_title.isVendorTemplate = !0;
      Y.__read_title.priorityOverride = 0
    })(function () {
      return {
        assert: function () {
        }, X: function () {
          return {}
        }
      }
    })
  }();
  Y.h.process_dom_events = ["google"], function () {
    function a(b, c, d) {
      return {targetType: c, eventName: d}
    }

    (function (b) {
      Y.__process_dom_events = b;
      Y.__process_dom_events.m = "process_dom_events";
      Y.__process_dom_events.isVendorTemplate = !0;
      Y.__process_dom_events.priorityOverride = 0
    })(function (b) {
      for (var c = b.vtp_targets || [], d = b.vtp_createPermissionError, e = {}, f = 0; f < c.length; f++) {
        var g = c[f];
        e[g.targetType] = e[g.targetType] || [];
        e[g.targetType].push(g.eventName)
      }
      return {
        assert: function (h, k, n) {
          if (!e[k]) throw d(h, {}, "Prohibited event target " +
            k + ".");
          if (-1 === e[k].indexOf(n)) throw d(h, {}, "Prohibited listener registration for DOM event " + n + ".");
        }, X: a
      }
    })
  }();

  Y.h.aev = ["google"], function () {
    function a(r, u, t, v, x) {
      x || (x = "element");
      var y = u + "." + t, w;
      if (n.hasOwnProperty(y)) w = n[y]; else {
        var A = r[x];
        if (A && (w = v(A), n[y] = w, p.push(y), 35 < p.length)) {
          var B = p.shift();
          delete n[B]
        }
      }
      return w
    }

    function b(r, u, t) {
      var v = r[q[u]];
      return void 0 !== v ? v : t
    }

    function c(r, u) {
      if (!r) return !1;
      var t = d(ku());
      Fa(u) || (u = String(u || "").replace(/\s+/g, "").split(","));
      for (var v = [t], x = 0; x < u.length; x++) {
        var y = u[x];
        if (y.hasOwnProperty("is_regex")) if (y.is_regex) try {
          y = new RegExp(y.domain)
        } catch (B) {
          continue
        } else y =
          y.domain;
        var w = d(r);
        if (y instanceof RegExp) {
          if (y.test(w)) return !1
        } else {
          var A = y;
          if (0 != A.length) {
            if (0 <= w.indexOf(A)) return !1;
            v.push(d(A))
          }
        }
      }
      return !Iy(r, v)
    }

    function d(r) {
      k.test(r) || (r = "http://" + r);
      return mi(oi(r), "HOST", !0)
    }

    function e(r, u, t, v) {
      switch (r) {
        case "SUBMIT_TEXT":
          return a(u, t, "FORM." + r, f, "formSubmitElement") || v;
        case "LENGTH":
          var x = a(u, t, "FORM." + r, g);
          return void 0 === x ? v : x;
        case "INTERACTED_FIELD_ID":
          return h(u, "id", v);
        case "INTERACTED_FIELD_NAME":
          return h(u, "name", v);
        case "INTERACTED_FIELD_TYPE":
          return h(u,
            "type", v);
        case "INTERACTED_FIELD_POSITION":
          var y = u.interactedFormFieldPosition;
          return void 0 === y ? v : y;
        case "INTERACT_SEQUENCE_NUMBER":
          var w = u.interactSequenceNumber;
          return void 0 === w ? v : w;
        default:
          return v
      }
    }

    function f(r) {
      switch (r.tagName.toLowerCase()) {
        case "input":
          return Sb(r, "value");
        case "button":
          return Tb(r);
        default:
          return null
      }
    }

    function g(r) {
      if ("form" === r.tagName.toLowerCase() && r.elements) {
        for (var u = 0, t = 0; t < r.elements.length; t++) Rt(r.elements[t]) && u++;
        return u
      }
    }

    function h(r, u, t) {
      var v = r.interactedFormField;
      return v && Sb(v, u) || t
    }

    var k = /^https?:\/\//i, n = {}, p = [], q = {
      ATTRIBUTE: "elementAttribute",
      CLASSES: "elementClasses",
      ELEMENT: "element",
      ID: "elementId",
      HISTORY_CHANGE_SOURCE: "historyChangeSource",
      HISTORY_NEW_STATE: "newHistoryState",
      HISTORY_NEW_URL_FRAGMENT: "newUrlFragment",
      HISTORY_OLD_STATE: "oldHistoryState",
      HISTORY_OLD_URL_FRAGMENT: "oldUrlFragment",
      TARGET: "elementTarget"
    };
    (function (r) {
      Y.__aev = r;
      Y.__aev.m = "aev";
      Y.__aev.isVendorTemplate = !0;
      Y.__aev.priorityOverride = 0
    })(function (r) {
      var u = r.vtp_gtmEventId, t = r.vtp_defaultValue,
        v = r.vtp_varType, x = r.vtp_gtmCachedValues.gtm;
      switch (v) {
        case "TAG_NAME":
          var y = x.element;
          return y && y.tagName || t;
        case "TEXT":
          return a(x, u, v, Tb) || t;
        case "URL":
          var w;
          a:{
            var A = String(x.elementUrl || t || ""), B = oi(A), D = String(r.vtp_component || "URL");
            switch (D) {
              case "URL":
                w = A;
                break a;
              case "IS_OUTBOUND":
                w = c(A, r.vtp_affiliatedDomains);
                break a;
              default:
                w = mi(B, D, r.vtp_stripWww, r.vtp_defaultPages, r.vtp_queryKey)
            }
          }
          return w;
        case "ATTRIBUTE":
          var C;
          if (void 0 === r.vtp_attribute) C = b(x, v, t); else {
            var E = x.element;
            C = E && Sb(E, r.vtp_attribute) ||
              t || ""
          }
          return C;
        case "MD":
          var F = r.vtp_mdValue, M = a(x, u, "MD", cu);
          return F && M ? fu(M, F) || t : M || t;
        case "FORM":
          return e(String(r.vtp_component || "SUBMIT_TEXT"), x, u, t);
        default:
          var G = b(x, v, t);
          vu(G, "aev", r.vtp_gtmEventId);
          return G
      }
    })
  }();
  Y.h.gas = ["google"], function () {
    (function (a) {
      Y.__gas = a;
      Y.__gas.m = "gas";
      Y.__gas.isVendorTemplate = !0;
      Y.__gas.priorityOverride = 0
    })(function (a) {
      var b = pc(a), c = b;
      c[Ld.Hb] = null;
      c[Ld.hf] = null;
      var d = b = c;
      d.vtp_fieldsToSet = d.vtp_fieldsToSet || [];
      var e = d.vtp_cookieDomain;
      void 0 !== e && (d.vtp_fieldsToSet.push({fieldName: "cookieDomain", value: e}), delete d.vtp_cookieDomain);
      return b
    })
  }();

  Y.h.hl = ["google"], function () {
    function a(f) {
      return f.target && f.target.location && f.target.location.href ? f.target.location.href : ku()
    }

    function b(f, g) {
      Qb(f, "hashchange", function (h) {
        var k = a(h);
        g({source: "hashchange", state: null, url: mu(k), O: lu(k)})
      })
    }

    function c(f, g) {
      Qb(f, "popstate", function (h) {
        var k = a(h);
        g({source: "popstate", state: h.state, url: mu(k), O: lu(k)})
      })
    }

    function d(f, g, h) {
      var k = g.history, n = k[f];
      if (Da(n)) try {
        k[f] = function (p, q, r) {
          n.apply(k, [].slice.call(arguments, 0));
          h({
            source: f, state: p, url: mu(ku()),
            O: lu(ku())
          })
        }
      } catch (p) {
      }
    }

    function e() {
      var f = {source: null, state: W("history").state || null, url: mu(ku()), O: lu(ku())};
      return function (g) {
        var h = f, k = {};
        k[h.source] = !0;
        k[g.source] = !0;
        if (!k.popstate || !k.hashchange || h.O != g.O) {
          var n = {
            event: "gtm.historyChange",
            "gtm.historyChangeSource": g.source,
            "gtm.oldUrlFragment": f.O,
            "gtm.newUrlFragment": g.O,
            "gtm.oldHistoryState": f.state,
            "gtm.newHistoryState": g.state,
            "gtm.oldUrl": f.url,
            "gtm.newUrl": g.url
          };
          f = g;
          ou(n)
        }
      }
    }

    (function (f) {
      Y.__hl = f;
      Y.__hl.m = "hl";
      Y.__hl.isVendorTemplate =
        !0;
      Y.__hl.priorityOverride = 0
    })(function (f) {
      var g = W("self");
      if (!tu("hl")) {
        var h = e();
        b(g, h);
        c(g, h);
        d("pushState", g, h);
        d("replaceState", g, h);
        uu("hl")
      }
      K(f.vtp_gtmOnSuccess)
    })
  }();
  Y.h.awct = ["google"], function () {
    function a(b, c, d) {
      return function (e, f, g) {
        c[e] = "DATA_LAYER" === d ? nu(g) : b[f]
      }
    }

    (function (b) {
      Y.__awct = b;
      Y.__awct.m = "awct";
      Y.__awct.isVendorTemplate = !0;
      Y.__awct.priorityOverride = 0
    })(function (b) {
      var c = !b.hasOwnProperty("vtp_enableConversionLinker") || !!b.vtp_enableConversionLinker,
        d = !!b.vtp_enableEnhancedConversions || !!b.vtp_enableEnhancedConversion,
        e = Jy(b.vtp_customVariables, "varName", "value") || {}, f = {},
        g = (f[Q.oa] = b.vtp_conversionValue || 0, f[Q.ma] = b.vtp_currencyCode, f[Q.rb] =
          b.vtp_orderId, f[Q.Ta] = b.vtp_conversionCookiePrefix, f[Q.Da] = c, f[Q.Fd] = d, f[Q.ka] = nu(Q.ka), f);
      b.vtp_rdp && (g[Q.Wc] = !0);
      if (b.vtp_enableCustomParams) for (var h in e) Q.$f.hasOwnProperty(h) || (g[h] = e[h]);
      if (b.vtp_enableProductReporting) {
        var k = a(b, g, b.vtp_productReportingDataSource);
        k(Q.Ne, "vtp_awMerchantId", "aw_merchant_id");
        k(Q.Le, "vtp_awFeedCountry", "aw_feed_country");
        k(Q.Me, "vtp_awFeedLanguage", "aw_feed_language");
        k(Q.Ke, "vtp_discount", "discount");
        k(Q.fa, "vtp_items", "items")
      }
      g[Q.aa] = nu("developer_id");
      b.vtp_enableShippingData && (g[Q.Qd] = b.vtp_deliveryPostalCode, g[Q.Te] = b.vtp_estimatedDeliveryDate, g[Q.Gd] = b.vtp_deliveryCountry, g[Q.Re] = b.vtp_shippingFee);
      b.vtp_transportUrl && (g[Q.ba] = b.vtp_transportUrl);
      if (b.vtp_enableNewCustomerReporting) {
        var n = a(b, g, b.vtp_newCustomerReportingDataSource);
        n(Q.Xe, "vtp_awNewCustomer", "new_customer");
        n(Q.Oe, "vtp_awCustomerLTV", "customer_lifetime_value")
      }
      var p;
      a:{
        if (b.vtp_enableEnhancedConversion) {
          var q = b.vtp_cssProvidedEnhancedConversionValue || b.vtp_enhancedConversionObject;
          if (q) {
            p = {enhanced_conversions_mode: "manual", enhanced_conversions_manual_var: q};
            break a
          }
        }
        p = void 0
      }
      var r = p;
      if (r) {
        var u = {};
        g[Q.Se] = (u[b.vtp_conversionLabel] = r, u)
      }
      var t = Ln(In(Cn(g), b.vtp_gtmOnSuccess), b.vtp_gtmOnFailure);
      t.isGtmEvent = !0;
      Ap("AW-" + b.vtp_conversionId + "/" + b.vtp_conversionLabel,
        Q.Aa, Date.now(), t)
    })
  }();
  Y.h.remm = ["google"], function () {
    (function (a) {
      Y.__remm = a;
      Y.__remm.m = "remm";
      Y.__remm.isVendorTemplate = !0;
      Y.__remm.priorityOverride = 0
    })(function (a) {
      for (var b = a.vtp_input, c = a.vtp_map || [], d = a.vtp_fullMatch, e = a.vtp_ignoreCase ? "gi" : "g", f = a.vtp_defaultValue, g = 0; g < c.length; g++) {
        var h = c[g].key || "";
        d && (h = "^" + h + "$");
        var k = new RegExp(h, e);
        if (k.test(b)) {
          var n = c[g].value;
          a.vtp_replaceAfterMatch && (n = String(b).replace(k, n));
          f = n;
          break
        }
      }
      vu(f, "remm", a.vtp_gtmEventId);
      return f
    })
  }();


  Y.h.smm = ["google"], function () {
    (function (a) {
      Y.__smm = a;
      Y.__smm.m = "smm";
      Y.__smm.isVendorTemplate = !0;
      Y.__smm.priorityOverride = 0
    })(function (a) {
      var b = a.vtp_input, c = Jy(a.vtp_map, "key", "value") || {}, d = c.hasOwnProperty(b) ? c[b] : a.vtp_defaultValue;
      vu(d, "smm", a.vtp_gtmEventId);
      return d
    })
  }();

  Y.h.hid = ["google"], function () {
    (function (a) {
      Y.__hid = a;
      Y.__hid.m = "hid";
      Y.__hid.isVendorTemplate = !0;
      Y.__hid.priorityOverride = 0
    })(function () {
      return it.Td
    })
  }();
  Y.h.zone = [], function () {
    var a = {}, b = function (c) {
      for (var d = 0; d < c.length; d++) if (!c[d]) return !1;
      return !0
    };
    (function (c) {
      Y.__zone = c;
      Y.__zone.m = "zone";
      Y.__zone.isVendorTemplate = !0;
      Y.__zone.priorityOverride = 0
    })(function (c) {
      var d = b(c.vtp_boundaries || []);
      if (c.vtp_gtmTagId in a) Zr(a[c.vtp_gtmTagId], c.vtp_gtmEventId, d); else if (d) {
        var e = c.vtp_childContainers.map(function (k) {
          return k.publicId
        }), f = c.vtp_enableTypeRestrictions ? c.vtp_whitelistedTypes.map(function (k) {
            return k.typeId
          }) :
          null, g = {};
        var h = Yr(c.vtp_gtmEventId, e, f, g, Lm(1, c.vtp_gtmEntityIndex, c.vtp_gtmEntityName));
        a[c.vtp_gtmTagId] = h
      }
      K(c.vtp_gtmOnSuccess)
    })
  }();
  Y.h.html = ["customScripts"], function () {
    function a(d, e, f, g) {
      return function () {
        try {
          if (0 < e.length) {
            var h = e.shift(), k = a(d, e, f, g);
            if ("SCRIPT" == String(h.nodeName).toUpperCase() && "text/gtmscript" == h.type) {
              var n = J.createElement("script");
              n.async = !1;
              n.type = "text/javascript";
              n.id = h.id;
              n.text = h.text || h.textContent || h.innerHTML || "";
              h.charset && (n.charset = h.charset);
              var p = h.getAttribute("data-gtmsrc");
              p && (n.src = p, Ib(n, k));
              d.insertBefore(n, null);
              p || k()
            } else if (h.innerHTML && 0 <= h.innerHTML.toLowerCase().indexOf("<script")) {
              for (var q =
                []; h.firstChild;) q.push(h.removeChild(h.firstChild));
              d.insertBefore(h, null);
              a(h, q, k, g)()
            } else d.insertBefore(h, null), k()
          } else f()
        } catch (r) {
          K(g)
        }
      }
    }

    function b(d) {
      if (J.body) {
        var e = d.vtp_gtmOnFailure, f = wu(d.vtp_html, d.vtp_gtmOnSuccess, e), g = f.Ij, h = f.onSuccess;
        if (d.vtp_useIframe) {
        } else d.vtp_supportDocumentWrite ? c(g, h, e) : a(J.body, Ub(g), h, e)()
      } else iu(function () {
        b(d)
      }, 200)
    }

    Y.__html = b;
    Y.__html.m =
      "html";
    Y.__html.isVendorTemplate = !0;
    Y.__html.priorityOverride = 0
  }();


  Y.h.img = ["customPixels"], function () {
    (function (a) {
      Y.__img = a;
      Y.__img.m = "img";
      Y.__img.isVendorTemplate = !0;
      Y.__img.priorityOverride = 0
    })(function (a) {
      var b = Ub('<a href="' + a.vtp_url + '"></a>')[0].href, c = a.vtp_cacheBusterQueryParam;
      if (a.vtp_useCacheBuster) {
        c || (c = "gtmcb");
        var d = b.charAt(b.length - 1), e = 0 <= b.indexOf("?") ? "?" == d || "&" == d ? "" : "&" : "?";
        b += e + c + "=" + a.vtp_randomNumber
      }
      Hy(b, a.vtp_gtmOnSuccess, a.vtp_gtmOnFailure)
    })
  }();


  Y.h.lcl = [], function () {
    function a() {
      var c = W("document"), d = 0, e = function (f) {
        var g = f.target;
        if (g && 3 !== f.which && !(f.If || f.timeStamp && f.timeStamp === d)) {
          d = f.timeStamp;
          g = Vb(g, ["a", "area"], 100);
          if (!g) return f.returnValue;
          var h = f.defaultPrevented || !1 === f.returnValue, k = Nt("lcl", h ? "nv.mwt" : "mwt", 0), n;
          n = h ? Nt("lcl", "nv.ids", []) : Nt("lcl", "ids", []);
          if (n.length) {
            var p = lt(g, "gtm.linkClick", n);
            if (b(f, g, c) && !h && k && g.href) {
              var q = !!Ga(String(Zb(g, "rel") || "").split(" "), function (v) {
                return "noreferrer" === v.toLowerCase()
              });
              q && lg(36);
              var r = W((Zb(g, "target") || "_self").substring(1)), u = !0, t = $s(function () {
                var v;
                if (v = u && r) {
                  var x;
                  a:if (q) {
                    var y;
                    try {
                      y = new MouseEvent(f.type, {bubbles: !0})
                    } catch (w) {
                      if (!c.createEvent) {
                        x = !1;
                        break a
                      }
                      y = c.createEvent("MouseEvents");
                      y.initEvent(f.type, !0, !0)
                    }
                    y.If = !0;
                    f.target.dispatchEvent(y);
                    x = !0
                  } else x = !1;
                  v = !x
                }
                v && (r.location.href = Zb(g, "href"))
              }, k);
              if (ou(p, t, k)) u = !1; else return f.preventDefault && f.preventDefault(), f.returnValue = !1
            } else ou(p, function () {
            }, k || 2E3);
            return !0
          }
        }
      };
      Qb(c, "click", e, !1);
      Qb(c, "auxclick",
        e, !1)
    }

    function b(c, d, e) {
      if (2 === c.which || c.ctrlKey || c.shiftKey || c.altKey || c.metaKey) return !1;
      var f = Zb(d, "href"), g = f.indexOf("#"), h = Zb(d, "target");
      if (h && "_self" !== h && "_parent" !== h && "_top" !== h || 0 === g) return !1;
      if (0 < g) {
        var k = mu(f), n = mu(e.location);
        return k !== n
      }
      return !0
    }

    (function (c) {
      Y.__lcl = c;
      Y.__lcl.m = "lcl";
      Y.__lcl.isVendorTemplate = !0;
      Y.__lcl.priorityOverride = 0
    })(function (c) {
      var d = void 0 === c.vtp_waitForTags ? !0 : c.vtp_waitForTags,
        e = void 0 === c.vtp_checkValidation ? !0 : c.vtp_checkValidation, f = Number(c.vtp_waitForTagsTimeout);
      if (!f || 0 >= f) f = 2E3;
      var g = c.vtp_uniqueTriggerId || "0";
      if (d) {
        var h = function (n) {
          return Math.max(f, n)
        };
        Mt("lcl", "mwt", h, 0);
        e || Mt("lcl", "nv.mwt", h, 0)
      }
      var k = function (n) {
        n.push(g);
        return n
      };
      Mt("lcl", "ids", k, []);
      e || Mt("lcl", "nv.ids", k, []);
      tu("lcl") || (a(), uu("lcl"));
      K(c.vtp_gtmOnSuccess)
    })
  }();


  Y.h.get_cookies = ["google"], function () {
    function a(b, c) {
      return {name: c}
    }

    (function (b) {
      Y.__get_cookies = b;
      Y.__get_cookies.m = "get_cookies";
      Y.__get_cookies.isVendorTemplate = !0;
      Y.__get_cookies.priorityOverride = 0
    })(function (b) {
      var c = b.vtp_cookieAccess || "specific", d = b.vtp_cookieNames || [], e = b.vtp_createPermissionError;
      return {
        assert: function (f, g) {
          if (!m(g)) throw e(f, {}, "Cookie name must be a string.");
          if ("any" !== c && !("specific" === c && 0 <= d.indexOf(g))) throw e(f, {}, 'Access to cookie "' + g + '" is prohibited.');
        }, X: a
      }
    })
  }();
  Y.h.read_character_set = ["google"], function () {
    (function (a) {
      Y.__read_character_set = a;
      Y.__read_character_set.m = "read_character_set";
      Y.__read_character_set.isVendorTemplate = !0;
      Y.__read_character_set.priorityOverride = 0
    })(function () {
      return {
        assert: function () {
        }, X: function () {
          return {}
        }
      }
    })
  }();
  var fC = {};
  fC.macro = function (a) {
    if (it.nf.hasOwnProperty(a)) return it.nf[a]
  }, fC.onHtmlSuccess = it.kh(!0), fC.onHtmlFailure = it.kh(!1);
  fC.dataLayer = Rh;
  fC.callback = function (a) {
    Ih.hasOwnProperty(a) && Da(Ih[a]) && Ih[a]();
    delete Ih[a]
  };
  fC.bootstrap = 0;
  fC._spx = !1;
  (function (a) {
    if (!z["__TAGGY_INSTALLED"]) {
      var b = !1;
      if (J.referrer) {
        var c = oi(J.referrer);
        b = "cct.google" === li(c, "host")
      }
      if (!b) {
        var d = Si("googTaggyReferrer");
        b = d.length && d[0].length
      }
      b && (z["__TAGGY_INSTALLED"] = !0, Mb("https://cct.google/taggy/agent.js"))
    }
    var f = function (q) {
      var r = "GTM", u = "GTM";
      var t = z["google.tagmanager.debugui2.queue"];
      t || (t = [], z["google.tagmanager.debugui2.queue"] = t, Mb("https://" + ph.Hc + "/debug/bootstrap?id=" + Ie.J + "&src=" + u + "&cond=" + q + "&gtm=" + Rn()));
      var v = {messageType: "CONTAINER_STARTING", data: {scriptSource: Gb, containerProduct: r, debug: !1, id: Ie.J}};
      v.data.resume = function () {
        a()
      };
      ph.bi && (v.data.initialPublish =
        !0);
      t.push(v)
    }, g = void 0, h = mi(z.location, "query", !1, void 0, "gtm_debug");
    ht(h) && (g = 2);
    if (!g && J.referrer) {
      var k = oi(J.referrer);
      "tagassistant.google.com" === li(k, "host") && (g = 3)
    }
    if (!g) {
      var n = Si("__TAG_ASSISTANT");
      n.length && n[0].length && (g = 4)
    }
    if (!g) {
      var p = J.documentElement.getAttribute("data-tag-assistant-present");
      ht(p) && (g = 5)
    }
    g && Gb ? f(g) : a()
  })(function () {
    var a = !1;
    a && Um("INIT");
    og().o();
    oo();
    ak.enable_gbraid_cookie_write = !0;
    var b = !!S[Ie.J];
    if (b) {
      var c = S.zones;
      c && c.unregisterChild(al());
    } else {
      for (var d = bl(), e = 0; e < d.length; e++) Ir(d[e], Ie.J);
      for (var f = data.resource || {}, g = f.macros || [], h = 0; h < g.length; h++) he.push(g[h]);
      for (var k = f.tags || [], n = 0; n < k.length; n++) ke.push(k[n]);
      for (var p = f.predicates || [], q = 0; q < p.length; q++) je.push(p[q]);
      for (var r = f.rules || [], u = 0; u < r.length; u++) {
        for (var t = r[u], v = {}, x = 0; x < t.length; x++) v[t[x][0]] = Array.prototype.slice.call(t[x], 1);
        ie.push(v)
      }
      me = Y;
      ne = Yu;
      Me = new Le;
      var y = data.sandboxed_scripts, w = data.security_groups,
        A = data.runtime || [], B = data.runtime_lines;
      By = new Id;
      Ey();
      ge = Cy();
      var D = By, C = yy();
      kb(D.g, "require", C);
      for (var E = 0; E < A.length; E++) {
        var F = A[E];
        if (!Fa(F) || 3 > F.length) {
          if (0 === F.length) continue;
          break
        }
        B && B[E] && B[E].length && xe(F, B[E]);
        By.execute(F)
      }
      if (void 0 !== y) for (var M = ["sandboxedScripts"], G = 0; G < y.length; G++) {
        var L = y[G].replace(/^_*/, "");
        Jh[L] = M
      }
      Fy(w);
      S[Ie.J] = fC;
      for (var U = dl(), R = al(), N = 0; N < R.length; N++) U.container[R[N]] = !0;
      for (var Z = bl(), ba = 0; ba < Z.length; ba++) U.destination[Z[ba]] = !0;
      U.canonical[Ie.Gc] = !0;
      Wa(Jh, Y.h);
      oe = oe || it;
      pe = Ee;
      gt();
      Em = !1;
      Fm = 0;
      if ("interactive" == J.readyState && !J.createEventObject || "complete" == J.readyState) Hm(); else {
        Qb(J, "DOMContentLoaded", Hm);
        Qb(J, "readystatechange", Hm);
        if (J.createEventObject && J.documentElement.doScroll) {
          var V = !0;
          try {
            V = !z.frameElement
          } catch (Va) {
          }
          V &&
          Im()
        }
        Qb(z, "load", Hm)
      }
      zs = !1;
      "complete" === J.readyState ? Bs() : Qb(z, "load", Bs);
      gm && z.setInterval($l, 864E5);
      yh = Sa();
      if (a) {
        var Ja = Vm("INIT");
      }
    }
  });

})()
