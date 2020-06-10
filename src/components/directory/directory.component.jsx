import React from 'react';
import MenuItem from '../menu-items/menu-item.component';

import './directory.styles.scss';

class Directory extends React.Component {

    constructor() {
        super();
        this.state = {
            sections: [
                {
                    title: 'hats',
                    imageUrl: 'https://i.ibb.co/cvpntL1/hats.png',
                    id: 1
                },
                {
                    title: 'jackets',
                    imageUrl: 'https://i.ibb.co/px2tCc3/hats.png',
                    id: 2
                },
                {
                    title: 'sneakers',
                    imageUrl: 'https://i.ibb.co/0jqHpnp/sneakers.png',
                    id: 3
                },
                {
                    title: 'womens',
                    imageUrl: 'https://i.ibb.co/GCCdy8t/womens.png',
                    id: 4,
                    size: 'large'
                },
                {
                    title: 'mens',
                    imageUrl: 'https://i.ibb.co/R70vBrQ/men.png',
                    id: 5,
                    size: 'large'
                }
            ]
        }
    }


    render() {
        return (
            <div className='directory-menu'>
                {
                    this.state.sections.map(
                        ({ id, title, imageUrl, size }) => (
                            <MenuItem key={id} title={title.toUpperCase()} imageUrl={imageUrl} size={size} />
                        )
                    )
                }
            </div>
        )
    }
}


export default Directory;