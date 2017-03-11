import { WorkingWithFormPage } from './app.po';

describe('working-with-form App', () => {
  let page: WorkingWithFormPage;

  beforeEach(() => {
    page = new WorkingWithFormPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
