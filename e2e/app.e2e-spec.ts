import { Ng2ChartsPocPage } from './app.po';

describe('ng2-charts-poc App', function() {
  let page: Ng2ChartsPocPage;

  beforeEach(() => {
    page = new Ng2ChartsPocPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
