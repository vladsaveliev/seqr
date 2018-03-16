import React from 'react'
import { shallow, configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import { ProjectTableRowComponent } from './ProjectTableRow'
import { getUser, getProjectsByGuid } from '../../../../redux/rootReducer'

import { STATE1 } from '../../fixtures'

configure({ adapter: new Adapter() })

test('shallow-render without crashing', () => {
  /*
    user: PropTypes.object.isRequired,
    project: PropTypes.object.isRequired,
   */

  const props = {
    user: getUser(STATE1),
    project: getProjectsByGuid(STATE1).R0237_1000_genomes_demo,
  }

  shallow(<ProjectTableRowComponent {...props} />)
})
