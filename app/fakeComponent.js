import React from 'react';

class FakeComponent extends React.Component {

    render() {
        const {fake} = this.props;
        const fakeClass = "fake " + fake.type + " " + (fake.className || "");
        let lines, header, repeat;
        switch (fake.type) {
            case 'p':
            case 'c':
                lines = Array(fake.line).fill();
                repeat = Array(fake.repeat || 1).fill();
                header = fake.header || false;
            default:
                break;
        }
        return (
            <div className={fakeClass} style={fake.styleForComponent}>
                {
                    repeat.map((_item, _i) =>
                        <div key={_i} className="r">
                            {
                                fake.type === 'p' &&
                                <div className="p">
                                    {
                                        header &&
                                        <div style={fake.styleForHeader} className="h"></div>
                                    }
                                    {
                                        lines.map((item, i)=><div style={fake.styleForLine} key={i}
                                                                  className="l"></div>)
                                    }
                                </div>
                                ||
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
                                            lines.map((item, i)=><div style={fake.styleForLine} key={i}
                                                                      className="l"></div>)
                                        }
                                    </div>
                                </div>
                            }
                            <div className="dd" style={fake.styleForDivider}></div>
                        </div>
                    )
                }
            </div>
        )
    }
}
export default FakeComponent;