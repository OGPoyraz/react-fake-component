import React from 'react';
import './styles.scss';
class FakeComponent extends React.Component {
    componentDidMount() {


    }
    render() {
        const {fake} = this.props;
        const fakeClass = "fake " + fake.type + " " + (fake.className || "");
        let lines, header;

        switch (fake.type) {
            case 'p':case 'c': {
                lines = Array(fake.line).fill();
                header = fake.header || false;
                break;
            }
            default:
                break;
        }
        return (
            <div className={fakeClass} style={fake.styleForComponent}>
                {/*Including if paragraph */}
                {
                    fake.type === 'p' &&
                    <div className="p">
                        {
                            header &&
                            <div style={fake.styleForHeader} className="h"></div>
                        }
                        {
                            lines.map((item, i)=><div style={fake.styleForLine} key={i} className="l"></div>)
                        }
                    </div>
                }
                {/*Including if comment */}
                {
                    fake.type === 'c' &&
                    <div className="c">
                        <div className="a" style={fake.styleForAvatar}>
                        </div>
                        <div className="d">
                            {
                                header &&
                                <div style={fake.styleForHeader} className="h"></div>
                            }
                            {
                                lines.map((item, i)=><div style={fake.styleForLine} key={i} className="l"></div>)
                            }
                        </div>
                    </div>
                }
            </div>
        )
    }
}
export default FakeComponent;