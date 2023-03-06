import { Button } from './ui/button';
import { BlockInfo } from './ui/block-info';
import { EventInput } from './ui/event-input';
import { Heading } from './ui/heading';
import { HeadingSm } from './ui/heading-sm';
import { CountTimeInput } from './ui/count-time-input';
import { Expected } from './ui/expected';

import './App.css';
import { RemainedTime } from './ui/remained-time/remained-time';


function App() {
  return (
    <div className="App">
      <Button type="button" className="btn_reminder">
      <span>напомнить</span>
      </Button>
      <Button type="button" className="btn_reminder_activ">
      <span>переити к событие</span>
      </Button>
      <Button type="button" className="btn_reminder">
      <span>начать</span>
      </Button>
      <BlockInfo className="bl_inf"></BlockInfo>
      <EventInput 
      type="text"
      className="ev_inp"
      value="событие">
      <span>название события:</span>
      </EventInput>
      <Heading 
      className="head_big">
        <span>событие</span>
      </Heading>
      <HeadingSm
        className="head_sm">
        <span>событие</span>
      </HeadingSm>
      <CountTimeInput
      type="number"
      className="co_ti_in">
        <span>деней</span>
      </CountTimeInput>
      <Expected
      className="exp">
        <span>апреле</span>
      </Expected>
      <RemainedTime
      className="rem_ti">
      <p>дней</p> 
      </RemainedTime>
    </div>
    
  );
  }

export default App;
