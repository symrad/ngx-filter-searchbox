import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'checkbox-list',
    template: `
    <advanced-searchbox [template]="template" [model]="model" [openOnLoad]="true">
    </advanced-searchbox>
    <br/>
    <div>
      <h5>Model</h5>
      <code>
        {{model | json}}
      </code>
      <br/>
      <br/>
      <h5>Code</h5>
      <pre><code highlight [code]="codeJs"></code></pre>
    </div>
    `,
    styles: [
        `
           .overflow-box {
               widht: 300px;
               padding: 5px;
               height: 100px;
               border: 1px solid #999;
               overflow: hidden;
           }
        `
    ]
})

export class CheckboxListComponent {
  
  public model = {};
  public template = {};
  public codeHtml;
  public codeJs;

  constructor(){
    this.model = {"city": [ 1, 2, 3 ]};
    this.template = [
      {
        'model': 'city',
        'type' : 'INPUT',
        'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
        'multiple' : '4',
        'bindLabel': 'label',
        'label': 'City'
      }
    ];
    this.codeJs = `
      public model = {};
      public template = {};

      constructor(_config:AsConfigService){
        this.model = {"city": [ 1, 2, 3 ]};
        this.template = [
          {
            'type' : 'INPUT',
            'domains': [{label:'Berlin', value:1}, {label:'London', value:2}, {label:'Milan', value:3}, {label:'Paris', value:4}],
            'multiple' : '4',
            'bindLabel': 'label',
            'label': 'City'
          }
        ];

        this._config.formatModelValue['city'] = function(){
          'city':function(val){
            if(val){
              return val.value;
            }
            return val;
          }
        };

        this._config.formatModelViewValue['city'] = function(){
          'city':function(val, template){
            var domainsFiltered = template.domains.filter((par)=>{
              return par.value == val;
            });
            if(domainsFiltered.length>0){
              return domainsFiltered[0]
            }
            return val;
          }
        };

      }`;
  }
}