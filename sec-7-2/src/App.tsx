import * as React from 'react';
import { Button, Card, Statistic } from 'semantic-ui-react';

import './App.css';

// porpsの interfaceを定義する
interface AppState {
  count: number;
}

class App extends React.Component<{}, AppState> {
  constructor(props: {}) {
    super(props);

    // stateにcounterの初期値を追加する
    this.state = { count: 0 };
  }

  // 関数を定義する
  // ①increment
  increment = () => this.setState({ count: this.state.count + 1 });

  // ②decrement
  decrement = () => this.setState({ count: this.state.count - 1 });

  render() {
    return (
      <div className="container">
        <header>
          <h1>カウンター</h1>
        </header>
        <Card>
          <Statistic className="number-board">
            <Statistic.Label>count</Statistic.Label>
            <Statistic.Value>{this.state.count}</Statistic.Value>
          </Statistic>
          <Card.Content>
            <div className="ui two buttons">
              {/* Buttonのクリックイベントを定義 */}
              <Button color="red" onClick={this.decrement}>
                -1
              </Button>
              <Button color="green" onClick={this.increment}>
                +1
              </Button>
            </div>
          </Card.Content>
        </Card>
      </div>
    );
  }
}

export default App;
