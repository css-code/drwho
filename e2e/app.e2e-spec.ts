import { DrWhoPage } from './app.po';

describe('dr-who App', () => {
  let page: DrWhoPage;

  beforeEach(() => {
    page = new DrWhoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
