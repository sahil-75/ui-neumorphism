import React from 'react'

import { H4, H6, Card, Subtitle1, TextField, H5 } from 'ui-neumorphism'
import { textFieldApi } from '../docs/'

import DocCard from '../containers/DocCard.jsx'
import ApiCard from '../containers/ApiCard.jsx'

const url =
  'https://github.com/AKAspanion/ui-neumorphism/blob/master/example/src/pages/TextFieldView.jsx'

class TextFieldView extends React.Component {
  onChange(e) {
    console.log(e)
  }
  render() {
    const { dark } = this.props
    return (
      <Card flat dark={dark}>
        <H4>
          <a href='#component' name='component'>
            Text Field
          </a>
        </H4>
        <H6>Text fields let users enter and edit text.</H6>
        <Subtitle1 className='mt-3'>
          Text fields allow users to enter text into a UI. They typically appear
          in forms and dialogs.
        </Subtitle1>
        <DocCard
          url={url}
          className='mt-12'
          title={<H5>TextField</H5>}
          subtitle={
            <Subtitle1>
              Text fields components are used for collecting user provided
              information.
            </Subtitle1>
          }
          content={
            <Card flat>
              <TextField
                bordered
                label='Text field border'
                className='my-3'
              ></TextField>
              <TextField
                prepend='$'
                append='%'
                prefix='%'
                label='Text field 1'
                className='my-3'
              ></TextField>
              <TextField
                label='Text field 1'
                className='my-3'
                type='password'
              ></TextField>
              <TextField
                label='Text field 1'
                className='my-3'
                color='var(--success)'
              ></TextField>
              <TextField
                loading
                label={<div>hey</div>}
                className='my-3'
                rules={[
                  (v) => v !== '' || 'Cant be empty',
                  (v) => v.trim() !== '' || 'Cant be only white space'
                ]}
              ></TextField>
              <TextField
                disabled
                className='my-3'
                label='Text field 2'
              ></TextField>
              <TextField
                label='Text field 3'
                rounded
                loading
                className='my-3'
              ></TextField>
              <TextField
                label='Text field 4'
                className='my-3'
                value='abc'
                readonly
              ></TextField>
              <TextField
                label='Text field 5'
                className='my-3'
                value='abc'
                dense
              ></TextField>
              <TextField
                label='Text field 5'
                className='my-3'
                value='abc'
                dense
                rounded
                onChange={this.onChange.bind(this)}
              ></TextField>
              <TextField
                label='Text field 5'
                className='my-3'
                value='abc'
                dense
                rounded
                outlined
                onChange={this.onChange.bind(this)}
              ></TextField>
              <TextField
                label='Text field 6'
                className='my-3'
                rounded
                outlined
                onChange={this.onChange.bind(this)}
              ></TextField>
              <TextField
                label='Text field 7'
                className='my-3'
                outlined
                loading
                onChange={this.onChange.bind(this)}
              ></TextField>
              <TextField
                label='Text field 7'
                className='my-3'
                outlined
                disabled
                onChange={this.onChange.bind(this)}
              ></TextField>
            </Card>
          }
        />
        <H4 className='mt-12'>
          <a href='#api' name='api'>
            API
          </a>
        </H4>
        <ApiCard entity='TextField' data={textFieldApi(dark)} />
      </Card>
    )
  }
}

export default TextFieldView
