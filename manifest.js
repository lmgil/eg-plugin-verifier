// @ts-check
/// <reference path="./node_modules/express-gateway/index.d.ts" />

// const pathToRegExp = require('path-to-regexp');

/** @type {ExpressGateway.Plugin} */
const plugin = {
  version: '0.0.1',
  policies: ['verifier'],
  init: function (pluginContext) {
    pluginContext.registerPolicy({
      name: 'verifier',
      schema: {
        $id: 'http://express-gateway.io/schemas/policies/verifier.json',
        type: 'object',
        properties: {
          verifier: {
            type: 'string',
            description: `Express Path or RegExp corresponding to the url pattern to verifier.
                          The format should match the one used in the condition.`

          }
//           redirect: {
//             type: 'integer',
//             description: `If omitted, a verifier action will be performed.
//                           When set to a number, it'll redirect the request with the provided status code.`
//           },
        }, required: ['verifier']
      },
      policy: (actionParams) => {
//         const compiledExp = pathToRegExp.compile(actionParams.rewrite);

        return (req, res, next) => {
//           let toUrl = null;
// 
//           if (req.egContext.matchedCondition.plainRegEx)
//             toUrl = req.url.replace(req.egContext.matchedCondition.plainRegEx, actionParams.rewrite);
//           else
//             toUrl = decodeURIComponent(compiledExp(req.egContext.matchedCondition));
// 
//           if (!actionParams.redirect) {
//             req.url = toUrl;
//             return next();
//           }
// 
//           res.redirect(actionParams.redirect, toUrl);
          
          return next();
        }
      }
    });

    
    /**
     * 
    pluginContext.registerCondition({
      name: 'pathmatch',
      handler: (req, conditionConfig) => {
        const keys = [];
        const regExpFromPath = pathToRegExp(conditionConfig.match, keys);
        const extractedParameters = regExpFromPath.exec(req.url);

        if (extractedParameters !== null) {
          req.egContext.matchedCondition = {};
          keys.forEach((key, index) => { req.egContext.matchedCondition[key.name] = extractedParameters[index + 1] });
          return true;
        }

        return false;
      },
      schema: {
        $id: 'http://express-gateway.io/schemas/conditions/pathmatch.json',
        type: 'object',
        properties: {
          match: {
            type: 'string',
            description: 'The url pattern to look for'
          }
        },
        required: ['match']
      }
    });
    *
    **/


    /**
     * 
    pluginContext.registerCondition({
      name: 'regexpmatch',
      handler: (req, conditionConfig) => {
        const plainRegEx = new RegExp(conditionConfig.match);

        const extractedParameters = plainRegEx.exec(req.url);

        if (extractedParameters !== null) {
          req.egContext.matchedCondition = { plainRegEx };
          return true;
        }

        return false;
      },
      schema: {
        $id: 'http://express-gateway.io/schemas/conditions/regexpmatch.json',
        type: 'object',
        properties: {
          match: {
            type: 'string',
            description: 'The url pattern to look for'
          },
        },
        required: ['match']
      }
    });
    *
    **/
    
  }
}

module.exports = plugin;
