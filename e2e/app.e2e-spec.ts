import { GithubProjectPage } from './app.po';

describe('github-project App', () => {
  let page: GithubProjectPage;

  beforeEach(() => {
    page = new GithubProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
