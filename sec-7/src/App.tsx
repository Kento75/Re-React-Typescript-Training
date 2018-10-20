import * as React from 'react';
// コンポーネントのをimport & interface のimport
import CharacterList, { Character } from './components/CharacterList';

import './App.css';

class App extends React.Component {
  render() {
    // characterlist を定義 interfaceをコンポーネントから取得して実装する
    const characters: Character[] = [
      {
        name: 'test1',
        age: 21,
        height: 123,
      },
      {
        name: 'test2',
        age: 32,
        height: 155,
      },
      {
        name: 'test3',
        age: 43,
      },
    ];

    return (
      <div className="container">
        <header>
          <h1>はねバド！ キャラクター一覧</h1>
        </header>
        {/* コンポーネント定義　学校名　キャラクタ情報リスト　をわたす */}
        <CharacterList school="test school" characters={characters} />
      </div>
    );
  }
}

export default App;
