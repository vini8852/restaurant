import React from 'react'
import './Nav.scss';

import { Row, Col} from 'antd';
export default function Nav() {
  return (
    <div className={"nav"}>
    <Row>
    <Col span={8}>
    <h2>Restraunt Finder</h2>
    </Col>
    <Col span={2} offset={4} >
    </Col>
  </Row>
    </div>
  )
}
