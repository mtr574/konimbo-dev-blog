const React = require('react'),
    ReactDOM = require('react-dom');

class MenuGenerator extends React.Component {
    render() {
        return (
            <li>
                <a href="#section-{item.props.name}">{this.props.label}</a>
            </li>
        );
    }
}

class renderMenu extends React.Component {
    renderMenuItem(menuItem) {
        return <MenuGenerator name={menuItem}/>
    }
    render () {
      return (
        renderMenuItem('helloMenuItem')
      )
    }
}

ReactDOM.render(
    <MenuGenerator href='this is href' label='nate'/>, document.getElementById('myScrollspy'));
