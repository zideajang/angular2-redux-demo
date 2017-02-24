import { Angular2ReduxDemoPage } from './app.po';

describe('angular2-redux-demo App', function() {
  let page: Angular2ReduxDemoPage;

  beforeEach(() => {
    page = new Angular2ReduxDemoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
