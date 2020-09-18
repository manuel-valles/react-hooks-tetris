# React Hooks | Tetris

[Work In Progress] https://manukempo.github.io/react-hooks-tetris/

## Styles

- https://styled-components.com/

- `$ yarn add styled-components`

## Concepts

- _Tetrominos_, occasionally known alternately as tetrads, blocks, Tetriminos (official name), or tetriminoes, are the blocks used in every known Tetris game. They come in seven shapes, all of which can be rotated and then dropped. Tetrominoes all have an area of four squares. The naming/letters used for this **Tetris** has been: **'IJLOSTZ'**

## GitHub Actions

- _GitHub Actions_ makes it easy to automate all your software workflows, now with world-class CI/CD. Build, test, and deploy your code right from GitHub. More info: https://github.com/features/actions
- Example config file (**./.github/workflows/{filename}.yml**):

```yaml
name: MasterDeployCI
on:
  push:
    branches:
      - master
jobs:
  build:
    runs-on: ubuntu-latest
    strategy:
      matrix:
        node-version: [12.x]
    steps:
      - uses: actions/checkout@v1
      - name: Use Node.js ${{ matrix.node-version }}
        uses: actions/setup-node@v1
        with:
          node-version: ${{ matrix.node-version }}
      - name: Install Packages
        run: npm install
      - name: Deploy to GH Pages
        run: |
          git config --global user.email ${{secrets.EMAIL}}
          git config --global user.name ${{secrets.USERNAME}}
          git remote set-url origin https://${{secrets.ACCESS_TOKEN}}@github.com/${{secrets.USERNAME}}/react-hooks-tetris.git
          npm run deploy
      - name: Updating Domain
        run: echo "Update domain"
```

- For the variables:
  - Personal access token (just 'repo' scope needed): https://github.com/settings/tokens
  - Secrets: https://github.com/manukempo/react-hooks-tetris/settings/secrets

## GitHub Pages

- _GitHub Pages_ are public webpages hosted and easily published through GitHub.
- Install dependency: `$ npm i -D gh-pages`
- Add the scripts to the package.json:

```json
{
  "predeploy": "npm run build",
  "deploy": "gh-pages -d build"
}
```
