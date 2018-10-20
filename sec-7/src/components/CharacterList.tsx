import * as React from 'react';
import { Header, Icon, Item } from 'semantic-ui-react';

// interface を定義(キャラクタ情報)
export interface Character {
  name: string;
  age: number;
  height?: number;
}

// コンポーネントが実装する interface 学校名　キャラクタ情報リスト
interface CharacterListProps {
  school: string;
  characters: Character[];
}

// localStateがないので２つめの引数は宣言なしまたは{}を定義する
class CharacterList extends React.Component<CharacterListProps, {}> {
  render() {
    const { school, characters } = this.props;

    return (
      <>
        <Header as="h2">{school}</Header>
        <Item.Group>
          {characters.map(c => (
            <Item>
              <Icon name="user circle" />
              <Item.Content>
                <Item.Header>{c.name}</Item.Header>
                <Item.Meta>{c.age}歳</Item.Meta>
                <Item.Meta>{c.height ? c.height : '???'} cm</Item.Meta>
              </Item.Content>
            </Item>
          ))}
        </Item.Group>
      </>
    );
  }
}

export default CharacterList;
