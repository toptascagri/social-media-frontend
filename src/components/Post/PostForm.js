import React from 'react'
import "./Post.css"
import { Card, Button, Icon, Image } from 'semantic-ui-react'
import { Link } from 'react-router-dom';
import { Input } from 'semantic-ui-react'

export default function PostForm(props) {
    const { userId, text, deneme, userName } = props;
    return (
        <div>

            <Card fluid >
                <Card.Content>
                    <Link to={"/users/" + userId}>
                        <Image
                            as='a'
                            floated='left'
                            size='large'
                            src='https://cdn-icons-png.flaticon.com/512/5556/5556529.png'

                        />
                    </Link>
                    <Card.Header textAlign='center'>
                        <div className='input-div'>
                    <Input className='input-label' size='mini' icon='search'  placeholder='asd...' />
                    </div>
                        </Card.Header>
                    <Card.Meta>
                        <strong> {userName} </strong>
                    </Card.Meta>
                    <Card.Description textAlign='center'>
                        {text}
                    </Card.Description>
                </Card.Content>

                <Card.Content extra>

                    <Button circular color='facebook' icon='facebook' href={'https://tr-tr.facebook.com/'} />
                    <Button circular color='twitter' icon='twitter' href={'https://twitter.com/home?lang=tr'} />
                    <Button circular color='linkedin' icon='linkedin' href={'https://www.linkedin.com/'} />
                    <Button circular inverted color='green' className='commentButton' floated='right'>
                        <Icon name='comment' size='large' />
                    </Button>
                    <Button circular color='grey' >
                        <Icon name='like' size='large' />
                    </Button>
                </Card.Content>
            </Card>
        </div>
    )
}
