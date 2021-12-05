import { HomeIcon, SearchIcon, PlusCircleIcon, LibraryIcon } from '@heroicons/react/outline'

function Sidebar() {
    return (
        <div>
            <div>
                <button>
                    <HomeIcon className="h-5 w-5" />
                    <p>Home</p>
                </button>
                <button>
                    <SearchIcon className="h-5 w-5" />
                    <p>Search</p>
                </button>
                <button>
                    <LibraryIcon className="h-5 w-5" />
                    <p>Library</p>
                </button>
                <button>
                    <PlusCircleIcon className="h-5 w-5" />
                    <p>Playlist</p>
                </button>
            </div>
        </div>
    )
}

export default Sidebar
