import React, { useState, useEffect } from 'react';
const Affiliate = require(`affiliate`);

export default class AffLinks extends React.Component {

  render() {
    const aff = Affiliate.create({
      log: true,
      tags: [
        {
          hosts: ['amazon.com', 'www.amazon.com'],
          query: {
            ref: 'my-amazon-tag-20' // will output a url with ?ref=my-tag
          },
          replace: [
            {
              from: 'ref-tag', //will replace ref-tag in all urls with my tag
              to: 'mytag'
            },
            // {
            //   from: /ref-regex/g, //example of supported regex
            //   to: 'my-tag'
            // }
          ],
          // modify: function (url) { //function that directly modifies url
          //   url.set('pathname', url.pathname + '-tag');
          //   url.set('hostname', url.hostname + '.rdr.example.com');
          //   return url;
          // }
        }
      ]
    });
    aff.attach();

    return (
      <div>
        <a href="https://www.amazon.com/dp/B00ADG744Q">amazon link</a>
      </div>
    )
  }
}








