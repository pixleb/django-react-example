//some settings 
let devmode = 1;

if(devmode) console.log('index.js loaded');

//adding root into a page with pure DOM
let body = document.body;

let mainframe = document.createElement('div');
mainframe.className = 'mainframe';

body.appendChild(mainframe);

//here goes React
class LikeButton extends React.Component
{
    constructor(props)
    {
        super(props);
        this.state = {
            liked: false
        };
        
    }
    likeClicked = () =>
    {
        this.setState(
        {
            liked: true
        });
    }
    
    
    render()
    {
        let activeClass = this.state.liked ? 'likeDefault likeClicked' : 'likeDefault';
        
        return (
            <div className = {activeClass} onClick = {this.likeClicked}/>
        );
    }
    
}

class TemplateTop extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
            <div className = 'templateTop'>
                <h1>React + Django Example.</h1>
                <p>This is a React + Django example.</p>
            </div>
        );
        
    }
    
}

class TemplateBottom extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
            <div className = 'templateBottom'>
                <p>React.js + Django example.</p>
            </div>
        );
        
    }
    
}

class App extends React.Component
{
    constructor(props)
    {
        super(props);
    }
    
    render()
    {
        return (
            <div>
                <TemplateTop/>
                <LikeButton/>
                <TemplateBottom/>
            </div>
        );
    }
    
}

//finalize React
//const root = ReactDOM.createRoot(mainframe);
ReactDOM.render(
    React.createElement(App),
    mainframe
);
