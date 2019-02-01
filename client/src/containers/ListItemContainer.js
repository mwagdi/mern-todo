import { connect } from 'react-redux';

import { deleteTodo,done } from '../store/actions';
import ListItem from '../components/ListItem';

export default connect(null,{ deleteTodo,done })(ListItem);