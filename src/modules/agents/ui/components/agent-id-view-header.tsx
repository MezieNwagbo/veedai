import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuItem,
  DropdownMenuContent,
} from "@/components/ui/dropdown-menu";

import {
  ChevronRightIcon,
  TrashIcon,
  PencilIcon,
  MoreVerticalIcon,
} from "lucide-react";
import { Button } from "@/components/ui/button";

type Props = {
  agentId: string;
  agentName: string;
  onEdit: () => void;
  onRemove: () => void;
};

export const AgentIdViewHeader = ({
  agentId,
  agentName,
  onEdit,
  onRemove,
}: Props) => {
  return (
    <div className="flex items-center justify-between">
      <Breadcrumb>
        <BreadcrumbList>
          <BreadcrumbItem>
            <BreadcrumbLink asChild className="font-medium text-xl">
              <Link href="/agents">My agents</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator className="text-foreground text-xl font-medium [&>svg]:size-4">
            <ChevronRightIcon />
          </BreadcrumbSeparator>
          <BreadcrumbItem>
            <BreadcrumbLink
              asChild
              className="font-medium text-xl text-foreground"
            >
              <Link href={`/agents/${agentId}`}>{agentName}</Link>
            </BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Without modal false the dialog that this dropdown opens causes the website to freeze */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost">
            <MoreVerticalIcon />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuItem onSelect={onEdit}>
            <PencilIcon className="size-4 text-black" />
            Edit
          </DropdownMenuItem>
          <DropdownMenuItem onSelect={onRemove}>
            <TrashIcon className="size-4 text-black" />
            Remove
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
