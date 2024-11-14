import styled from 'styled-components'
import { FormationSection, ContentWrapper, TitleFrame, ImageWrapperDesktop, ImageWrapperMobile } from '@/app/components/Formation/styled'

const SkeletonBox = styled.div`
  background-color: #e0e0e0;
  border-radius: 8px;
  animation: skeleton-loading 3s linear infinite alternate;

  @keyframes skeleton-loading {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`;

export default function Loading() {
  console.log('Loading')
    return (
      <FormationSection style={{marginTop: 89}}>
        <ContentWrapper>
          <TitleFrame>
            <SkeletonBox style={{ width: '40%', height: '60px', marginBottom: '20px' }} />
            <SkeletonBox style={{ width: '70%', height: '30px' }} />
          </TitleFrame>
  
          <ImageWrapperMobile>
            <SkeletonBox style={{ width: '486px', height: '558px', borderRadius: '8px' }} />
          </ImageWrapperMobile>
  
          <div>
            <SkeletonBox style={{ width: '200px', height: '40px', marginBottom: '20px' }} />
            <div style={{ display: 'flex', gap: '20px' }}>
              {[1, 2, 3].map((_, index) => (
                <SkeletonBox 
                  key={index} 
                  style={{ 
                    width: '216px', 
                    height: '62px', 
                    borderRadius: '16px',
                    display: 'flex',
                    flexDirection: 'row',
                    alignItems: 'center'
                  }}
                >
                  <SkeletonBox style={{ width: '300px', height: '50px', marginRight: '20px' }} />
                  <SkeletonBox style={{ width: '120px', height: '20px' }} />
                </SkeletonBox>
              ))}
            </div>
          </div>
  
          <SkeletonBox style={{ width: '150px', height: '50px', marginTop: '0' }} />
  
        </ContentWrapper>
  
        <ImageWrapperDesktop>
          <SkeletonBox style={{ width: 'calc(20vw)', height: 'calc(30vw * 0.75)', margin: 30 }} />
        </ImageWrapperDesktop>
      </FormationSection>
    )
  }