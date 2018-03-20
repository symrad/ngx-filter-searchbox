import { Component } from '@angular/core';

@Component({
    selector: 'div[page-getting-started]',
    template: `
    <layout-header></layout-header>
    <div id="main-content" class="container fill">
        <div class="row">
            <main class="col-12 py-md-4 pl-md-4">
                <h2 class="bd-title">
                    
                </h2>
                
                <router-outlet></router-outlet>
                    
            </main>
        </div>
    </div>
    `,
    styles: [
        `
           
        `
    ]
})
export class GettingStartedComponent {
}

